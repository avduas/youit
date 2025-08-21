import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideNavProps = {
  activeSlide: number;
  setActiveSlide: (id: number) => void;
  minId: number;
  maxId: number;
};

export default function SlideNav({
  activeSlide,
  setActiveSlide,
  minId,
  maxId,
}: SlideNavProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setActiveSlide(Math.max(activeSlide - 1, minId))}
        disabled={activeSlide === minId}
        className="bg-[#EDF6FF] text-[#4597F7] hover:bg-[#4597F7] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setActiveSlide(Math.min(activeSlide + 1, maxId))}
        disabled={activeSlide === maxId}
        className="bg-[#EDF6FF] text-[#4597F7] hover:bg-[#4597F7] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
}
