import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <nav className='main'
      ref={navRef}>
        <a>Коталог домов</a>
        <a>Услуги</a>
        <a>О нас</a>
        <a href="">Контакты</a>
        <a>Блог</a>
        {/* <button
          className='nav_btn nav_close_btn'
          onClick={showNavbar}
        >
          <FaTimes />
        </button> */}
      </nav>
      {/* <button 
      className='nav_btn'
      onClick={showNavbar}>
        <FaBars />
      </button> */}
    </header>
  );
};
export default Navbar;
