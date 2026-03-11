import React, { useState } from 'react';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';

export default function CheckoutBrick({ amount, onPaymentSuccess, onPaymentError }) {
  const [isReady, setIsReady] = useState(false);

  // Initialize SDK
  // We use standard React config and the given Public Key
  // For production you should store this in import.meta.env
  initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY || 'APP_USR-7049a974-62f1-4e2e-8be0-f7ad2b285664', {
    locale: 'pt-BR'
  });

  const initialization = {
    amount: amount,
    preferenceId: null // We don't use preferenceId for Payment Brick directly here, we just use amount and process payment in our backend
  };

  const customization = {
    paymentMethods: {
      ticket: 'all',
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    // formData contains token, issuer_id, payment_method_id, transaction_amount, installments, payer
    return new Promise((resolve, reject) => {
      fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'approved' || data.status === 'in_process' || data.status === 'pending') {
            resolve();
            if (onPaymentSuccess) onPaymentSuccess(data);
          } else {
            console.error("Payment not approved:", data);
            reject(new Error("Pagamento recusado"));
            if (onPaymentError) onPaymentError(data);
          }
        })
        .catch((error) => {
          console.error("Backend request error", error);
          reject(error);
          if (onPaymentError) onPaymentError(error);
        });
    });
  };

  const onError = async (error) => {
    console.error('Payment Brick Error:', error);
    if (onPaymentError) onPaymentError(error);
  };

  const onReady = async () => {
    setIsReady(true);
  };

  return (
    <div className="w-full relative">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg/50 backdrop-blur-sm z-10 rounded-2xl min-h-[300px]">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="glass-2026 rounded-3xl p-4 md:p-6 overflow-hidden max-w-xl mx-auto border border-white/5">
        <Payment
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </div>
  );
}
