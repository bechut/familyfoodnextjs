"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#6e0e06] sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image
            src="https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg"
            alt="ShopEase Logo"
            width={50}
            height={50}
            className="h-12 w-12 rounded-full object-cover"
          />
        </Link>
      </div>

      {/* Right: Menu */}
      <nav className="hidden md:flex space-x-6 font-medium relative">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        {/* Shop menu with submenu */}
        <div className="relative group">
          <button className="hover:text-blue-600 transition">Shop</button>

          {/* Submenu — shown when hovering either button or submenu */}
          <div
            className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md z-10
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 ease-in-out"
          >
            <Link
              href="/shop/clothing"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Clothing
            </Link>
            <Link
              href="/shop/accessories"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Accessories
            </Link>
            <Link
              href="/shop/shoes"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Shoes
            </Link>
          </div>
        </div>

        <Link href="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
