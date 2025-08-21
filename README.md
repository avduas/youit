Lesson Viewer

An interactive lesson page with slide navigation, a sidebar, and tabs.

Overview

This project allows viewing educational slides with different content types:

Tasks

Theory

Video

Tests

Features:

Tabs to switch between lesson sections.

Sidebar with slide thumbnails and status indicators.

Step-by-step slide navigation.

Responsive and modern UI styling with Tailwind CSS.

Icons for different slide types using lucide-react.

Technologies

React + TypeScript

Tailwind CSS

lucide-react for icons

Vite / Next.js (depending on project setup)

Project Structure
src/
├─ components/
│  ├─ LessonPage.tsx       # Main lesson page
│  ├─ Sidebar.tsx          # Sidebar with slides
│  ├─ Tabs.tsx             # Tabs component
│  └─ SlideContent.tsx     # Slide content
├─ data/
│  ├─ lessonType.ts        # Array of slides
│  └─ tabs.ts              # Array of tabs
├─ types/
│  ├─ lesson.ts            # Slide, SlideType, and Tab types
│  └─ props.ts             # Component props types
└─ utils/
   └─ Icons.ts             # getTypeIcon function for slide icons

Installation
git clone <repo-url>
cd lesson-viewer
npm install

Running the Project
npm run dev   # start development server
npm run build # build the project

Usage

Open the lesson page.

Navigate between slides using the arrow buttons or the sidebar.

Use tabs to switch between lesson sections.

Slide status is displayed with color indicators (done / error / default).

Customizing Slides and Tabs

src/data/lessonType.ts — add or modify slides.

src/data/tabs.ts — change tab labels or order.

Each slide has a SlideType:
"Task" | "Theory" | "Video" | "Test"