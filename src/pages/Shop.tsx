import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const [filter, setFilter] = useState<'all' | 'men' | 'women'>('all');

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      <HeroSection
        title="Colección RampageGym"
        subtitle="Diseñado para rendir. Hecho para durar."
        height="medium"
        backgroundImage="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {[
              { label: 'TODO', value: 'all' },
              { label: 'HOMBRE', value: 'men' },
              { label: 'MUJER', value: 'women' },
            ].map((item) => (
              <motion.button
                key={item.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(item.value as typeof filter)}
                className={`px-6 sm:px-8 py-2 sm:py-3 font-bold text-sm sm:text-base tracking-wide transition-all rounded ${
                  filter === item.value
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
