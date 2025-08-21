import type { Slide } from "@/types/lesson";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Командировка",
    type: "Задача",
    status: "done",
    content: [
      { type: "p", text: "Описание задачи про командировку..." },
      { type: "p", text: "Дополнительная информация по задаче." },
    ],
  },
  {
    id: 2,
    title: "Переупорядочивание массива",
    type: "Теория",
    status: "error",
    content: [
      { type: "h2", text: "Теоретическая часть" },
      { type: "p", text: "Теория по алгоритмам переупорядочивания массива..." },
      { type: "h3", text: "Примеры решений." },
    ],
  },
  {
    id: 3,
    title: "Круги Эйлера",
    type: "Теория",
    status: "default",
    content: [
      { type: "h2", text: "Теоретическая часть" },
      { type: "p", text: "Теория по алгоритмам переупорядочивания массива..." },
      { type: "p", text: "Примеры решений." },
    ],
  },
  {
    id: 4,
    title: "Философия",
    type: "Видео",
    status: "done",
    content: [
      { type: "h2", text: "Теоретическая часть" },
      { type: "p", text: "Теория по алгоритмам переупорядочивания массива..." },
      { type: "p", text: "Примеры решений." },
    ],
  },
  {
    id: 5,
    title: "Итоговый тест",
    type: "Тест",
    status: "default",
    content: [
      { type: "h2", text: "Теоретическая часть" },
      { type: "p", text: "Теория по алгоритмам переупорядочивания массива..." },
      { type: "p", text: "Примеры решений." },
    ],
  },
];
