import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { faqData, pageBannerData } from "../constants/Data";
import Banner from "../components/Banner";
import ScrollingInfo from "../components/ScrollingInfo";
import CustomButton from "../components/Button";
import ReviewSection from "../components/ReviewSection";
import { Figure } from "react-bootstrap";
import Therapist1 from "../assets/Images/maxfit-physiotherapy-priyanka-verma.jpg";
import Award1 from "../assets/Images/icon-award-1.svg";
import Award2 from "../assets/Images/icon-award-2.svg";
import Award3 from "../assets/Images/icon-award-3.svg";
import Award4 from "../assets/Images/icon-award-4.svg";
import Calender from "../assets/Images/icon-cta.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import FAQAccordion from "../components/FAQAccordion";

const Therapist = () => {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          Therapist | MAXFIT Physiotherapy | Personalised Physiotherapy &
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
        {/* Banner Section */}
        <Banner bannerData={pageBannerData.therapist} />

        {/* Profile Section */}
        <section className="py-5">
          <div className="container rounded-5 d-flex flex-column flex-md-row">
            {/* Image Section */}
            <Figure className="image-anime reveal box position-relative d-inline-flex overflow-hidden col-12 col-md-5 white-back rounded-start-5 image-figure therapist-image">
              <img
                src={Therapist1}
                alt="Physiotherapy"
                className="img-fluid therapist-image"
              />
            </Figure>

            {/* Content Section */}
            <div
              className="col-12 col-md-7 back-dark d-flex flex-column p-5 justify-content-center rounded-end-5"
              style={{ height: "600px" }}
            >
              <div>
                <h1 className="text-white heading">Priyanka Verma</h1>
                <h6 className="text-white">
                  Founder & Principal Physiotherapist
                </h6>
                <p className="text-white mt-5 fs-5">
                  With over 20 years of clinical experience, Priyanka Verma is
                  known for a holistic and client-focused approach grounded in
                  evidence-based care. She has worked across diverse healthcare
                  settings, managed complex caseloads, and led multidisciplinary
                  teams with excellence. Her focus spans musculoskeletal care,
                  women’s health, and aged care—supporting clients to reduce
                  pain, restore mobility, and maintain long-term independence.
                </p>
              </div>

              <motion.div
                className="d-flex mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ul className="text-white fs-5 list-unstyled ">
                  <li>
                    <span>Position:</span>
                  </li>
                  <li className="mt-2">
                    <span>Experience:</span>
                  </li>
                  <li className="mt-2">
                    <span>Special Interests:</span>
                  </li>
                </ul>

                <ul className="text-white fs-5 list-unstyled ms-3">
                  <li>
                    <span>Principal Physiotherapist</span>
                  </li>
                  <li className="mt-2">
                    <span>20+ Years</span>
                  </li>
                  <li className="mt-2">
                    <span>Musculoskeletal • Women’s Health • Aged Care</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="d-flex align-items-center gap-4 d-none d-md-flex mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://www.facebook.com/maxfitphysiotherapy/"
                  className="text-white social-icon"
                  aria-label="Visit Maxfit Physiotherapy on Facebook"
                >
                  <i className="bi bi-facebook fs-5" aria-hidden="true"></i>
                </a>

                {/* <a
                  href="#"
                  className="text-white social-icon"
                  aria-label="Visit Maxfit Physiotherapy on Twitter"
                >
                  <i className="bi bi-twitter fs-5" aria-hidden="true"></i>
                </a> */}

                <a
                  href="https://www.instagram.com/maxfit.physiotherapy/"
                  className="text-white social-icon"
                  aria-label="Visit Maxfit Physiotherapy on Instagram"
                >
                  <i className="bi bi-instagram fs-5" aria-hidden="true"></i>
                </a>

                {/* <a
                  href="#"
                  className="text-white social-icon"
                  aria-label="Visit Maxfit Physiotherapy on YouTube"
                >
                  <i className="bi bi-youtube fs-5" aria-hidden="true"></i>
                </a> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Personal Info Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="custom-border rounded-5 p-4">
                  <h2 className="mb-3 heading dark-text fw-bold">
                    Personal Info
                  </h2>
                  <p className="mb-3 para">
                    Priyanka Verma is the Founder & Principal Physiotherapist at
                    MAXFIT Physiotherapy, with over 20 years of clinical
                    experience across diverse healthcare settings. She is known
                    for a holistic, client-focused approach that combines
                    clinical excellence with genuine compassion.
                  </p>
                  <p className="para">
                    Priyanka is passionate about musculoskeletal care, women’s
                    health, and aged care. Her goal is to help every client
                    reduce pain, restore movement, improve mobility, and
                    maintain long-term independence through personalised,
                    evidence-based treatment plans.
                  </p>
                </div>

                <motion.div
                  className="mt-5 custom-border rounded-5 px-4 pb-5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-3 heading fw-bold dark-text mt-4">
                    Professional Recognition & Training
                  </h2>
                  <p className="mb-4 para">
                    Priyanka’s practice is grounded in integrity, empathy, and
                    clinical excellence. She is committed to continuous
                    professional development and advanced training in areas
                    including pelvic floor therapy, chronic pain management, and
                    musculoskeletal rehabilitation—ensuring every client
                    receives evidence-based, up-to-date care.
                  </p>

                  <div className="row">
                    <div className="col-6 border-end border-bottom d-flex justify-content-center p-3">
                      <img src={Award1} alt="Award 1" className="img-fluid" />
                    </div>
                    <div className="col-6 border-start border-bottom d-flex justify-content-center p-3">
                      <img src={Award2} alt="Award 2" className="img-fluid" />
                    </div>
                    <div className="col-6 border-end border-top d-flex justify-content-center p-3">
                      <img src={Award3} alt="Award 3" className="img-fluid" />
                    </div>
                    <div className="col-6 border-start border-top d-flex justify-content-center p-3">
                      <img src={Award4} alt="Award 4" className="img-fluid" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="custom-border rounded-5 px-4 pb-5">
                  <h2 className="mb-4 dark-text heading fw-bold pt-4">
                    Professional Skills
                  </h2>

                  {[
                    { skill: "Clinical Assessment & Diagnosis", value: "95%" },
                    {
                      skill: "Manual Therapy & Soft Tissue Techniques",
                      value: "95%",
                    },
                    {
                      skill: "Chronic Pain Education & Management",
                      value: "92%",
                    },
                    {
                      skill: "Exercise Therapy & Rehabilitation",
                      value: "94%",
                    },
                    { skill: "Posture & Movement Retraining", value: "90%" },
                    {
                      skill: "Women’s Health & Pelvic Floor Care",
                      value: "88%",
                    },
                  ].map((item, i) => (
                    <motion.div
                      className="mb-4"
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="d-flex justify-content-between">
                        <span className="dark-text fs-5">{item.skill}</span>
                        <span className="dark-text fs-5">{item.value}</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar back-light"
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="custom-border rounded-5 p-4 mt-5"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="d-flex align-items-start gap-3 p-2">
                    <div
                      className={`service-card__icon icon-bg mb-4 rounded-3 p-3 d-flex align-items-center justify-content-center `}
                    >
                      <img src={Calender} alt="{title}" className="p-2" />
                    </div>
                    <div>
                      <h3 className="heading dark-text mb-4 pb-3">
                        Ready to move better, live stronger?
                      </h3>
                      <p className="mb-4 para pb-3">
                        Book your initial consultation at MAXFIT Physiotherapy
                        and receive a personalised, evidence-based plan to
                        relieve pain, restore movement, and build long-term
                        confidence in your body.
                      </p>
                      <CustomButton
                        text="Book Appointment"
                        icon={<i className="bi bi-arrow-right"></i>}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
<section className="py-5 position-relative about-section">
  <div className="container position-relative z-1">
    <FAQAccordion items={faqData} />
  </div>
</section>

        {/* Review */}
        <ReviewSection />

        {/* Scrolling  Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default Therapist;
