'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Factory, CheckSquare, Package, Truck, Headphones } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

const icons = [FlaskConical, Factory, CheckSquare, Package, Truck, Headphones];
const colors = [
  'from-blue-500 to-indigo-600',
  'from-green-500 to-emerald-600',
  'from-primary to-primary-dark',
  'from-accent to-lime-600',
  'from-orange-500 to-amber-600',
  'from-purple-500 to-violet-600',
];

export default function ProcessSection() {
  const { tr } = useLang();
  const { process } = tr;

  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={process.badge}
          title={process.title}
          highlight={process.highlight}
          subtitle={process.subtitle}
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent" style={{ top: '56px' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative mb-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${colors[i]} flex items-center justify-center shadow-lg cursor-default`}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-dark-navy text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
