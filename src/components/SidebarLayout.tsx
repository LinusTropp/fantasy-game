import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

interface SidebarLayoutProps {
  sections: Record<string, string[]>;
}

export default function SidebarLayout({ sections }: SidebarLayoutProps) {
  const navigate = useNavigate();
  const { section } = useParams<{ section: string }>();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(Object.keys(sections).map((group) => [group, false]))
  );

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#222] border-r border-[#926c15] text-white p-4 overflow-auto ">
        {Object.entries(sections).map(([group, items]) => (
          <div key={group} className="mb-4">
            <button
              onClick={() => toggleGroup(group)}
              className="flex items-center justify-between w-full px-2 py-1 bg-[#926c15] rounded shadow-md shadow-white "
            >
              <span className="font-semibold">{group}</span>
              <span
                className={`transform transition-transform ${
                  openGroups[group] ? "rotate-90" : "rotate-0"
                }`}
              >
                ▶
              </span>
            </button>
            {openGroups[group] && (
              <ul className="mt-2 ml-4 space-y-1">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigate(item)}
                      className={`w-full text-left px-2 py-1 rounded hover:bg-[#926c15]  ${
                        section === item ? "bg-[#926c15] " : ""
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </aside>

      {/* Main content area for nested routes */}
      <main className="flex-1 bg-[#222] overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
