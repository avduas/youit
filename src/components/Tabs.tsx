import { tabs } from "@/data/tabs";
import { NavLink } from "react-router-dom";


export default function Tabs() {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.to}
          className={({ isActive }) =>
            [
              "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
              isActive
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700",
            ].join(" ")
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
