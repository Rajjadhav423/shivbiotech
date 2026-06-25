'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, MessageCircle, Clock } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formState.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (formState.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = 'Enter a valid email address';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-primary'
    } focus:outline-none text-sm transition-all`;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(139,195,74,0.2)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-accent">Shiv Biotech</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Have questions about our products? Our expert team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 8007703991',
                href: 'tel:8007703991',
                color: 'bg-green-50 text-primary'
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'shivbiotech96@gmail.com',
                href: 'mailto:shivbiotech96@gmail.com',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: MapPin,
                title: 'Our Address',
                content: 'Satkund, Kannad, Sambhajinagar - 431103',
                href: 'https://maps.google.com',
                color: 'bg-red-50 text-red-500'
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: 'Mon - Sat: 9 AM to 6 PM',
                href: null,
                color: 'bg-amber-50 text-amber-600'
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon size={20} />
                  </div>
                  <div className="text-xs text-gray-400 font-medium mb-1">{item.title}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className="text-dark-navy font-medium text-sm hover:text-primary transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-dark-navy font-medium text-sm">{item.content}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-dark-navy mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">Fill in your details and we&apos;ll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-dark-navy text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormState({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                      className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Your name" className={inputClass('name')} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="10-digit number" className={inputClass('phone')} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="your@email.com (optional)" className={inputClass('email')} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select name="subject" value={formState.subject} onChange={handleChange} className={inputClass('subject')}>
                        <option value="">Select a topic</option>
                        <option value="product">Product Enquiry</option>
                        <option value="dealer">Become a Dealer</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark disabled:opacity-70 transition-all shadow-lg shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="bg-primary-light rounded-3xl overflow-hidden h-72 relative flex items-center justify-center border border-primary/10">
                  <div className="text-center">
                    <MapPin size={40} className="text-primary mx-auto mb-3" />
                    <p className="font-semibold text-dark-navy">Shiv Biotech</p>
                    <p className="text-gray-500 text-sm">Satkund, Taluka Kannad</p>
                    <p className="text-gray-500 text-sm">Chhatrapati Sambhajinagar, MH 431103</p>
                    <a
                      href="https://www.google.com/maps/search/Satkund+Kannad+Sambhajinagar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                    >
                      <MapPin size={14} />
                      Open in Maps
                    </a>
                  </div>
                </div>

                {/* Company Details */}
                <div className="bg-dark-navy rounded-3xl p-6 text-white">
                  <h3 className="font-bold text-white text-lg mb-4">Company Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-white/70 text-sm">
                        Satkund, Taluka Kannad, District Chhatrapati Sambhajinagar, Maharashtra - 431103
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-accent flex-shrink-0" />
                      <a href="tel:8007703991" className="text-white/70 hover:text-white text-sm transition-colors">
                        +91 8007703991
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-accent flex-shrink-0" />
                      <a href="mailto:shivbiotech96@gmail.com" className="text-white/70 hover:text-white text-sm transition-colors">
                        shivbiotech96@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe size={16} className="text-accent flex-shrink-0" />
                      <span className="text-white/70 text-sm">www.shivbiotech.in</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918007703991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-navy">Chat on WhatsApp</p>
                    <p className="text-sm text-gray-500">Get instant responses from our team</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
