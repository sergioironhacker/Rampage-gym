import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34610498900', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors"
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp size={20} />
    </motion.button>
  );
}