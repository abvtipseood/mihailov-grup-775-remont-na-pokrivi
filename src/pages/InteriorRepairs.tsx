import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle, 
  Paintbrush,
  Hammer,
  Sparkles
} from 'lucide-react';

const PHONE_NUMBER = "0898 770 775";
const PHONE_LINK = "tel:+359898770775";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function InteriorRepairs() {
  return (
    <div className="pt-24">
      {/* Service Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://i.ibb.co/9m6bPFHd/image.png" 
            alt="Вътрешни ремонти" 
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
                Цялостни вътрешни ремонти
              </h1>
              <p className="text-xl text-slate-300 mb-10 font-medium leading-relaxed">
                Преобразете дома си с нашите качествени услуги за вътрешни ремонти - от шпакловка до опънати тавани.
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Вашият дом, по ваш вкус</h2>
              <p className="text-lg text-slate-600 mb-6">
                Вътрешният ремонт е възможност да освежите и модернизирате жилището си. Ние предлагаме комплексни решения, съобразени с вашите изисквания и бюджет, гарантирайки високо качество на изпълнение във всеки детайл.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Шпакловка, мазилка и боядисване (вкл. безвъздушно)',
                  'Монтаж на гипсокартон (окачени тавани, преградни стени)',
                  'Цялостен ремонт на бани',
                  'Полагане на фаянс, теракот, гранитогрес',
                  'Монтаж на ламиниран паркет',
                  'Изграждане на опънати тавани'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-slate-800 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" alt="Ремонт 1" className="rounded-xl w-full h-64 object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Ремонт 2" className="rounded-xl w-full h-64 object-cover shadow-lg mt-8" />
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
                <Sparkles className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Внимание към детайла</h3>
              <p className="text-slate-600">Всеки ъгъл, всяка стена и всеки таван се изработват с прецизност за перфектен завършек.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Paintbrush className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Модерни технологии</h3>
              <p className="text-slate-600">Използваме съвременни методи като безвъздушно боядисване за по-гладко и бързо покритие.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Hammer className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Комплексни услуги</h3>
              <p className="text-slate-600">От къртене и извозване до финални щрихи - поемаме целия процес, за да ви спестим време и усилия.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Планирате ремонт?</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Свържете се с нас, за да обсъдим вашите идеи и да ви предложим най-доброто решение за вашия дом.</p>
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
