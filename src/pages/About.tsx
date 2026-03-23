import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      <HeroSection
        title="Nuestra historia"
        subtitle="Nacido de la disciplina, el esfuerzo y las ganas de superarse cada día."
        height="medium"
        backgroundImage="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <p>RampageGym no nació para seguir tendencias.</p>
            <p>
              Nació de la disciplina, del esfuerzo y de las ganas de superarse cada día.
            </p>
            <p className="pt-4">Sabemos lo que es entrenar cansado.</p>
            <p>Sabemos lo que es no tener motivación.</p>
            <p>Y aun así, seguir.</p>
            <p className="pt-4 text-white font-bold">Esta marca es para esa gente.</p>
            <p className="pt-4">No vendemos ropa.</p>
            <p className="text-white font-bold text-xl sm:text-2xl">
              Representamos una mentalidad.
            </p>
            <p className="pt-4 text-gray-400 italic">
              Si estás aquí, ya lo entiendes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: 'CALIDAD',
                description:
                  'Materiales premium seleccionados para soportar los entrenamientos más duros.',
              },
              {
                title: 'DISEÑO',
                description:
                  'Estilo minimalista y funcional. Sin distracciones. Solo lo esencial.',
              },
              {
                title: 'PROPÓSITO',
                description:
                  'Cada prenda cuenta una historia de superación, esfuerzo y dedicación.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
