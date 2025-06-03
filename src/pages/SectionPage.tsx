import { useParams } from "react-router-dom";
import LeafletMap from "../components/LeafletMap";
import Monsters from "../components/Monsters";
import Biomes from "../components/Biomes";

export default function SectionPage() {
  const { section } = useParams<{ section: string }>();

  if (!section) {
    return (
      <div className="p-8 text-white">Select a section from the sidebar.</div>
    );
  }

  switch (section) {
    case "World Map":
      return <LeafletMap />;
    case "Monsters":
      return <Monsters />;
    case "Biomes":
      return <Biomes />;
    default:
      return (
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-white">{section}</h1>
          <p className="mt-2 text-white">
            Content for <strong>{section}</strong> goes here.
          </p>
        </div>
      );
  }
}
