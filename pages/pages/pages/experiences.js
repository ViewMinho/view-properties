export default function Experiences() {
  const items = [
    { emoji: "🍷", title: "Wine Tasting + Tapas", blurb: "Includes Quinta tour • from €50 pp" },
    { emoji: "🐴", title: "Horseback Riding", blurb: "Lessons • ~20€/hour (Quinta Vinhadouro)" },
    { emoji: "🚙", title: "Quad & Buggy", blurb: "2 hours • from €99" },
    { emoji: "🏰", title: "Arcos Tour", blurb: "Half-day curated tour" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-serif mb-6">Curated Experiences</h1>
      <p className="mb-10 text-lg">Make your stay unforgettable with View Minho partners.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((x, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6">
            <div className="text-5xl mb-3">{x.emoji}</div>
            <h2 className="text-xl font-semibold">{x.title}</h2>
            <p className="text-gray-600 mt-2">{x.blurb}</p>
            <a href="#" className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded-2xl">Enquire</a>
          </div>
        ))}
      </div>
    </main>
  );
}
