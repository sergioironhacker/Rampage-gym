import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Women() {
  const womenProducts = products.filter((p) => p.category === 'women');

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      <HeroSection
        title="Colección Mujer"
        subtitle="Rendimiento y estilo en equilibrio. Hecho para moverte con fuerza y seguridad."
        height="medium"
        backgroundImage="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
