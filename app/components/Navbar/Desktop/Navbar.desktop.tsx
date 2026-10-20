import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../ui/Link';
import { useNavbarConstants } from '../Shared/navbar.constants';
import { useNavbarLogic } from '../Shared/navbar.hooks';
import LanguageToggle from '../../LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarDesktop: React.FC = () => {
  const { t } = useTranslation();
  const { techniques, aboutLinks, lng } = useNavbarConstants();
  const { isActive, navLinkClass, pathname } = useNavbarLogic();
  
  const [isTechniquesOpen, setIsTechniquesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const techniquesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (techniquesRef.current && !techniquesRef.current.contains(event.target as Node)) {
        setIsTechniquesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTechniquesOpen(false);
        setIsAboutOpen(false);
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-[#0a0f14]/95 backdrop-blur-md transition-colors duration-300 hidden lg:block">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to={`/${lng}/`} className="flex flex-col items-center focus:ring-offset-4 group">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 overflow-hidden rounded-lg border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform">
                <img 
                  src="/logo.bmp" 
                  alt="Yonsei Chiropractic Logo" 
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <div className="flex flex-col items-center text-center w-full">
                <span className="block w-full text-lg font-black tracking-[0.25em] text-slate-900 dark:text-white leading-none uppercase whitespace-nowrap text-center">
                  {t('common.companyName').split(' ')[0]} <span className="text-primary">{t('common.companyName').split(' ').slice(1).join(' ')}</span>
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.05em] mt-1 leading-none flex items-center gap-2 justify-center w-full">
                  <span>{lng === 'ko' ? t('common.companyName', { lng: 'en' }) : t('common.companyName', { lng: 'ko' })}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <span>{t('common.companyNameSub')}</span>
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-2" aria-label="Main navigation">
            <Link to={`/${lng}/`} className={navLinkClass(`/${lng}/`)}>{t('nav.home')}</Link>
            
            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button 
                onClick={() => {
                  setIsAboutOpen(!isAboutOpen);
                  setIsTechniquesOpen(false);
                  setIsContactOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
                className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  isActive(`/${lng}/about`) || isActive(`/${lng}/message`) || isActive(`/${lng}/reviews`)
                    ? 'text-primary bg-primary/5' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.about')}
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">
                  expand_more
                </span>
              </button>
              
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl py-3 z-50"
                  >
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsAboutOpen(false)}
                        className="block px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            
{/* Services Dropdown */}
<div className="relative" ref={servicesRef}>
  <button 
    onClick={() => {
      setIsServicesOpen(!isServicesOpen);
      setIsAboutOpen(false);
      setIsContactOpen(false);
    }}
    aria-haspopup="true"
    aria-expanded={isServicesOpen}
    className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
      pathname.includes('/services') 
        ? 'text-primary bg-primary/5' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
    }`}
  >
    Services
    <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">
      expand_more
    </span>
  </button>
  
  <AnimatePresence>
    {isServicesOpen && (
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-0 mt-3 w-72 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl py-3 z-50"
      >
        {services.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            onClick={() => setIsServicesOpen(false)}
            className="block px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
          >
            {service.name}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>

            
            {/* Contact Dropdown */}
            <div className="relative" ref={contactRef}>
              <button 
                onClick={() => {
                  setIsContactOpen(!isContactOpen);
                  setIsAboutOpen(false);
                  setIsTechniquesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  isContactOpen || isActive(`/${lng}/contact`)
                    ? 'text-primary bg-primary/5' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.contact')}
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isContactOpen ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">
                  expand_more
                </span>
              </button>
              
              <AnimatePresence>
                {isContactOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-3 w-80 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl p-4 z-50"
                  >
                    <div className="flex flex-col gap-4">
                      <Link 
                        href="tel:2133815500" 
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[20px]">call</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{t('contact.labels.phone')}</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">(213) 381-5500</span>
                        </div>
                      </Link>

                      <Link 
                        href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                        external
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[20px]">location_on</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{t('contact.labels.address')}</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">3200 Wilshire Blvd #302, LA</span>
                        </div>
                      </Link>

                      <Link 
                        href="mailto:yonseichiropractic@gmail.com"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-[20px]">mail</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">{t('contact.labels.email')}</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">yonseichiropractic@gmail.com</span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA area */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              to={`/${lng}/contact`}
              className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </Link>
            <Link 
              to="mailto:yonseichiropractic@gmail.com" 
              className="flex items-center justify-center h-11 px-6 rounded-xl bg-primary hover:bg-orange-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
              <span>{t('nav.bookAppointment')}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDesktop;
