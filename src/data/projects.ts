export interface FeaturedProject {
  name: string;
  // Single real photo per project for now. Once real jobsite photos from
  // multiple angles are available, add more URLs here - ProjectShowcase
  // will automatically cross-fade between them instead of just animating one.
  images: string[];
}

export interface SimpleProject {
  name: string;
  image: string;
}

// These 4 already had photos before - now named and given the Ken Burns
// pan/zoom effect. Replace/add photos in `images` once real project photos
// (ideally 3-5 angles each) are available.
export const featuredProjects: FeaturedProject[] = [
  { name: "Rodinný dům s bazénem", images: ["project1"] },
  { name: "Rezidenční komplex", images: ["project2"] },
  { name: "Rekonstrukce interiéru", images: ["project3"] },
  { name: "Průmyslová hala", images: ["project4"] },
];

// TEMPORARY placeholder photos, reused from the services section stock
// images so nothing new had to be sourced from the web. Swap these for real
// completed-project photos before using this for real marketing/ads.
export const moreProjects: SimpleProject[] = [
  { name: "Rodinný dům Brno-Bystrc", image: "house" },
  { name: "Zateplení fasády Brno-Žabovřesky", image: "facade" },
  { name: "Rekonstrukce koupelny Brno-Královo Pole", image: "tiles" },
  { name: "Podhledy a příčky – kancelář Brno-střed", image: "drywall" },
  { name: "Zemní práce a základy Šlapanice", image: "earthworks" },
  { name: "Demolice objektu Brno-Tuřany", image: "demolition" },
  { name: "Vodoinstalace – novostavba Modřice", image: "plumbing" },
  { name: "Malby a nátěry – bytový dům Brno", image: "painting" },
  { name: "Napínané stropy – byt Brno-Řečkovice", image: "ceiling" },
  { name: "Hydroizolace ploché střechy Brno-Líšeň", image: "foil" },
];
