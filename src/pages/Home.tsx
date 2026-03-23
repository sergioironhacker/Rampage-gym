import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { Dumbbell, Brain, Trophy } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const values = [
    {
      icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'DISCIPLINA',
      description: 'Hacer lo que toca, incluso cuando no apetece.',
    },
    {
      icon: <Dumbbell className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'FUERZA',
      description: 'Física y mental. Una sin la otra no vale.',
    },
    {
      icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'MENTALIDAD',
      description: 'El verdadero cambio empieza en la cabeza.',
    },
  ];

  return (
    <div className="bg-black">
      <HeroSection
        title="TRAIN HARD. LOOK STRONG."
        subtitle="No es solo ropa. Es mentalidad. Diseñado para los que no se rinden."
        buttonText="VER COLECCIÓN"
        onButtonClick={() => onNavigate('shop')}
        backgroundImage="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
          >
            Lo que define a Rampage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            Cada prenda está diseñada para soportar tu mejor versión. Sin distracciones. Sin límites.
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 sm:mb-16 tracking-tight"
          >
            Elige tu camino
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => onNavigate('men')}
              className="group relative h-96 sm:h-[500px] overflow-hidden rounded-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">HOMBRE</h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Fuerza, resistencia y carácter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => onNavigate('women')}
              className="group relative h-96 sm:h-[500px] overflow-hidden rounded-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url(https://img.freepik.com/vector-gratis/proximamente-fondo-diseno-efecto-luz-enfoque_1017-27277.jpg?semt=ais_hybrid&w=740&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">MUJER</h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Poder, actitud y determinación.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 sm:mb-16 tracking-tight"
          >
            Esto no es moda. Es disciplina.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 sm:mb-6 text-white">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="No es para todos."
        description="Solo para los que entrenan cuando nadie mira. Solo para los que no se rinden."
        buttonText="ÚNETE A RAMPAGE"
        onButtonClick={() => onNavigate('shop')}
      />
    </div>
  );
}
