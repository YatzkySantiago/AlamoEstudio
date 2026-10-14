import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Strip from './components/Strip';
import Proceso from './components/Proceso';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Strip />
        <Proceso />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
