import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import Modal from '../../../components/ui/Modal';
import { reviews } from '../Shared/home.constants';
import { motion, AnimatePresence } from 'framer-motion';

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

const HomeDesktop: React.FC = () => {
  const { t } = useTranslation(['translation', 'reviews']);
  const [selectedReview, setSelectedReview] = useState<any | null>(null);

  const truncateText = (text: string, maxLength: number = 180) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  const beforeAfterXrays = [
    {
      src: '/o-6.jpg',
      alt: 'Before-treatment cervical spine X-ray showing neck alignment prior to care'
    },
    {
      src: '/o-7.jpg',
      alt: 'After-treatment cervical spine X-ray showing improved neck alignment'
    },
    {
      src: '/o-8.jpg',
      alt: 'Before-treatment side-view cervical X-ray used for upper cervical evaluation'
    },
    {
      src: '/o-9.jpg',
      alt: 'After-treatment side-view cervical X-ray showing structural change after care'
    },
    {
      src: '/o-10.jpg',
      alt: 'Before-treatment front and side spinal X-ray images documenting initial posture'
    },
    {
      src: '/o-11.jpg',
      alt: 'After-treatment front and side spinal X-ray images documenting post-care posture'
    },
    {
      src: '/o-14.jpg',
      alt: 'Follow-up cervical spine X-ray used to track continued progress after treatment'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center bg-white dark:bg-[#010409] overflow-hidden -mt-[64px] sm:-mt-[80px]" 
        aria-label="Introduction"
      >
        {/* Full-width Background Gradient and Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-white dark:from-slate-950/50 dark:via-[#010409] dark:to-[#010409] -z-10" aria-hidden="true" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10" 
          aria-hidden="true"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] -z-10" 
          aria-hidden="true"
        />

        {/* Desktop Hero Content */}
        <div className="max-w-[1440px] mx-auto px-10 pt-[140px] pb-24 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-16 xl:gap-24 items-center">
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
              className="col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col gap-8"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
                }
                className="flex items-center gap-3"
              >
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.3em] border border-primary/20">
                  {t('home.hero.badge')}
                </span>
                <span className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
                <span className="text-slate-400 dark:text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                  {t('home.hero.location')}
                </span>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 dark:text-white uppercase mb-8">
                  {t('home.hero.titlePart1')}<br />
                  <span className="text-primary">{t('home.hero.titlePart2')}</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
                  {t('home.hero.descriptionDesktop')}
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="flex flex-wrap gap-4"
              >
                <Link to="mailto:yonseichiropractic@gmail.com" className="h-16 px-10 rounded-2xl bg-primary hover:bg-orange-600 text-white font-black transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest text-sm">
                  {t('home.hero.bookAppointment')}
                </Link>
                <Link href="tel:2133815500" className="h-16 px-10 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-all hover:-translate-y-1 active:translate-y-0 shadow-sm">
                  {t('home.hero.callNow')}
                </Link>
              </motion.div>

              <motion.div 
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
                }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-3" aria-hidden="true">
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0f14] bg-slate-100 dark:bg-slate-800 shadow-sm overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2w7qoKRIiZhLjhCgAHeX3vg67xyRGXuLFl1OoNLnR0Yec1rY2AeAdvsrPOhvjSOROpCN8hMFqSjvXWQ-_hik9od6ezTmbeJ1vd8ULFEAoQEioNMfKJTS5jB3APbbMDQpSMeQp1v_mfxHtHYoVDnhKY9AE6c1dUWIcUMuP_TU21IaznqkUNEy4KW4H2i2jN5xNsvYntDA94zBjSdbAcZFK8JlUdw12I-i3oNeejOJrXzuXdxGJ7iuEWYQM-68csN1YHkbLEKb66NA7" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0f14] bg-slate-100 dark:bg-slate-800 shadow-sm overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTiBxzYw56CdOrXypz_qix82KnvcJCL9VvI-v8wLOPhKd4f08zzfDtBtgnT6zaDamQeeOHmYN_V6fUtZmB1owh-saFa06itbczl0-ZhkQ_ctYDPsOZU8HSC0Ogn2ceGvN3iCUqZI--jhsnbDeo5g7LTpRv0ILwHmy8iK8ePqNkE-LP61J8SYZk0tTUlvxQC2o8jwgYgQ52bcsFIs-_ZgRtmkw1_y2c4K_5JSsRNFh0tLv9uONeVSTcdTmr9TLU5Pj9MWkvcFIITfeJ" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-[#0a0f14] bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-sm">+50</div>
                </div>
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('home.hero.trustedBy')}</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[420px] xl:max-w-[480px]">
                <div className="absolute inset-0 bg-primary/20 rounded-[48px] transform rotate-6 scale-95 blur-3xl -z-10 animate-pulse" aria-hidden="true" />
                <div 
                  className="relative rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] border-[12px] border-white dark:border-slate-800 group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg')" }}
                    role="img"
                    aria-label="Chiropractor's hands performing an upper cervical adjustment on a patient"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
                </div>
                
                {/* Floating Testimonial Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-8 -left-6 lg:-left-12 bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-[240px] lg:max-w-[280px]"
                >
                  <div className="flex gap-1 text-primary mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    {t('home.hero.testimonial')}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t('home.hero.verifiedPatient')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900" aria-label="Our credentials">
        <div className="max-w-[1280px] mx-auto px-10 py-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-16"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-6 group">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px] font-light" aria-hidden="true">verified_user</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-sm uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.palmerTitle')}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.palmerDesc')}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-6 group">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px] font-light" aria-hidden="true">workspace_premium</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-sm uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.awardTitle')}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.awardDesc')}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center gap-6 group">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[32px] font-light" aria-hidden="true">self_improvement</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-sm uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.healingTitle')}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.healingDesc')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Meet Dr. Park */}
      <section className="py-20 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="meet-doctor-heading">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-5"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-primary rounded-[40px] rotate-3 scale-95 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
                <div 
                  className="relative rounded-[40px] overflow-hidden aspect-square shadow-2xl bg-cover bg-center border-4 border-white dark:border-slate-800" 
                  style={{ backgroundImage: "url('/dr-park.png')" }}
                  role="img"
                  aria-label="Dr. Hyeon Joo Park, D.C., M.S."
                ></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-7 space-y-6"
            >
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-3">The Expert Behind Your Care</span>
                <h2 id="meet-doctor-heading" className="text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('home.meetDoctor.name')}
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1.5 bg-primary mt-4 rounded-full"
                ></motion.div>
              </div>
              <div className="space-y-5">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic font-medium">
                  {t('home.meetDoctor.quote')}
                </p>
                <div className="flex gap-5 items-center">
                  <Link to="/about" className="h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center">
                    {t('home.meetDoctor.readBio')}
                  </Link>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Yonsei Chiropractic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/50" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Our Expertise</span>
              <h2 id="services-heading" className="text-5xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('home.services.title')}
              </h2>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed">
              {t('home.services.description')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-10"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp}>
              <Link to="/techniques/upper-cervical" className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 !text-inherit">
                <article className="flex flex-col h-full w-full">
                  <div 
                    className="relative h-56 w-full bg-slate-200 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0" 
                    style={{ backgroundImage: "url('/o-14.jpg')" }}
                    role="img"
                    aria-label="Side-view cervical spine X-ray highlighting the upper cervical alignment"
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="relative p-8 flex flex-col flex-1">
                    <div className="flex absolute top-0 right-10 -translate-y-1/2 w-14 h-14 rounded-2xl bg-primary text-white items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform shrink-0">
                      <span className="material-symbols-outlined text-[28px]">biotech</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{t('home.services.upperCervicalTitle')}</h3>
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-8 flex-1 font-medium leading-relaxed">{t('home.services.upperCervicalDesc')}</p>
                    <div className="text-primary font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2">
                      {t('home.services.learnMore')} <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">east</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp}>
              <Link to="/techniques/tmj" className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 !text-inherit">
                <article className="flex flex-col h-full w-full">
                  <div 
                    className="relative h-56 w-full bg-slate-200 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0" 
                    style={{ backgroundImage: "url('/o-5.jpg')" }}
                    role="img"
                    aria-label="Before and after photos of heel lifts showing improved postural symmetry"
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative p-8 flex flex-col flex-1">
                    <div className="flex absolute top-0 right-10 -translate-y-1/2 w-14 h-14 rounded-2xl bg-primary text-white items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform shrink-0">
                      <span className="material-symbols-outlined text-[28px]">child_care</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{t('home.services.tmjTitle')}</h3>
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-8 flex-1 font-medium leading-relaxed">{t('home.services.tmjDesc')}</p>
                    <div className="text-primary font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2">
                      {t('home.services.learnMore')} <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">east</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp}>
              <Link to="/techniques/car-accident" className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 !text-inherit">
                <article className="flex flex-col h-full w-full">
                  <div 
                    className="relative h-56 w-full bg-slate-200 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0" 
                    style={{ backgroundImage: "url('/o-10.jpg')" }}
                    role="img"
                    aria-label="Front and back spine X-rays with alignment markers used for car accident recovery"
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative p-8 flex flex-col flex-1">
                    <div className="flex absolute top-0 right-10 -translate-y-1/2 w-14 h-14 rounded-2xl bg-primary text-white items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform shrink-0">
                      <span className="material-symbols-outlined text-[28px]">car_crash</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{t('home.services.injuryTitle')}</h3>
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-8 flex-1 font-medium leading-relaxed">{t('home.services.injuryDesc')}</p>
                    <div className="text-primary font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2">
                      {t('home.services.learnMore')} <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">east</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Before and After X-rays Section */}
      <section className="py-20 bg-white dark:bg-[#0a0f14]" aria-labelledby="before-after-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Clinical Results</span>
            <h2 id="before-after-heading" className="text-5xl font-black text-slate-900 dark:text-white leading-none uppercase">
              Before and After
            </h2>
            <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 font-medium">
              Side-scroll through X-rays captured before and after treatment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto pb-4"
          >
            <div className="flex gap-6 w-max pr-2 snap-x snap-mandatory">
              {beforeAfterXrays.map((xray) => (
                <article
                  key={xray.src}
                  className="w-[360px] shrink-0 bg-slate-50 dark:bg-slate-900/50 rounded-[28px] border border-slate-100 dark:border-slate-800 overflow-hidden snap-start"
                >
                  <img
                    src={xray.src}
                    alt={xray.alt}
                    className="w-full h-[320px] object-cover bg-slate-200 dark:bg-slate-800"
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="reviews-heading">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Patient Experiences</span>
              <h2 id="reviews-heading" className="text-5xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('hero.title', { ns: 'reviews' })}
              </h2>
            </div>
            <Link to="/reviews" className="h-12 px-8 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center">
              {t('readAll', { ns: 'reviews' }) || 'Read All Reviews'}
            </Link>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8"
          >
            {reviews.slice(0, 3).map((rev) => {
              const fullText = t(`review${rev.id}.text`, { ns: 'reviews' });
              const isTruncated = fullText.length > 180;
              
              return (
                <motion.div key={rev.id} variants={fadeInUp}>
                  <button 
                    onClick={() => setSelectedReview({ ...rev, text: fullText })}
                    className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 relative hover:shadow-2xl transition-all group text-left h-full flex flex-col w-full"
                  >
                    <div className="flex-1">
                      <div className="flex gap-1 text-primary mb-4" aria-label="5 star rating">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                        ))}
                      </div>
                      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic font-medium leading-relaxed tracking-tight">
                        {truncateText(fullText)}
                      </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                            {rev.name}
                          </p>
                          <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">{t('common.location')}</p>
                        </div>
                        {isTruncated && (
                          <div className="shrink-0">
                            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-primary font-black text-[10px] uppercase tracking-[0.15em] shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                              {t('items.readMore', { ns: 'reviews' }) || 'Read More'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Review Modal */}
      <Modal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview ? (
          <div className="flex items-center justify-between w-full gap-4 pr-4">
            <div className="min-w-0">
              <h3 className="font-black text-slate-900 dark:text-white text-base uppercase tracking-widest leading-tight truncate">
                {selectedReview.name}
              </h3>
              <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                {t('common.location')}
              </p>
            </div>
            <div className="flex gap-0.5 text-primary shrink-0" aria-label="5 star rating">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-[18px] fill-current" aria-hidden="true">star</span>
              ))}
            </div>
          </div>
        ) : ""}
      >
        {selectedReview && (
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
              "{selectedReview.text}"
            </p>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <Link to="/reviews" className="text-primary font-black text-xs uppercase tracking-widest hover:underline">
                {t('readAll', { ns: 'reviews' }) || 'Read All Reviews'}
              </Link>
              <button 
                onClick={() => setSelectedReview(null)}
                className="h-12 px-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                {t('common.close') === 'common.close' ? 'Close' : t('common.close')}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Location & Contact Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-900" aria-labelledby="location-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-12 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-5 space-y-8"
            >
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Visit Us</span>
                <h2 id="location-heading" className="text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('contact.title')}
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="h-1.5 bg-primary mt-6 rounded-full"
                ></motion.div>
              </div>
              
              <div className="space-y-8">
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="flex items-start gap-6 group"
                  aria-label={t('footer.address')}
                >
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">{t('contact.labels.address')}</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">{t('footer.address')}</p>
                  </div>
                </Link>

                <div className="flex flex-col gap-4">
                  <Link 
                    href="tel:2133815500"
                    className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl transition-all group w-full"
                    aria-label="Call us at (213) 381-5500"
                  >
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]" aria-hidden="true">call</span>
                    </div>
                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">{t('contact.labels.call')}</h4>
                      <p className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tight">(213) 381-5500</p>
                    </div>
                  </Link>
                  <Link 
                    href="mailto:yonseichiropractic@gmail.com"
                    className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl transition-all group w-full"
                    aria-label="Email us at yonseichiropractic@gmail.com"
                  >
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[24px]" aria-hidden="true">mail</span>
                    </div>
                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">{t('contact.labels.email')}</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate">yonseichiropractic@gmail.com</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">schedule</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-3">{t('contact.labels.hours')}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { label: t('contact.hours.weekdays'), time: '9:00 AM - 6:00 PM' },
                        { label: t('contact.hours.thursday'), time: '2:00 PM - 6:00 PM' },
                        { label: t('contact.hours.saturday'), time: '9:00 AM - 1:00 PM' },
                        { label: t('contact.hours.sunday'), time: t('contact.hours.closed'), highlight: true },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800 last:border-0">
                          <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                          <span className={`text-sm font-bold ${item.highlight ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="https://www.google.com/maps/dir/?api=1&destination=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="h-14 w-fit px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">directions</span>
                  {t('contact.labels.directions')}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="col-span-7 h-auto w-full bg-slate-200 dark:bg-slate-800 rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white dark:border-slate-800"
            >
              <iframe 
                title="Map showing the location of Yonsei Chiropractic in Los Angeles"
                className="w-full h-full border-0 grayscale dark:invert dark:hue-rotate-180"
                src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeDesktop;
