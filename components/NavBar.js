import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow bg-white">
      <h1 className="text-2xl font-serif text-green-700">View Properties</h1>
      <nav className="flex gap-6 text-gray-700">
        <Link href="/stays" className="hover:text-green-700">Stays</Link>
        <Link href="/properties" className="hover:text-green-700">Properties</Link>
        <Link href="/experiences" className="hover:text-green-700">Experiences</Link>
        <a href="mailto:hello@viewminho.com" className="hover:text-green-700">Contact</a>
      </nav>
    </header>
  );
}
