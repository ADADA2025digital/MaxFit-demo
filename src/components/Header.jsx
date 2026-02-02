import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Images/maxfit-physiotherapy-logo.png";
import CustomButton from "../components/Button";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home", hasActiveState: true },
    { path: "/about-us", label: "About Us", hasActiveState: true },
    { path: "/physiotherapist", label: "Physiotherapist", hasActiveState: true },
    { path: "/blog", label: "Blog", hasActiveState: true },
    { path: "/contact-us", label: "Contact Us", hasActiveState: true },
  ];

  const socialLinks = [
    {
      icon: "bi-facebook",
      href: "https://www.facebook.com/maxfitphysiotherapy/",
      label: "Visit Maxfit Physiotherapy on Facebook",
    },
    // {
    //   icon: "bi-twitter",
    //   href: "#",
    //   label: "Visit Maxfit Physiotherapy on Twitter",
    // },
    {
      icon: "bi-instagram",
      href: "https://www.instagram.com/maxfit.physiotherapy/",
      label: "Visit Maxfit Physiotherapy on Instagram",
    },
    // {
    //   icon: "bi-youtube",
    //   href: "#",
    //   label: "Visit Maxfit Physiotherapy on YouTube",
    // },
  ];

  const contactInfo = [
    {
      icon: "bi-telephone-fill",
      text: "0433 642 826",
      href: "tel:0433 642 826",
      label: "Call Maxfit Physiotherapy at 0433 642 826",
    },
    {
      icon: "bi-envelope-fill",
      text: "info@maxfitphysiotherapy.com.au",
      href: "mailto:info@maxfitphysiotherapy.com.au",
      label: "Email Maxfit Physiotherapy at info@maxfitphysiotherapy.com.au",
    },
    {
      icon: "bi-geo-alt-fill",
      text: "37 Desborough Rd, Colyton NSW 2760",
      href: "https://share.google/kFS4e9obTS31nF560",
      label: "View Maxfit Physiotherapy location on Google Maps",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // Only apply scroll effect on desktop
      if (!isMobile) {
        setIsScrolled(scrollTop > 100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const closeOffcanvas = () => {
    if (typeof document !== "undefined") {
      const offcanvas = document.querySelector(".offcanvas.show");
      if (offcanvas) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasInstance.hide();
      }
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="fixed-top">
          {/* Top Bar (Desktop only) */}
          <section
            className={`back-dark d-none d-lg-block transition-all duration-300 ${
              !isMobile && isScrolled
                ? "transform -translate-y-full opacity-0"
                : "transform translate-y-0 opacity-100"
            }`}
          >
            <div className="container d-flex justify-content-center justify-content-md-between align-items-center py-2">
              <div className="d-flex align-items-center gap-5">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <i className={`${contact.icon} me-2 text-white fs-5`}></i>
                    <a
                      href={contact.href}
                      target={
                        contact.icon === "bi-geo-alt-fill"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        contact.icon === "bi-geo-alt-fill"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={contact.text}
                      className="text-white text-decoration-none"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white social-icon"
                    aria-label={social.label}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel={
                      social.href !== "#" ? "noopener noreferrer" : undefined
                    }
                  >
                    <i className={`${social.icon} fs-5`} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Single Main Navigation - Works for both Desktop and Mobile */}
          <nav
            className={`navbar navbar-expand-lg navbar-light  bg-white shadow-sm  ${
              // Only apply scroll effect classes on desktop
              !isMobile && isScrolled ? "py-0 scroll-fixed-navbar" : "py-0"
            }`}
          >
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/" aria-label="Go to MaxFit home page">
                {/* Only change logo height on desktop scroll */}
                <img
                  src={logo}
                  alt="Logo"
                  height={!isMobile && isScrolled ? "70" : "70"}
                  
                />
              </Link>

              <button
                className="navbar-toggler d-lg-none navbar-dark back-dark rounded-3 border-0 py-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Open navigation menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto gap-4">
                  {navigationItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link
                        className={`nav-link fw-semibold dark-text heading ${
                          item.hasActiveState && location.pathname === item.path
                        }`}
                        to={item.path}
                        aria-label={`Go to ${item.label} page`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-none d-lg-flex align-items-center">
                <CustomButton
                  text="0433 642 826"
                  icon={<FaPhoneAlt />}
                  href="tel:0433 642 826"
                />
              </div>
            </div>
          </nav>

          {/* Offcanvas Menu */}
          <div
            className="offcanvas offcanvas-end w-100 p-3 "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/" onClick={closeOffcanvas} aria-label="Go to Maxfit Physiotherapy home page">
                <img
                  src={logo}
                  alt="Logo"
                  height="60"
                  
                />
              </Link>
              <button
                type="button"
                className="btn-close fs-1"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-center">
              <ul className="navbar-nav text-center gap-4">
                {navigationItems.map((item, index) => (
                  <li key={index} className="nav-item mb-4">
                    <Link
                      className={`nav-link fw-semibold fs-3 ${
                        item.hasActiveState && location.pathname === item.path
                      }`}
                      to={item.path}
                      onClick={closeOffcanvas}
                      aria-label={`Go to ${item.label} page`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-center">
                <div className="d-flex align-items-center gap-4 justify-content-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="dark-text social-icon"
                      aria-label={social.label}
                      target={social.href !== "#" ? "_blank" : undefined}
                      rel={
                        social.href !== "#" ? "noopener noreferrer" : undefined
                      }
                    >
                      <i
                        className={`${social.icon} fs-5`}
                        aria-hidden="true"
                      ></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
