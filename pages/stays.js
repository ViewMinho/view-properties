import stays from "@/data/stays.json";
import Link from "next/link";

export default function Stays() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-2">Boutique Stays in Minho</h1>
      <p className="mb-10 text-lg text-gray-600">
        Handpicked homes for peaceful, authentic experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stays.map((s) => (
          <article key={s.id} className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src={s.image} alt={s.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{s.title}</h2>
              {s.location && <p className="text-sm text-gray-500">{s.location}</p>}
              {s.capacity && <p className="text-sm text-gray-500">{s.capacity}</p>}
              {s.summary && <p className="text-sm text-gray-700 mt-2">{s.summary}</p>}
              {s.priceFrom && <p className="text-green-700 font-semibold mt-2">{s.priceFrom}</p>}

              {s.amenities?.length ? (
                <ul className="flex flex-wrap gap-2 mt-3 text-xs text-gray-600">
                  {s.amenities.map((a, i) => (
                    <li key={i} className="bg-gray-100 px-2 py-1 rounded-full">{a}</li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-3">
                {s.links?.website && (
                  <a href={s.links.website} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-gray-200 text-gray-800 rounded-2xl">
                    View on Site
                  </a>
                )}
                {s.links?.airbnb && (
                  <a href={s.links.airbnb} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-pink-600 text-white rounded-2xl">
                    Airbnb
                  </a>
                )}
                {s.links?.booking && (
                  <a href={s.links.booking} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-blue-700 text-white rounded-2xl">
                    Booking.com
                  </a>
                )}
                <Link href={`/stays/${s.id}`} className="px-4 py-2 bg-green-700 text-white rounded-2xl">
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
