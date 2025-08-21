import type { Slide } from "@/types/lesson";

type Props = {
  slide?: Slide;
};

export default function SlideContent({ slide }: Props) {
  if (!slide) return null;

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-sm font-medium text-gray-500">
          Слайд {slide.id.toString().padStart(2, "0")} - {slide.type} |{" "}
          <span className="text-sm font-semibold text-gray-900">
            {slide.title}
          </span>
        </h1>
      </div>

      <div className="text-base text-gray-800 leading-relaxed space-y-4">
        {slide.content}
      </div>
    </div>
  );
}
