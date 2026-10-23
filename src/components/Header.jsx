import { createPortal } from "react-dom";

import logo from "../assets/logo.svg";
import { navLinks } from "../../util/data";
import { NavLink } from "react-router-dom";
import { PiCirclesFour } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const headerId = document.getElementById("header");
  if (!headerId) return null;

  return createPortal(
    <>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Noteflow logo" />
        <span>Noteflow</span>
      </div>

      {/* Navigation Links */}

      <nav className={`${isOpen ? "translate-x-0" : "translate-x-[120%]"} nav`}>
        <button
          className="close-btn"
          aria-label="Close Menu"
          onClick={closeMenu}
        >
          <IoClose size={30} />
        </button>

        <ul className="nav-links">
          {navLinks.map(({ name, to, id }) => (
            <li key={id}>
              <NavLink
                to={to}
                className="leading-8 text-lg md:text-xl font-light"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Only shown on small devices */}
        <div className="flex flex-col items-center w-full mt-auto text-center gap-6 lg:hidden">
          <button className="btn">Login</button>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </nav>

      {/* Blur Background */}
      <div
        className={`blur-background ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Header Button */}
      <div className="items-center gap-4 hidden lg:flex">
        <button className="btn">Login</button>
        <button className="btn btn-secondary">Get Started</button>
      </div>

      <button className="cursor-pointer lg:hidden" onClick={openMenu}>
        <PiCirclesFour size={30} />
      </button>
    </>,
    headerId
  );
};

export default Header;
