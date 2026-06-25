'use client';

import { motion } from 'framer-motion';
import { FlaskConical, Leaf, TrendingUp, Shield, Users, HeadphonesIcon, Zap, BadgeCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

const reasons = [
  {
    icon: FlaskConical,
    title: 'Scientific Excellence',
    description: 'Every product is backed by rigorous scientific research and field trials across multiple crop types.',
    color: 'bg-blue-50 text-blue-600',
    glow: 'group-hover:shadow-blue-200'
  },
  {
    icon: Leaf,
    title: 'Organic Formulations',
    description: '100% natural and eco-friendly formulations that are safe for soil, crops, and the environment.',
    color: 'bg-green-50 text-primary',
    glow: 'group-hover:shadow-green-200'
  },
  {
    icon: TrendingUp,
    title: 'Higher ROI',
    description: 'Proven to increase yield and quality, delivering exceptional return on investment for farmers.',
    color: 'bg-emerald-50 text-emerald-600',
    glow: 'group-hover:shadow-emerald-200'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Each batch undergoes strict quality testing to ensure consistent performance and safety standards.',
    color: 'bg-purple-50 text-purple-600',
    glow: 'group-hover:shadow-purple-200'
  },
  {
    icon: Users,
    title: 'Trusted by Farmers',
    description: 'Thousands of farmers across Maharashtra trust Shiv Biotech products season after season.',
    color: 'bg-amber-50 text-amber-600',
    glow: 'group-hover:shadow-amber-200'
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Our agronomy team provides personalized technical guidance and crop management advice.',
    color: 'bg-teal-50 text-teal-600',
    glow: 'group-hover:shadow-teal-200'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'Visible improvement in crop health, growth, and yield within weeks of first application.',
    color: 'bg-yellow-50 text-yellow-600',
    glow: 'group-hover:shadow-yellow-200'
  },
  {
    icon: BadgeCheck,
    title: 'Research Driven',
    description: 'Continuous R&D investment to develop next-generation biological solutions for modern farming.',
    color: 'bg-rose-50 text-rose-600',
    glow: 'group-hover:shadow-rose-200'
  }
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-grey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The Science Behind "
          highlight="Every Harvest"
          subtitle="We combine decades of agricultural expertise with cutting-edge biotechnology to deliver solutions that genuinely work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl ${reason.glow} transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-2xl ${reason.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                <reason.icon size={22} />
              </div>
              <h3 className="font-semibold text-dark-navy text-base mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
