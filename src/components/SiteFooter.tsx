import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white/60 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2026 GRUJIČ CONSTRUCTION s.r.o. Všechna práva vyhrazena.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">
              Obchodní podmínky
            </Link>
            <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">
              Zásady ochrany osobních údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
