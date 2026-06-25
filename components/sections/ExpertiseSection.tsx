'use client';

import { motion } from 'framer-motion';
import { Sprout, Thermometer, Zap, BarChart3, Droplets, Flower2, Apple, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

const icons = [Sprout, Thermometer, Zap, BarChart3, Droplets, Flower2, Apple, Star];
const gradients = [
  'from-green-500 to-emerald-600',
  'from-orange-500 to-red-600',
  'from-yellow-500 to-amber-600',
  'from-blue-500 to-indigo-600',
  'from-cyan-500 to-teal-600',
  'from-pink-500 to-rose-600',
  'from-red-500 to-pink-600',
  'from-purple-500 to-violet-600',
];

export default function ExpertiseSection() {
  const { tr } = useLang();
  const { expertise } = tr;

  return (
    <section className="section-padding bg-dark-navy overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={expertise.badge}
          title={expertise.title}
          highlight={expertise.highlight}
          subtitle={expertise.subtitle}
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {expertise.areas.map((area, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card-dark rounded-2xl p-6 cursor-default transition-all duration-300 hover:border-white/20"
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradients[i]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{area.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
