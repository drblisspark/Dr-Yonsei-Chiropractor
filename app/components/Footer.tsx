"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';
import ThemeToggle from './ui/ThemeToggle';
import { motion } from 'framer-motion';
import { useViewport } from '../hooks/useViewport';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isMobile } = useViewport();

  const fadeInUp = {
    initial: { opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: isMobile ? 0 : 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: isMobile ? 0 : 0.05
      }
    },
    viewport: { once: true }
  };

  const mobileButtonClass = "flex items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-bold text-[11px] uppercase tracking-widest text-center transition-all active:scale-95 shadow-sm";

  return (
    <footer className="bg-white dark:bg-[#0a0f14] border-t border-slate-100 dark:border-slate-800 pt-12 pb-10 w-full transition-colors duration-300 overflow-hidden" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">

        {/* Mobile Version: Better Navigation & Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="lg:hidden flex flex-col items-center space-y-12 mb-12 text-center"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">local_hospital</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                  {t('common.companyName').split(' ')[0]} <span className="text-primary">{t('common.companyName').split(' ')[1]}</span>
                </h2>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1">
                  {i18n.language === 'ko' ? t('common.companyName') : '연세 카이로프랙틱'}
                </span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links Mobile */}
          <motion.nav variants={fadeInUp} className="w-full" aria-label="Quick links mobile">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">{t('footer.quickLinks')}</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/" className={mobileButtonClass}>{t('nav.home')}</Link>
              <Link to="/about" className={mobileButtonClass}>{t('nav.about')}</Link>
              <Link to="/services" className={mobileButtonClass}>{t('nav.services')}</Link>
              <Link to="/message" className={mobileButtonClass}>{t('nav.philosophy')}</Link>
              <Link to="/reviews" className={mobileButtonClass}>{t('nav.reviews')}</Link>
              <Link to="/insights" className={mobileButtonClass}>{t('nav.insights')}</Link>
              <Link to="/contact" className={mobileButtonClass}>{t('nav.contact')}</Link>
            </div>
          </motion.nav>

          {/* Techniques Mobile */}
          <motion.nav variants={fadeInUp} className="w-full" aria-label="Chiropractic techniques mobile">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">{t('footer.techniques')}</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/techniques/about-chiropractic" className={mobileButtonClass}>{t('nav.aboutChiropractic')}</Link>
              <Link to="/techniques/innate-intelligence" className={mobileButtonClass}>{t('nav.innateIntelligence')}</Link>
              <Link to="/techniques/subluxation" className={mobileButtonClass}>{t('nav.subluxation')}</Link>
              <Link to="/techniques/upper-cervical" className={mobileButtonClass}>{t('nav.upperCervical')}</Link>
              <Link to="/techniques/car-accident" className={mobileButtonClass}>{t('nav.carAccident')}</Link>
              <Link to="/techniques/tmj" className={mobileButtonClass}>{t('nav.tmj')}</Link>
            </div>
          </motion.nav>

          {/* Contact Mobile */}
          <motion.div variants={fadeInUp} className="w-full space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">{t('footer.contactInfo')}</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                external
                className={`${mobileButtonClass} !justify-start px-5 py-5`}
              >
                <span className="material-symbols-outlined text-primary text-[20px] mr-4 shrink-0" aria-hidden="true">location_on</span>
                <span className="text-left leading-snug">{t('footer.address')}</span>
              </Link>
              <Link
                href="tel:2133815500"
                className={`${mobileButtonClass} !justify-start px-5 py-5`}
              >
                <span className="material-symbols-outlined text-primary text-[20px] mr-4 shrink-0" aria-hidden="true">call</span>
                (213) 381-5500
              </Link>
              <Link
                href="mailto:yonseichiropractic@gmail.com"
                className={`${mobileButtonClass} !justify-start px-5 py-5 lowercase`}
              >
                <span className="material-symbols-outlined text-primary text-[20px] mr-4 shrink-0" aria-hidden="true">mail</span>
                {t('footer.email')}
              </Link>
            </div>
            <Link
              to="mailto:yonseichiropractic@gmail.com"
              className="inline-flex items-center justify-center w-full h-14 rounded-2xl bg-primary hover:bg-orange-600 text-white text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-[0.98] mt-4"
            >
              <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
              {t('nav.bookAppointment')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Version: Refined Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="hidden lg:grid lg:grid-cols-12 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">local_hospital</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                  {t('common.companyName').split(' ')[0]} <span className="text-primary">{t('common.companyName').split(' ')[1]}</span>
                </h2>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                  {i18n.language === 'ko' ? t('common.companyName') : '연세 카이로프랙틱'}
                </span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 pt-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">{t('footer.established')}</div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav variants={fadeInUp} className="lg:col-span-2" aria-label="Quick links desktop">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/message" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.philosophy')}</Link></li>
              <li><Link to="/reviews" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.reviews')}</Link></li>
              <li><Link to="/insights" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.insights')}</Link></li>
              <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </motion.nav>

          {/* Techniques */}
          <motion.nav variants={fadeInUp} className="lg:col-span-3" aria-label="Chiropractic techniques desktop">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.techniques')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/techniques/about-chiropractic" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.aboutChiropractic')}</Link></li>
              <li><Link to="/techniques/innate-intelligence" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.innateIntelligence')}</Link></li>
              <li><Link to="/techniques/subluxation" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.subluxation')}</Link></li>
              <li><Link to="/techniques/upper-cervical" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.upperCervical')}</Link></li>
              <li><Link to="/techniques/car-accident" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.carAccident')}</Link></li>
              <li><Link to="/techniques/tmj" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.tmj')}</Link></li>
            </ul>
          </motion.nav>

          {/* Contact Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-5">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                external
                className="flex gap-3 group text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label={t('footer.address')}
              >
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" aria-hidden="true">location_on</span>
                <p className="text-sm leading-snug font-medium">
                  {t('footer.address')}
                </p>
              </Link>
              <div className="flex flex-col gap-3">
                <Link
                  href="tel:2133815500"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  aria-label="Call us at (213) 381-5500"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">call</span>
                  (213) 381-5500
                </Link>
                <Link
                  href="mailto:yonseichiropractic@gmail.com"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  aria-label="Email us at yonseichiropractic@gmail.com"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">mail</span>
                  yonseichiropractic@gmail.com
                </Link>
              </div>
<Link
  to="tel:(213) 381-5500"
  className="inline-flex items-center justify-center w-full h-11 px-5 rounded-xl bg-primary hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2 active:translate-y-0"
>
  <span className="mr-2 material-symbols-outlined text-[18px]" aria-hidden="true">
    call
  </span>
  Call Now
</Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wider uppercase"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-center md:text-left">© 2026 {t('common.companyName')}. {t('footer.rights')}</p>
            <p className="text-[10px] text-slate-400/60 dark:text-slate-500/60 lowercase tracking-widest">
              web services by <Link href="https://studio.filmclusive.com" external className="hover:text-primary transition-colors font-bold uppercase">Filmclusive studio</Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Legal">
              <Link to="/accessibility" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.accessibility')}</Link>
              <Link to="/disclaimer" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.disclaimer')}</Link>
              <Link to="/do-not-sell" className="text-primary font-bold hover:underline transition-colors">{t('footer.doNotSell')}</Link>
              <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.privacyPolicy')}</Link>
              <Link to="/cookie-policy" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.cookiePolicy')}</Link>
              <Link to="/terms-of-service" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.termsOfService')}</Link>
            </nav>
            <div className="hidden sm:block w-px h-4 bg-slate-100 dark:bg-slate-800"></div>
            <ThemeToggle className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
