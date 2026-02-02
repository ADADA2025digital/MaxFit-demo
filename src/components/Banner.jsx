import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ bannerData }) => {
  const defaultBannerData = {
    breadcrumb: {
      home: "Home",
      current: "Page",
    },
    pageTitle: "Welcome to MaxFit Physiotherapy",
    bannerSubtitle: "Your trusted partner in physical wellness and recovery",
    bannerDescription:
      "Experience world-class physiotherapy services with our expert team of therapists dedicated to your health and well-being.",
  };

  const data = bannerData || defaultBannerData;

  return (
    <section className="py-5 mt-5 text-white about-banner-section position-relative white-back">
      <div className="container py-5 mt-5">
        <div className="row mt-0 mt-md-4 align-items-center">
          {/* Page Title and Breadcrumb */}
          <div className="col-12 text-center">
            {/* Page Title */}
            <h1 className="display-4 fw-bold mt-4 mb-3 text-center dark-text">
              {data.pageTitle}
            </h1>

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 justify-content-center dark-text">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none dark-text">
                    {data.breadcrumb.home}
                  </Link>
                </li>
                <span className="heading mx-3">/</span>
                <li
                  className="breadcrumb-item active dark-text"
                  aria-current="page"
                >
                  {data.breadcrumb.current}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
