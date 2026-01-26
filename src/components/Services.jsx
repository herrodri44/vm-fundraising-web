// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Handshake } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Fundraising",
    description: "Desarrollamos estrategias efectivas de recaudación de fondos para organizaciones sin fines de lucro, utilizando una combinación de enfoques tradicionales y digitales para maximizar el apoyo financiero.",
    icon: <TrendingUp size={40} />,
  },
  {
    id: 2,
    title: "Marketing",
    description: "Creamos campañas de marketing impactantes y personalizadas que aumentan la visibilidad y el compromiso de las organizaciones con sus audiencias clave, ayudándoles a alcanzar sus objetivos.",
    icon: <Megaphone size={40} />,
  },
  {
    id: 3,
    title: "Representación",
    description: "Actuamos como representantes comerciales, identificando oportunidades de colaboración con empresas y negociando acuerdos beneficiosos que generen ingresos adicionales y fortalezcan alianzas.",
    icon: <Handshake size={40} />,
  }
];

// Variantes para la animación en cascada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 // Retraso entre cada tarjeta
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-vm-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vm-navy mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-vm-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales diseñadas para potenciar el impacto de tu organización.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Se anima cuando el 20% es visible
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-vm-gold group"
            >
              {/* Icono con círculo de fondo */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-vm-navy/5 text-vm-gold group-hover:bg-vm-navy group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-vm-navy mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;