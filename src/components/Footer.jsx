import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-vm-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* COLUMNA 1: MARCA Y SLOGAN */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">
              VM <span className="text-vm-gold">FUNDRAISING</span>
            </h2>
            <p className="text-gray-300 max-w-sm leading-relaxed mb-6">
              Juntos lo hacemos posible. Conectamos organizaciones sin fines de lucro con los recursos que necesitan para cambiar el mundo.
            </p>
            {/* TODO: conseguir links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vm-gold hover:text-vm-navy transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:info@vmfundraising.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vm-gold hover:text-vm-navy transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS (Scroll) */}
          <div>
            <h3 className="text-lg font-bold text-vm-gold mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors text-left">
                  Inicio
                </button>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL (Rutas React Router) */}
          <div>
            <h3 className="text-lg font-bold text-vm-gold mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-de-privacidad" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-gray-300 hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} VM Fundraising S.L. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm text-vm-gold hover:text-white transition-colors"
          >
            Volver arriba <ArrowUp size={16} className="ml-2" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;