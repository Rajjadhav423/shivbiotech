'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Factory, CheckSquare, Package, Truck, Headphones } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: FlaskConical,
    number: '01',
    title: 'Research & Development',
    description: 'Intensive scientific research to identify natural compounds that enhance plant biology and crop productivity.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Factory,
    number: '02',
    title: 'Manufacturing',
    description: 'State-of-the-art manufacturing facility with precision processes ensuring consistent product quality.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: CheckSquare,
    number: '03',
    title: 'Quality Testing',
    description: 'Rigorous multi-stage quality control testing to verify efficacy, safety, and stability of every batch.',
    color: 'from-primary to-primary-dark'
  },
  {
    icon: Package,
    number: '04',
    title: 'Packaging',
    description: 'Eco-conscious packaging that protects product integrity while minimizing environmental impact.',
    color: 'from-accent to-lime-600'
  },
  {
    icon: Truck,
    number: '05',
    title: 'Distribution',
    description: 'Efficient distribution network reaching farmers and dealers across Maharashtra and beyond.',
    color: 'from-orange-500 to-amber-600'
  },
  {
    icon: Headphones,
    number: '06',
    title: 'After-Sales Support',
    description: 'Dedicated agronomist support team providing ongoing guidance for optimal product results.',
    color: 'from-purple-500 to-violet-600'
  }
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="From Lab to "
          highlight="Farm"
          subtitle="Every Shiv Biotech product follows a rigorous journey from scientific research to your field."
        />

        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ top: '56px' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg cursor-default`}
                  >
                    <step.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-dark-navy text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
