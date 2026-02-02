import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/maxfit-physiotherapy-logo.png";

// Footer data arrays
const socialLinks = [
  {
    icon: "bi bi-facebook",
    href: "https://www.facebook.com/maxfitphysiotherapy/",
    platform: "Facebook",
    label: "Visit Maxfit Physiotherapy on Facebook",
  },
  // {
  //   icon: "bi bi-twitter",
  //   href: "#",
  //   platform: "Twitter",
  //   label: "Visit Maxfit Physiotherapy on Twitter",
  // },
  {
    icon: "bi bi-instagram",
    href: "https://www.instagram.com/maxfit.physiotherapy/",
    platform: "Instagram",
    label: "Visit Maxfit Physiotherapy on Instagram",
  },
  // {
  //   icon: "bi bi-youtube",
  //   href: "#",
  //   platform: "YouTube",
  //   label: "Visit Maxfit Physiotherapy on YouTube",
  // },
];

const workingHours = [
  { days: "Mon to Fri", time: "9:00 AM to 6:00 PM" },
  { days: "Sat", time: "9:00 AM to 1:00 PM" },
];

const moreServices = [
  { name: "Manual Therapy", href: "/physiotherapist" },
  { name: "Chronic Pain Management", href: "/physiotherapist" },
  { name: "Acute Pain", href: "/physiotherapist" },
  { name: "Exercise Therapy & Rehabilitation", href: "/physiotherapist" },
  { name: "Posture & Movement Retraining", href: "/physiotherapist" },
  { name: "Injury Prevention & Education", href: "/physiotherapist" },
  { name: "Post-Surgical Rehabilitation", href: "/physiotherapist" },
  { name: "Balance, Stability & Fall Prevention", href: "/physiotherapist" },
  { name: "Mobility & Functional Training", href: "/physiotherapist" },
];

const contactInfo = [
  {
    icon: "bi bi-telephone",
    text: "0433 642 826",
    href: "tel:0433642826",
    label: "Call Maxfit Physiotherapy at 0433 642 826",
    type: "phone",
  },
  {
    icon: "bi bi-envelope",
    text: "info@maxfitphysiotherapy.com.au",
    href: "mailto:info@maxfitphysiotherapy.com.au",
    label: "Email Maxfit Physiotherapy at info@maxfitphysiotherapy.com.au",
    type: "email",
  },
  {
    icon: "bi bi-geo-alt",
    text: "37 Desborough Rd, Colyton NSW 2760",
    href: "https://share.google/kFS4e9obTS31nF560",
    label: "View Maxfit Physiotherapy location on Google Maps",
    type: "address",
    external: true,
  },
];

const footerLinks = [
  { name: "About Us", href: "#", label: "Go to About Us page" },
  { name: "Services", href: "#", label: "Go to Services page" },
];

const half = Math.ceil(moreServices.length / 2);
const firstHalfServices = moreServices.slice(0, half);
const secondHalfServices = moreServices.slice(half);

const Footer = () => {
  return (
    <footer className="container-fluid back-dark" role="contentinfo">
      <div className="container pt-5">
        <div className="row">
          {/* Logo, Paragraph and Social Icons */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <div className="mb-3">
              <Link to="/" aria-label="Go to Maxfit Physiotherapy home page">
                <img src={logo} alt="Maxfit Physiotherapy logo" height="50" />
              </Link>
            </div>
            <p className="text-white mb-4 text-center text-md-start">
              At MAXFIT Physiotherapy, we help people of all ages move better,
              build strength, and maintain independence through compassionate,
              evidence-based, and personalised care.
            </p>

            <div className="d-flex">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-light ${
                    index < socialLinks.length - 1 ? "me-3" : ""
                  } social-icon`}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                >
                  <i className={`${social.icon} fs-5`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2rd Section - More Services */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="light-text mb-4 fw-bold">More Services</h5>
            <ul className="list-unstyled text-light">
              {firstHalfServices.map((service, index) => (
                <li key={index} className="mb-3 text-center text-md-start">
                  <a
                    href={service.href}
                    aria-label={`Learn more about ${service.name}`}
                    className="text-light text-decoration-none footer-service-link"
                  >
                    <i className="bi bi-arrow-right-short"></i>{service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd Section - More Services (Column 2) */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="light-text mb-4 fw-bold invisible">More Services</h5>
            {/* invisible heading keeps alignment equal */}
            <ul className="list-unstyled text-light">
              {secondHalfServices.map((service, index) => (
                <li key={index} className="mb-3 text-center text-md-start">
                  <a
                    href={service.href}
                    aria-label={`Learn more about ${service.name}`}
                    className="text-light text-decoration-none footer-service-link"
                  >
                    <i className="bi bi-arrow-right-short"></i>{service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Section - Contact */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex flex-column align-items-center align-items-md-start mt-3">
            <h5 className="fw-bold mb-4 light-text">Contact</h5>
            <div className="text-light d-flex flex-column align-items-center align-items-md-start mb-4 text-center text-md-start">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-${
                    contact.type === "address" ? "start" : "center"
                  } ${index < contactInfo.length - 1 ? "mb-3" : ""} ${
                    contact.type !== "address"
                      ? "text-center text-md-start"
                      : ""
                  }`}
                >
                  <i
                    className={`${contact.icon} me-3 ${
                      contact.type === "address" ? "mt-1" : ""
                    }`}
                    aria-hidden="true"
                  ></i>

                  <a
                    href={contact.href}
                    aria-label={contact.label}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="text-light text-decoration-none"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            <h5 className="light-text mb-4 fw-bold">Working Hours</h5>
            <div className="text-light">
              {workingHours.map((schedule, index) => (
                <div key={index} className="mb-3 text-center text-md-start">
                  <strong>{schedule.days}:</strong> {schedule.time}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-5 borderr-top">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="text-light mb-0">
                Copyright {new Date().getFullYear()} MAXFIT Physiotherapy. All Rights
                Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <p className="text-white">
                  {" "}
                  Web solution by{" "}
                  <a
                    href="https://addadigital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                    aria-label="ADADA Digital website"
                  >
                    ADADA Digital
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
