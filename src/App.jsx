import Header from './components/Header';
import Hero from './components/Hero';
import Trabajos from './components/Trabajos';
import Precios from './components/Precios';
import Proceso from './components/Proceso';
import FAQ from './components/FAQ';
import Cierre from './components/Cierre';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import { MessageProvider } from './message';

export default function App() {
  return (
    <MessageProvider>
      <a href="#inicio" className="skip">Saltar al contenido</a>
      <Header />
      <main id="inicio">
        <Hero />
        <div className="page">
          <Trabajos />
          <Precios />
          <Proceso />
          <FAQ />
          <Cierre />
        </div>
      </main>
      <div className="page">
        <Footer />
      </div>
      <MobileBar />
    </MessageProvider>
  );
}
