import type { Release } from '@/lib/types';

export const releases: Release[] = [
  {
    slug: 'midnight-frequencies',
    title: 'Midnight Frequencies',
    kind: 'Album',
    status: 'Featured',
    artwork: '/images/releases/midnight-frequencies.svg',
    artistSlug: 'aurelle',
    artistName: 'Aurelle',
    year: '2026',
    description:
      'A cinematic placeholder release and the current centerpiece of the Nativus visual direction.',
    tracks: ['Arrival Scene', 'Nocturne Thread', 'Golden Static', 'After Rain'],
  },
  {
    slug: 'signal-bloom',
    title: 'Signal Bloom',
    kind: 'Single',
    status: 'New',
    artwork: '/images/releases/signal-bloom.svg',
    artistSlug: 'kairo-moss',
    artistName: 'Kairo Moss',
    year: '2026',
    description: 'Club-driven single built for transitions and high-momentum late sets.',
    tracks: ['Signal Bloom'],
  },
  {
    slug: 'afterglow-study',
    title: 'Afterglow Study',
    kind: 'EP',
    status: 'Archive',
    artwork: '/images/releases/afterglow-study.svg',
    artistSlug: 'aurelle',
    artistName: 'Aurelle',
    year: '2025',
    description: 'Sketchbook-style release with soft textures and rhythmic detail studies.',
    tracks: ['Contour', 'Halo', 'Static Bloom'],
  },
];

export function getReleaseBySlug(slug: string): Release | undefined {
  return releases.find((release) => release.slug === slug);
}

export function getReleasesByArtistSlug(artistSlug: string): Release[] {
  return releases.filter((release) => release.artistSlug === artistSlug);
}
