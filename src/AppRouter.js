import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./App.css";
import PageHome from "./Pages/PageHome.js";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";
import Works from "./Pages/Components/Works";

function AppRouter() {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/works" element={<Works />}>
              {/* <Route path="/works/:id" element={<Work />} /> */}
            </Route>
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
