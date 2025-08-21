import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
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
    {/* Property 1 */}
    <h2>Buy with View Properties</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Vade Property */}
  <Link
    href="https://www.idealista.pt/imovel/34437743/"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
  >
    <Image
      src="/stays/CFVade.jpeg"
      alt="Vade property"
      width={800}
      height={600}
      className="w-full h-auto object-cover"
      priority
    />
    <div className="p-3">
      <h3 className="font-semibold">Vade</h3>
      <p className="text-sm opacity-80">View on Idealista</p>
    </div>
  </Link>
</div>
    {/* Property 2 */}
    <a
      href="https://www.idealista.pt/imovel/34437810/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
    >
      <img
        src="https://img3.idealista.pt/blur/WEB_DETAIL-c-90/images/listing/93/34/37810/34437810/312863494.jpg"
        alt="Property in Barros, Vila Verde"
        className="rounded-xl mb-4"
      />
      <h3 className="font-semibold">Terreno • Barros</h3>
      <p className="text-green-700 font-bold">€55,000</p>
    </a>

    {/* Property 3 (placeholder for now, we can add your 3rd) */}
    <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
      <span className="text-gray-500">More properties coming soon…</span>
    </div>
  </div>

  <Link
    href="/properties"
    className="mt-8 inline-block px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition"
  >
    View All Properties
  </Link>
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
            <p>Quad &amp; Buggy</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🏰</span>
            <p>Arcos Tour</p>
          </div>
        </div>
        <Link
          href="/experiences"
          className="mt-8 inline-block px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition"
        >
          See All Experiences
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100 max-w-6xl mx-auto">
  <div className="md:flex items-center gap-10">
    <img
      src="https://images.unsplash.com/photo-1600585154154-258d9ef0a1a8?auto=format&fit=crop&w=1200&q=80"
      alt="Traditional Quinta in Minho with pool"
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
      <a
        href="/properties"
        className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition inline-block"
      >
        Learn More
      </a>
    </div>
  </div>
</section>
     {/* CTA */}
<section
  className="relative py-20 px-6 bg-cover bg-center text-center text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1950&q=80')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 max-w-2xl mx-auto">
    <h2 className="text-4xl font-serif mb-4">Stay · Live · Experience</h2>
    <p className="text-lg mb-6">
      Book your holiday, find your dream home, or discover the magic of Minho with us.
    </p>
    <div className="flex gap-4 justify-center">
      <Link
        href="/stays"
        className="px-6 py-3 bg-white text-gray-800 rounded-2xl shadow hover:bg-gray-200 transition"
      >
        Book Your Stay
      </Link>
      <Link
        href="/properties"
        className="px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-600 transition"
      >
        Find Your Home
      </Link>
    </div>
  </div>
</section>
        </div>
  );
}
