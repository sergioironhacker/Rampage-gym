import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundImage?: string;
  height?: 'full' | 'medium' | 'small';
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  backgroundImage = 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920',
  height = 'full',
}: HeroSectionProps) {
  const heightClasses = {
    full: 'h-screen',
    medium: 'h-[60vh] sm:h-[70vh]',
    small: 'h-[40vh] sm:h-[50vh]',
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
        >
          {subtitle}
        </motion.p>
        {buttonText && onButtonClick && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-base tracking-wide hover:bg-gray-200 transition-all rounded"
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </div>
  );
}
