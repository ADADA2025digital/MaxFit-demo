import React from "react";
import { motion } from "framer-motion";

const HeroFeatureCard = ({ feature }) => {
  const { id, icon, alt, title, description, hasBorder, marginClass } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`col-lg-4 col-md-6 mb-4 ${
        hasBorder ? "custom-borderend" : ""
      } d-flex align-items-center justify-content-center hero-feature-card`}
    >
      <div className="d-flex align-items-center justify-content-center flex-md-row flex-column text-center text-md-start">
        <div
          className={`icon-container1 d-flex align-items-center justify-content-center me-md-3 mb-3 mb-md-0 rounded-4 back-light50 position-relative overflow-hidden ${marginClass}`}
        >
          <img src={icon} alt={alt} className="z-1 position-relative" />
        </div>
        <div>
          <h3 className="text-white mb-1 heading fs-5">{title}</h3>
          <p className="text-white mb-0">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroFeatureCard;
