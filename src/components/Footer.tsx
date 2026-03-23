import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logoMain.jpeg"
                alt="RampageGym Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="text-white font-bold text-lg tracking-wider">
                  RAMPAGEGYM
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              No es solo ropa. Es mentalidad. Diseñado para los que no se rinden.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-2">
              {['Inicio', 'Tienda', 'Hombre', 'Mujer', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm tracking-wider mb-4">
              SÍGUENOS
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 RampageGym — Train Hard. Look Strong.
          </p>
        </div>
      </div>
    </footer>
  );
}
