import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

// function App() {
//   return (
//
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
