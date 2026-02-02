import React, { useMemo, useState } from "react";

const pad2 = (n) => String(n).padStart(2, "0");

const FAQAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const normalized = useMemo(() => items || [], [items]);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  const renderAnswer = (text) => {
    // supports \n lines and bullet lines starting with •
    const lines = String(text || "").split("\n");
    return lines.map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} style={{ height: 8 }} />;

      // Bullet line
      if (trimmed.startsWith("•")) {
        return (
          <div key={i} className="d-flex gap-2 mb-1">
            <span aria-hidden="true">•</span>
            <span>{trimmed.replace(/^•\s?/, "")}</span>
          </div>
        );
      }

      return (
        <div key={i} className="mb-1">
          {trimmed}
        </div>
      );
    });
  };

  return (
    <div className="faq-wrap position-relative">
      <div className="mb-4 text-center d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center text-center justify-content-lg-start mb-3">
          <h6 className="white-back mb-3 light-text py-2 px-3 rounded-5 heading">
            FAQ
          </h6>
        </div>
        <h1 className="mb-4 fw-bold display-5 heading">
          <span className="dark-text">Everything you need to know</span> <br />
          <span className="light-text">before your first visit</span>
        </h1>
      </div>

      <div className="faq-card rounded-5 bg-white border overflow-hidden">
        {normalized.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className={`faq-item border-bottom ${isOpen ? "open bg-light" : ""}`}>
              <button
                type="button"
                className="faq-row p-4 w-100 bg-transparent border-0 d-flex align-items-center justify-content-between text-start"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <div className="faq-left d-flex align-items-center gap-2">
                  <div className="faq-number fw-bold fs-1 lh-base">{pad2(idx + 1)}</div>
                  <div className="faq-question fw-semibold text-black">{faq.question}</div>
                </div>

                <div className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              <div
                className="faq-panel overflow-hidden"
                style={{
                  maxHeight: isOpen ? 600 : 0,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="faq-answer px-5 pb-4 pt-0 fs-6">{renderAnswer(faq.answer)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
