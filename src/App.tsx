import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import SectionPage from "./pages/SectionPage";

const sections = {
  World: ["Biomes", "Regions", "Cities", "Landmarks"],
  Maps: ["World Map", "City Maps"],
  Bestiary: ["Monsters", "Bosses"],
  "Game Systems": ["Stats", "Spells", "Professions"],
  Tools: ["Admin Panel", "Debug Log"],
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SidebarLayout sections={sections} />}>
          <Route index element={<SectionPage />} />
          <Route path=":section" element={<SectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
