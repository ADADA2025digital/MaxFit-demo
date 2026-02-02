import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { reviewData } from "../constants/Data";

const ReviewSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 992px)").matches
      : false
  );
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const GAP_PX = 16;
  const [cardWidth, setCardWidth] = useState(0);

  const cardsToShow = isDesktop ? 3 : 1;
  const itemsExtended = [...reviewData, ...reviewData, ...reviewData];

  // Handle media query changes
  useEffect(() => {
    const media = window.matchMedia("(min-width: 992px)");
    const onChange = () => setIsDesktop(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Measure card width on mount and resize
  useEffect(() => {
    const measureCard = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const newCardWidth =
        (containerWidth - (cardsToShow - 1) * GAP_PX) / cardsToShow;
      setCardWidth(newCardWidth);
    };

    measureCard();
    window.addEventListener("resize", measureCard);
    return () => window.removeEventListener("resize", measureCard);
  }, [cardsToShow, isDesktop]);

  // Auto move every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!cardWidth || !trackRef.current) return;
    const totalItems = reviewData.length;
    const maxIndex = totalItems * 2;

    if (slideIndex >= maxIndex) {
      setSlideIndex(slideIndex - totalItems);
      const offsetPx = (slideIndex - totalItems) * (cardWidth + GAP_PX);
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${offsetPx}px)`;

      trackRef.current.offsetHeight;

      setTimeout(() => {
        trackRef.current.style.transition = "transform 0.9s ease-in-out";
      }, 50);
    }
  }, [slideIndex, cardWidth, reviewData.length]);

  const offsetPx = slideIndex * (cardWidth + GAP_PX);

  return (
    <section className="review-section">
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-center mb-3 pt-0 pt-md-5">
          <h6 className="bg-white mb-3 light-text py-2 px-3 rounded-5 heading">
            Review
          </h6>
        </div>
        <div className="mb-4 d-flex align-items-center justify-content-center">
          <h2 className="display-5 fw-bold mb-4 heading">
            <span className="light-text">What</span>{" "}
            <span className="dark-text">Our Client Say</span>
          </h2>
        </div>

        {/* Custom slider */}
        <div className="review-carousel overflow-hidden" ref={containerRef}>
          <div className="d-flex"
            ref={trackRef}
            style={{
              gap: `${GAP_PX}px`,
              transform: `translateX(-${offsetPx}px)`,
              transition: "transform 0.9s ease-in-out",
            }}
          >
            {itemsExtended.map((review, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 ${cardWidth}px`,
                }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="d-flex justify-content-center mt-5 gap-2">
            {reviewData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setSlideIndex(dotIdx)}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`border-0 rounded-circle ${
                  slideIndex % reviewData.length === dotIdx
                    ? "back-dark"
                    : "back-light"
                }`}
                style={{
                  width: 12,
                  height: 12,
                  opacity: slideIndex % reviewData.length === dotIdx ? 1 : 0.35,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
