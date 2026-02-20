import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fayis Kooni Portfolio',
    short_name: 'Fayis K',
    description: 'Full Stack Developer specializing in SaaS and AI applications',
    start_url: '/',
    display: 'standalone',
    background_color: '#030303',
    theme_color: '#030303',
    icons: [
      {
        src: '/icon',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
