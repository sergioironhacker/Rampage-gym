import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { label: string; page: Page }[] = [
    { label: 'INICIO', page: 'home' },
    { label: 'TIENDA', page: 'shop' },
    { label: 'HOMBRE', page: 'men' },
    { label: 'MUJER', page: 'women' },
    { label: 'NOSOTROS', page: 'about' },
    { label: 'CONTACTO', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <img
              src="/logoMain.jpeg"
              alt="RampageGym Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform group-hover:scale-110"
            />
            <div className="text-left">
              <div className="text-white font-bold text-lg sm:text-xl tracking-wider">
                RAMPAGEGYM
              </div>
              <div className="text-gray-400 text-[10px] sm:text-xs tracking-wide -mt-1">
                TRAIN HARD. LOOK STRONG.
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 lg:px-4 py-2 text-sm font-semibold tracking-wide transition-all ${
                  currentPage === item.page
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full text-left px-4 py-3 text-base font-semibold tracking-wide rounded-lg transition-all ${
                    currentPage === item.page
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
