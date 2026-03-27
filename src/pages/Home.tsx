import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  Home as HomeIcon, 
  PaintRoller, 
  Check,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';

const PHONE_NUMBER = "0898 770 775";
const PHONE_LINK = "tel:+359898770775";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const faqs = [
  {
    question: "Колко струва ремонт на покрив и как се формира цената?",
    answer: "Цената за ремонт на покрив зависи от състоянието на конструкцията, квадратурата и вложените материали. Затова предлагаме безплатен оглед на място, след който изготвяме точна и прозрачна оферта без скрити такси."
  },
  {
    question: "Колко време отнема един цялостен ремонт на покрив?",
    answer: "Срокът за изпълнение варира според сложността на проекта и метеорологичните условия. Стандартен ремонт на покрив на еднофамилна къща обикновено отнема между 3 и 7 работни дни. Винаги спазваме предварително уговорените срокове."
  },
  {
    question: "Давате ли гаранция за извършените строително-ремонтни услуги?",
    answer: "Да, абсолютно! Всяка наша услуга – от изграждане на нов покрив до вътрешни ремонти и топлоизолация – е придружена с писмена гаранция за вложените материали и извършения труд. Вашето спокойствие е наш приоритет."
  },
  {
    question: "Трябва ли аз да купувам материалите за ремонта?",
    answer: "Не е задължително. Ние работим с доказани доставчици и можем да осигурим всички необходими материали на преференциални цени. Ако все пак предпочитате сами да закупите материалите, ние ще работим с тях, стига да отговарят на стандартите за качество."
  },
  {
    question: "Извършвате ли частични ремонти на покриви и отстраняване на течове?",
    answer: "Да, специализирани сме в бързото локализиране и отстраняване на течове, подмяна на счупени керемиди, ремонт на улуци и водосточни тръби, както и частична хидроизолация. Реагираме максимално бързо при спешни случаи."
  },
  {
    question: "Какви материали използвате за топлоизолация и хидроизолация?",
    answer: "Работим само със сертифицирани системи за топлоизолация (EPS, XPS, каменна вата) и висококачествени хидроизолационни мембрани от водещи производители. Изборът на материал се съобразява със спецификите на вашия обект."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Иван Димитров",
    quote: "Изключителни професионалисти! Ремонтираха покрива на вилата ми за по-малко от седмица. Няма течове, няма проблеми. Препоръчвам горещо!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария Петрова",
    quote: "Много съм доволна от вътрешния ремонт, който направиха в апартамента ми. Работят чисто, бързо и спазват всички уговорени срокове.",
    rating: 5
  },
  {
    id: 3,
    name: "Георги Стоянов",
    quote: "Направиха външна топлоизолация на къщата ни. Сметките за ток паднаха осезаемо още първата зима. Коректни и точни в ценообразуването.",
    rating: 5
  },
  {
    id: 4,
    name: "Елена Василева",
    quote: "Реагираха веднага след бурята, когато покривът ни протече. Спасиха ни от много по-големи щети. Благодарим на целия екип!",
    rating: 5
  }
];

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop" 
            alt="Ремонт на покриви" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Реакция до 24 часа
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Професионални ремонти <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  без компромис
                </span> в качеството
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 font-medium max-w-2xl leading-relaxed">
                Безплатен оглед • Бърза реакция • Гарантирано качество за всеки детайл от вашия дом.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center justify-center gap-2 group"
                >
                  Заяви безплатен оглед
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={PHONE_LINK}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Обади се сега
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-400 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                      <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                    </div>
                  ))}
                </div>
                <p>Над 500+ доволни клиенти</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-b border-slate-200 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8">
          {[
            { icon: CheckCircle, text: "Безплатни огледи" },
            { icon: Clock, text: "Бързо изпълнение" },
            { icon: ShieldCheck, text: "Качествени материали" },
            { icon: ThumbsUp, text: "Коректни цени" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
              <div className="bg-orange-50 p-3 rounded-full">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-bold text-slate-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Нашите Услуги</h2>
            <p className="text-lg text-slate-600">Предлагаме пълен спектър от строително-ремонтни дейности с фокус върху качеството и дълготрайността.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://i.ibb.co/PzCzjRhk/image.png" alt="Ремонт на покриви" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-orange-600 p-2 rounded-lg">
                      <HomeIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Ремонт на покриви</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {['Нови покриви', 'Частични ремонти', 'Отстраняване на течове', 'Хидроизолация', 'Тенекеджийски услуги', 'Изграждане на навеси'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/roof-repair" className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-900 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Научи повече <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://i.ibb.co/qFs9RVTm/image.png" alt="Топлоизолация" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-orange-600 p-2 rounded-lg">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Топлоизолация</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="bg-orange-50 border border-orange-100 text-orange-800 text-sm font-bold px-4 py-3 rounded-lg mb-6 flex items-start gap-2">
                  <Star className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  Спестява разходи и повишава комфорта
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {['Външна изолация', 'Работа със собствено скеле', 'Висококачествени материали', 'Гаранция за качество'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/insulation" className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-900 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Научи повече <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://i.ibb.co/9m6bPFHd/image.png" alt="Вътрешни ремонти" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-orange-600 p-2 rounded-lg">
                      <PaintRoller className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Вътрешни ремонти</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {['Гипсокартон', 'Шпакловка и боядисване', 'Безвъздушно боядисване', 'Бани (цялостно изграждане)', 'Плочки и ламинат', 'Опънати тавани'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/interior-repairs" className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-900 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Научи повече <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process */}
      <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Why Choose Us */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Защо да изберете нас?</h2>
              <p className="text-slate-400 text-lg mb-10">Ние не просто ремонтираме, ние създаваме сигурност и комфорт за вашия дом. Нашата репутация се гради на доверие и качествено изпълнение.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Бързина", desc: "Реагираме веднага при спешни случаи и течове." },
                  { title: "Опит", desc: "Дългогодишен опит в строителството и ремонтите." },
                  { title: "Коректност", desc: "Ясни цени без скрити такси и изненади." },
                  { title: "Качество", desc: "Работим само с доказани материали." }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <Check className="w-5 h-5 text-orange-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Процес на работа</h3>
              
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-700"></div>
                
                {[
                  { step: "01", title: "Свързваш се с нас", desc: "Обадете се или попълнете формата за контакт." },
                  { step: "02", title: "Безплатен оглед", desc: "Наш специалист ще посети обекта за оценка." },
                  { step: "03", title: "Получаваш оферта", desc: "Изготвяме детайлна и прозрачна ценова оферта." },
                  { step: "04", title: "Започваме работа", desc: "Изпълняваме проекта в уговорения срок." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shrink-0 font-bold text-lg shadow-lg shadow-orange-600/30 border-4 border-slate-800">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Какво казват клиентите ни</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Доверието се гради с качествена работа. Вижте отзивите на хората, които вече избраха нашите услуги.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Slider Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all focus:outline-none"
                aria-label="Предишен отзив"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all focus:outline-none"
                aria-label="Следващ отзив"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="overflow-hidden px-4 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative"
                >
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-orange-100 rotate-180" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-slate-500 text-sm">Доволен клиент</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'bg-orange-600 w-8' : 'bg-slate-300 hover:bg-orange-400'}`}
                  aria-label={`Отиди на отзив ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Галерия</h2>
            <p className="text-lg text-slate-600">Разгледайте част от нашите завършени проекти. Качеството говори само за себе си.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer"
              >
                <img src={src} alt={`Проект ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-slate-900 font-bold px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Разгледай
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Често задавани въпроси</h2>
            <p className="text-lg text-slate-600">Отговори на най-важните въпроси, свързани с нашите строително-ремонтни услуги.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-orange-500 shadow-md shadow-orange-500/10' : 'border-slate-200 hover:border-orange-300'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 ${openFaqIndex === index ? 'text-orange-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'bg-orange-100 rotate-180' : 'bg-slate-100'}`}>
                    <ChevronDown className={`w-5 h-5 ${openFaqIndex === index ? 'text-orange-600' : 'text-slate-500'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Предстои ви ремонт?</h2>
          <p className="text-xl md:text-2xl text-orange-100 mb-10 font-medium">Свържете се с нас за безплатен оглед и професионална консултация. Ние ще реализираме вашите идеи качествено и в срок.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={PHONE_LINK}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Обади се веднага
            </a>
            <a 
              href="#contact"
              className="bg-white hover:bg-slate-50 text-orange-600 px-8 py-4 rounded-lg font-bold text-xl transition-all shadow-xl flex items-center justify-center"
            >
              Заяви оглед
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Свържете се с нас</h2>
              <p className="text-lg text-slate-600 mb-10">Готови сме да отговорим на вашите въпроси и да организираме безплатен оглед в удобно за вас време.</p>
              
              <div className="space-y-8">
                <a href={PHONE_LINK} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                    <Phone className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Телефон за връзка</p>
                    <p className="text-3xl font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">{PHONE_NUMBER}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-8 h-8 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Работно време</p>
                    <p className="text-xl font-bold text-slate-900">Понеделник - Неделя</p>
                    <p className="text-slate-600">08:00 - 20:00 ч.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Гаранция за качество</h4>
                  <p className="text-slate-600">Всички наши услуги са придружени с писмена гаранция за вложените материали и труд.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка за безплатен оглед</h3>
              <p className="text-slate-500 mb-8 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Ще се свържем с вас до 24 часа
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Име и Фамилия</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="Въведете вашето име"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Телефонен номер</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="0898 770 775"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">От какво имате нужда? (по желание)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                    placeholder="Опишете накратко проблема или проекта..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center justify-center gap-2"
                >
                  Изпрати заявка <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
