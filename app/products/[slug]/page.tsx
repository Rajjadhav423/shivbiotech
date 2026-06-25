import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Shiv Biotech`,
      description: product.description
    }
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
