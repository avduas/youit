import { cn } from "@/lib/utils";
import { Tabs as Tab } from "@/components/ui/tabs"; 
import type { TabsProps } from "@/types/props";

export default function Tabs({ activeTab, setActiveTab, tabs }: TabsProps) {
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          className={cn(
            "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
            activeTab === tab.id
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
}
