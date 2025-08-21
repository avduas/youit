import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SidebarProps } from "@/types/props";

export default function Sidebar({
  slides,
  activeSlide,
  setActiveSlide,
  sidebarOpen,
  setSidebarOpen,
  getTypeIcon,
}: SidebarProps) {
  return (
    <Card
      className={`transition-all relative ${sidebarOpen ? "w-72" : "w-14"} overflow-y-auto`}
    >
      <CardContent className="p-2">
        {slides.map(slide => {
          const isActive = activeSlide === slide.id;
          return (
            <div
              key={slide.id}
              className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2
                ${isActive ? "bg-gray-100" : "hover:bg-gray-50"}`}
              onClick={() => setActiveSlide(slide.id)}
            >
              {/* Полоса состояния */}
              <div
                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-md ${
                  slide.status === "done"
                    ? "bg-green-500"
                    : slide.status === "error"
                    ? "bg-red-500"
                    : "bg-transparent"
                }`}
              />

              {/* Номер */}
              <div className="w-8 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-500">
                  {slide.id.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Контент */}
              {sidebarOpen && (
                <div className="flex flex-col flex-1 ml-1">
                  <span className="text-xs text-gray-500">{slide.type}</span>
                  <h3 className="text-sm font-medium text-gray-900">{slide.title}</h3>
                </div>
              )}

              {sidebarOpen && getTypeIcon(slide.type)}
            </div>
          );
        })}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-40"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </Button>
      </CardContent>
    </Card>
  );
}
