// src/components/ParallaxSection.jsx
const ParallaxSection = () => {
  return (
    <section 
      className="bg-fixed bg-center bg-cover py-32 relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-vm-navy/80"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Tu organización necesita crecer?
        </h2>
        <p className="text-xl text-vm-gold font-semibold">
          Nosotros somos el puente entre tu causa y los recursos que necesita.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;