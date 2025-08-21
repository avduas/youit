export type SlideType = "Задача" | "Теория" | "Видео" | "Тест";

export type SlideStatus = "done" | "error" | "default";

export interface SlideContentBlock {
  type: "p" | "h2" | "h3";
  text: string;
}

export interface Slide {
  id: number;
  title: string;
  type: SlideType;
  status?: SlideStatus;
  content: SlideContentBlock[];
}

export interface Tab {
  id: string;
  label: string;
}
