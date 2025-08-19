export default function Properties() {
  const listings = [
    { title: "Charming Stone House in Arcos", price: "€245,000", img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", details: "2 bed • 1 bath • 120 m²" },
    { title: "Modern Riverside Apartment", price: "€310,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", details: "2 bed • 2 bath • 95 m²" },
    { title: "Countryside Boutique Villa", price: "€420,000", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7", details: "4 bed • 3 bath • 240 m²" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-6">View Properties – For Sale</h1>
      <p className="mb-10 text-lg">Handpicked homes with a personal, boutique service.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((l, i) => (
          <article key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={l.img} alt={l.title} className="w-full" />
            <div className="p-4">
              <h2 className="font-semibold">{l.title}</h2>
              <p className="text-sm text-gray-600">{l.details}</p>
              <p className="text-green-700 font-bold mt-2">{l.price}</p>
              <a href="#" className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-2xl">Request Info</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
