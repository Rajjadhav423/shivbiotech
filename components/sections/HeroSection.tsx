'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Leaf, FlaskConical, Award, Users } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import { useLang } from '@/lib/i18n/LanguageContext';

const statIcons = [Leaf, Users, FlaskConical, Award];
const statValues = [16, 5000, 10, 100];
const statSuffixes = ['+', '+', '+', '%'];
const statColors = [
  'from-green-400 to-green-600',
  'from-emerald-400 to-emerald-600',
  'from-teal-400 to-teal-600',
  'from-lime-400 to-lime-600',
];

export default function HeroSection() {
  const { tr } = useLang();
  const statLabels = [tr.hero.stats.products, tr.hero.stats.farmers, tr.hero.stats.research, tr.hero.stats.natural];
  const titlePrefix = tr.hero.title1.trim();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#0a2e1a] via-[#0d3d20] to-[#1a5c35]" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: `url('/images/hero-bg-mobile.png')` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
          style={{ backgroundImage: `url('/images/hero-bg.png')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      {/* Animated Leaves */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{ left: `${10 + i * 15}%`, top: `${5 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], rotate: [0, 10, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5 + i * 0.8, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
          >
            <Leaf size={30 + i * 10} className="text-accent fill-accent" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {tr.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-6xl text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.12] mb-7 [text-wrap:balance]"
        >
          {titlePrefix && <>{titlePrefix} </>}
          <span className="relative">
            <span className="text-accent">{tr.hero.title2}</span>{' '}
            <span className="text-white">{tr.hero.title3}</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-accent via-primary to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium mb-5 [text-wrap:balance]"
        >
          {tr.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed [text-wrap:balance]"
        >
          {tr.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-primary/40"
          >
            {tr.hero.btnProducts}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base transition-all duration-300"
          >
            {tr.hero.btnContact}
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {statValues.map((val, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-card rounded-2xl p-5 text-center cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${statColors[i]} flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <Counter end={val} suffix={statSuffixes[i]} duration={2.5} />
                </div>
                <div className="text-xs text-white/60 mt-1">{statLabels[i]}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">{tr.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
