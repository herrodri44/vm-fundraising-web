// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: IMAGEN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            {/* Imagen Principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Equipo VM Fundraising" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-vm-navy/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-vm-gold text-vm-navy p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-bold text-4xl">2021</p>
              <p className="text-sm font-semibold uppercase tracking-wider">Año de fundación</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-sm font-bold text-vm-gold uppercase tracking-widest mb-2">
              Sobre Nosotros
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-vm-navy mb-6">
              Impulsando el éxito de organizaciones sin fines de lucro
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Desde el <strong>2021</strong> somos <span className="font-bold text-vm-navy">VM Fundraising SL</span>, una empresa especializada en Fundraising, Marketing y Representación Comercial, con un enfoque único: potenciar el impacto de quienes ayudan a los demás.
              </p>
              
              <p>
                Nuestra experiencia y pasión nos permiten desarrollar estrategias innovadoras de recaudación de fondos y campañas de marketing que generan un impacto positivo y sostenible en las comunidades que servimos.
              </p>

              <p>
                Trabajamos en estrecha colaboración con nuestros clientes para comprender sus necesidades y objetivos, diseñando soluciones personalizadas que maximizan su alcance.
              </p>
            </div>

            {/* Lista de puntos clave con iconos */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <CheckCircle className="text-vm-gold mr-3 shrink-0" size={24} />
                <span className="text-vm-navy font-medium">Compromiso con la ética y la excelencia.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-vm-gold mr-3 shrink-0" size={24} />
                <span className="text-vm-navy font-medium">Estrategias personalizadas para cada ONG.</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-vm-gold mr-3 shrink-0" size={24} />
                <span className="text-vm-navy font-medium">Impacto real en la consecución de metas sociales.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;