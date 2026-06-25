'use client';

import { motion } from 'framer-motion';
import { Sprout, Thermometer, Zap, BarChart3, Droplets, Flower2, Apple, Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const expertiseAreas = [
  {
    icon: Sprout,
    title: 'Root Architecture',
    description: 'Develop deeper, wider root systems for superior nutrient and water uptake.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Thermometer,
    title: 'Abiotic Stress',
    description: 'Protect crops from heat, drought, cold, and other environmental stressors.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Growth Catalysts',
    description: 'Accelerate plant metabolism and cell division for faster, healthier growth.',
    gradient: 'from-yellow-500 to-amber-600'
  },
  {
    icon: BarChart3,
    title: 'Yield Enhancement',
    description: 'Proven formulations that consistently increase crop yield and productivity.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Droplets,
    title: 'Nutrient Uptake',
    description: 'Improve nutrient use efficiency and unlock soil-bound elements for plants.',
    gradient: 'from-cyan-500 to-teal-600'
  },
  {
    icon: Flower2,
    title: 'Flowering',
    description: 'Stimulate abundant, uniform flowering for maximum fruit and seed production.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: Apple,
    title: 'Fruit Setting',
    description: 'Reduce premature fruit drop and improve fruit set for higher marketable yield.',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    icon: Star,
    title: 'Crop Quality',
    description: 'Enhance color, size, taste, and shelf life for premium market prices.',
    gradient: 'from-purple-500 to-violet-600'
  }
];

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-dark-navy overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Expertise"
          title="What We "
          highlight="Specialize In"
          subtitle="Our research-driven expertise covers every critical aspect of crop biology and plant physiology."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {expertiseAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card-dark rounded-2xl p-6 cursor-default transition-all duration-300 hover:border-white/20"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <area.icon size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{area.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
