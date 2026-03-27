import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Users, 
  Award, 
  HeartHandshake,
  Target
} from 'lucide-react';

const PHONE_NUMBER = "0898 770 775";
const PHONE_LINK = "tel:+359898770775";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541888086925-0c1332dd3f4b?q=80&w=2070&auto=format&fit=crop" 
            alt="Строителство и ремонти" 
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
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                За нас
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Повече от строители – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  ваши партньори
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 font-medium leading-relaxed max-w-2xl">
                В морето от строителни бригади и майстори, намирането на надежден партньор често е предизвикателство. Ние не просто обещаваме – ние доказваме.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Кои сме ние?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Михайлов груп 775 е компания, изградена върху основите на дългогодишен опит, професионализъм и безкомпромисно отношение към детайла. Започнахме като малък екип от ентусиасти, а днес сме предпочитан избор за стотици семейства и бизнеси.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Нашата мисия е проста: да превърнем всеки ремонт от стресиращо преживяване в плавен и предвидим процес. Вярваме, че домът ви заслужава най-доброто, затова работим така, сякаш ремонтираме собствените си домове.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-extrabold text-orange-600 mb-2">15+</div>
                  <div className="text-slate-500 font-medium">Години опит</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-orange-600 mb-2">500+</div>
                  <div className="text-slate-500 font-medium">Завършени проекта</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-orange-100 rounded-3xl transform rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356f90?q=80&w=2070&auto=format&fit=crop" 
                alt="Нашият екип в действие" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="font-bold text-xl text-slate-900">100%</div>
                </div>
                <p className="text-slate-600 font-medium">Удовлетвореност на клиентите ни</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Защо да изберете нас пред другите?</h2>
            <p className="text-lg text-slate-600">
              Знаем, че сте чували много обещания. Ето какво реално ни отличава от масовите бригади и защо клиентите ни препоръчват на своите близки.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Без скрити такси",
                desc: "Получавате ясна и детайлна оферта преди началото на работата. Цената, която договаряме, е цената, която плащате. Без неприятни изненади в края."
              },
              {
                icon: Clock,
                title: "Сроковете са свещени",
                desc: "Уважаваме вашето време. Когато кажем, че ще приключим в петък, ние приключваме в петък. Работим организирано и по график."
              },
              {
                icon: Award,
                title: "Реална гаранция",
                desc: "Не даваме празни обещания. Всяка наша услуга е подплатена с писмена гаранция. Ако възникне проблем, ние сме на един телефон разстояние."
              },
              {
                icon: Target,
                title: "Без компромис в материалите",
                desc: "Използваме само доказани марки и висококачествени материали. Евтиното днес излиза скъпо утре – ние строим, за да издържи."
              },
              {
                icon: HeartHandshake,
                title: "Чистота и уважение",
                desc: "Вашият дом не е просто строителна площадка. Ние пазим имуществото ви, почистваме след себе си и се отнасяме с уважение към пространството ви."
              },
              {
                icon: Users,
                title: "Собствен екип специалисти",
                desc: "Не разчитаме на случайни подизпълнители. Разполагаме с проверен екип от майстори за всяка специфична дейност."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888086925-0c1332dd3f4b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Убедете се сами в нашия професионализъм</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Свържете се с нас днес. Ще обсъдим вашия проект, ще направим безплатен оглед и ще ви предложим най-доброто решение.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={PHONE_LINK}
              className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all shadow-xl items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Обади се: {PHONE_NUMBER}
            </a>
            <Link 
              to="/#contact"
              className="inline-flex bg-white hover:bg-slate-50 text-orange-600 px-8 py-4 rounded-lg font-bold text-xl transition-all shadow-xl items-center justify-center"
            >
              Заяви оглед
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
