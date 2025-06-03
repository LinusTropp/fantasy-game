import React, { useState } from "react";

// Define types
interface Species {
  id: number;
  name: string;
  image: string;
  description: string;
  weakness: string;
  biome: string;
}

interface MonsterCategory {
  id: number;
  name: string;
  image: string;
  subtitle: string;
  species: Species[];
}

// Keeping your provided image paths and adding species arrays
const categories: MonsterCategory[] = [
  {
    id: 1,
    name: "Goblins",
    image: "/images/monstercategories/goblins.png",
    subtitle: "Click to view all goblins",
    species: [
      {
        id: 101,
        name: "Goblin",
        image: "/images/monstercategories/monsters/goblin.png",
        description: "Small, green scavengers dwelling in the woods.",
        weakness: "Fire",
        biome: "Forest",
      },
    ],
  },
  {
    id: 2,
    name: "Dragons",
    image: "/images/monstercategories/dragons.png",
    subtitle: "Click to view all dragons",
    species: [
      {
        id: 201,
        name: "Red Dragon",
        image: "/images/monstercategories/monsters/dragon.png",
        description: "Fierce fire-breather with crimson scales.",
        weakness: "Fire",
        biome: "Forest",
      },
    ],
  },
  {
    id: 3,
    name: "Undeads",
    image: "/images/monstercategories/undeads.png",
    subtitle: "Click to view all undeads",
    species: [
      {
        id: 301,
        name: "Wight",
        image: "/images/monstercategories/monsters/wight.png",
        description: "Reanimated corpses craving flesh.",
        weakness: "Fire",
        biome: "Forest",
      },
      {
        id: 302,
        name: "Skeleton",
        image: "/images/monstercategories/monsters/skeleton.png",
        description: "Reanimated corpses craving flesh.",
        weakness: "Fire",
        biome: "Forest",
      },
    ],
  },
  {
    id: 4,
    name: "Elementals",
    image: "/images/monstercategories/elementals.png",
    subtitle: "Click to view all elementals",
    species: [
      {
        id: 401,
        name: "Fire Elemental",
        image: "/images/monsters/elementals/fire-elemental.png",
        description: "Embodiment of pure flame.",
        weakness: "Fire",
        biome: "Forest",
      },
      {
        id: 402,
        name: "Water Elemental",
        image: "/images/monsters/elementals/water-elemental.png",
        description: "Fluid being of living water.",
        weakness: "Fire",
        biome: "Forest",
      },
    ],
  },
  {
    id: 5,
    name: "Humanoids",
    image: "/images/monstercategories/humanoids.png",
    subtitle: "Click to view all humanoids",
    species: [
      {
        id: 501,
        name: "Bandit Archer",
        image: "/images/monsters/humanoids/bandit-archer.png",
        description: "Quick and deadly with a bow.",
        weakness: "Fire",
        biome: "Forest",
      },
      {
        id: 502,
        name: "Dark Mage",
        image: "/images/monsters/humanoids/dark-mage.png",
        description: "Wielder of forbidden spells.",
        weakness: "Fire",
        biome: "Forest",
      },
    ],
  },
];

const Monsters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<MonsterCategory | null>(null);
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<number | null>(
    null
  );

  // Category grid view
  if (!selectedCategory) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Monsters</h1>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(200px,250px))]">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="relative min-w-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Species list view with details overlay on selected species card
  return (
    <div className="p-4">
      <button
        onClick={() => {
          setSelectedCategory(null);
          setSelectedSpeciesId(null);
        }}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        ← Back to categories
      </button>
      <h1 className="text-2xl font-bold mb-4 text-white">
        {selectedCategory.name}
      </h1>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(200px,250px))]">
        {selectedCategory.species.map((sp) => (
          <div
            key={sp.id}
            className="relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
            onClick={() => setSelectedSpeciesId(sp.id)}
          >
            <img
              src={sp.image}
              alt={sp.name}
              className="w-full h-full object-cover"
            />

            {/* Always show basic overlay with name+desc */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-3 text-center">
              <h3 className="text-lg font-semibold text-white">{sp.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{sp.description}</p>
            </div>

            {/* If this species is selected, show extra small details badge */}
            {selectedSpeciesId === sp.id && (
              <div className="absolute top-2 left-2 bg-black bg-opacity-80 text-white p-2 rounded text-m">
                <p>
                  <strong>Category:</strong> {selectedCategory.name}
                </p>
                <p>
                  <strong>Weakness:</strong> {sp.weakness}
                </p>
                <p>
                  <strong>Biome:</strong> {sp.biome}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monsters;
