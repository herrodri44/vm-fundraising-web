import { useEffect } from 'react';

const CookiesPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-vm-navy mb-8 border-b-4 border-vm-gold pb-4 inline-block">
          Política de Cookies
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            VM FUNDRAISING S.L. informa a las personas usuarias de su sitio web www.vmfundraising.com sobre el uso de cookies 
            [cite_start]y tecnologías similares[cite: 37].
          </p>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de datos que se almacenan en el dispositivo de la persona usuaria al 
              visitar una página web. Se utilizan para recordar información técnica, preferencias de navegación o 
              [cite_start]personalización del servicio[cite: 39, 40].
            </p>
          </section>

          <section className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
            <h2 className="text-xl font-bold text-vm-navy mb-4">Uso de cookies en este sitio web</h2>
            <p className="mb-4">
              [cite_start]Este sitio web <strong>no utiliza cookies analíticas, publicitarias ni de seguimiento de terceros</strong>[cite: 42].
            </p>
            <p>
              Únicamente emplea, en su caso, <strong>cookies técnicas o de sesión</strong> estrictamente necesarias para garantizar el 
              [cite_start]funcionamiento correcto de la navegación, la seguridad y la gestión de formularios[cite: 43].
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              [cite_start]<li>No recogen información personal[cite: 45].</li>
              [cite_start]<li>No se utilizan con fines publicitarios ni de análisis[cite: 46].</li>
              [cite_start]<li>Se eliminan automáticamente al cerrar el navegador[cite: 47].</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Gestión y eliminación</h2>
            <p>
              Si lo desea, puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración 
              de las opciones del navegador utilizado. En caso de eliminar o bloquear las cookies técnicas, es posible que el 
              [cite_start]sitio web no funcione correctamente[cite: 49, 50].
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;