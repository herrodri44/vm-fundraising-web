import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-vm-navy mb-8 border-b-4 border-vm-gold pb-4 inline-block">
          Política de Privacidad
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 italic">
          [cite_start]"Sus datos seguros" [cite: 15]
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
          
          <section>
            <p>
              En Europa y en España existen normas de protección de datos destinadas a garantizar su seguridad y privacidad. 
              [cite_start]Por ello, VM FUNDRAISING S.L. desea que entienda claramente qué hace con su información personal[cite: 16, 17].
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-vm-navy mb-4 flex items-center">
              🛡️ Responsable del Tratamiento
            </h2>
            <p className="mb-2"><strong>VM FUNDRAISING S.L.</strong></p>
            [cite_start]<p>Avenida Xixona, 40 - 03010 Alicante (Alicante) [cite: 19]</p>
            [cite_start]<p>Correo electrónico: contacto@vmfundraising.es [cite: 19]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Finalidad</h2>
            <p>
              Tratamos sus datos para gestionar el contacto, resolver consultas y prestar los servicios contratados. 
              También podrán usarse para informarle sobre actividades relacionadas con la captación de fondos y proyectos 
              [cite_start]sociales, siempre que haya prestado su consentimiento[cite: 21, 22].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Legitimación</h2>
            <p>
              El tratamiento de sus datos se basa en el <strong>consentimiento</strong> de la persona interesada y/o la ejecución 
              [cite_start]de un contrato o relación precontractual[cite: 24].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Destinatarios</h2>
            <p>
              [cite_start]No se cederán datos a terceros salvo obligación legal[cite: 26].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Sus Derechos</h2>
            <p>
              Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad mediante 
              [cite_start]escrito a VM FUNDRAISING S.L., Avenida Xixona, 40 - 03010 Alicante, o al correo contacto@vmfundraising.es[cite: 28].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">Conservación</h2>
            <p>
              [cite_start]Los datos se mantendrán mientras exista relación o sea necesario para el cumplimiento de obligaciones legales[cite: 30].
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <h3 className="text-xl font-bold text-vm-navy mb-3">Compromiso con la Protección de Datos</h3>
            <p>
              La Dirección de VM FUNDRAISING S.L. asume el compromiso de cumplir con el Reglamento (UE) 2016/679 (RGPD) 
              y la Ley Orgánica 3/2018 (LOPDGDD), implantando medidas técnicas y organizativas para garantizar la 
              [cite_start]confidencialidad, integridad y disponibilidad de la información tratada[cite: 34].
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;