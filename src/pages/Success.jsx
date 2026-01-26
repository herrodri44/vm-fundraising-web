import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Success = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-vm-light flex items-center justify-center px-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-lg w-full border-t-8 border-vm-gold"
      >
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="text-green-600 w-16 h-16" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-vm-navy mb-4">
          ¡Mensaje Enviado!
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Gracias por contactar con <strong>VM Fundraising</strong>. Hemos recibido tu mensaje correctamente y nuestro equipo te responderá lo antes posible.
        </p>

        <Link 
          to="/" 
          className="inline-block bg-vm-navy text-white font-bold py-3 px-8 rounded-full hover:bg-vm-gold hover:text-vm-navy transition-all duration-300 shadow-md"
        >
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  );
};

export default Success;