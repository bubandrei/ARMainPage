import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import stNavbar from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>Коталог домов</div>
        <div>Услуги</div>
        <div>О нас</div>
        <a href="">Контакты</a>
        <div>Блог</div>
        <button>
          <FaTimes/>
        </button>
      </nav>
      <button>
        <FaBars/>
      </button>
    </header>
  );
};
export default Navbar;
