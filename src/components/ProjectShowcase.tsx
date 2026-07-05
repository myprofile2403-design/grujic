import { images } from "../lib/images";

interface ProjectShowcaseProps {
  name: string;
  imageKeys: string[];
}

export default function ProjectShowcase({ name, imageKeys }: ProjectShowcaseProps) {
  const resolved = imageKeys
    .map((k) => (images as Record<string, string>)[k])
    .filter(Boolean);
  const multi = resolved.length > 1;
  const cycleSeconds = multi ? resolved.length * 4 : 0;

  return (
    <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-black">
        {resolved.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={name}
            loading="lazy"
            className={
              "absolute inset-0 w-full h-full object-cover" +
              (!multi ? i % 2 === 0 ? " animate-kenburns-a" : " animate-kenburns-b" : "")
            }
            style={
              multi
                ? {
                    animation: `crossfade ${cycleSeconds}s ease-in-out infinite`,
                    animationDelay: `${(i * cycleSeconds) / resolved.length}s`,
                  }
                : undefined
            }
          />
        ))}
      </div>
      <div className="bg-white p-4">
        <h3 className="text-[#3a3a3a] font-semibold text-sm sm:text-base">{name}</h3>
      </div>
    </div>
  );
}
