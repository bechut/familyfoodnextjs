'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-[#6e0e06]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">About ShopEase</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We believe shopping should be simple, joyful, and personal. Since day one,
            we’ve been passionate about bringing the best products to your doorstep.
          </p>
        </section>

        {/* Image and Description */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/15/04/29/woman-8509279_640.jpg"
            alt="Our Team"
            className="w-full rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2022, ShopEase started as a small online store with a big dream:
              to redefine the shopping experience in Vietnam and beyond. Today, we serve
              thousands of happy customers every month — and we’re just getting started.
            </p>
            <p className="text-gray-700">
              Whether you’re looking for the latest trends or timeless pieces, our team is
              here to curate what matters most — with love, care, and speed.
            </p>
          </div>
        </section>

        {/* Mission + Values */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">🛍️ Quality First</h3>
              <p className="text-gray-700">We source only the best products that we would use ourselves.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🚚 Fast Delivery</h3>
              <p className="text-gray-700">We prioritize speed without sacrificing service.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">❤️ People Matter</h3>
              <p className="text-gray-700">We care deeply about our customers, team, and community.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Want to get in touch?</h2>
          <p className="text-gray-700 mb-4">We’d love to hear from you. Head over to our contact page and say hello!</p>
          <a
            href="/contact"
            className="inline-block bg-[#6e0e06] text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
