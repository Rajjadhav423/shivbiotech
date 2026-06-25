'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  light = false
}: SectionHeaderProps) {
  const textColor = light ? 'text-white' : 'text-dark-navy';
  const subtitleColor = light ? 'text-white/70' : 'text-gray-500';

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-16`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
            light
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-primary-light text-primary border border-primary/20'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-primary'}`} />
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} leading-tight`}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className={light ? 'text-accent' : 'gradient-text'}>{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-lg ${subtitleColor} max-w-2xl ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
