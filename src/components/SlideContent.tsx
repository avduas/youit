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
        {slide.content.map((block, i) => {
          switch (block.type) {
            case "p":
              return <p key={i}>{block.text}</p>;
            case "h2":
              return <h2 key={i} className="font-bold text-lg">{block.text}</h2>;
            case "h3":
              return <h3 key={i} className="font-semibold text-base">{block.text}</h3>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
