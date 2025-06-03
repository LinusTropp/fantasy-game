import React from "react";

// Define the shape of a Biome
export interface Biome {
  id: number;
  title: string;
  category: string;
  setting: string;
  monsters: string;
  bossHunt: string;
  resources: string;
  hazards: string;
  image?: string;
}

// Biome data
const biomes: Biome[] = [
  {
    id: 1,
    title: "Verdant Wilds",
    image: "/images/biomes/VerdantWilds.png",
    category: "Temperate Forest",
    setting: "Overgrown woodland, moss-covered ruins, misty glades.",
    monsters: "Wolves, giant spiders, druids gone feral, shambling treants.",
    bossHunt: "Spider Queen, Forest Wyrm.",
    resources: "Herbs, basic timber, berries, mushrooms.",
    hazards: "Entangling roots, fog, hidden traps.",
  },
  {
    id: 2,
    title: "Scorched Wastes",
    image: "/images/biomes/ScorchedWastes.png",
    category: "Desert/Badlands",
    setting: "Endless dunes, sun-scorched ruins, ancient tombs.",
    monsters: "Scorpions, sand elementals, undead mummies, carrion birds.",
    bossHunt: "Sand Wyrm, Tomb Matriarch.",
    resources: "Rare crystals, dry herbs, insect carapace.",
    hazards: "Heatstroke, mirages, sandstorms.",
  },
  {
    id: 3,
    title: "Frostveil Tundra",
    image: "/images/biomes/FrostveilTundra.png",
    category: "Frozen Wastes",
    setting: "Blizzards, cracked glaciers, sunless sky.",
    monsters: "Ice wolves, frost trolls, ghost hunters, cold drakes.",
    bossHunt: "Frostthorn Behemoth, Banshee Queen.",
    resources: "Ice crystals, cold-resistant furs, glacier water.",
    hazards: "Hypothermia, slipping, visibility loss.",
  },
  {
    id: 4,
    title: "Molten Depths",
    image: "/images/biomes/MoltenDepths.png",
    category: "Volcanic Caverns",
    setting: "Lava flows, obsidian chambers, seismic tremors.",
    monsters: "Magma golems, fire lizards, salamanders, ash demons.",
    bossHunt: "Magma Lord, Infernal Colossus.",
    resources: "Rare ore, obsidian, fire cores, ember shards.",
    hazards: "Lava pools, eruptions, suffocating gas.",
  },
  {
    id: 5,
    title: "Twilight Jungle",
    category: "Dense Tropical Nightmare",
    setting: "Bioluminescent flora, endless canopy, hostile ecosystem.",
    monsters: "Poison frogs, panthers, mind-bugs, sapient plants.",
    bossHunt: "Jungle Matron, Hallucinorm.",
    resources: "Exotic herbs, toxins, jungle wood, rare insects.",
    hazards: "Poison clouds, parasitic vines, confusion effects.",
  },
  {
    id: 6,
    title: "Shattered Bastion",
    category: "Ruined Urban Wasteland",
    setting: "Fallen cities, arcane reactors, overgrown machinery.",
    monsters: "Constructs, corrupted spirits, scavenger gangs.",
    bossHunt: "Clockwork Abomination, Arcane Revenant.",
    resources: "Scrap metal, ancient cores, arcane dust.",
    hazards: "Electrical surges, collapsing floors, unstable portals.",
  },
  {
    id: 7,
    title: "Blightmoor Swamp",
    category: "Plagued Wetlands",
    setting: "Black water, rotting trees, undead lurking in the fog.",
    monsters: "Zombies, necromantic beasts, swamp hags, giant leeches.",
    bossHunt: "Rotfiend Queen, Plague Bringer.",
    resources: "Mushrooms, cursed herbs, toxic sludge.",
    hazards: "Disease, slow movement, cursed fog.",
  },
  {
    id: 8,
    title: "Hollow Depths",
    category: "Ancient Underground World",
    setting: "Massive caverns, glowing fungi, lost dwarven halls.",
    monsters: "Cave trolls, bats, kobolds, ancient cursed machines.",
    bossHunt: "Crystal Devourer, Hollow King.",
    resources: "Gemstones, deep ore, ancient artifacts.",
    hazards: "Earthquakes, darkness, gas pockets.",
  },
];

// Biomes component
const Biomes: React.FC = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {biomes.map((biome) => (
        <section
          key={biome.id}
          className="border-2 border-[#926c15] min-h-[300px] min-w-[250px] rounded-lg p-4 shadow-md bg-cover bg-center bg-no-repeat relative text-white"
          style={{
            backgroundImage: biome.image ? `url(${biome.image})` : undefined,
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>{" "}
          {/* Overlay */}
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-2">
              {biome.id}. {biome.title}
            </h2>
            <p className="italic mb-2">({biome.category})</p>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Setting:</strong> {biome.setting}
              </li>
              <li>
                <strong>Monsters:</strong> {biome.monsters}
              </li>
              <li>
                <strong>Boss Hunt:</strong> {biome.bossHunt}
              </li>
              <li>
                <strong>Resources:</strong> {biome.resources}
              </li>
              <li>
                <strong>Hazards:</strong> {biome.hazards}
              </li>
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Biomes;
