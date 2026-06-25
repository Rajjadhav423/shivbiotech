import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shiv Biotech — our story, mission, vision, and the team behind Maharashtra\'s trusted bio-innovation company.'
};

export default function AboutPage() {
  return <AboutClient />;
}
