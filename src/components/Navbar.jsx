import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navItems = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Contacto', id: 'contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO */}
          <div className="shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img className="h-12 w-auto md:h-16" src="/images/logo-vm.png" alt="VM Fundraising" />
          </div>

          {/* 2. MENU ESCRITORIO */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`font-semibold transition-colors ${
                    item.id === 'contacto' 
                    ? "bg-vm-navy text-white px-5 py-2 rounded-full hover:bg-vm-gold hover:text-vm-navy shadow-lg"
                    : "text-vm-navy hover:text-vm-gold"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* 3. BOTÓN MÓVIL */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-vm-navy focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left px-3 py-2 text-vm-navy font-medium hover:text-vm-gold hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;