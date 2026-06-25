'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Droplets, Leaf, MessageCircle, Package, Phone } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CtaSection from '@/components/sections/CtaSection';
import { useLang } from '@/lib/i18n/LanguageContext';
import { localizeBadge, localizeCategory } from '@/lib/i18n/productLocalization';
import type { Product } from '@/types';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { tr } = useLang();
  const productText = tr.products;
  const detailText = productText.detail;
  const category = localizeCategory(tr, product.category);
  const badge = localizeBadge(tr, product.badge);

  return (
    <div className="pt-24">
      <div className="bg-grey border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">{tr.nav.home}</Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-primary transition-colors">{tr.nav.products}</Link>
            <ChevronRight size={14} />
            <span className="text-dark-navy font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative h-96 bg-gradient-to-br from-primary-light via-green-50 to-emerald-100 rounded-3xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl opacity-50">🌿</span>
                  </div>
                  {badge && (
                    <div className="absolute top-5 left-5 px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
                      {badge}
                    </div>
                  )}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                    <Leaf size={18} className="text-primary" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary/10" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/10" />
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {product.packaging.map((pack) => (
                    <div key={pack} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl border border-gray-200 shadow-sm text-sm text-gray-600">
                      <Package size={13} className="text-primary" />
                      {pack}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full mb-3">
                    {category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-dark-navy mb-2">{product.name}</h1>
                  <p className="text-primary font-medium">{product.tagline}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>

                <div>
                  <h3 className="font-semibold text-dark-navy mb-3 flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    {detailText.keyBenefits}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 p-3 bg-primary-light rounded-xl">
                        <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dark-navy rounded-2xl p-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Droplets size={18} className="text-accent" />
                    {detailText.recommendedDosage}
                  </h3>
                  <div className="space-y-2">
                    {product.dosage.spray && (
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-md flex-shrink-0">{detailText.spray}</span>
                        <span className="text-white/70 text-sm">{product.dosage.spray}</span>
                      </div>
                    )}
                    {product.dosage.drip && (
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-md flex-shrink-0">{detailText.drip}</span>
                        <span className="text-white/70 text-sm">{product.dosage.drip}</span>
                      </div>
                    )}
                    {product.dosage.soil && (
                      <div className="flex items-start gap-3">
                        <span className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-md flex-shrink-0">{detailText.soil}</span>
                        <span className="text-white/70 text-sm">{product.dosage.soil}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/918007703991?text=Hello%20Shiv%20Biotech%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-all shadow-lg"
                  >
                    <MessageCircle size={18} />
                    {detailText.whatsappEnquiry}
                  </a>
                  <a
                    href="tel:8007703991"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                  >
                    <Phone size={18} />
                    {detailText.callUs}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section-padding bg-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark-navy mb-8">
              {detailText.moreIn} <span className="gradient-text">{category}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/products/${related.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary/20">
                    <div className="h-36 bg-gradient-to-br from-primary-light to-green-100 flex items-center justify-center">
                      <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform duration-300">🌿</span>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{localizeCategory(tr, related.category)}</span>
                      <h3 className="font-bold text-dark-navy mb-1 group-hover:text-primary transition-colors">{related.name}</h3>
                      <p className="text-gray-500 text-xs line-clamp-2">{related.description}</p>
                      <div className="flex items-center gap-1 text-primary text-xs font-medium mt-3 group-hover:gap-2 transition-all">
                        {detailText.viewProduct} <ArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            {detailText.backToProducts}
          </Link>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}
