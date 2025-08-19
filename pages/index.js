import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans text-gray-800">
   
          {/* Hero Section */}
   <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
    <h1 className="text-5xl font-serif mb-4">
      Discover the View. Stay, Live, Belong.
    </h1>
    <p className="text-lg max-w-2xl mb-6">
      Boutique stays &amp; handpicked properties in Northern Portugal.
    </p>

    <div className="flex gap-4">
      <Link
        href="/stays"
        className="px-6 py-3 bg-white text-gray-800 rounded-2xl shadow hover:bg-gray-200 transition"
      >
        Stay with Us
      </Link>
      <Link
        href="/properties"
        className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition"
      >
        Buy with Us
      </Link>
    </div>
  </div>
</section>

      {/* Stays Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8">Stay with View Minho</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Your home away from home. Our boutique stays in Minho are designed for
          peace, comfort, and authenticity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
              alt="Stone house"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1590490359683-658d3d59f07b"
              alt="Modern villa"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Apartment"
            />
          </div>
     </div>
<Link
  href="/stays"
  className="mt-8 inline-block px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition"
>
  Explore Our Stays
</Link>
</section>
      {/* Properties Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-serif mb-8">Buy with View Properties</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Looking for a place to call your own? Our boutique real estate service
          offers handpicked homes with a personal touch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
              alt="Charming stone house"
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold">Charming Stone House in Arcos</h3>
            <p className="text-green-700 font-bold">€245,000</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Modern apartment"
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold">Modern Riverside Apartment</h3>
            <p className="text-green-700 font-bold">€310,000</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7"
              alt="Country villa"
              className="rounded-xl mb-4"
            />
            <h3 className="font-semibold">Countryside Boutique Villa</h3>
            <p className="text-green-700 font-bold">€420,000</p>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition">
          View All Properties
        </button>
      </section>

      {/* Experiences Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8">Experiences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🍷</span>
            <p>Wine Tours</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🐴</span>
            <p>Horseback Riding</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🚙</span>
            <p>Quad & Buggy</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🏰</span>
            <p>Arcos Tour</p>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition">
          See All Experiences
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100 max-w-6xl mx-auto">
        <div className="md:flex items-center gap-10">
         <img
  src="https://images.unsplash.com/photo-1600585154154-258d9ef0a1a8"
  alt="Traditional Quinta in Minho with pool"
/>
            alt="About us"
            className="rounded-2xl shadow-lg w-full md:w-1/2"
          />
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-serif mb-4">About Us</h2>
            <p className="text-lg mb-6">
              View Minho began with a passion for sharing Northern Portugal with
              travelers. With View Properties, we extend this vision — offering
              not just a stay, but a chance to belong. Our approach is boutique:
              intimate, personalized, and always focused on you.
            </p>
            <button className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative py-20 px-6 bg-cover bg-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-4">Stay. Live. Experience.</h2>
          <p className="text-lg mb-6">
            Book your holiday, find your dream home, or discover the magic of
            Minho with us.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-gray-800 rounded-2xl shadow hover:bg-gray-200 transition">
              Book Your Stay
            </button>
            <button className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition">
              Find Your Home
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center">
        <p className="mb-2">
          Contact: info@viewproperties.pt | +351 910 000 000 | WhatsApp
          Available
        </p>
        <p className="mb-4">Follow us on Instagram & Facebook</p>
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 rounded-2xl mr-2"
        />
        <button className="px-6 py-2 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition">
          Subscribe
        </button>
      </footer>
    </div>
  );
}
