import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Share2, Plus, Minus, X, CheckCircle, CreditCard, ChevronRight } from 'lucide-react';
import CheckoutBrick from '../components/CheckoutBrick';
import DeepSeaWrapper from '../components/DeepSeaWrapper';

const products = [
  { id: 1, name: 'Boné Unissex – Adulto – Limpeza dos Mares – Azul', price: 40.00, image: '/images/products/bone.png', category: 'Acessórios', status: 'OFERTA' },
  { id: 2, name: 'Toalha Azul Limpeza dos Mares', price: 59.00, oldPrice: 69.90, image: '/images/products/toalha.png', category: 'Casa & Praia', status: 'OFERTA' },
  { id: 3, name: 'Camiseta Unissex – Adulto/Infantil – Limpeza dos Mares', price: 60.00, image: '/images/products/camiseta.png', category: 'Vestuário' },
  { id: 4, name: 'Sacola Ecológica Limpeza dos Mares', price: 15.00, oldPrice: 20.00, image: '/images/products/sacola.png', category: 'Acessórios', status: 'OFERTA' },
  { id: 5, name: 'Kit Utensílio de Cozinha – Reciclado', price: 45.00, oldPrice: 75.00, image: '/images/products/kit-talher.png', category: 'Casa', status: 'OFERTA' }
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + change);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handlePaymentSuccess = (data) => {
    setPaymentResult({ success: true, id: data.id });
    setCart([]);
    // window.scrollTo(0, 0);
  };

  const handlePaymentError = (error) => {
    setPaymentResult({ success: false, message: error?.message || 'Erro ao processar o pagamento.' });
  };

  return (
    <DeepSeaWrapper>
      <div className="pt-32 pb-24 min-h-screen relative z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6"
              >
                <ShoppingBag size={14} className="mr-1" />
                Loja Oficial
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4"
              >
                Vista a Causa
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-text-muted text-lg max-w-xl"
              >
                Todos os recursos arrecadados são destinados aos projetos de conservação oceânica e educação ambiental.
              </motion.p>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass-2026 px-6 py-3 rounded-2xl flex items-center space-x-3 hover:bg-white/10 transition-colors relative border border-white/10"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} className="text-primary" />
              <span className="font-medium text-white">Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </motion.button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-2026 rounded-3xl p-4 border border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-white/5 mb-6 p-4 flex items-center justify-center">
                  {product.status && (
                    <div className="absolute top-4 left-4 bg-[#ED6E58] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-md z-10">
                      {product.status}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/50 backdrop-blur-md flex items-center justify-center text-white hover:text-primary transition-colors border border-white/10 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <Share2 size={16} />
                  </button>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="text-xs text-primary font-bold tracking-widest uppercase mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight flex-grow line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-end justify-between mt-auto pt-4 relative">
                    <div className="flex flex-col">
                      {product.oldPrice && (
                        <span className="text-xs text-text-muted line-through opacity-70 mb-1">
                          R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                      <span className="text-2xl font-black text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 group-hover:w-full group-hover:justify-between group-hover:px-4 overflow-hidden shadow-glow hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] border border-white/10 hover:border-transparent"
                    >
                      <ShoppingCart size={20} className="flex-shrink-0" />
                      <span className="text-sm font-bold opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300 whitespace-nowrap">
                        Adicionar
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Slide-over Cart Menu */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsCartOpen(false); setIsCheckout(false); }}
              className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#00101D] border-l border-white/10 shadow-2xl z-50 flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-md sticky top-0 z-20">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <ShoppingCart className="mr-3 text-primary" size={24} />
                  Seu Carrinho
                </h2>
                <button 
                  onClick={() => { setIsCartOpen(false); setIsCheckout(false); }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
                    <ShoppingCart size={64} className="text-white/20 mb-6" />
                    <p className="text-text-muted text-lg">Seu carrinho está vazio.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 text-primary hover:text-white underline underline-offset-4 decoration-primary/50 transition-colors font-medium"
                    >
                      Continuar Comprando
                    </button>
                  </div>
                ) : isCheckout ? (
                  <div className="animate-fade-in-up">
                     {paymentResult ? (
                       <div className="py-12 flex flex-col items-center text-center">
                         {paymentResult.success ? (
                           <>
                             <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-green-500/30">
                               <CheckCircle size={40} />
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-2">Pagamento Aprovado!</h3>
                             <p className="text-text-muted text-sm mb-8">Recebemos seu pedido com sucesso. ID: {paymentResult.id}</p>
                             <button onClick={() => { setIsCartOpen(false); setIsCheckout(false); setPaymentResult(null); }} className="btn-2026 w-full py-4 relative z-10 text-sm overflow-hidden">
                               Voltar à Loja
                             </button>
                           </>
                         ) : (
                           <>
                             <div className="w-20 h-20 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
                               <X size={40} />
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-2">Pagamento Recusado</h3>
                             <p className="text-text-muted text-sm mb-8">{paymentResult.message}</p>
                             <button onClick={() => setPaymentResult(null)} className="btn-2026 w-full py-4 relative z-10 text-sm overflow-hidden bg-white/10 hover:bg-white/20 border-white/20">
                               Tentar Novamente
                             </button>
                           </>
                         )}
                       </div>
                     ) : (
                       <div>
                         <button 
                            onClick={() => setIsCheckout(false)}
                            className="flex items-center text-sm text-text-muted hover:text-white mb-6 transition-colors"
                         >
                           <ChevronRight size={16} className="rotate-180 mr-1" />
                           Voltar ao Carrinho
                         </button>
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                           <CreditCard className="mr-2 text-primary" size={20} />
                           Finalizar Compra
                         </h3>
                         
                         <div className="bg-bg/50 rounded-2xl p-4 mb-6 border border-white/5">
                           <div className="flex justify-between items-center text-lg font-bold">
                             <span className="text-white">Total a Pagar</span>
                             <span className="text-primary">R$ {totalAmount.toFixed(2).replace('.', ',')}</span>
                           </div>
                         </div>

                         <div className="checkout-brick-container">
                           <CheckoutBrick 
                             amount={totalAmount} 
                             onPaymentSuccess={handlePaymentSuccess} 
                             onPaymentError={handlePaymentError} 
                           />
                         </div>
                       </div>
                     )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4 p-4 rounded-3xl glass border border-white/5 bg-white/[0.02]">
                        <div className="w-24 h-24 rounded-2xl bg-white/5 relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="max-w-[80%] max-h-[80%] object-contain" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="text-white font-medium leading-tight text-sm line-clamp-2 pr-4">{item.name}</h4>
                            <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-text-muted hover:text-red-400 transition-colors p-1">
                              <X size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-3 bg-white/5 rounded-full px-2 py-1 border border-white/10">
                              <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"><Minus size={12} /></button>
                              <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"><Plus size={12} /></button>
                            </div>
                            <div className="text-lg font-black text-primary">
                              R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {!isCheckout && cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-text-muted">Total ({totalItems} itens)</span>
                    <span className="text-2xl font-black text-white">R$ {totalAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <button 
                    onClick={() => setIsCheckout(true)}
                    className="btn-2026 w-full py-4 relative z-10 text-sm overflow-hidden flex items-center justify-center group shadow-glow"
                  >
                    <span className="relative z-10 flex items-center font-bold tracking-widest uppercase">
                      Ir para Pagamento
                      <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </DeepSeaWrapper>
  );
}

// Simple icon missing from lucide-react? ShoppingBag is valid but imported ShoppingCart. 
function ShoppingBag(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
