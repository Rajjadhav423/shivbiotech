'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { tr } = useLang();
  const { faq } = tr;

  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={faq.badge}
          title={faq.title}
          highlight={faq.highlight}
          subtitle={faq.subtitle}
        />

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === i ? 'border-primary/30 shadow-md shadow-primary/5' : 'border-gray-100 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-medium text-sm pr-4 ${openIndex === i ? 'text-primary' : 'text-dark-navy'}`}>
                  {item.q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
