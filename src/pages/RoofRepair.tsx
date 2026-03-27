import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Home as HomeIcon,
  Wrench,
  Droplets
} from 'lucide-react';

const PHONE_NUMBER = "0898 770 775";
const PHONE_LINK = "tel:+359898770775";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function RoofRepair() {
  return (
    <div className="pt-24">
      {/* Service Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://i.ibb.co/PzCzjRhk/image.png" 
            alt="Ремонт на покриви" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link to="/" className="text-orange-500 hover:text-orange-400 font-medium mb-6 inline-flex items-center gap-2 transition-colors">
                &larr; Обратно към начало
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Професионален ремонт на покриви
              </h1>
              <p className="text-xl text-slate-300 mb-10 font-medium leading-relaxed">
                Отстраняване на течове, изграждане на нови покриви и цялостна поддръжка с гаранция за качество.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/#contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold text-base transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center justify-center gap-2"
                >
                  Заяви безплатен оглед
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Защо покривът е най-важната част от дома?</h2>
              <p className="text-lg text-slate-600 mb-6">
                Покривът предпазва цялата сграда от атмосферните влияния. Дори малък теч може да доведе до сериозни структурни повреди, мухъл и скъпи ремонти в бъдеще. Ние предлагаме бързо и ефективно решение на всеки проблем.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Изграждане на нови покривни конструкции',
                  'Пренареждане на керемиди',
                  'Отстраняване на течове и хидроизолация',
                  'Тенекеджийски услуги (улуци и водосточни тръби)',
                  'Изграждане на навеси и беседки'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-slate-800 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop" alt="Покрив 1" className="rounded-xl w-full h-64 object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" alt="Покрив 2" className="rounded-xl w-full h-64 object-cover shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Спиране на течове</h3>
              <p className="text-slate-600">Локализираме и отстраняваме течове бързо, за да предотвратим по-нататъшни щети по вашия дом.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Качествени материали</h3>
              <p className="text-slate-600">Работим само с доказани марки керемиди, изолации и дървен материал за максимална издръжливост.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Дълга гаранция</h3>
              <p className="text-slate-600">Всяка наша услуга е придружена с писмена гаранция, за да сте спокойни за вашата инвестиция.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Имате нужда от спешен ремонт?</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Нашите специалисти са в готовност да реагират бързо. Свържете се с нас сега за безплатен оглед и консултация.</p>
        <a 
          href={PHONE_LINK}
          className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-xl items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Обади се: {PHONE_NUMBER}
        </a>
      </section>
    </div>
  );
}
