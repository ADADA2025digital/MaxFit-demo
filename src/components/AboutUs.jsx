import React from "react";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import CustomButton from "./Button";
import useCounterAnimation from "../hooks/useCounterAnimation";
import aboutImg from "../assets/Images/about-img.jpg";
import iconExperience from "../assets/Images/icon-experience.svg";
import iconAboutUs1 from "../assets/Images/icon-about-us-1.svg";
import iconAboutUs2 from "../assets/Images/icon-about-us-2.svg";
import iconAboutUs3 from "../assets/Images/icon-about-us-3.svg";
import iconAboutUs4 from "../assets/Images/icon-about-us-4.svg";
import aboutDoctorImg from "../assets/Images/maxfit-physiotherapy-priyanka-verma.jpg";
import aboutUsBg from "../assets/Images/about-us-bg.svg";

const AboutUs = () => {
  const [experienceCount, experienceRef] = useCounterAnimation(20, 2500, 0);

  return (
    <section className="py-5 position-relative about-section">
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="position-relative z-2"
            >
              <Figure className="image-anime reveal box rounded-5 position-relative d-inline-flex  overflow-hidden image-anime1 image-figure ">
                <img
                  src={aboutImg}
                  alt="About Us"
                  className="img-fluid rounded-3 shadow w-100"
                  style={{ maxHeight: "700px" }}
                />
              </Figure>

              {/* Experience Badge */}
              <div className="position-absolute bottom-0 end-0 m-3 pe-5">
                <div
                  className="bg-white rounded-4 shadow-sm p-3 d-flex align-items-center mb-3 experience-badge"
                  ref={experienceRef}
                >
                  <img
                    src={iconExperience}
                    alt="Experience"
                    width="44"
                    height="74"
                    className="me-2"
                  />
                  <div>
                    <div className="fw-bold text-dark h2 text-start">
                      {experienceCount}+
                    </div>
                    <div className="text-muted">Years of Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6"
          >
            <div className="text-center text-lg-start">
              {/* Small Heading */}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
                  About Us
                </h6>
              </div>

              {/* Main Title */}
              <h1 className="mb-4 fw-bold display-5 heading">
                <span className="dark-text">Empowering You to</span> <br />
                <span className="light-text">Move Better, Live Stronger</span>
              </h1>

              {/* Paragraph */}
              <p className="mb-4 para">
                At MAXFIT Physiotherapy, we help people of all ages improve
                movement, build strength, and maintain independence. Our care is
                evidence-based, compassionate, and personalised to your
                goals-whether you're recovering from an injury, managing chronic
                pain, or working to move with confidence every day.
              </p>

              {/* Services Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
                className="row g-4 justify-content-center justify-content-lg-start"
              >
                {[
                  { icon: iconAboutUs1, text: "Manual Therapy & Pain Relief" },
                  {
                    icon: iconAboutUs2,
                    text: "Exercise Rehab & Strength Building",
                  },
                  { icon: iconAboutUs3, text: "Posture & Movement Retraining" },
                  { icon: iconAboutUs4, text: "Injury Prevention & Education" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-6 col-sm-6 col-lg-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-center justify-content-sm-start text-center text-sm-start">
                      <div className="me-sm-3 mb-2 mb-sm-0">
                        <img
                          src={item.icon}
                          alt={item.text}
                          width="40"
                          height="40"
                        />
                      </div>
                      <h6 className="mb-0 fw-semibold">{item.text}</h6>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {/* Doctor Profile Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-5 pt-4 border-top text-center text-lg-start"
              >
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
                  <div className="d-flex flex-column flex-sm-row align-items-center mb-3 mb-lg-0">
                    <img
                      src={aboutDoctorImg}
                      alt="Dr. Jamie Smith"
                      className="img-fluid rounded-circle shadow me-0 me-sm-3 mb-3 mb-sm-0"
                      style={{ width: "80px", height: "80px" }}
                    />

                    <div>
                      <h4 className="mb-1 dark-text">Priyanka Verma</h4>
                      <h6 className="mb-0 light-text">
                        Founder & Principal Physiotherapist
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-end">
                    <CustomButton
                      text="Book Appointment"
                      icon={<i className="bi bi-arrow-right"></i>}
                      href="/contact-us"
                      ariaLabel="Book an appointment with Maxfit Physiotherapy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
