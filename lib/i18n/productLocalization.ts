import type { Product } from '@/types';
import type t from './translations';

type Translation = typeof t['English'];

function lookup(map: Record<string, string>, value?: string) {
  if (!value) return value;
  return map[value] ?? value;
}

export function localizeCategory(tr: Translation, category: string) {
  return lookup(tr.products.categories, category) ?? category;
}

export function localizeBadge(tr: Translation, badge?: string) {
  return lookup(tr.products.badges, badge);
}

export function localizeFeaturedProduct(tr: Translation, product: Product, index: number) {
  const featured = tr.products.featured[index];

  return {
    category: localizeCategory(tr, product.category),
    badge: localizeBadge(tr, product.badge),
    description: featured?.description ?? product.description,
    packaging: featured?.packaging ? [featured.packaging] : product.packaging,
  };
}
