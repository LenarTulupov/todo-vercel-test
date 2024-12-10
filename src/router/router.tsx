import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/page";
import PagesLayout from "../layouts/pages-layout/pages-layout";
import AboutPage from "../pages/about/page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
