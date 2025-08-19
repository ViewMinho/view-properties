export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center mt-16">
      <p className="mb-2">📍 Avenida do Autarca 29, 4730-072 Vila Verde</p>

      <p className="mb-2">
        📞 <a href="tel:+351967377936" className="underline">+351 967 377 936</a> | <a href="tel:+351917129942" className="underline">+351 917 129 942</a>
      </p>

      <p className="mb-2">
        💬 <a href="https://wa.me/351967377936" target="_blank" rel="noopener noreferrer" className="underline">WhatsApp 1</a> | <a href="https://wa.me/351917129942" target="_blank" rel="noopener noreferrer" className="underline">WhatsApp 2</a>
      </p>

      <p className="mb-2">
        ✉️ <a href="mailto:geral@viewminho.pt" className="underline">geral@viewminho.pt</a> | <a href="mailto:gerencia@viewminho.pt" className="underline">gerencia@viewminho.pt</a>
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="https://www.facebook.com/help/943858526073065/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">🌐 Facebook</a>
        <a href="https://www.instagram.com/reels/C6ZKIwhsBo9/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">📸 Instagram</a>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} View Properties • View Minho, Northern Portugal
      </p>
    </footer>
  );
}
