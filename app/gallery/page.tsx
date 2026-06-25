'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Leaf, FlaskConical, Sprout, Users, Factory } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaSection from '@/components/sections/CtaSection';

const galleryCategories = ['All', 'Agriculture', 'Research', 'Farming', 'Products', 'Team'];

const galleryItems = [
  { id: 1, category: 'Agriculture', icon: '🌾', title: 'Golden Wheat Fields', desc: 'Healthy wheat fields with improved yield', bg: 'from-amber-100 to-yellow-200', emoji: '🌾' },
  { id: 2, category: 'Research', icon: '🔬', title: 'Laboratory Research', desc: 'Advanced bio-research facility', bg: 'from-blue-100 to-indigo-200', emoji: '🔬' },
  { id: 3, category: 'Farming', icon: '🌿', title: 'Lush Green Crops', desc: 'Vibrant healthy crops after biostimulant application', bg: 'from-green-100 to-emerald-200', emoji: '🌿' },
  { id: 4, category: 'Products', icon: '🧪', title: 'Product Range', desc: 'Shiv Biotech complete product lineup', bg: 'from-teal-100 to-green-200', emoji: '🧪' },
  { id: 5, category: 'Agriculture', icon: '🌱', title: 'Seedling Stage', desc: 'Healthy seedlings with strong root development', bg: 'from-lime-100 to-green-200', emoji: '🌱' },
  { id: 6, category: 'Farming', icon: '🌽', title: 'Corn Harvest', desc: 'Exceptional corn yield per acre', bg: 'from-yellow-100 to-amber-200', emoji: '🌽' },
  { id: 7, category: 'Research', icon: '⚗️', title: 'Quality Testing', desc: 'Rigorous quality control processes', bg: 'from-purple-100 to-violet-200', emoji: '⚗️' },
  { id: 8, category: 'Team', icon: '👨‍🌾', title: 'Farmer Training', desc: 'Expert-led farmer training sessions', bg: 'from-orange-100 to-amber-200', emoji: '👨‍🌾' },
  { id: 9, category: 'Agriculture', icon: '🍅', title: 'Tomato Garden', desc: 'Premium tomatoes grown with Shiv Biotech products', bg: 'from-red-100 to-rose-200', emoji: '🍅' },
  { id: 10, category: 'Farming', icon: '🫑', title: 'Capsicum Crop', desc: 'Vibrant and healthy capsicum plants', bg: 'from-green-100 to-teal-200', emoji: '🫑' },
  { id: 11, category: 'Products', icon: '💊', title: 'Myco-VAM Treatment', desc: 'Mycorrhizal treatment application', bg: 'from-emerald-100 to-green-200', emoji: '💊' },
  { id: 12, category: 'Team', icon: '👥', title: 'Expert Agronomists', desc: 'Our dedicated team of agricultural experts', bg: 'from-slate-100 to-gray-200', emoji: '👥' },
  { id: 13, category: 'Agriculture', icon: '🌻', title: 'Sunflower Field', desc: 'Sunflowers thriving with bio-fertilizers', bg: 'from-yellow-100 to-orange-200', emoji: '🌻' },
  { id: 14, category: 'Research', icon: '🧫', title: 'Microbial Analysis', desc: 'Beneficial microorganism research', bg: 'from-cyan-100 to-blue-200', emoji: '🧫' },
  { id: 15, category: 'Farming', icon: '🥬', title: 'Leafy Vegetables', desc: 'Healthy leafy vegetables with deep green color', bg: 'from-green-50 to-emerald-100', emoji: '🥬' },
  { id: 16, category: 'Products', icon: '📦', title: 'Manufacturing Unit', desc: 'State-of-the-art manufacturing facility', bg: 'from-gray-100 to-slate-200', emoji: '📦' }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = galleryItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,195,74,0.2)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Our Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shiv Biotech <span className="text-accent">in Action</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              See the real-world impact of our bio-solutions across farms, labs, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} border border-white/50 hover:shadow-xl transition-all duration-300`}
                    style={{ height: `${180 + (item.id % 3) * 60}px` }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        {item.emoji}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-sm">{item.title}</p>
                            <p className="text-white/70 text-xs">{item.desc}</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ZoomIn size={16} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 bg-white/80 text-gray-700 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative max-w-2xl w-full rounded-3xl overflow-hidden bg-gradient-to-br ${lightboxItem.bg}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-80 flex items-center justify-center">
                <span className="text-9xl">{lightboxItem.emoji}</span>
              </div>
              <div className="p-6 bg-white">
                <span className="inline-block px-3 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-2">
                  {lightboxItem.category}
                </span>
                <h3 className="font-bold text-dark-navy text-xl mb-1">{lightboxItem.title}</h3>
                <p className="text-gray-500 text-sm">{lightboxItem.desc}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaSection />
    </div>
  );
}
