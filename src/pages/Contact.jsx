import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Figure } from "react-bootstrap";
import Banner from "../components/Banner";
import CustomButton from "../components/Button";
import ScrollingInfo from "../components/ScrollingInfo";
import { pageBannerData } from "../constants/Data";
import ImageContact from "../assets/Images/contact-us-img.jpg";
import { Helmet } from "react-helmet-async";

export default function ContactInfo() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    subject: /^.{3,100}$/,
    message: /^.{10,}$/,
  };

  // Validation messages
  const validationMessages = {
    name: "Name must be 2-50 characters and contain only letters and spaces",
    email: "Please enter a valid email address",
    phone: "Please enter a valid phone number (10-15 digits)",
    subject: "Subject must be 3-100 characters",
    message: "Message must be at least 10 characters long",
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only validate live after the first submit attempt
    if (submitAttempted) {
      setErrors((prev) => {
        const updated = { ...prev };

        const trimmed = value.trim();

        if (!trimmed) {
          updated[name] = "Please fill out this field";
        } else if (
          validationPatterns[name] &&
          !validationPatterns[name].test(trimmed)
        ) {
          updated[name] = validationMessages[name];
        } else {
          updated[name] = "";
        }

        return updated;
      });
    }
  };

  // Validate form using only regex patterns
  const validateForm = () => {
    const newErrors = {};

    // Validate name using regex
    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field";
    } else if (!validationPatterns.name.test(formData.name.trim())) {
      newErrors.name = validationMessages.name;
    }

    // Validate email using regex
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field";
    } else if (!validationPatterns.email.test(formData.email.trim())) {
      newErrors.email = validationMessages.email;
    }

    // Validate phone using regex
    if (!formData.phone.trim()) {
      newErrors.phone = "Please fill out this field";
    } else if (!validationPatterns.phone.test(formData.phone.trim())) {
      newErrors.phone = validationMessages.phone;
    }

    // Validate subject using regex
    if (!formData.subject.trim()) {
      newErrors.subject = "Please fill out this field";
    } else if (!validationPatterns.subject.test(formData.subject.trim())) {
      newErrors.subject = validationMessages.subject;
    }

    // Validate message using regex (minimum 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field";
    } else if (!validationPatterns.message.test(formData.message.trim())) {
      newErrors.message = validationMessages.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setSubmitAttempted(false);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const contactItems = [
    {
      type: "location",
      icon: "bi bi-geo-alt-fill",
      title: "Location",
      content: "37 Desborough Rd, Colyton NSW 2760",
      badge: false,
    },
    {
      type: "email",
      icon: "bi bi-envelope-fill",
      title: "Email",
      content: (
        <>
          <a
            href="mailto:info@maxfitphysiotherapy.com.au"
            className="d-block para text-decoration-none"
            aria-label="Email Maxfit Physiotherapy at info@maxfitphysiotherapy.com.au"
          >
            info@maxfitphysiotherapy.com.au
          </a>
          {/* <a
            href="mailto:sales@domainname.com"
            className="d-block para text-decoration-none"
          >
            sales@domainname.com
          </a> */}
        </>
      ),
      badge: false,
    },
    {
      type: "phone",
      icon: "bi bi-telephone-fill",
      title: "Phone",
      content: (
        <>
          <a
            href="tel:0433642826"
            className="d-block para text-decoration-none"
            aria-label="Call Maxfit Physiotherapy on 0433 642 826"
          >
            0433 642 826
          </a>
          {/* <a
            href="tel:+02895867781"
            className="d-block para text-decoration-none"
          >
            (+02) 895 867 781
          </a> */}
        </>
      ),
      badge: false,
    },
    {
      type: "hours",
      icon: "bi bi-clock-fill",
      title: "Work Hours",
      content: (
        <>
          <div>Mon to Fri: 9:00 To 6:00 PM</div>
          <div>Sat: 9:00 AM To 1:00 PM</div>
          <div>Sun: Closed</div>
        </>
      ),
      badge: true,
    },
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Contact Us | MAXFIT Physiotherapy | Personalised Physiotherapy &
          Rehabilitation Care
        </title>

        <meta
          name="description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />

        <meta
          name="keywords"
          content="maxfit physiotherapy, physiotherapy near me, physiotherapy clinic near me, physiotherapy treatment, musculoskeletal physiotherapy, women’s health physiotherapy, elderly physiotherapy care, physiotherapy for arthritis, physiotherapy exercises, physiotherapy exercises for lower back pain, basic physiotherapy exercises, physical therapist vs physiotherapist, what is matrix therapy in physiotherapy, physiotherapy machine, chest physiotherapy, injury rehabilitation physiotherapy, chronic pain physiotherapy, post injury physiotherapy care, evidence based physiotherapy, personalised physiotherapy treatment"
        />

        <meta name="author" content="MAXFIT Physiotherapy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://maxfitphysiotherapy.com.au/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MAXFIT Physiotherapy | Expert, Personalised Physiotherapy Care"
        />
        <meta
          property="og:description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maxfitphysiotherapy.com/" />
        <meta property="og:site_name" content="MAXFIT Physiotherapy" />

        {/* Social Links */}
        <meta
          property="og:see_also"
          content="https://www.instagram.com/maxfit.physiotherapy/"
        />
        <meta
          property="og:see_also"
          content="https://www.facebook.com/maxfitphysiotherapy/"
        />

        {/* Facebook  */}
        <meta property="fb:app_id" content="#" />
        <meta
          property="fb:admins"
          content="https://www.facebook.com/maxfitphysiotherapy/"
        />

        {/* Instagram */}
        <meta name="instagram:title" content="MAXFIT Physiotherapy" />
        <meta
          name="instagram:description"
          content="MAXFIT Physiotherapy provides personalised, evidence-based care for injuries, mobility, women’s health, led by physiotherapist Priyanka Verma."
        />
        <meta name="instagram:site" content="maxfit.physiotherapy" />
      </Helmet>

      <div className="container-fluid p-0">
        <Banner bannerData={pageBannerData.contact} />

        <section className="py-5">
          <div className="container">
            <div className="row g-4 d-none d-md-flex">
              {/* Desktop Tablet view - cards */}
              {contactItems.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                  <div className="card h-100  shadow-sm rounded-4 custom-border">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-4 white-back bg-opacity-10 light-text mb-3 contact-icon-container">
                        <i className={`${item.icon} contact-icon`} />
                      </div>

                      <div className="d-flex align-items-center justify-content-center gap-2">
                        {item.badge && (
                          <span
                            className="badge bg-success rounded-circle p-1 contact-badge"
                            title="Open Now"
                          />
                        )}
                        <div className="card-text  mb-3 para">{item.title}</div>
                      </div>
                      <h6 className="card-title text-center fw-semibold dark-text">
                        {item.content}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile view - only icons in one row */}
            <div className="row d-flex d-md-none justify-content-center">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="col-auto d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="d-inline-flex align-items-center justify-content-center rounded-4 bg-success bg-opacity-10 text-success mb-3 contact-icon-container">
                    <i className={`${item.icon} contact-mobile-icon`} />
                  </div>
                  <p className="small mb-3 fw-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Figure className="image-anime reveal box rounded-5 w-100 image-figure">
                  <img
                    src={ImageContact}
                    className="img-fluid rounded-3 shadow w-100 contact-image"
                    alt="About Us"
                  />
                </Figure>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center mt-4 mt-md-0">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                  <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5">
                    Contact Us
                  </h6>
                </div>
                <h1 className="mb-4 fw-bold display-5">
                  <span className="light-text">Get </span>{" "}
                  <span className="dark-text">In Touch With Us</span>
                </h1>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Name"
                        className={`form-control p-3 ${errors.name ? "" : ""}`}
                      />
                      {errors.name && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email"
                        className={`form-control p-3 ${errors.email ? "" : ""}`}
                      />
                      {errors.email && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={`form-control p-3 ${errors.phone ? "" : ""}`}
                      />
                      {errors.phone && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={`form-control p-3 ${errors.subject ? " " : ""}`}
                      />
                      {errors.subject && (
                        <div className="fs-6 mt-1 text-danger">
                          {errors.subject}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Your Message"
                      className={`form-control p-3 ${errors.message ? "" : ""}`}
                    ></textarea>
                    {errors.message && (
                      <div className="text-danger mt-1">{errors.message}</div>
                    )}
                  </div>

                  <div className="ms-lg-auto mt-5">
                    <CustomButton
                      type="submit"
                      text={isSubmitting ? "Sending..." : "Send Message"}
                      icon={
                        !isSubmitting && <i className="bi bi-arrow-right"></i>
                      }
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 ">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1072882600074!2d150.7993807!3d-33.7837275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a9d8445d9cd%3A0xf8b4fc5ff5c9705c!2s37%20Desborough%20Rd%2C%20Colyton%20NSW%202760%2C%20Australia!5e0!3m2!1sen!2slk!4v1770023746070!5m2!1sen!2slk"
            width="100%"
            height="600"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <ScrollingInfo />
      </div>
    </>
  );
}
