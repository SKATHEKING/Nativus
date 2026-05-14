import type { Artist } from '@/lib/types';

export const artists: Artist[] = [
  {
    slug: 'aurelle',
    name: 'Aurelle',
    focus: 'Producer / Vocalist',
    bio: 'Ambient textures, pulsing drums, and cinematic songwriting focused on emotional transitions.',
    image: '/images/artists/aurelle.svg',
    genres: ['Ambient', 'Downtempo', 'Electronic'],
    links: {
      instagram: '#',
      soundcloud: '#',
      spotify: '#',
    },
  },
  {
    slug: 'kairo-moss',
    name: 'Kairo Moss',
    focus: 'DJ / Curator',
    bio: 'Club-forward selections, remixes, and high-energy sets built around movement and rhythm.',
    image: '/images/artists/kairo-moss.svg',
    genres: ['House', 'Techno', 'Club'],
    links: {
      instagram: '#',
      soundcloud: '#',
    },
  },
  {
    slug: 'sola-vert',
    name: 'Sola Vert',
    focus: 'Visual Artist',
    bio: 'Creates cover art, merch graphics, and visual storytelling systems for release eras.',
    image: '/images/artists/sola-vert.svg',
    genres: ['Visual Art', 'Branding', 'Print Design'],
    links: {
      instagram: '#',
    },
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}
