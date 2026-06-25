'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Leaf, TrendingUp, Shield, Users, HeadphonesIcon, Zap, BadgeCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

const icons = [FlaskConical, Leaf, TrendingUp, Shield, Users, HeadphonesIcon, Zap, BadgeCheck];
const colors = [
  'bg-blue-50 text-blue-600',
  'bg-green-50 text-primary',
  'bg-emerald-50 text-emerald-600',
  'bg-purple-50 text-purple-600',
  'bg-amber-50 text-amber-600',
  'bg-teal-50 text-teal-600',
  'bg-yellow-50 text-yellow-600',
  'bg-rose-50 text-rose-600',
];
const glows = [
  'group-hover:shadow-blue-200',
  'group-hover:shadow-green-200',
  'group-hover:shadow-emerald-200',
  'group-hover:shadow-purple-200',
  'group-hover:shadow-amber-200',
  'group-hover:shadow-teal-200',
  'group-hover:shadow-yellow-200',
  'group-hover:shadow-rose-200',
];

export default function WhyChooseSection() {
  const { tr } = useLang();
  const { why } = tr;

  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={why.badge}
          title={why.title}
          highlight={why.highlight}
          subtitle={why.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {why.reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl ${glows[i]} transition-all duration-300 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-2xl ${colors[i]} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-dark-navy text-base mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
