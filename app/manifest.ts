import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shiv Biotech',
    short_name: 'ShivBiotech',
    description: 'Empowering Agriculture through Bio-Innovation',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1F8A3B',
    orientation: 'portrait',
    icons: [
      { src: '/logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/logo.png', sizes: '512x512', type: 'image/png' }
    ],
    categories: ['agriculture', 'business', 'biotech']
  };
}
