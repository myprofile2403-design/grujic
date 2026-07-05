export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  cardTitle: string; // label shown on homepage service card
  h1: string;
  metaTitle: string;
  metaDescription: string;
  imageKey:
    | "house"
    | "reconstruction"
    | "facade"
    | "drywall"
    | "tiles"
    | "painting"
    | "plumbing"
    | "demolition"
    | "earthworks"
    | "ceiling"
    | "foil";
  intro: string[];
  benefits: string[];
  faq: ServiceFaq[];
}

export const services: ServiceContent[] = [
  {
    slug: "vystavba-domu",
    cardTitle: "Výstavba domů",
    h1: "Výstavba rodinných domů v Brně a okolí",
    metaTitle: "Výstavba domů Brno – stavba na klíč | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Výstavba rodinných domů v Brně od základů po střechu. Vlastní tým, kvalitní materiály, garance a dodržení termínů. Nezávazná konzultace zdarma.",
    imageKey: "house",
    intro: [
      "Stavíme rodinné domy v Brně a Jihomoravském kraji od základové desky až po předání klíčů. Každý projekt vedeme s vlastním týmem řemeslníků, takže máte jednoho partnera pro celou stavbu a nemusíte koordinovat desítky různých firem.",
      "Před zahájením stavby projdeme s klientem projektovou dokumentaci, navrhneme reálný harmonogram a rozpočet bez skrytých položek. Během výstavby probíhá průběžná kontrola kvality na každé fázi – hrubá stavba, izolace, rozvody, dokončovací práce.",
    ],
    benefits: [
      "Kompletní realizace od základů po střechu",
      "Vlastní tým, žádní nekontrolovaní subdodavatelé",
      "Pevný harmonogram a rozpočet bez skrytých nákladů",
      "Garance na provedené práce",
    ],
    faq: [
      {
        question: "Jak dlouho trvá výstavba rodinného domu?",
        answer:
          "Standardní rodinný dům o velikosti 120–150 m² realizujeme obvykle za 8–12 měsíců v závislosti na složitosti projektu a počasí.",
      },
      {
        question: "Zajišťujete i projektovou dokumentaci?",
        answer:
          "Stavíme podle hotové projektové dokumentace klienta nebo spolupracujeme s projektanty, se kterými dokumentaci připravíme na míru.",
      },
    ],
  },
  {
    slug: "rekonstrukce",
    cardTitle: "Rekonstrukce",
    h1: "Rekonstrukce bytů a rodinných domů Brno",
    metaTitle: "Rekonstrukce bytů a domů Brno | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Kompletní rekonstrukce bytů, rodinných domů a komerčních prostor v Brně. Bourací práce, rozvody, dokončovací práce na klíč. Nezávazná nabídka zdarma.",
    imageKey: "reconstruction",
    intro: [
      "Provádíme kompletní i dílčí rekonstrukce bytů, rodinných domů a komerčních prostor v Brně a okolí. Řešíme bourací práce, nové rozvody elektřiny a vody, jádra bytů, podlahy i finální dokončovací práce.",
      "Rekonstrukci vždy zahajujeme prohlídkou na místě a nezávaznou cenovou nabídkou. Klient dostává jasný harmonogram prací, takže ví, kdy bude byt nebo dům znovu obyvatelný.",
    ],
    benefits: [
      "Rekonstrukce bytových jader i celých bytů",
      "Bourací a zednické práce",
      "Nové elektroinstalace a vodoinstalace",
      "Práce v obydlených i prázdných objektech",
    ],
    faq: [
      {
        question: "Rekonstruujete i byty v obydlených domech?",
        answer:
          "Ano, práce plánujeme tak, abychom minimalizovali hluk a nepořádek pro sousedy, a dodržujeme domovní řád.",
      },
      {
        question: "Je prohlídka a nabídka zdarma?",
        answer:
          "Ano, prohlídku objektu a nezávaznou cenovou nabídku poskytujeme zdarma.",
      },
    ],
  },
  {
    slug: "zatepleni-fasad",
    cardTitle: "Zateplení a izolace fasád",
    h1: "Zateplení fasád a izolace domů Brno",
    metaTitle: "Zateplení fasád Brno – zateplovací systémy | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Zateplení fasád rodinných, bytových i panelových domů v Brně. Moderní zateplovací systémy, nižší náklady na energie, dlouhá životnost. Poptejte cenu.",
    imageKey: "facade",
    intro: [
      "Zateplujeme fasády rodinných domů, bytových jednotek i panelových domů v Brně pomocí certifikovaných zateplovacích systémů. Kvalitní zateplení snižuje náklady na vytápění a prodlužuje životnost fasády.",
      "Součástí realizace je i řešení tepelných mostů, izolace soklu a v případě potřeby i výměna oken a dveří, aby celý plášť budovy fungoval jako jeden systém.",
    ],
    benefits: [
      "Certifikované zateplovací systémy",
      "Nižší náklady na vytápění",
      "Řešení tepelných mostů a soklu",
      "Vhodné pro rodinné i panelové domy",
    ],
    faq: [
      {
        question: "O kolik se sníží náklady na vytápění po zateplení?",
        answer:
          "V závislosti na stavu původní fasády a tloušťce izolace klienti obvykle vidí úsporu 20–40 % nákladů na vytápění.",
      },
      {
        question: "Je na zateplení možné čerpat dotaci?",
        answer:
          "Ano, zateplení fasád je často možné kombinovat s dotačními programy typu Nová zelená úsporám – rádi poradíme s podklady.",
      },
    ],
  },
  {
    slug: "sadrokartony",
    cardTitle: "Sádrokartony",
    h1: "Sádrokartonářské práce a montované příčky Brno",
    metaTitle: "Sádrokartony Brno – podhledy, příčky | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Sádrokartonářské práce v Brně: podhledy, příčky, předstěny a designové prvky. Rychlá a čistá montáž bez zbytečného bourání. Poptejte realizaci.",
    imageKey: "drywall",
    intro: [
      "Montujeme sádrokartonové podhledy, příčky a předstěny pro byty, rodinné domy i komerční prostory v Brně. Sádrokarton umožňuje rychlé úpravy dispozice bez rozsáhlého bourání.",
      "Využíváme kvalitní desky vhodné i do vlhkých prostor (koupelny) a řešíme i designové prvky – světelné rampy, obklady sloupů, akustické podhledy.",
    ],
    benefits: [
      "Podhledy, příčky i předstěny",
      "Desky vhodné do vlhkých prostor",
      "Rychlá montáž bez nadměrného nepořádku",
      "Designové a akustické řešení interiérů",
    ],
    faq: [
      {
        question: "Lze sádrokarton použít v koupelně?",
        answer:
          "Ano, používáme desky s protivlhkostní úpravou určené přímo do koupelen a dalších vlhkých prostor.",
      },
    ],
  },
  {
    slug: "obklady-a-dlazby",
    cardTitle: "Obklady a dlažby",
    h1: "Pokládka obkladů a dlažby Brno",
    metaTitle: "Obklady a dlažba Brno – pokládka na klíč | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Pokládka obkladů a dlažby v Brně – koupelny, kuchyně, komerční prostory. Přesná práce s různými materiály a formáty dlaždic. Poptejte cenu.",
    imageKey: "tiles",
    intro: [
      "Pokládáme obklady a dlažby v koupelnách, kuchyních i komerčních prostorách v Brně a okolí. Pracujeme s keramickými i velkoformátovými dlaždicemi a dbáme na přesné spárování a hydroizolaci pod dlažbou.",
      "Před pokládkou vždy zkontrolujeme rovinnost podkladu a v případě potřeby provedeme vyrovnání, aby výsledná plocha byla bez vlnění a prasklin.",
    ],
    benefits: [
      "Práce s keramickými i velkoformátovými dlaždicemi",
      "Hydroizolace pod dlažbou v mokrých provozech",
      "Vyrovnání podkladu před pokládkou",
      "Koupelny, kuchyně i komerční prostory",
    ],
    faq: [
      {
        question: "Řešíte i hydroizolaci v koupelně před pokládkou?",
        answer:
          "Ano, hydroizolační stěrku a pásky v mokrých provozech aplikujeme jako standardní součást přípravy podkladu.",
      },
    ],
  },
  {
    slug: "malby-a-natery",
    cardTitle: "Malby a nátěry",
    h1: "Malířské a natěračské práce Brno",
    metaTitle: "Malby a nátěry Brno – malířské práce | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Malířské a lakýrnické práce v Brně – interiéry, fasády, nátěry dřevěných a kovových konstrukcí. Čistá a rychlá realizace. Poptejte termín.",
    imageKey: "painting",
    intro: [
      "Provádíme malířské práce v interiérech i nátěry fasád, dřevěných a kovových konstrukcí v Brně. Před malováním vždy připravíme povrch – tmelení, broušení, penetrace – aby výsledný nátěr dlouho vydržel.",
      "Nabízíme i speciální nátěry (protiplísňové, omyvatelné) pro prostory s vyšší vlhkostí nebo provozem, jako jsou kanceláře a společné prostory bytových domů.",
    ],
    benefits: [
      "Malby interiérů i nátěry fasád",
      "Příprava podkladu (tmelení, broušení, penetrace)",
      "Protiplísňové a omyvatelné nátěry",
      "Nátěry dřevěných a kovových konstrukcí",
    ],
    faq: [
      {
        question: "Malujete i společné prostory bytových domů?",
        answer:
          "Ano, realizujeme malby a nátěry chodeb, schodišť a dalších společných prostor bytových domů a SVJ.",
      },
    ],
  },
  {
    slug: "vodoinstalaterske-prace",
    cardTitle: "Vodoinstalatérské práce",
    h1: "Vodoinstalatérské a topenářské práce Brno",
    metaTitle: "Vodoinstalatérské práce Brno – rozvody vody a topení | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Vodoinstalatérské a topenářské práce v Brně – nové rozvody, rekonstrukce koupelen, připojení spotřebičů. Profesionální instalace na klíč.",
    imageKey: "plumbing",
    intro: [
      "Zajišťujeme kompletní vodoinstalatérské a topenářské práce v Brně – od nových rozvodů vody a topení po připojení sanitární techniky a spotřebičů.",
      "Práce provádíme jak v rámci nové výstavby, tak při rekonstrukcích koupelen a kuchyní, kde je potřeba upravit stávající rozvody podle nové dispozice.",
    ],
    benefits: [
      "Nové rozvody vody a topení",
      "Připojení sanitární techniky a spotřebičů",
      "Rekonstrukce rozvodů v bytech a domech",
      "Součást komplexní rekonstrukce koupelen",
    ],
    faq: [
      {
        question: "Provádíte i drobné opravy, nebo jen celé rozvody?",
        answer:
          "Realizujeme jak kompletní nové rozvody, tak dílčí opravy a úpravy stávající instalace.",
      },
    ],
  },
  {
    slug: "demolice",
    cardTitle: "Demolice",
    h1: "Demoliční práce Brno – bourání staveb",
    metaTitle: "Demolice Brno – demoliční a bourací práce | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Profesionální a bezpečné demoliční práce v Brně – bourání interiérů, staveb i menších objektů. Odvoz suti a ekologická likvidace odpadu.",
    imageKey: "demolition",
    intro: [
      "Provádíme demoliční práce v Brně a okolí – od bourání interiérových příček po demolice menších staveb. Práce probíhají v souladu s bezpečnostními předpisy a s ohledem na okolní zástavbu.",
      "Součástí služby je i odvoz stavební suti a ekologická likvidace odpadu, takže se po demolici nemusíte starat o vyklizení pozemku.",
    ],
    benefits: [
      "Bourání interiérů i menších staveb",
      "Dodržení bezpečnostních předpisů",
      "Odvoz suti a likvidace odpadu",
      "Šetrný přístup k okolní zástavbě",
    ],
    faq: [
      {
        question: "Zajišťujete i odvoz suti po demolici?",
        answer:
          "Ano, odvoz a ekologickou likvidaci stavební suti a odpadu zajišťujeme jako standardní součást demoličních prací.",
      },
    ],
  },
  {
    slug: "zemni-prace",
    cardTitle: "Zemní práce",
    h1: "Zemní a výkopové práce Brno",
    metaTitle: "Zemní práce Brno – výkopy, terénní úpravy | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Zemní a výkopové práce v Brně – základové výkopy, inženýrské sítě, terénní úpravy pozemků. Vlastní technika, rychlá realizace.",
    imageKey: "earthworks",
    intro: [
      "Realizujeme zemní a výkopové práce pro výstavbu rodinných domů i komerčních objektů v Brně – základové výkopy, výkopy pro inženýrské sítě a terénní úpravy pozemků.",
      "Díky vlastní technice dokážeme práce naplánovat flexibilně a navázat je přímo na další fáze výstavby, aby nedocházelo ke zbytečným prostojům.",
    ],
    benefits: [
      "Základové výkopy pro novostavby",
      "Výkopy pro inženýrské sítě",
      "Terénní úpravy a srovnání pozemku",
      "Vlastní stavební technika",
    ],
    faq: [
      {
        question: "Provádíte i terénní úpravy po výstavbě?",
        answer:
          "Ano, po dokončení stavby zajistíme i finální terénní úpravy a přípravu pozemku pro zahradní úpravy.",
      },
    ],
  },
  {
    slug: "napinane-stropy",
    cardTitle: "Napínané stropy",
    h1: "Napínané stropy Brno – moderní stropní systémy",
    metaTitle: "Napínané stropy Brno – instalace na klíč | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Napínané stropy pro byty, domy i komerční prostory v Brně. Rychlá montáž bez nutnosti bourání, dlouhá životnost a snadná údržba.",
    imageKey: "ceiling",
    intro: [
      "Instalujeme napínané stropy jako moderní a rychlou alternativu ke klasickým sádrokartonovým podhledům. Montáž v Brně zvládneme obvykle během jednoho dne bez nutnosti stěhování celé domácnosti.",
      "Napínaný strop skryje nerovnosti původního stropu, elektroinstalace i vedení, a nabízí širokou škálu povrchů – matný, lesklý i s potiskem.",
    ],
    benefits: [
      "Montáž obvykle do jednoho dne",
      "Skryje nerovnosti a rozvody v původním stropu",
      "Matné, lesklé i potištěné varianty",
      "Dlouhá životnost a snadná údržba",
    ],
    faq: [
      {
        question: "Jak dlouho trvá montáž napínaného stropu?",
        answer:
          "Montáž běžné místnosti trvá zpravidla několik hodin až jeden den, v závislosti na velikosti a tvaru stropu.",
      },
    ],
  },
  {
    slug: "hydroizolacni-folie",
    cardTitle: "Hydroizolační fólie",
    h1: "Hydroizolační fólie Brno – ochrana proti vodě",
    metaTitle: "Hydroizolační fólie Brno – ploché střechy, spodní stavba | GRUJIČ CONSTRUCTION",
    metaDescription:
      "Hydroizolace plochých střech a podzemních staveb pomocí fóliových systémů v Brně. Spolehlivá ochrana proti vodě a vlhkosti.",
    imageKey: "foil",
    intro: [
      "Provádíme hydroizolace plochých střech a podzemních staveb pomocí fóliových hydroizolačních systémů. Realizace v Brně zahrnuje přípravu podkladu, pokládku fólie a kontrolu spojů.",
      "Kvalitní hydroizolace je základem ochrany budovy proti vodě a vlhkosti – řešíme jak novostavby, tak opravy stávajících hydroizolací u plochých střech.",
    ],
    benefits: [
      "Hydroizolace plochých střech",
      "Ochrana podzemních staveb proti vlhkosti",
      "Kontrola a těsnění spojů fólie",
      "Novostavby i opravy stávající izolace",
    ],
    faq: [
      {
        question: "Opravujete i starší hydroizolaci ploché střechy?",
        answer:
          "Ano, provádíme diagnostiku stávající hydroizolace a její opravu nebo kompletní výměnu podle stavu střechy.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
