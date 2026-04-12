import { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{
        background: scrolled
          ? "rgba(0, 0, 0, 0.95)"
          : "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        padding: "12px 0"
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <a href="#home" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="GETP Enviro"
            style={{
              height: "50px",
              borderRadius: "6px"
            }}
          />
        </a>

        {/* Links */}
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link nav-custom" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-custom" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-custom" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-custom" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-custom" href="#contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;