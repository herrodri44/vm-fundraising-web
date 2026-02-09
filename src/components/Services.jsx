// src/components/Services.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Users, TrendingUp, Megaphone, HeartHandshake, Coins, ShieldCheck } from 'lucide-react';

const Services = () => {
  
  // Bloque 1: ¿Qué ofrecemos?
  const offerings = [
    {
      id: 1,
      title: "Equipos Altamente Capacitados",
      description: "Expertos en comunicación directa y persuasión ética, capaces de transmitir la misión de cada ONG con pasión y credibilidad.",
      icon: <Users size={40} />,
    },
    {
      id: 2,
      title: "Resultados Medibles",
      description: "Enfoque en la captación de socios recurrentes que aseguran ingresos estables a largo plazo, con métricas claras y consistentes.",
      icon: <TrendingUp size={40} />,
    },
    {
      id: 3,
      title: "Visibilidad de Marca",
      description: "Cada interacción en la calle, centros comerciales o eventos se convierte en una oportunidad para reforzar la presencia pública de la organización.",
      icon: <Megaphone size={40} />,
    }
  ];

  // Bloque 2: Propuesta de Valor
  const values = [
    {
      id: 1,
      title: "Humanizamos la causa",
      text: "Transformamos mensajes institucionales en conversaciones auténticas que generan empatía y compromiso.",
      icon: <HeartHandshake size={32} />
    },
    {
      id: 2,
      title: "Maximizamos la inversión",
      text: "Ofrecemos campañas diseñadas para optimizar la conversión y fidelización de socios.",
      icon: <Coins size={32} />
    },
    {
      id: 3,
      title: "Garantizamos transparencia",
      text: "Trabajamos con procesos claros, cuidando la reputación de la ONG y fortaleciendo su vínculo con la sociedad.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-vm-light relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECCIÓN 1: QUÉ OFRECEMOS --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vm-navy mb-4">¿Qué ofrecemos?</h2>
          <div className="w-24 h-1 bg-vm-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {offerings.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-vm-gold group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-vm-navy/5 text-vm-navy group-hover:bg-vm-navy group-hover:text-vm-gold transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-vm-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* --- SECCIÓN 2: PROPUESTA DE VALOR --- */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vm-navy">Nuestra Propuesta de Valor</h3>
            <p className="text-gray-500 mt-2">Los pilares que sostienen nuestro trabajo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((val, index) => (
              <motion.div 
                key={val.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 p-3 bg-vm-light rounded-lg text-vm-gold">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-vm-navy mb-2">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECCIÓN 3: POR QUÉ ELEGIRNOS (CTA) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-vm-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Elemento decorativo de fondo */}
          <div className="absolute top-0 left-0 w-full h-full bg-vm-gold/10 z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              "Porque no solo captamos socios, <span className="text-vm-gold font-bold">creamos embajadores de la causa</span>. 
              Cada persona que se une gracias a nuestras campañas se convierte en parte activa del cambio social que la ONG lidera."
            </p>
            
            <a 
              href="#contacto" 
              className="inline-block bg-vm-gold text-vm-navy font-bold py-3 px-8 rounded-full hover:bg-white transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Empezar a colaborar
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;