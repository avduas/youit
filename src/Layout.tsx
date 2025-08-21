// Layout.tsx
import { Outlet } from "react-router-dom";
import Tabs from "@/components/Tabs";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Навигационные вкладки */}
      <Tabs />

      {/* Контент страниц */}
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}
