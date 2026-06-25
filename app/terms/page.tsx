import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Shiv Biotech website.'
};

export default function TermsPage() {
  return (
    <div className="pt-24 section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-dark-navy mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2024</p>
        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using the Shiv Biotech website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">2. Product Information</h2>
            <p>All product descriptions, dosage information, and technical data provided on this website are for informational purposes only. Always consult with an agricultural expert before application.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Shiv Biotech and is protected by applicable intellectual property laws.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">4. Limitation of Liability</h2>
            <p>Shiv Biotech shall not be liable for any damages arising from the use or inability to use this website or its content.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">5. Contact</h2>
            <p>For questions regarding these terms, contact us at shivbiotech96@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
