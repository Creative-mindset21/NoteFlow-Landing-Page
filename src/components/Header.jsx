import { NavLink, Outlet } from "react-router-dom";
import { PiCirclesFour } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
import noise from "../assets/Noise.webp";
import { navLinks } from "../util/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`${isScrolled ? "bg-primary-1400" : "bg-transparent"} box`}
      >
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Noteflow logo" />
          <span>Noteflow</span>
        </div>

        {/* Navigation Links */}
        <nav
          style={{
            backgroundImage: `url(${noise})`,
          }}
          className={`nav bg-primary-1400 bg-blend-overlay ${isOpen ? "translate-x-0" : "translate-x-[120%]"} lg:translate-x-0`}
        >
          <button
            className="close-btn"
            aria-label="Close Menu"
            onClick={closeMenu}
          >
            <IoClose size={24} />
          </button>

          <ul className="nav-links">
            {navLinks.map(({ name, to, id }) => (
              <li key={id}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `leading-8 text-lg md:text-xl transition-opacity hover:opacity-80 ${
                      isActive
                        ? "text-primary-500 font-semibold"
                        : "font-light text-primary-50"
                    }`
                  }
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
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
