'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Quote, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';

export default function AboutSection() {
  const { tr } = useLang();
  const { about } = tr;

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <AnimatedSection direction="left">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-56 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="w-full h-full bg-linear-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span className="text-6xl">🌱</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-36 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                      <span className="text-5xl">🔬</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-36 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-teal-100 to-green-200 flex items-center justify-center">
                      <span className="text-5xl">🌾</span>
                    </div>
                  </div>
                  <div className="relative h-56 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-lime-100 to-green-200 flex items-center justify-center">
                      <span className="text-6xl">🌿</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-5 shadow-xl shadow-primary/30"
            >
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm font-medium">{about.badgeLabel}</div>
            </motion.div>
          </div>

          {/* Right - Content */}
          <div>
            <SectionHeader
              badge={about.badge}
              title={about.title}
              highlight={about.highlight}
              centered={false}
            />

            <AnimatedSection delay={0.1}>
              <p className="text-gray-600 leading-relaxed mb-6">{about.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{about.p2}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {about.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Mission & Vision */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-light rounded-2xl p-5 border border-primary/10">
                  <div className="text-primary font-bold text-sm uppercase tracking-wide mb-2">{about.mission}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{about.missionText}</p>
                </div>
                <div className="bg-dark-navy rounded-2xl p-5">
                  <div className="text-accent font-bold text-sm uppercase tracking-wide mb-2">{about.vision}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{about.visionText}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                {about.learnMore}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Director Message Card — CodeHelp-style portrait + quote */}
        <AnimatedSection className="mt-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #071e0f 0%, #0d3d20 45%, #0a3018 100%)' }}>
            <div className="flex flex-col md:flex-row min-h-[360px] md:min-h-[420px]">

              {/* Left — photo with spotlight glow */}
              <div className="relative md:w-5/12 flex items-end justify-center pt-10 overflow-hidden">
                {/* Radial spotlight behind the person */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_90%,rgba(74,222,128,0.18)_0%,transparent_70%)]" />
                {/* Bottom fade so photo blends into card */}
                <div className="absolute bottom-0 inset-x-0 h-28 bg-[linear-gradient(to_top,#0d3d20,transparent)] z-10" />
                <div className="relative z-0 w-44 sm:w-52 md:w-64 self-end mx-auto">
                  <Image
                    src="/images/owner.jpeg"
                    alt="Rohidas V Rathod"
                    width={320}
                    height={400}
                    className="w-full object-cover object-top rounded-t-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Right — quote content */}
              <div className="relative md:w-7/12 flex flex-col justify-center px-8 py-10 md:px-14 md:py-14">
                {/* Subtle decorative orb */}
                <div className="absolute top-0 right-0 w-56 h-56 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <Quote size={52} className="text-white/15 mb-5 shrink-0" />
                <blockquote className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-8 italic">
                  {about.directorQuote}
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <div className="w-1 h-12 rounded-full bg-accent shrink-0" />
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">Rohidas V Rathod</div>
                    <div className="text-accent text-sm font-medium mt-0.5">{about.directorTitle}</div>
                    <div className="text-white/40 text-xs mt-1">Shiv Biotech</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
