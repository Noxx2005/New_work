import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/photo_2025-02-03_21-36-40.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-content">
        <a href="/" className={`logo ${isScrolled ? "logo-scrolled" : ""}`}>
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="/" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
            Home
          </a>
          <a href="/Industries" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
            Data
          </a>
          <a href="/IT" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
          IT Support
          </a>
          <a href="/features" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
            Our Service
          </a>
          <a href="/Virtual" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
            About Us
          </a>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
