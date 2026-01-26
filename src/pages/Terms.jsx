import { useEffect } from 'react';

const Terms = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-vm-navy mb-8 border-b-4 border-vm-gold pb-4 inline-block">
          Aviso Legal y Términos de Uso
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          
          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se reflejan a continuación los siguientes datos:
            </p>
            <p className="mt-2">
              El titular de este sitio web es <strong>VM Fundraising S.L.</strong>, con domicilio en Avenida Xixona 40, Alicante España, número de C.I.F.: B-67666230, inscrita en el Registro Mercantil de Alicante. Correo electrónico de contacto: administracion@vmfundraising.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">2. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos de la web (textos, logotipos, imágenes, diseño gráfico, código fuente) son propiedad intelectual de VM Fundraising S.L. o de terceros que han autorizado su uso. Queda expresamente prohibida la reproducción, distribución o comunicación pública de la totalidad o parte de los contenidos sin la autorización de VM Fundraising S.L.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">3. Exclusión de Garantías y Responsabilidad</h2>
            <p>
              VM Fundraising S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">4. Modificaciones</h2>
            <p>
              VM Fundraising S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">5. Legislación Aplicable y Jurisdicción</h2>
            <p>
              La relación entre VM Fundraising S.L. y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Alicante.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;