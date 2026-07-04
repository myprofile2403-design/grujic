import { useState } from "react";
import { Link } from "react-router-dom";

const images = {
  bg_hero: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F08f167c92ecb4a1daf1001a2eafdbefc?format=webp&width=1600",
  logo: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2Ff2764d25d5524190b629a79113654403?format=webp&width=400",
  workers: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2Fdb7aec78d12741439d00bc9b6f8ff4da?format=webp&width=800",
  facade: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F1efbfce2859d4fa18326fbf7511e4bab?format=webp&width=600",
  ceiling: "https://images.unsplash.com/photo-1578055212233-e96de4e7aa4f?w=600&h=400&fit=crop",
  foil: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F83ad0b9794c64e008faa26c2133acd4b?format=webp&width=600",
  house: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F6f3f7c4c48374e81ae0fe80499132b02?format=webp&width=600",
  drywall: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F87ec8ff6b5f34738adc196c0e3fa8352?format=webp&width=600",
  tiles: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F3b273ec71148472680a2fc4ec928fbff?format=webp&width=600",
  painting: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F524f9dd2dc6a43bd89ddf2c98b8f15d8?format=webp&width=600",
  insulation: "https://images.unsplash.com/photo-1581092915550-e323be2ae537?w=600&h=400&fit=crop",
  reconstruction: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F424024861a1340888113644eb99b52dc?format=webp&width=600",
  plumbing: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2Faa1b0ce3fddd4f018438d761ffe7dfe9?format=webp&width=600",
  demolition: "https://images.unsplash.com/photo-1590080876460-2e0bfed3b798?w=600&h=400&fit=crop",
  earthworks: "https://images.unsplash.com/photo-1581092916537-ae52deba1e0a?w=600&h=400&fit=crop",
  project1: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F47039218d59e4ffbae6c55cc62a935d9?format=webp&width=600",
  project2: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F819fcbe3e04f4555a579e27a8be3c818?format=webp&width=600",
  project3: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2F9ad61a8b1daa459285c06c8d0922909c?format=webp&width=600",
  project4: "https://cdn.builder.io/api/v1/image/assets%2F6ab2406833274cac90e16e94e6e60dcf%2Fbde10e7170a8408d98e31009a61d558d?format=webp&width=600",
};

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#D4A574]/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center flex-shrink-0">
            <img src={images.logo} alt="GRUJIČ" className="h-16 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 font-medium text-white/95">
            <a href="#" className="px-4 py-2 hover:text-white transition-colors text-sm">
              Domů
            </a>
            <a href="#about" className="px-4 py-2 hover:text-white transition-colors text-sm">
              O nás
            </a>
            <a href="#services" className="px-4 py-2 hover:text-white transition-colors text-sm">
              Služby
            </a>
            <a href="#projects" className="px-4 py-2 hover:text-white transition-colors text-sm">
              Projekty
            </a>
            <a href="#contact" className="px-4 py-2 hover:text-white transition-colors text-sm">
              Kontakt
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-white/90 text-[#3a3a3a] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors"
            >
              Napište nám
            </a>
            <a
              href="tel:+420608411169"
              className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
            >
              +420 608 411 169
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#D4A574] border-t border-white/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-white py-2 hover:text-white/80 transition-colors">
                Domů
              </a>
              <a href="#about" className="block text-white py-2 hover:text-white/80 transition-colors">
                O nás
              </a>
              <a href="#services" className="block text-white py-2 hover:text-white/80 transition-colors">
                Služby
              </a>
              <a href="#projects" className="block text-white py-2 hover:text-white/80 transition-colors">
                Projekty
              </a>
              <a href="#contact" className="block text-white py-2 hover:text-white/80 transition-colors">
                Kontakt
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="#contact"
                  className="w-full bg-white/90 text-[#3a3a3a] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors text-center"
                >
                  Napište nám
                </a>
                <a
                  href="tel:+420608411169"
                  className="w-full text-white text-center font-semibold text-sm"
                >
                  +420 608 411 169
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[750px] overflow-hidden flex items-center">
          <img
            src={images.bg_hero}
            alt="Luxury construction project"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Kvalitní stavební řešení
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-10 font-light">
                Spolehlivé, odolné a profesionální služby pro vaše stavební projekty
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#D4A574] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C89860] transition-colors text-lg"
              >
                Začněte dnes
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-6">O nás</h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#D4A574] mb-6">Naše mise</h3>
                <p className="text-lg text-[#555555] leading-relaxed mb-6">
                  Jsme moderní stavební firma s hlubokými kořeny v oboru. Zaměřujeme se na poskytování
                  špičkových stavebních a rekonstrukčních prací s důrazem na kvalitu a inovaci.
                </p>
                <p className="text-lg text-[#555555] leading-relaxed">
                  S desítkami úspěšně dokončených projektů garantujeme spokojenost našich klientů.
                  Pracujeme s kvalitními materiály a máme profesionálně vyškolený tým, který zajistí
                  špičkovou kvalitu každé realizace.
                </p>
              </div>
              <div className="relative">
                <img
                  src={images.workers}
                  alt="Construction team working"
                  className="w-full h-auto rounded-xl shadow-xl object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">Naše služby</h2>
              <p className="text-xl text-[#555555] font-light">Kompletní nabídka stavebních prací</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Zateplení a fasády"
                image={images.facade}
                description="Provádíme zateplení fasád rodinných, bytových i panelových domů s moderními materiály."
              />
              <ServiceCard
                title="Napínané stropy"
                image={images.ceiling}
                description="Moderní a elegantní řešení pro vaše stropy s dlouhou životností a snadnou údržbou."
              />
              <ServiceCard
                title="Hydroizolační fólie"
                image={images.foil}
                description="Spolehlivá ochrana proti vodě a vlhkosti pro ploché střechy a podzemní stavby."
              />
              <ServiceCard
                title="Výstavba domů"
                image={images.house}
                description="Váš vysněný dům postavený k dokonalosti, od základu po střechu s plnou garanční."
              />
              <ServiceCard
                title="Sádrokartony"
                image={images.drywall}
                description="Desky s využitím u všech druhů staveb, kde je kladen důraz na kvalitu."
              />
              <ServiceCard
                title="Obklady a dlažby"
                image={images.tiles}
                description="Zaměřujeme se na pokládku obkladů a dlažeb z různých kvalitních materiálů."
              />
              <ServiceCard
                title="Malby a nátěry"
                image={images.painting}
                description="Specializujeme se na malířské a lakýrnické práce včetně nátěrů fasád."
              />
              <ServiceCard
                title="Zateplení a izolace"
                image={images.insulation}
                description="Komplexní zateplení a izolační práce pro maximální energetickou účinnost."
              />
              <ServiceCard
                title="Rekonstrukce"
                image={images.reconstruction}
                description="Kompletní rekonstrukce bytů, rodinných domů a komerčních prostor."
              />
              <ServiceCard
                title="Vodoinstalatérské práce"
                image={images.plumbing}
                description="Kompletní vodoinstalatérské a topenářské práce s profesionální instalací."
              />
              <ServiceCard
                title="Demolice"
                image={images.demolition}
                description="Profesionální a bezpečné demoliční práce všeho druhu s ekologickými postupy."
              />
              <ServiceCard
                title="Zemní práce"
                image={images.earthworks}
                description="Veškeré zemní a výkopové práce provedené spolehlivě a rychle."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">Naše projekty</h2>
              <p className="text-xl text-[#555555] font-light">Realizované stavby a jejich kvalita</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProjectCard image={images.project1} />
              <ProjectCard image={images.project2} />
              <ProjectCard image={images.project3} />
              <ProjectCard image={images.project4} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-[#3a3a3a] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Info */}
              <div>
                <img src={images.logo} alt="Logo" className="h-16 mb-8 object-contain" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">GRUJIČ CONSTRUCTION s.r.o.</h2>
                <p className="text-[#D4A574] text-lg mb-8 font-light">Vše v jednom...výstavba od A do Z</p>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">ADRESA</h3>
                    <p className="text-white/80">Körnerova 455/7</p>
                    <p className="text-white/80">Zábrdovice (Brno-střed), 602 00 Brno</p>
                  </div>
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">KONTAKT</h3>
                    <p className="text-white/80">
                      <a href="tel:+420608411169" className="hover:text-[#D4A574] transition-colors">
                        Telefon: +420 608 411 169
                      </a>
                    </p>
                    <p className="text-white/80">
                      <a href="mailto:grujic@mail.cz" className="hover:text-[#D4A574] transition-colors">
                        E-mail: grujic@mail.cz
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">ÚDAJE</h3>
                    <p className="text-white/80">Jednatel: SAŠA GRUJIĆ</p>
                    <p className="text-white/80">IČO: 10840648</p>
                    <p className="text-white/80">DIČ: CZ10840648</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 p-8 md:p-10 rounded-xl border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Napište nám</h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Vaše jméno"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Váš e-mail"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefonní číslo"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                  />
                  <textarea
                    placeholder="Vaše zpráva"
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#D4A574] text-white py-3 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
                  >
                    Odeslat
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/60 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 GRUJIČ CONSTRUCTION s.r.o. Všechna práva vyhrazena.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Obchodní podmínky
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Zásady ochrany osobních údajů
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#eee] h-full">
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#D4A574] text-xl font-bold mb-3">{title}</h3>
        <p className="text-[#555555] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ProjectCard({ image }: { image: string }) {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
      <img
        src={image}
        alt="Project"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
