import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import SEO from '../../../components/SEO';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 }
};

const staggerContainer = {
  initial: {},
  animate: {},
  whileInView: {
    transition: {
      staggerChildren: 0
    }
  }
};

const AboutMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.about')}
        description={t('about.hero.description')}
        image="/dr-park.png"
      />
      {/* Hero Section */}
      <section className="w-full px-6 py-8 max-w-[1280px] mx-auto overflow-hidden" aria-labelledby="about-hero-title">
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={false}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0 }}
            className="flex items-center gap-4"
          >
            <div 
              className="w-20 h-20 flex-shrink-0 bg-slate-200 rounded-full border-2 border-slate-100 dark:border-slate-800 shadow-xl bg-center bg-cover" 
              style={{ backgroundImage: "url('/dr-park.png')" }}
              role="img"
              aria-label="Dr. Hyeon Joo Park, D.C., M.S."
            ></div>
            <div className="flex flex-col">
              <h1 id="about-hero-title" className="text-2xl font-black leading-tight text-slate-900 dark:text-white uppercase tracking-tight">
                {t('about.hero.title')}
              </h1>
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mt-1">{t('home.meetDoctor.name')}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
              {t('about.hero.description')}
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Link to="mailto:yonseichiropractic@gmail.com" className="bg-primary hover:bg-orange-600 text-white text-base font-black h-14 px-6 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center w-full uppercase tracking-widest active:scale-[0.98]">
                {t('about.hero.book')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Doctor / Bio Section */}
      <section className="w-full bg-white dark:bg-[#0a0f14] py-12 border-y border-slate-100 dark:border-slate-800" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-2 mb-8"
          >
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">{t('about.bio.badge')}</span>
            <h2 id="bio-heading" className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{t('about.bio.title')}</h2>
            <motion.div 
              initial={false}
              animate={{ width: 40 }}
              transition={{ duration: 0 }}
              className="h-1 bg-primary mt-2 rounded-full"
            ></motion.div>
          </motion.div>
          
          <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none font-medium">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeInUp} className="mb-6">{t('about.bio.p1')}</motion.p>
              <motion.p variants={fadeInUp} className="mb-6">{t('about.bio.p2')}</motion.p>
              <motion.p variants={fadeInUp} className="mb-6">{t('about.bio.p3')}</motion.p>
            </motion.div>

            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[28px] my-10 border border-slate-100 dark:border-slate-800 shadow-sm" 
              aria-labelledby="specializations-heading"
            >
              <h3 id="specializations-heading" className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">{t('about.bio.specializations.title')}</h3>
              <motion.ul 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-4 list-none pl-0"
              >
                {[ 'hio', 'tmj', 'extremity', 'pediatric' ].map(key => (
                  <motion.li key={key} variants={fadeInUp} className="flex gap-3 items-center">
                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-base font-bold" aria-hidden="true">check</span>
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300">{t(`about.bio.specializations.${key}`)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.education.title')}</h3>
              <ul className="list-disc pl-5 mb-12 space-y-3 text-slate-600 dark:text-slate-400">
                <li>{t('about.bio.education.yonsei')}</li>
                <li>{t('about.bio.education.lifeDc')}</li>
                <li>{t('about.bio.education.lifeMs')}</li>
                <li>{t('about.bio.education.ccep')}</li>
              </ul>
            </motion.section>
          </div>

          {/* Awards Section */}
          <section className="mt-12" aria-labelledby="awards-heading">
            <motion.h3 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              id="awards-heading" 
              className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4"
            >
              {t('about.awards.title')}
            </motion.h3>
            <div className="grid grid-cols-1 gap-4">
              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex gap-4 p-5 bg-slate-900 text-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <span className="material-symbols-outlined text-yellow-500 text-3xl shrink-0" aria-hidden="true">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-base">{t('about.awards.presidential.title')}</h4>
                  <p className="text-xs opacity-80">{t('about.awards.presidential.subtitle')}</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0" aria-hidden="true">military_tech</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{t('about.awards.clinical.title')}</h4>
                  <p className="text-xs text-slate-500">{t('about.awards.clinical.subtitle')}</p>
                </div>
              </motion.div>
              {[ 'county', 'city', 'cityAppreciation', 'radio' ].map(key => (
                <motion.div key={key} variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex gap-3 p-3 items-center">
                  <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{t(`about.awards.${key}`)}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-12 px-6 overflow-hidden" aria-labelledby="about-cta-heading">
        <motion.div 
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <h2 id="about-cta-heading" className="text-2xl font-bold">{t('about.cta.title')}</h2>
          <p className="text-orange-100 text-base max-w-2xl">
            {t('about.cta.description')}
          </p>
          <Link to="mailto:yonseichiropractic@gmail.com" className="bg-white text-primary hover:bg-orange-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center w-full focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary">
            {t('about.cta.button')}
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMobile;
