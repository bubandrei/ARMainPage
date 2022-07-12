import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () =>
{
  const navRef = useRef();
  const showNavbar = () =>
  {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
        <div><a>Коталог домов</a></div>
        <div><a>Услуги</a></div>
        <div><a>О нас</a></div>
        <div><a>Контакты</a></div>
        <div><a>Блог</a></div>
        {/* <button
          className='nav_btn nav_close_btn'
          onClick={showNavbar}
        >
          <FaTimes />
        </button> */}

      {/* <button 
      className='nav_btn'
      onClick={showNavbar}>
        <FaBars />
      </button> */}
    </header>
  );
};
export default Navbar;
