import { MercadoPagoConfig, Payment } from 'mercadopago';

// Vercel Serverless Function to process payments from the frontend Brick
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error("MP_ACCESS_TOKEN is not defined in environment variables");
    }

    const { transaction_amount, token, description, installments, payment_method_id, issuer_id, payer } = req.body;

    // Build the configuration
    const client = new MercadoPagoConfig({ accessToken, options: { timeout: 5000 } });
    const payment = new Payment(client);

    // Create the payment
    const paymentData = {
      body: {
        transaction_amount: Number(transaction_amount),
        token,
        description,
        installments: Number(installments),
        payment_method_id,
        issuer_id,
        payer: {
          email: payer.email,
          identification: payer.identification
        }
      }
    };

    const result = await payment.create(paymentData);

    return res.status(200).json({
      status: result.status,
      status_detail: result.status_detail,
      id: result.id
    });
  } catch (error) {
    console.error("Payment error:", error);
    return res.status(500).json({
      error: error.message,
      message: "Erro ao processar o pagamento"
    });
  }
}
