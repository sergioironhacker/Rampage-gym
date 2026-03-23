import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function CTASection({
  title,
  description,
  buttonText,
  onButtonClick,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed"
        >
          {description}
        </motion.p>
        {onButtonClick && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base tracking-wide hover:bg-gray-200 transition-all rounded"
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </section>
  );
}
