'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Filter, Package, Leaf, Search } from 'lucide-react';
import { products, productCategories } from '@/data/products';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaSection from '@/components/sections/CtaSection';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allCategories = ['All', ...productCategories];

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(139,195,74,0.2)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              18 Premium Products
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-accent">Bio-Solution</span> Range
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              From soil health to yield enhancement — scientific solutions for every crop need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm bg-gray-50 focus:bg-white transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1">
              <Filter size={14} className="text-gray-400 flex-shrink-0" />
              {allCategories.map((cat) => (
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

            <div className="text-sm text-gray-400 flex-shrink-0">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-semibold text-dark-navy mb-2">No products found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filter.</p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link href={`/products/${product.slug}`}>
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-44 bg-gradient-to-br from-primary-light to-green-100">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">🌿</span>
                          </div>
                          {product.badge && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <span className="inline-block px-2 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-2 self-start">
                            {product.category}
                          </span>
                          <h3 className="font-bold text-dark-navy mb-1.5 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1.5">
                              <Package size={11} className="text-gray-400" />
                              <span className="text-xs text-gray-400">{product.packaging[0]}</span>
                            </div>
                            <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                              View Details
                              <ArrowRight size={12} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
