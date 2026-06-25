import type { Metadata } from 'next';
import { CheckCircle, Target, Eye, Heart, Leaf, FlaskConical, Users } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shiv Biotech — our story, mission, vision, and the team behind Maharashtra\'s trusted bio-innovation company.'
};

const values = [
  { icon: FlaskConical, title: 'Scientific Integrity', description: 'Every claim we make is backed by research and validated in real field conditions.' },
  { icon: Leaf, title: 'Environmental Responsibility', description: 'We develop solutions that restore and protect the ecological balance of our farmlands.' },
  { icon: Users, title: 'Farmer First', description: 'Our success is measured by the prosperity and happiness of the farmers we serve.' },
  { icon: Heart, title: 'Passion for Agriculture', description: 'We are driven by a deep love for the land and the communities that depend on it.' }
];

const milestones = [
  { year: '2013', title: 'Company Founded', description: 'Shiv Biotech was established with a vision to transform agriculture through bio-innovation.' },
  { year: '2015', title: 'First Product Launch', description: 'Launched our flagship Humex+ biostimulant to wide acclaim from farmers across Maharashtra.' },
  { year: '2017', title: 'R&D Expansion', description: 'Expanded research capabilities and developed multiple specialized crop solutions.' },
  { year: '2019', title: '5000+ Farmers', description: 'Reached milestone of serving over 5,000 farmers across multiple districts.' },
  { year: '2021', title: 'Full Product Range', description: 'Completed comprehensive 18-product lineup covering all major crop needs.' },
  { year: '2024', title: 'Pan-Maharashtra Presence', description: 'Established distribution network across all major agricultural districts of Maharashtra.' }
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(139,195,74,0.2)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              About Shiv Biotech
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Story of <span className="text-accent">Bio-Innovation</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From a single vision to Maharashtra&apos;s trusted name in agricultural biotechnology —
              discover the Shiv Biotech journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection direction="left">
                <h2 className="text-3xl font-bold text-dark-navy mb-6">
                  Cultivating the Future of <span className="gradient-text">Sustainable Agriculture</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At Shiv Biotech, we are dedicated to transforming modern agriculture by providing
                    high-performance, eco-friendly Biostimulants. We believe the future of farming lies
                    in working with nature rather than against it.
                  </p>
                  <p>
                    Based in Satkund, Taluka Kannad, Chhatrapati Sambhajinagar, Maharashtra, we have
                    grown from a passionate startup into a trusted name in the agricultural biotechnology
                    sector. Our products are used by thousands of farmers across the region who have
                    seen remarkable improvements in their crop health, yield, and overall income.
                  </p>
                  <p>
                    Our team of scientists, agronomists, and agriculture experts work tirelessly to
                    develop solutions that address the real challenges farmers face — from soil degradation
                    to climate stress, pest pressure, and declining yields.
                  </p>
                </div>
              </AnimatedSection>

              {/* Mission & Vision */}
              <AnimatedSection delay={0.2} className="mt-10 space-y-5">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary-light border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-navy mb-1">Our Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To empower farmers with innovative biostimulant technology that enhances food security,
                      improves livelihoods and restores environmental balance. We are committed to making
                      scientific solutions accessible to every farmer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-dark-navy border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Eye size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Our Vision</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      To become a global leader in biological crop solutions, setting new international
                      standards for sustainable, science-backed agricultural biotechnology. We envision a
                      future where every farm thrives through bio-innovation.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Director Message */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white/20 leading-none mb-4">"</div>
                  <p className="text-white/90 leading-relaxed text-base mb-6">
                    Agriculture is the backbone of our economy, and farmers are the backbone of agriculture.
                    When we established Shiv Biotech, our goal was simple but ambitious: provide scientific
                    solutions that work with nature, not against it.
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    The future belongs to Bio-Innovation. Our products improve soil vitality, plant health,
                    yield, nutrition, and quality — creating a complete ecosystem of success for every farmer
                    who trusts us with their harvest.
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm mb-8">
                    At the heart of every harvest is a story of resilience. Our mission is to make that story
                    a successful one, season after season.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                      R
                    </div>
                    <div>
                      <div className="font-bold text-white">Rohidas V Rathod</div>
                      <div className="text-white/60 text-sm">Director, Shiv Biotech</div>
                      <div className="text-accent text-xs mt-0.5">Warm Regards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  'Soil Vitality', 'Plant Health',
                  'Yield Improvement', 'Crop Quality'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle size={15} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives "
            highlight="Everything We Do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-dark-navy mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="Milestones That "
            highlight="Define Us"
            subtitle="Key moments in the Shiv Biotech story of growth and impact."
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-dark" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-14 md:pl-0`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all">
                      <span className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-bold rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="font-semibold text-dark-navy mb-1">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white shadow-md" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
