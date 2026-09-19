import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const AboutDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.about')}
        description={t('about.hero.description')}
        image="/dr-park.png"
      />
      {/* Hero Section */}
      <section className="w-full px-10 py-20 max-w-[1280px] mx-auto overflow-hidden" aria-labelledby="about-hero-title">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex items-center justify-between gap-12"
        >
          <motion.div 
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex flex-col gap-6 w-1/2 pr-12"
          >
            <h1 id="about-hero-title" className="text-slate-900 dark:text-white text-6xl font-black leading-tight tracking-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              {t('about.hero.description')}
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="mailto:yonseichiropractic@gmail.com" className="bg-primary hover:bg-orange-600 text-white text-base font-bold h-11 px-6 rounded-lg transition-all shadow-md flex items-center justify-center min-w-[160px] focus:ring-2 focus:ring-primary/20 focus:ring-offset-2">
                {t('about.hero.book')}
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              initial: { opacity: 0, scale: 0.9, rotate: 5 },
              animate: { opacity: 1, scale: 1, rotate: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="w-1/2 flex justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat bg-slate-200 dark:bg-slate-800" 
                style={{ backgroundImage: "url('/dr-park.png')" }}
                role="img"
                aria-label="Dr. Hyeon Joo Park, D.C., M.S."
              ></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg leading-tight">{t('home.meetDoctor.name')}</p>
                <p className="text-sm opacity-90">D.C., M.S., C.C.E.P.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Meet the Doctor / Bio Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto px-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-2 mb-12"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('about.bio.badge')}</span>
            <h2 id="bio-heading" className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t('about.bio.title')}</h2>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none"
          >
            <p className="mb-6">{t('about.bio.p1')}</p>
            <p className="mb-6">{t('about.bio.p2')}</p>
            <p className="mb-6">{t('about.bio.p3')}</p>

            <motion.section 
              variants={fadeInUp}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl my-12 border border-slate-100 dark:border-slate-700" 
              aria-labelledby="specializations-heading"
            >
              <h3 id="specializations-heading" className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.specializations.title')}</h3>
              <ul className="grid grid-cols-2 gap-4 list-none pl-0">
                {[ 'hio', 'tmj', 'extremity', 'pediatric' ].map(key => (
                  <li key={key} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                    <span>{t(`about.bio.specializations.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={fadeInUp} aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.education.title')}</h3>
              <ul className="list-disc pl-6 mb-12 space-y-3">
                <li>{t('about.bio.education.yonsei')}</li>
                <li>{t('about.bio.education.lifeDc')}</li>
                <li>{t('about.bio.education.lifeMs')}</li>
                <li>{t('about.bio.education.ccep')}</li>
              </ul>
            </motion.section>
          </motion.div>

          {/* Awards Section */}
          <section className="mt-16" aria-labelledby="awards-heading">
            <motion.h3 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              id="awards-heading" 
              className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4"
            >
              {t('about.awards.title')}
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div variants={fadeInUp} className="flex gap-4 p-6 bg-slate-900 text-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <span className="material-symbols-outlined text-yellow-500 text-4xl shrink-0" aria-hidden="true">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-lg">{t('about.awards.presidential.title')}</h4>
                  <p className="text-sm opacity-80">{t('about.awards.presidential.subtitle')}</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-4xl shrink-0" aria-hidden="true">military_tech</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t('about.awards.clinical.title')}</h4>
                  <p className="text-sm text-slate-500">{t('about.awards.clinical.subtitle')}</p>
                </div>
              </motion.div>
              {[ 'county', 'city', 'cityAppreciation', 'radio' ].map(key => (
                <motion.div key={key} variants={fadeInUp} className="flex gap-3 p-3 items-center">
                  <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t(`about.awards.${key}`)}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-16 px-10 overflow-hidden" aria-labelledby="about-cta-heading">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <h2 id="about-cta-heading" className="text-4xl font-bold">{t('about.cta.title')}</h2>
          <p className="text-orange-100 text-lg max-w-2xl">
            {t('about.cta.description')}
          </p>
          <Link to="mailto:yonseichiropractic@gmail.com" className="bg-white text-primary hover:bg-orange-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center w-fit focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary">
            {t('about.cta.button')}
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default AboutDesktop;
