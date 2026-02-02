import React from "react";
import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const NewsBlogCard = ({ blog }) => {
  const { image, alt, title, readMoreText } = blog;
  const navigate = useNavigate();

  const handleCardClick = () => {
    const slug = slugify(title);
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="mt-5">
      <div className="mb-4 mb-lg-0 cursor-pointer" onClick={handleCardClick}>
        <Figure className="image-anime reveal box rounded-5 w-100 image-figure">
          <img
            src={image}
            alt={alt}
            className="img-fluid rounded-5 shadow w-100"
            style={{ maxHeight: "300px" }}
          />
        </Figure>
      </div>

      <div onClick={handleCardClick} className="cursor-pointer">
        <h5 className="fw-bold mt-4 dark-text">{title}</h5>
      </div>

      <div onClick={handleCardClick} className="cursor-pointer">
        <h5 className="fw-bold mt-4 light-text">
          {readMoreText} <i className="bi bi-arrow-right fs-5"></i>
        </h5>
      </div>
    </div>
  );
};

export default NewsBlogCard;
