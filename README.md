# Lesson Viewer

A simple lesson viewer application built with **React**, **TypeScript**, and **shadcn/ui** components.  
It allows navigation between slides, displays slide content, and supports multiple tabs.

## Features

- Navigate between slides using previous/next buttons.  
- Sidebar with a list of slides and their statuses.  
- Custom icons for different slide types (Task, Theory, Video, Test).  
- Tabs for organizing lesson sections: Main, Tasks, Results, Links, Stats.  
- Smooth UI interactions using **shadcn/ui** components.  
- Fully responsive layout.

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├─ components/
│  ├─ LessonPage.tsx       # Main lesson page layout
│  ├─ Sidebar.tsx          # Slide navigation sidebar
│  ├─ Tabs.tsx             # Tabs component
│  ├─ SlideContent.tsx     # Slide content renderer
│  ├─ SlideNav.tsx         # Previous/Next buttons (shadcn/ui)
├─ data/
│  ├─ lessonType.ts        # Slide data
│  ├─ tabs.ts              # Tab definitions
├─ types/
│  ├─ lesson.ts            # Type definitions for slides
│  ├─ props.ts             # Component props interfaces
├─ utils/
│  ├─ Icons.ts             # Function to get slide type icons
```

## Usage

Import `LessonPage` into your app:

```tsx
import LessonPage from "@/components/LessonPage";

export default function App() {
  return <LessonPage />;
}
```

The sidebar and slide navigation are fully controlled via React state:

```ts
const [activeSlide, setActiveSlide] = useState(1);
const [activeTab, setActiveTab] = useState("main");
```

## Styling

- Buttons and tabs use **shadcn/ui** components.  
- Custom colors, hover states, and disabled states are applied via `className`.  
- Tabs maintain straight edges (no oval rounding).

## Dependencies

- [React](https://reactjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Lucide React](https://lucide.dev/) for icons

