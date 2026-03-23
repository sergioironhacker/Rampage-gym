import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import Contact from './pages/Contact';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'shop':
        return <Shop />;
      case 'men':
        return <Men />;
      case 'women':
        return <Women />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
