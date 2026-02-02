import React from "react";

const ServiceCard = ({
  imageSrc,
  title,
  description,
  onClick,
  customButton,
  center,
}) => {
  return (
    <div
      className={`service-card position-relative overflow-hidden h-100 d-flex flex-column custom-border rounded-4 p-4 ${
        center ? "text-center" : ""
      }`}
    >
      <div
        className={`service-card__icon icon-bg mb-3 rounded-3 p-3 d-flex align-items-center justify-content-center  ${
          center ? "mx-auto" : ""
        }`}
      >
        <img src={imageSrc} alt={title} className="p-2" />
      </div>
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="para mb-3 flex-grow-1">{description}</p>
      <div
        className={`mt-auto d-flex ${
          center ? "justify-content-center" : "justify-content-start"
        }`}
      >
        {customButton ? (
          customButton
        ) : (
          <button
            type="button"
            className=" text-white back-dark border-0 rounded-circle d-flex align-items-center justify-content-center "
            onClick={onClick}
            aria-label="More"
          >
            <i className="bi bi-arrow-right fs-5 p-2"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
