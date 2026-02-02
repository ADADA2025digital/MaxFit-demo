import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/Styles/Style.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Therapist from "./pages/Therapist";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTopUp from "./components/ScrollToTopUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/service"
          element={<div>Service/physiotherapist Page</div>}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/physiotherapist" element={<Therapist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ScrollToTopUp />
    </div>
  );
}

export default App;
