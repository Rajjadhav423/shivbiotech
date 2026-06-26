'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

export default function TestimonialsSection() {
  const { tr } = useLang();
  const testimonials = tr.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((activeIndex + 1) % testimonials.length);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 })
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={tr.testimonials.badge}
          title={tr.testimonials.title}
          highlight={tr.testimonials.highlight}
          subtitle={tr.testimonials.subtitle}
        />

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-linear-to-br from-primary-light to-white border border-primary/10 shadow-xl shadow-primary/5">
            <div className="relative min-h-64 p-8 md:p-12">
              <Quote size={48} className="text-primary/15 absolute top-6 left-8 hidden sm:block" />
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="relative z-10 sm:pt-2"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-dark-navy text-lg md:text-xl leading-relaxed font-medium mb-8 italic">
                    &ldquo;{testimonials[activeIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-dark-navy">{testimonials[activeIndex].name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonials[activeIndex].role} · {testimonials[activeIndex].location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-primary/30 hover:bg-primary/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
