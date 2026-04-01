import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Hammer,
  Clock
} from 'lucide-react';

const PHONE_NUMBER = "0898 770 775";
const PHONE_LINK = "tel:+359898770775";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-slate-900/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
            <div className="bg-orange-600 p-2 rounded-lg shrink-0">
              <Hammer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className={`text-lg sm:text-xl font-bold leading-none whitespace-nowrap tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Михайлов груп 775
              </h1>
              <p className={`text-[10px] sm:text-xs font-medium whitespace-nowrap ${isScrolled ? 'text-orange-600' : 'text-orange-400'}`}>
                Строителство & Ремонти
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Начало</Link>
            <Link to="/about" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>За нас</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>
                Услуги <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                  >
                    <Link to="/services/roof-repair" className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors">
                      Ремонт на покриви
                    </Link>
                    <Link to="/services/insulation" className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors">
                      Топлоизолация
                    </Link>
                    <Link to="/services/interior-repairs" className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors">
                      Вътрешни ремонти
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={scrollToContact} className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Контакти</button>
            
            <div className="flex items-center gap-4 ml-4">
              <a href={PHONE_LINK} className={`flex items-center gap-2 font-bold text-lg ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-orange-500 transition-colors`}>
                <Phone className="w-5 h-5 text-orange-500" />
                {PHONE_NUMBER}
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 active:scale-95"
              >
                Безплатен оглед
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <a href={PHONE_LINK} className="bg-orange-600 p-2 rounded-md text-white">
              <Phone className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 text-xl font-medium mt-4">
              <Link to="/" className="text-left border-b border-slate-100 pb-4 flex justify-between items-center">
                Начало <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
              <Link to="/about" className="text-left border-b border-slate-100 pb-4 flex justify-between items-center">
                За нас <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
              
              <div className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} 
                  className="w-full text-left flex justify-between items-center"
                >
                  Услуги <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 mt-4 pl-4 border-l-2 border-orange-100"
                    >
                      <Link to="/services/roof-repair" className="text-lg text-slate-600 hover:text-orange-600">Ремонт на покриви</Link>
                      <Link to="/services/insulation" className="text-lg text-slate-600 hover:text-orange-600">Топлоизолация</Link>
                      <Link to="/services/interior-repairs" className="text-lg text-slate-600 hover:text-orange-600">Вътрешни ремонти</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={scrollToContact} className="text-left border-b border-slate-100 pb-4 flex justify-between items-center">
                Контакти <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            </nav>
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <a href={PHONE_LINK} className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-xl font-bold text-lg">
                <Phone className="w-6 h-6" />
                Обади се сега: {PHONE_NUMBER}
              </a>
              <button onClick={scrollToContact} className="flex items-center justify-center gap-3 bg-orange-600 text-white py-4 rounded-xl font-bold text-lg">
                Заяви безплатен оглед
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight">Михайлов груп 775</h2>
                </div>
              </div>
              <p className="mb-6 max-w-sm">Качество и коректност във всяка услуга. Доверете се на професионалистите за вашия дом.</p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Бързи връзки</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Начало</Link></li>
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">За нас</Link></li>
                <li><button onClick={scrollToContact} className="hover:text-orange-500 transition-colors">Контакти</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Услуги</h3>
              <ul className="space-y-3">
                <li><Link to="/services/roof-repair" className="hover:text-orange-500 transition-colors">Ремонт на покриви</Link></li>
                <li><Link to="/services/insulation" className="hover:text-orange-500 transition-colors">Топлоизолация</Link></li>
                <li><Link to="/services/interior-repairs" className="hover:text-orange-500 transition-colors">Вътрешни ремонти</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Контакти</h3>
              <ul className="space-y-4">
                <li>
                  <a href={PHONE_LINK} className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                    <Phone className="w-5 h-5 shrink-0" />
                    <span className="font-bold text-white">{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span>Пон - Нед: 08:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Михайлов груп 775. Всички права запазени.</p>
            <p>
              Сайта е изработен от <a href="https://www.estudio.bg" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">estudio.bg</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40">
        <div className="flex gap-3">
          <a 
            href={PHONE_LINK}
            className="flex-1 bg-orange-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Обади се
          </a>
          <button 
            onClick={scrollToContact}
            className="flex-1 bg-slate-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
          >
            Заяви оглед
          </button>
        </div>
      </div>
    </div>
  );
}
