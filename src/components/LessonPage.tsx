import { useState } from "react";
import { slides } from "@/data/lessonType";
import { tabs } from "@/data/tabs";
import type { Slide } from "@/types/lesson";
import { getTypeIcon } from "@/utils/Icons";

import Tabs from "./Tabs";
import Sidebar from "./Sidebar";
import SlideContent from "./SlideContent";
import SlideNav from "./SlideNav";

export default function LessonPage() {
  const [activeSlide, setActiveSlide] = useState(slides[0]?.id ?? 1);
  const [activeTab, setActiveTab] = useState("main");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentSlide: Slide | undefined = slides.find(s => s.id === activeSlide);

  const minId = slides[0]?.id ?? 1;
  const maxId = slides[slides.length - 1]?.id ?? 1;

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Вкладки */}
      <div className="flex items-center justify-between border-b px-6">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Кнопки переключения слайдов */}
        <SlideNav 
          activeSlide={activeSlide} 
          setActiveSlide={setActiveSlide} 
          minId={minId} 
          maxId={maxId} 
        />
      </div>

      {/* Основная область */}
      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar
          slides={slides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
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
