"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sampleImages = [
  "https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg",
];

export default function Home() {
  return (
    <main className="text-gray-900">
      {/* Section 1: Background IMAGE */}
      <section className="bg-shop-pattern min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 text-center md:text-left text-white">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={sampleImages[0]}
            alt="Shop Hero"
            width={400}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
          <p className="text-lg mb-6">
            Curated deals and quality products, just for you.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200 font-semibold">
            Order Now
          </button>
        </motion.div>
      </section>

      {/* Section 2: Solid Dark Red */}
      <section className="bg-[#6e0e06] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Visit Our Store</h2>
        <p className="mb-6">123 Market Street, Hanoi, Vietnam</p>
        <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
          {sampleImages.slice(1).map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Store ${i + 1}`}
              width={250}
              height={180}
              className="rounded-lg object-cover shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Section 3: Background IMAGE again */}
      <section className="bg-shop-pattern px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">What We Sell</h2>
        <p className="mb-8">Discover our most popular items</p>
        <div className="flex gap-4 overflow-x-auto pb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 flex flex-col items-center text-black"
            >
              <Image
                src={sampleImages[i % sampleImages.length]}
                alt={`Product ${i + 1}`}
                width={180}
                height={130}
                className="rounded mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold">Product {i + 1}</h3>
              <p className="text-gray-600">$19.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Solid Dark Red */}
      <section className="bg-[#6e0e06] px-6 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">What Customers Say</h2>
        <p className="mb-10">Loved by shoppers across the country</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-xl shadow text-left"
            >
              <p className="mb-3">
                "Amazing service! The quality was better than expected. Will
                shop again."
              </p>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Customer {i}</p>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Background IMAGE again */}
      <section className="bg-shop-pattern px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-6">Follow us for the latest deals and updates</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200 font-semibold">
          Follow on Social
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#6e0e06] text-white px-6 py-10 text-center">
        <p className="text-lg font-semibold">ShopEase © 2025</p>
        <p className="text-sm mt-2">Designed with love. All rights reserved.</p>
      </footer>
    </main>
  );
}
