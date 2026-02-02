import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";
import { Figure } from "react-bootstrap";
import { motion } from "framer-motion";
import heroVideo from "../assets/Videos/hero-bg-video.mp4";
import CustomButton from "../components/Button";
import AboutUs from "../components/AboutUs";
import ServiceCard from "../components/ServiceCard";
import ReviewSection from "../components/ReviewSection";
import NewsBlogCard from "../components/NewsBlogCard";
import HeroFeatureCard from "../components/HeroFeatureCard";
import ScrollingInfo from "../components/ScrollingInfo";
import {
  galleryData,
  statisticsData,
  painTypesData,
  blogData,
  heroFeaturesData,
  whyUsLeftData,
  whyUsRightData,
  services,
} from "../constants/Data";
import useCounterAnimation from "../hooks/useCounterAnimation";
import solutionPlanImg1 from "../assets/Images/solution-plan-img-1.jpg";
import solutionPlanImg2 from "../assets/Images/solution-plan-img-2.jpg";
import servicicon7 from "../assets/Images/icon-cta.svg";
import whyUsImg from "../assets/Images/why-us-img.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const counters = statisticsData.map((stat) =>
    useCounterAnimation(stat.targetValue, 2000, 0),
  );

  const [inView1, setInView1] = useState(false);
  const [inView2, setInView2] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imageRef1.current && entry.isIntersecting) {
            setInView1(true);
          }
          if (entry.target === imageRef2.current && entry.isIntersecting) {
            setInView2(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (imageRef1.current) observer.observe(imageRef1.current);
    if (imageRef2.current) observer.observe(imageRef2.current);

    return () => {
      if (imageRef1.current) observer.unobserve(imageRef1.current);
      if (imageRef2.current) observer.unobserve(imageRef2.current);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("painTypesCarousel");
    if (!el) return;

    // Create or reuse an instance; enable touch + wrap, no auto cycling
    const instance = Carousel.getOrCreateInstance(el, {
      interval: false,
      ride: false,
      touch: true,
      pause: false,
      wrap: true,
      keyboard: true,
    });

    return () => instance?.dispose();
  }, []);

  const ctaCard = {
    img: servicicon7,
    title: "Ready to feel better and move with confidence?",
    description:
      "Book your appointment today and receive personalised, evidence-based care focused on long-term results.",
  };

  // Desktop layout: row1 = first 4, row2 = next 2 + CTA
  const desktopRow1 = services.slice(0, 4);
  const desktopRow2 = services.slice(4, 6);

  // Mobile carousel: all services + CTA
  const mobileSlides = [...services, ctaCard];

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>
          MAXFIT Physiotherapy | Personalised Physiotherapy & Rehabilitation
          Care
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
        {/* Hero Section */}
        <section className="hero-section position-relative py-5 vh-100 align-items-center d-flex justify-content-center ">
          <video
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Background Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

          {/* Hero Content */}
          <div className=" position-relative text-center text-white d-flex flex-column align-items-center justify-content-center h-100 px-3 px-md-0 ">
            <div className="pb-0 pb-md-5 pt-0 pt-md-5">
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="d-flex align-items-center justify-content-center mb-3"
              >
                <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading mt-0 mt-md-4">
                  Welcome to MAXFIT Physiotherapy
                </h6>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="d-flex align-items-center justify-content-center"
              >
                <p className="display-1 fw-bold">
                  <span className="text-white heading">
                    Move Better <br /> Live Stronger
                  </span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="d-flex align-items-center justify-content-center mt-3"
              >
                <p className="text-white h5 lh-base">
                  Personalised, evidence-based physiotherapy to relieve pain,
                  restore mobility,
                  <br />
                  and help you return to the activities you love - with care you
                  can trust.
                  <br />
                  <span className="fw-semibold">
                    Supporting all ages with personalised care, from recovery{" "}
                    <br /> to long-term wellbeing.
                  </span>
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-4 gap-3 mb-0 mb-md-5 pb-0 pb-md-3"
              >
                <CustomButton
                  text="Explore Services"
                  icon={<i className="bi bi-arrow-right"></i>}
                  href="/physiotherapist"
                  ariaLabel="Explore physiotherapy services"
                />
                <button className="custom-button d-flex align-items-center gap-3 light-text rounded-5 py-1 px-3 position-relative overflow-hidden border-0 bg-white">
                  <a
                    href="tel:0433 642 826"
                    className="custom-button-content position-relative z-1 fw-bold text-decoration-none text-dark"
                    aria-label="Call MAXFIT Physiotherapy to book an appointment"
                  >
                    Book Appointment
                  </a>

                  <span className="btn-icon icon-container z-1 d-flex align-items-center justify-content-center  rounded-circle">
                    <i className="bi bi-arrow-right text-white"></i>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Banner Section */}
        <section className="hero-banner py-5 back-dark">
          <div className="container">
            {/* Hero Banner Content */}
            <div className="row d-flex align-items-center justify-content-center ">
              {heroFeaturesData.map((feature) => (
                <HeroFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <AboutUs />

        {/* Image Gallery Section */}
        <section className="py-5 bg-white">
          <div className="px-0">
            <div className="image-gallery w-100 overflow-hidden">
              <div className="gallery-track d-flex gap-3">
                {[...Array(4)].map((_, setIndex) =>
                  galleryData.map((item) => (
                    <div
                      key={`set-${setIndex}-${item.id}`}
                      className="gallery-item rounded-5 overflow-hidden"
                    >
                      <Figure className="image-anime reveal box rounded-5 w-100 position-relative overflow-hidden image-figure">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="img-fluid w-100 h-100 object-fit-cover gallery-image-transform"
                        />
                      </Figure>
                    </div>
                  )),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5">
          <div className="container">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 text-center text-md-start"
            >
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5">
                Our Services
              </h6>
            </motion.div>

            {/* Heading + Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between text-center text-md-start"
            >
              <div className="display-5 fw-bold mb-3 mb-md-5 col-12 col-md-8 heading">
                <span className="light-text">Quality Care for</span>
                <span className="dark-text">
                  {" "}
                  Pain Relief & <br className="d-none d-md-block" /> Better
                  Movement
                </span>
              </div>

              <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-end">
                <CustomButton
                  text="View All Services"
                  icon={<i className="bi bi-arrow-right"></i>}
                  href="/physiotherapist"
                  ariaLabel="View all physiotherapy services"
                />
              </div>
            </motion.div>

            {/* Desktop cards row 1 */}
            <div className="row g-4 mb-2 d-none d-md-flex">
              {desktopRow1.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="col-12 col-sm-6 col-lg-3"
                >
                  <ServiceCard
                    imageSrc={service.img}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>

            {/* Desktop cards row 2 */}
            <div className="row g-4 mt-3 d-none d-md-flex">
              {desktopRow2.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="col-12 col-sm-6 col-lg-3"
                >
                  <ServiceCard
                    imageSrc={service.img}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}

              {/* Last wide CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="col-12 col-lg-6"
              >
                <ServiceCard
                  imageSrc={ctaCard.img}
                  title={ctaCard.title}
                  description={ctaCard.description}
                  center={true}
                  customButton={
                    <CustomButton
                      text="Book Appointment"
                      icon={<i className="bi bi-arrow-right"></i>}
                      href="/contact-us"
                      ariaLabel="Book an appointment with Maxfit Physiotherapy"
                    />
                  }
                />
              </motion.div>
            </div>

            {/* Mobile Carousel */}
            <div className="d-block d-md-none mt-4">
              <div
                id="servicesCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {mobileSlides.map((service, index) => {
                    const isCTA = service.title.includes("Ready to");
                    return (
                      <div
                        key={service.title}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                      >
                        <ServiceCard
                          imageSrc={service.img}
                          title={service.title}
                          description={service.description}
                          center={isCTA}
                          customButton={
                            isCTA && (
                              <CustomButton
                                text="Book Appointment"
                                icon={<i className="bi bi-arrow-right"></i>}
                                href="/contact-us"
                                ariaLabel="Book an appointment with Maxfit Physiotherapy"
                              />
                            )
                          }
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="carousel-indicators mt-4">
                  {new Array(mobileSlides.length).fill(null).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#servicesCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-5 white-back">
          <div className="container">
            <div className="row align-items-center">
              {/* Images Section */}
              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <div className="row g-3">
                  <div className="col-6" ref={imageRef1}>
                    <Figure
                      className={`image-anime reveal box rounded-5 position-relative d-inline-flex overflow-hidden image-figure ${
                        inView1 ? "image-anime1" : ""
                      }`}
                    >
                      <img
                        src={solutionPlanImg1}
                        className="solution-image-transform"
                        alt="Physiotherapy"
                      />
                    </Figure>
                  </div>
                  <div className="col-6" ref={imageRef2}>
                    <Figure
                      className={`image-anime reveal box rounded-5 position-relative d-inline-flex overflow-hidden image-figure ${
                        inView2 ? "image-anime1" : ""
                      }`}
                    >
                      <img
                        src={solutionPlanImg2}
                        className="solution-image-transform"
                        alt="Physiotherapy"
                      />
                    </Figure>
                  </div>
                </div>
              </div>

              {/* Content Section with motion */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="col-12 col-lg-6 text-center text-lg-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3"
                >
                  <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading">
                    Quality Treatment
                  </h6>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <h2 className="display-5 fw-bold mb-4 heading">
                    <span className="light-text">Solution to Your Pain</span>
                    <span className="dark-text">
                      {" "}
                      With <br /> Personalised Care
                    </span>
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4 para mx-auto mx-lg-0"
                  style={{ maxWidth: "500px" }}
                >
                  At MAXFIT Physiotherapy, we take time to understand your pain,
                  goals, and daily challenges-then create an evidence-based plan
                  that treats the root cause, not just the symptoms, for
                  long-lasting results.
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>
                      Thorough assessment and a clear, goal-based treatment
                      plan.
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>
                      Hands-on therapy combined with targeted exercise
                      rehabilitation.
                    </span>
                  </div>

                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2">
                    <i className="bi bi-check-circle-fill me-2 me-lg-3 dark-text"></i>
                    <span>
                      Movement retraining and education to prevent pain from
                      returning.
                    </span>
                  </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="row g-3 mt-0 mt-md-3 pt-4 border-top"
                >
                  {statisticsData.map((stat, index) => {
                    const [count, ref] = counters[index];
                    return (
                      <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="col-4 col-sm-4"
                      >
                        <div
                          ref={ref}
                          className="d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start"
                        >
                          <img
                            src={stat.icon}
                            alt={stat.label}
                            width="40"
                            height="40"
                            className="mb-2 mb-md-0 me-md-3"
                          />
                          <div>
                            <div className="fw-bold h4 mb-0 dark-text">
                              {count}
                              {stat.number}
                              {stat.suffix}
                            </div>
                            <div className="light-text">{stat.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* why us Section */}
        <section className="whyus-section py-5">
          <div className="container">
            {/* Section Heading */}
            <div className="d-flex align-items-center justify-content-center mb-1 mb-md-3">
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
                Why Us
              </h6>
            </div>

            <div className="d-flex align-items-center justify-content-center text-center mb-1 mb-md-5 ">
              <p className="display-5 fw-bold heading">
                <span className="light-text">Why Choose </span>
                <span className="dark-text">
                  {" "}
                  MAXFIT <br />
                  Physiotherapy
                </span>
              </p>
            </div>

            <div className="row why-us position-relative rounded-0 rounded-md-5 px-3 px-md-0 pb-5 pb-md-0">
              {/* Left Column */}
              <div className="col-12 col-md-6 white-back rounded-start-5">
                {whyUsLeftData.map((item) => (
                  <div
                    key={item.id}
                    className={`d-flex align-items-center py-3 py-md-4 ps-4 ${
                      item.hasBorder ? "border-bottom-dark" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-center me-3 rounded-3 bg-white icon-container3">
                      <img src={item.icon} alt="Expert Therapists" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: item.delay || 0 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="dark-text fw-bold heading">
                        {item.title}
                      </h5>
                      <p className="para" style={{ whiteSpace: "pre-line" }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="col-12 col-md-6 back-dark borend rounded-end-5 ">
                {whyUsRightData.map((item) => (
                  <div
                    key={item.id}
                    className={`ps-4 ps-md-0 d-flex align-items-center justify-content-start justify-content-md-end py-3 py-md-4 ${
                      item.hasBorder ? "border-bottom-light" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center justify-content-center me-3 rounded-3 bg-white icon-container3 order-1 order-md-2">
                      <img src={item.icon} alt="Expert Therapists" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: item.delay || 0 }}
                      viewport={{ once: true }}
                      className="me-3 order-2 order-md-1"
                    >
                      <h5 className="text-white text-md-end fw-bold heading">
                        {item.title}
                      </h5>
                      <p
                        className="text-white text-md-end"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Front Image Overlay */}
              <div className="d-none d-lg-flex justify-content-center z-3 position-relative man why-us-image-container">
                <img
                  src={whyUsImg}
                  alt="Why Choose Us"
                  className="img-fluid rounded-3 why-us-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Need Attention Section */}
        <section className="attension-section py-5 ">
          <div className="py-5 container ">
            {/* Small Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center mb-3  "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center justify-content-center ">
                <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading  ">
                  Need Attention
                </h6>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="display-5 fw-bold heading">
                <span className="text-white heading">
                  Where Are You Experiencing Pain?
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              className="d-flex align-items-center justify-content-center text-center mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-white">
                From neck stiffness to ankle injuries, our physiotherapy
                treatments focus on relieving pain, restoring movement, and{" "}
                <br />
                preventing future problems - with personalised, evidence-based
                care.
              </p>
            </motion.div>
            {/* Pain Types Grid */}
            <motion.div
              className="mt-5 d-flex justify-content-end"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {/* Desktop Grid */}
              <div className="d-none d-md-flex row g-4 col-12 col-md-11">
                {painTypesData.map((painType, index) => (
                  <motion.div
                    key={painType.id}
                    className="col-6 col-md-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`d-flex align-items-center pb-3 ${
                        index >= 6
                          ? "border-bottom-desktop-none"
                          : "border-bottom-light1"
                      }`}
                    >
                      <img
                        src={painType.icon}
                        alt={painType.alt}
                        width="50"
                        height="50"
                        className="me-3"
                      />
                      <h6 className="text-white mb-0">{painType.title}</h6>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="d-md-none col-12 position-relative">
                <div
                  id="painTypesCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {Array.from({
                      length: Math.ceil(painTypesData.length / 3),
                    }).map((_, slideIndex) => (
                      <div
                        key={slideIndex}
                        className={`carousel-item ${
                          slideIndex === 0 ? "active" : ""
                        }`}
                      >
                        <div className="d-flex justify-content-around">
                          {painTypesData
                            .slice(slideIndex * 3, slideIndex * 3 + 3)
                            .map((painType) => (
                              <div
                                key={painType.id}
                                className="d-flex flex-column align-items-center"
                              >
                                <img
                                  src={painType.icon}
                                  alt={painType.alt}
                                  width="50"
                                  height="50"
                                  className="mb-2"
                                />
                                <h6 className="text-white mb-0 text-center">
                                  {painType.title}
                                </h6>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Review section */}
        <ReviewSection />

        {/* news blog Section */}
        <section className="py-5">
          <div className="container">
            {/* Small Heading */}
            <motion.div
              className="d-flex align-items-center justify-content-center justify-content-md-start mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading ">
                News & Blog
              </h6>
            </motion.div>

            {/* Title + Button */}
            <motion.div
              className="align-items-center justify-content-center justify-content-md-start col-12 d-md-flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="display-5 fw-bold mb-5 col-12 col-md-8 heading text-center text-md-start">
                <span className="light-text">Our Latest </span>
                <span className="dark-text"> Insights And Updates</span>
              </div>
              <div className="mb-5 col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                <CustomButton
                  text="View All Blog"
                  icon={<i className="bi bi-arrow-right"></i>}
                  href="/blog"
                  ariaLabel="View all blog articles"
                />
              </div>
            </motion.div>

            {/* Desktop View (Unchanged) */}
            <div className="d-none d-md-flex col-12 align-items-center justify-content-center gap-5">
              {blogData.slice(0, 3).map((blog) => (
                <NewsBlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="d-block d-md-none mt-4">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {blogData.slice(0, 3).map((blog, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <NewsBlogCard blog={blog} />
                    </div>
                  ))}
                </div>

                {/* Bullet Indicators */}
                <div className="carousel-indicators mt-3">
                  {blogData.slice(0, 3).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      data-bs-target="#blogCarousel"
                      data-bs-slide-to={idx}
                      className={idx === 0 ? "active" : ""}
                      aria-current={idx === 0 ? "true" : undefined}
                      aria-label={`Slide ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Info Section */}
        <ScrollingInfo />
      </div>
    </>
  );
};

export default Home;
