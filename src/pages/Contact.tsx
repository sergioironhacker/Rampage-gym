import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      <HeroSection
        title="Contacto"
        subtitle="¿Tienes dudas o quieres colaborar? Escríbenos."
        height="small"
        backgroundImage="https://wallpapers.com/images/featured/fitness-2e1dufzgv4p5mtk6.jpg"
      />

      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                NOMBRE
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-4 bg-white text-black font-bold text-base tracking-wide hover:bg-gray-200 transition-colors rounded"
            >
              ENVIAR MENSAJE
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
