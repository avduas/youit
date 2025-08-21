import { BookOpen, FileEdit, PlayCircle, ClipboardCheck } from "lucide-react";
import type { SlideType } from "@/types/lesson";

export const getTypeIcon = (type: SlideType) => {
  switch (type) {
    case "Задача":
      return <FileEdit className="w-5 h-5 text-gray-500" />;
    case "Теория":
      return <BookOpen className="w-5 h-5 text-gray-500" />;
    case "Видео":
      return <PlayCircle className="w-5 h-5 text-gray-500" />;
    case "Тест":
      return <ClipboardCheck className="w-5 h-5 text-gray-500" />;
    default:
      return null;
  }
};
