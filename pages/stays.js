export default function Stays() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-6">Boutique Stays in Minho</h1>
      <p className="mb-10 text-lg">Handpicked homes for peaceful, authentic experiences.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115" alt="Stone House" />
          <div className="p-4">
            <h2 className="font-semibold">Stone House • Arcos</h2>
            <p className="text-sm text-gray-600">2 bedrooms • Sleeps 4</p>
            <a href="#" className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-2xl">Check Availability</a>
          </div>
        </article>
        <article className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img src="https://images.unsplash.com/photo-1590490359683-658d3d59f07b" alt="Modern Villa" />
          <div className="p-4">
            <h2 className="font-semibold">Modern Villa • Braga</h2>
            <p className="text-sm text-gray-600">3 bedrooms • Pool</p>
            <a href="#" className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-2xl">Check Availability</a>
          </div>
        </article>
        <article className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Apartment" />
          <div className="p-4">
            <h2 className="font-semibold">Riverside Apartment • Viana</h2>
            <p className="text-sm text-gray-600">1 bedroom • City views</p>
            <a href="#" className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-2xl">Check Availability</a>
          </div>
        </article>
      </div>
    </main>
  );
}
