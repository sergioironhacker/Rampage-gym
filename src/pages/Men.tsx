import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Men() {
  const menProducts = products.filter((p) => p.category === 'men');

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      <HeroSection
        title="Colección Hombre"
        subtitle="Pensado para entrenamientos duros. Materiales resistentes. Sin distracciones."
        height="medium"
        backgroundImage="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
