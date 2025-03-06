import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Contact from "./contact.jsx";
import Diranode from "./diranode.jsx";
import ErrorPage from "./ErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/diranode" element={<Diranode />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
