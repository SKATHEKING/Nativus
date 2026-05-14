export type Artist = {
  slug: string;
  name: string;
  focus: string;
  bio: string;
  image: string;
  genres: string[];
  links: {
    instagram?: string;
    soundcloud?: string;
    spotify?: string;
  };
};

export type Release = {
  slug: string;
  title: string;
  kind: 'Album' | 'Single' | 'EP';
  status: 'Featured' | 'New' | 'Archive';
  artwork: string;
  artistSlug: string;
  artistName: string;
  year: string;
  description: string;
  tracks: string[];
};
