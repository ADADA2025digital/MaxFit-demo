import React from "react";
import { scrollingInfoData } from "../constants/Data";
import scroll1 from "../assets/Images/icon-sparkles.svg";

const ScrollingInfo = () => {
  return (
    <section>
      <div className="container-fluid p-0 overflow-hidden white-back scrolling-info-section">
        <div className=" text-nowrap d-flex overflow-hidden position-relative scrolling-info-wrapper py-4">
          <div className="scrolling-text d-flex dark-text fw-bold fs-5 ">
            {/* First set of scrolling items */}
            {scrollingInfoData.map((item) => (
              <span key={item.id}>
                <img
                  src={scroll1}
                  alt="Sparkles"
                  className="scrolling-info-icon me-5 ps-5"
                />
                {item.text}
              </span>
            ))}

            {/* Duplicate set for infinite scroll */}
            {scrollingInfoData.map((item) => (
              <span key={`duplicate-${item.id}`}>
                <img
                  src={scroll1}
                  alt="Sparkles"
                  className="scrolling-info-icon me-5 ps-5"
                />
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingInfo;
