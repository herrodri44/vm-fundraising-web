// src/components/ContactForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        navigate("/success");
      })
      .catch((error) => alert("Hubo un error al enviar: " + error));
  };

  return (
    <section id="contacto" className="py-20 bg-vm-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-vm-navy text-center mb-10">Contáctanos</h2>
        
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Nombre</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-vm-navy" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Organización</label>
                <input type="text" name="organization" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-vm-navy" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-vm-navy" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-vm-navy"></textarea>
            </div>

            <div className="mb-6 flex items-start">
              <input 
                type="checkbox" 
                id="legal" 
                required 
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 mr-3" 
              />
              <label htmlFor="legal" className="text-sm text-gray-600">
                He leído y acepto la <a href="/politica-de-privacidad" target="_blank" className="text-vm-navy underline font-bold">Política de Privacidad</a>. 
                Entiendo que mis datos se usarán para responder a esta consulta.
              </label>
            </div>
            <div data-netlify-recaptcha="true"></div>

            <button 
              type="submit" 
              disabled={!agreed}
              className={`w-full py-3 rounded-lg font-bold transition-all ${agreed ? 'bg-vm-navy text-white hover:bg-opacity-90' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;