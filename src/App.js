import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Home from "./components/home/Home";
import Book from "./components/book/Book";
import Menu from "./components/menu/Menu";
import NotFound from "./components/NotFound";
import NavbarNew from "./components/navbar/NavbarNew";
import {BiCopyright} from 'react-icons/bi';
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    AOS.init({ duration:1000 })
}, [])
  return (
    <Router>
     <NavbarNew />
     <div clasName="pages">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </div>
     <div className="footer">
          <span style={{fontSize:20,fontWeight:"bold",paddingRight:10}}><BiCopyright />Avijit Chakraborty</span>
          <div data-aos="zoom-in-up" style={{display: "inline"}}>
          <ScrollToTop />
          </div>
      </div>
    </Router>
  );
}









