'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'What are biostimulants and how are they different from fertilizers?',
    answer: 'Biostimulants are natural substances or microorganisms that improve plant growth, nutrient uptake, and stress tolerance. Unlike fertilizers that directly supply nutrients, biostimulants enhance the plant\'s own biological processes. They work with nature to improve efficiency rather than replacing natural processes.'
  },
  {
    question: 'Are Shiv Biotech products safe for organic farming?',
    answer: 'Yes, all Shiv Biotech products are formulated with natural and organic ingredients. They are eco-friendly, leave no harmful chemical residues, and are compatible with organic farming practices. Our products work with natural soil biology rather than disrupting it.'
  },
  {
    question: 'How quickly will I see results after applying your products?',
    answer: 'Most farmers notice visible improvements in plant health, leaf color, and vigor within 7-14 days of first application. Yield improvements become apparent at harvest time. Regular use across seasons delivers the best cumulative results for soil health and crop productivity.'
  },
  {
    question: 'Can I mix Shiv Biotech products with other pesticides or fertilizers?',
    answer: 'Most of our products can be mixed with standard pesticides and fertilizers. Products like Active 360 are specifically designed as adjuvants to improve the effectiveness of other inputs. However, we recommend conducting a simple jar compatibility test before tank mixing, and our technical team is always available for guidance.'
  },
  {
    question: 'What is the recommended application method and dosage?',
    answer: 'Application methods vary by product — most are used as foliar sprays at 1-3 ml per liter of water, while some are applied via drip irrigation or as soil treatment. Specific dosage instructions are printed on each product label and available on our product pages. Our agronomist team can provide crop-specific recommendations.'
  },
  {
    question: 'Do you provide technical support for farmers?',
    answer: 'Absolutely. Shiv Biotech provides dedicated technical support through our agronomist team. We offer crop-specific advice, application guidance, and problem-solving support. Contact us at 8007703991 or visit our nearest dealer for hands-on assistance.'
  },
  {
    question: 'Where can I purchase Shiv Biotech products?',
    answer: 'Shiv Biotech products are available through authorized dealers and agricultural input stores across Maharashtra. You can also contact us directly at shivbiotech96@gmail.com or call 8007703991 to find the nearest dealer in your area or to place a bulk order.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Everything you need to know about biostimulants and our products."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
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
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
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
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
