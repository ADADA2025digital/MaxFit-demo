import React from "react";
import { statisticsBannerData } from "../constants/Data";
import useCounterAnimation from "../hooks/useCounterAnimation";

const StatisticsBanner = () => {
  return (
    <section className="py-5 back-dark">
      <div className="container">
        <div className="row align-items-center">
          {statisticsBannerData.map((stat) => {
            const raw = String(stat.number);
            const hasDigits = /\d/.test(raw);

            // Keep all remaining characters after first digit group (handles 1:1 correctly)
            const match = raw.match(/(\d+)(.*)/);
            const targetValue = match ? parseInt(match[1], 10) : 0;
            const suffix = match && match[2] ? match[2] : "";

            const [count, ref] = useCounterAnimation(targetValue, 2000, 0);

            return (
              <div key={stat.id} className="col-6 col-lg-3 col-md-6 mb-4">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-center text-md-start">
                  <div className="mb-3 mb-md-0 me-md-3">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      width="60"
                      height="60"
                      className="img-fluid"
                    />
                  </div>

                  <div>
                    <div className="mb-1">
                      <h2 className="fw-bold text-white mb-0" ref={ref}>
                        {hasDigits ? (
                          <>
                            {count}
                            {suffix}
                          </>
                        ) : (
                          raw
                        )}
                      </h2>
                    </div>

                    <div>
                      <p className="text-white-50 fw-bold mb-0">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsBanner;
