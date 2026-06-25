'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Leaf } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CtaSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

          {/* Floating leaves */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${15 + i * 22}%`,
                top: `${10 + (i % 2) * 60}%`,
              }}
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              <Leaf size={20 + i * 8} className="text-accent" />
            </motion.div>
          ))}

          <div className="relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Get Started Today
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to Grow With Us?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Join thousands of farmers who have transformed their crops with Shiv Biotech&apos;s
                science-backed bio-solutions. Contact us today for expert guidance.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:8007703991"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-primary-light transition-all shadow-xl shadow-black/20 w-full sm:w-auto justify-center"
                >
                  <Phone size={18} />
                  Call Now: 8007703991
                </motion.a>
                <motion.a
                  href="https://wa.me/918007703991?text=Hello%20Shiv%20Biotech%2C%20I%20am%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-all shadow-xl shadow-[#25D366]/30 w-full sm:w-auto justify-center"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </motion.a>
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold transition-all w-full sm:w-auto justify-center"
                >
                  View Products
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
