'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Package, Leaf } from 'lucide-react';
import { featuredProducts } from '@/data/products';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLang } from '@/lib/i18n/LanguageContext';
import { localizeFeaturedProduct } from '@/lib/i18n/productLocalization';

export default function ProductsPreview() {
  const { tr } = useLang();
  const { products } = tr;

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={products.badge}
          title={products.title}
          highlight={products.highlight}
          subtitle={products.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product, i) => {
            const localized = localizeFeaturedProduct(tr, product, i);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                    {/* Product Image */}
                    <div className="relative h-52 bg-linear-to-br from-primary-light to-green-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-7xl opacity-60 group-hover:scale-110 transition-transform duration-500">🌿</div>
                      </div>
                      {localized.badge && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {localized.badge}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                        <Leaf size={14} className="text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="inline-block px-2 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-2">
                            {localized.category}
                          </span>
                          <h3 className="text-lg font-bold text-dark-navy group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary-light group-hover:bg-primary transition-all flex items-center justify-center shrink-0 mt-1">
                          <ArrowRight size={14} className="text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                        {localized.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Package size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {products.available}: {localized.packaging.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to All Products */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-lg shadow-primary/30 group"
            >
              {products.viewAll}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
