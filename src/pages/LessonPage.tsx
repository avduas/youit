import { useState } from "react";
import { slides } from "@/data/lessonType";
import type { Slide } from "@/types/lesson";
import { getTypeIcon } from "@/utils/Icons";
import SlideContent from "@/components/SlideContent";
import SlideNav from "@/components/SlideNav";
import Sidebar from "@/components/Sidebar";

export default function LessonPage() {
  const [activeSlide, setActiveSlide] = useState(slides[0]?.id ?? 1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentSlide: Slide | undefined = slides.find((s) => s.id === activeSlide);

  const minId = slides[0]?.id ?? 1;
  const maxId = slides[slides.length - 1]?.id ?? 1;

  return (
    <div className="flex h-full">
      <Sidebar
        slides={slides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        getTypeIcon={getTypeIcon}
      />

      {/* Контент */}
      <div className="flex-1 flex flex-row p-6 overflow-y-auto gap-4">
        <div className="flex-1">
          {currentSlide && <SlideContent slide={currentSlide} />}
        </div>

        <div className="flex flex-col gap-2 justify-start">
          <SlideNav
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            minId={minId}
            maxId={maxId}
          />
        </div>
      </div>
    </div>
  );
}
