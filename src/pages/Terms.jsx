import { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-vm-navy mb-8 border-b-4 border-vm-gold pb-4 inline-block">
          Aviso Legal
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          
          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de Servicios de la 
              [cite_start]Sociedad de la Información y del Comercio Electrónico (LSSI-CE)[cite: 6], se informa que el titular de este sitio web es:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
              [cite_start]<li><strong>Razón Social:</strong> VM FUNDRAISING S.L. [cite: 2]</li>
              [cite_start]<li><strong>CIF:</strong> B67666230 [cite: 3]</li>
              [cite_start]<li><strong>Domicilio:</strong> Avenida Xixona, 40 - 03010 Alicante (Alicante) [cite: 4]</li>
              [cite_start]<li><strong>Correo electrónico:</strong> <a href="mailto:contacto@vmfundraising.es" className="text-vm-navy font-bold hover:underline">contacto@vmfundraising.es</a> [cite: 4]</li>
              [cite_start]<li><strong>Sitio Web:</strong> www.vmfundraising.es [cite: 5]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">2. Personas Usuarias y Condiciones de Uso</h2>
            <p>
              La utilización de la web atribuye la condición de persona usuaria, e implica la aceptación plena de todas las 
              [cite_start]condiciones incluidas en este Aviso Legal[cite: 8].
            </p>
            <p className="mt-2">
              VM FUNDRAISING S.L. se reserva el derecho a modificar cualquier tipo de información que pudiera aparecer 
              [cite_start]en la web, sin obligación de preavisar a las personas usuarias[cite: 9].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos, diseños, textos e imágenes del sitio web son propiedad de VM FUNDRAISING S.L. o de 
              [cite_start]sus legítimos titulares, quedando prohibida su reproducción sin autorización expresa[cite: 11, 12].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">4. Exclusión de Responsabilidad</h2>
            <p>
              VM FUNDRAISING S.L. no se responsabiliza de los posibles errores, desconexiones o contenidos de terceros 
              [cite_start]enlazados desde esta web[cite: 14].
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;