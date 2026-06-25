export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  dosage: {
    spray?: string;
    drip?: string;
    soil?: string;
  };
  packaging: string[];
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
