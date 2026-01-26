import { useEffect } from 'react';

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

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p className="text-sm text-gray-500 italic">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">1. Responsable del Tratamiento</h2>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de Derechos Digitales (LOPDGDD), le informamos que los datos personales facilitados a través de este sitio web serán tratados por:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Razón Social:</strong> VM Fundraising S.L.</li>
              <li><strong>CIF:</strong> B-67666230</li>
              <li><strong>Domicilio Social:</strong> Avenida Xixona 40, Alicante, España</li>
              <li><strong>Email de contacto:</strong> Administracion@vmfundraising.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">2. Finalidad del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a las consultas planteadas a través del formulario de contacto.</li>
              <li>Enviar información comercial sobre nuestros servicios, siempre que haya dado su consentimiento expreso.</li>
              <li>Gestión administrativa y comercial de la relación con nuestros clientes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> del interesado, otorgado mediante la aceptación explícita de esta política de privacidad al enviar el formulario de contacto (casilla de verificación "He leído y acepto...").
            </p>
          </section>
          <section>

            <h2 className="text-2xl font-bold text-vm-navy mb-4">4. Destinatarios de los datos</h2>
            <p>
              Sus datos no se cederán a terceros, salvo obligación legal. No obstante, para el funcionamiento de la web, utilizamos proveedores de servicios tecnológicos (como servicios de hosting y gestión de formularios) que pueden tratar los datos en calidad de Encargados del Tratamiento, siempre bajo estándares de seguridad adecuados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vm-navy mb-4">5. Derechos del Usuario</h2>
            <p>Usted puede ejercer en cualquier momento sus derechos de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Acceso:</strong> Saber qué datos tenemos suyos.</li>
              <li><strong>Rectificación:</strong> Corregir datos erróneos.</li>
              <li><strong>Supresión:</strong> Solicitar el borrado de sus datos.</li>
              <li><strong>Oposición y Limitación:</strong> Oponerse al tratamiento o limitarlo.</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, envíe un correo electrónico a [EMAIL DE CONTACTO] adjuntando una copia de su DNI.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;