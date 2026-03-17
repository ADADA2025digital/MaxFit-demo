import React from "react";

const ServiceCard = ({
  imageSrc,
  title,
  description,
  hoverDescription,
  onClick,
  customButton,
  center,
}) => {
  // Check if hover content exists
  const hasHoverContent = hoverDescription && hoverDescription.trim() !== "";
  
  return (
    <div
      className={`service-card position-relative overflow-hidden h-100 d-flex flex-column custom-border rounded-4 p-4 ${
        center ? "text-center" : ""
      } ${!hasHoverContent ? 'no-hover-content' : ''}`}
      onClick={onClick}
    >
      {/* Original content that moves up on hover - only if hover content exists */}
      <div className={hasHoverContent ? "original-content" : "static-content"}>
        <div
          className={`service-card__icon icon-bg mb-3 rounded-3 p-3 d-flex align-items-center justify-content-center ${
            center ? "mx-auto" : ""
          }`}
        >
          <img src={imageSrc} alt={title} className="p-2" />
        </div>
        <h5 className="fw-bold mb-2">{title}</h5>
        <p className="para flex-grow-1">{description}</p>
        {customButton && <div className="mt-3">{customButton}</div>}
      </div>
      
      {/* New description that rises from bottom on hover - only if hover content exists */}
      {hasHoverContent && (
        <div className="hover-content">
          <p className="para mb-0">{hoverDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;