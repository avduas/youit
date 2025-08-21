export type SlideType = "Задача" | "Теория" | "Видео" | "Тест";

export type SlideStatus = "done" | "error" | "default";

export interface Slide {
  id: number;
  title: string;
  type: SlideType;
  status?: SlideStatus;
  content: string;
}

export interface Tab {
  id: string;
  label: string;
}
