import type { Slide } from "@/types/lesson";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Командировка",
    type: "Задача",
    status: "done",
    content: "Описание задачи про командировку...",
  },
  {
    id: 2,
    title: "Переупорядочивание массива",
    type: "Теория",
    status: "error",
    content: "Теория по алгоритмам переупорядочивания массива...",
  },
  {
    id: 3,
    title: "Круги Эйлера",
    type: "Теория",
    status: "default",
    content: "Круги Эйлера — это геометрическая схема...",
  },
  {
    id: 4,
    title: "Философия",
    type: "Видео",
    status: "done",
    content: "Video",
  },
  {
    id: 5,
    title: "Итоговый тест",
    type: "Тест",
    status: "default",
    content: "Тест по пройденным темам...",
  },
];
