'use client';

import { ShoppingCart } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  badge?: string;
};

type Blog = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Leather Backpack',
    price: 129.0,
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
    description: 'Stylish, durable backpack for everyday carry.',
    badge: 'New',
  },
  {
    id: '2',
    name: 'Vintage Sunglasses',
    price: 89.99,
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
    description: 'Retro design with modern UV protection.',
    badge: 'Sale',
  },
  {
    id: '3',
    name: 'Minimal Watch',
    price: 199.0,
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
    description: 'Elegant watch with premium leather strap.',
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 150.0,
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
    description: 'Lightweight shoes for serious runners.',
  },
];

const blogs: Blog[] = [
  {
    id: '1',
    title: '5 Essentials for Autumn Style',
    summary: 'Discover the must-have accessories for fall fashion this year.',
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
  },
  {
    id: '2',
    title: 'How to Choose the Right Watch',
    summary: 'A quick guide on selecting timepieces that match your lifestyle.',
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
  },
  {
    id: '3',
    title: 'Sustainable Fashion Tips',
    summary: 'Learn how to shop ethically and reduce waste in style.',
    image: 'https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg',
  },
];

export default function ProductListPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 text-[#6e0e06]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Blog Section - Left 20% */}
        <aside className="w-full lg:w-1/5 space-y-6">
          <h2 className="text-xl font-bold">Latest Blogs</h2>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </aside>

        {/* Product Section - Right 80% */}
        <section className="w-full lg:w-4/5">
          <h1 className="text-4xl font-bold mb-10">Explore Products</h1>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative rounded-xl bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">
          {product.badge}
        </span>
      )}
      <div className="aspect-w-4 aspect-h-3 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col justify-between space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h2>
          {product.description && (
            <p className="text-sm text-gray-500">{product.description}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-indigo-600 font-semibold text-lg">
            ${product.price.toFixed(2)}
          </span>
          <button className="flex items-center gap-1 text-sm text-indigo-500 hover:text-indigo-700 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-32 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold mb-1">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.summary}</p>
      </div>
    </div>
  );
}
