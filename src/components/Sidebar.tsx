import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SidebarProps } from "@/types/props";
import { useCallback } from "react";

export default function Sidebar({
  slides,
  activeSlide,
  setActiveSlide,
  sidebarOpen,
  setSidebarOpen,
  getTypeIcon,
}: SidebarProps) {
  // Функция для переключения слайда — мемоизирована для предотвращения ререндеров
  const handleSlideClick = useCallback(
    (id: number) => {
      setActiveSlide(id);
    },
    [setActiveSlide]
  );

  return (
    <div
      className={`${
        sidebarOpen ? "w-72" : "w-14"
      } border-r overflow-y-auto p-2 transition-all relative`}
    >
      {slides.map((slide) => {
        const isActive = activeSlide === slide.id;
        return (
          <div
            key={slide.id}
            onClick={() => handleSlideClick(slide.id)}
            className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 
              ${isActive ? "bg-gray-100" : "hover:bg-gray-50"}`}
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

            {/* Номер слайда */}
            <div className="w-8 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">
                {slide.id.toString().padStart(2, "0")}
              </span>
            </div>

            {/* Контент слайда только если панель раскрыта */}
            {sidebarOpen && (
              <div className="flex flex-col flex-1 ml-1">
                <span className="text-xs text-gray-500">{slide.type}</span>
                <h3 className="text-sm font-medium text-gray-900">{slide.title}</h3>
              </div>
            )}

            {/* Иконка типа */}
            {sidebarOpen && getTypeIcon(slide.type)}
          </div>
        );
      })}

      {/* Кнопка сворачивания */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-1/2 -right-1 transform -translate-y-1/2 
          w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center 
          text-gray-600 hover:bg-gray-300 transition z-40"
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </div>
  );
}
