// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/captadores_alicante.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-vm-navy/70 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Juntos lo hacemos <span className="text-vm-gold">posible</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
        >
          Estrategias de recaudación de fondos y marketing que conectan tu misión con el mundo.
        </motion.p>

        <a 
          href="#contacto" 
          className="bg-vm-gold text-vm-navy font-bold py-3 px-8 rounded-full hover:bg-vm-gold-hover transition-colors shadow-lg"
        >
          Empezar Ahora
        </a>
      </div>
    </div>
  );
};

export default Hero;