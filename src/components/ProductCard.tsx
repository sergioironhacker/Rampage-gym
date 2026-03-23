import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative bg-gray-900 rounded-lg overflow-hidden"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-gray-300 transition-colors">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              {product.description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-lg sm:text-xl">
              €{product.price.toFixed(2)}
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="px-4 sm:px-6 py-2 bg-white text-black font-bold text-xs sm:text-sm tracking-wide hover:bg-gray-200 transition-colors rounded"
            >
              VER
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* MODAL IMAGEN */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}