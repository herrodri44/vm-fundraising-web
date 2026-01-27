// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiesPolicy from './pages/CookiesPolicy';

import Hero from './components/Hero';
import ParallaxSection from './components/ParallaxSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Success from './pages/Success';

const Home = () => (
  <>
    <Hero />
    <Services />
    <About />
    <ParallaxSection />
    <ContactForm />
  </>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/politica-de-cookies" element={<CookiesPolicy />} />

          <Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;