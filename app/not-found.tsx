import Link from 'next/link';
import { ArrowLeft, Home, Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grey px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🌱</div>
        <div className="text-8xl font-bold gradient-text mb-2">404</div>
        <h1 className="text-2xl font-bold text-dark-navy mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">
          Looks like this page wandered off into the fields. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary-light transition-colors"
          >
            <Package size={18} />
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
