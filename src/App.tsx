import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonPage from "./pages/LessonPage";
import Lesson1 from "./pages/Lesson1";
import Results from "./pages/Results";
import Send from "./pages/Send";
import Stat from "./pages/Stat";
import Layout from "./Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LessonPage />} />
          <Route path="/lesson" element={<Lesson1 />} />
          <Route path="/result" element={<Results />} />
          <Route path="/link" element={<Send />} />
          <Route path="/stat" element={<Stat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
