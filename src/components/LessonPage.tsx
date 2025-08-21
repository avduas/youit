import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { slides } from "@/data/lessonType";
import { tabs } from "@/data/tabs";
import type { Slide } from "@/types/lesson";
import { getTypeIcon } from "@/utils/Icons";

import Tabs from "./Tabs";
import Sidebar from "./Sidebar";
import SlideContent from "./SlideContent";

export default function LessonPage() {

  const [activeSlideId, setActiveSlideId] = useState(slides[0]?.id);
  const [activeTab, setActiveTab] = useState("main");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentIndex = slides.findIndex(s => s.id === activeSlideId);
  const currentSlide: Slide | undefined = slides[currentIndex];

  const prevSlideId = slides[currentIndex - 1]?.id;
  const nextSlideId = slides[currentIndex + 1]?.id;

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Вкладки */}
      <div className="flex items-center justify-between border-b px-6">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Кнопки переключения */}
        <div className="flex gap-2">
          <button
            onClick={() => prevSlideId && setActiveSlideId(prevSlideId)}
            disabled={!prevSlideId}
            aria-label="Previous slide"
            className="px-2 py-1 rounded-md bg-[#EDF6FF] text-[#4597F7] 
                       hover:bg-[#4597F7] hover:text-white transition 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => nextSlideId && setActiveSlideId(nextSlideId)}
            disabled={!nextSlideId}
            aria-label="Next slide"
            className="px-2 py-1 rounded-md bg-[#EDF6FF] text-[#4597F7] 
                       hover:bg-[#4597F7] hover:text-white transition 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Основная область */}
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar
          slides={slides}
          activeSlide={activeSlideId!}
          setActiveSlide={setActiveSlideId}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          getTypeIcon={getTypeIcon}
        />

        {/* Контент слайда */}
        <div className="flex-1 p-6 overflow-y-auto">
          {currentSlide && <SlideContent slide={currentSlide} />}
        </div>
      </div>
    </div>
  );
}
