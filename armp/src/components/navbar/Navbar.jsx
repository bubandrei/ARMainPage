import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import stNavbar from "./Navbar.module.css";

const Navbar = () => {
  
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  };
  return (
    <header>
      <nav ref={navRef}>
        <a>Коталог домов</a>
        <a>Услуги</a>
        <a>О нас</a>
        <a href="">Контакты</a>
        <a>Блог</a>
        <button onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Navbar;
