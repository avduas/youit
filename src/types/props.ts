import type { Slide, SlideType } from "./lesson";

// Пропсы для Sidebar
export interface SidebarProps {
  slides: Slide[];
  activeSlide: number;
  setActiveSlide: (id: number) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  getTypeIcon: (type: SlideType) => React.ReactNode;
}

// Пропсы для Tabs
export interface TabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  tabs: { id: string; label: string }[];
}

// Пропсы для SlideContent
export interface SlideContentProps {
  currentSlide: Slide | undefined;
}
