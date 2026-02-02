import { Link } from "react-router-dom";

const CustomButton = ({
  text,
  icon,
  onClick,
  href,
  ariaLabel,
  target,
  rel,
  type, 
  disabled,
}) => {
  const isInternalLink = typeof href === "string" && href.startsWith("/");

  if (isInternalLink) {
    return (
      <Link
        to={href}
        aria-label={ariaLabel || text}
        className="custom-button cursor-pointer d-flex align-items-center gap-3 text-white rounded-5 px-3 position-relative overflow-hidden fw-bold text-decoration-none border-0"
      >
        <span className="custom-button-content position-relative z-1">
          {text}
        </span>
        <span
          className="btn-icon icon-container z-1 rounded-circle d-flex align-items-center justify-content-center"
          aria-hidden="true"
        >
          {icon}
        </span>
      </Link>
    );
  }

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      aria-label={ariaLabel || text}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      type={!href ? (type || "button") : undefined}   
      disabled={!href ? disabled : undefined}         
      className="custom-button cursor-pointer d-flex align-items-center gap-3 text-white rounded-5 px-3 position-relative overflow-hidden fw-bold text-decoration-none border-0"
    >
      <span className="custom-button-content position-relative z-1">
        {text}
      </span>
      <span
        className="btn-icon icon-container z-1 rounded-circle d-flex align-items-center justify-content-center"
        aria-hidden="true"
      >
        {icon}
      </span>
    </Component>
  );
};

export default CustomButton;