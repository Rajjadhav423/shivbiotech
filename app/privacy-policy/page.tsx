import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Shiv Biotech website.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-dark-navy mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: June 2024</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">1. Information We Collect</h2>
            <p>We collect information you provide when contacting us through our website form, including your name, phone number, and email address. We also collect basic usage data to improve our website performance.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">2. How We Use Your Information</h2>
            <p>The information we collect is used to respond to your enquiries, provide product information, and improve our services. We do not sell, trade, or share your personal information with third parties except as required by law.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-dark-navy mb-2">4. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at shivbiotech96@gmail.com or call +91 8007703991.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
