import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Normalize.css";
import "./App.css";
import PageHome from "./Pages/PageHome.js";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Components/Footer";
import Works from "./Pages/Components/Works";
import Work from "./Pages/Components/Work";
import About from "./Pages/Components/About";
import Contact from "./Pages/Components/Contact";
import ScrollTop from "./Pages/Components/ScrollTop";
import ReactGA from "react-ga";
import RouteChangeTracker from "./RouteChangeTracker";

const TRACKING_ID = "G-20YS0M7Y4T"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function AppRouter() {
  return (
    <div className="AppRouter">
      <RouteChangeTracker />
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
