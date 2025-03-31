import React from "react";
import Icon from "./Icon";
import PieChartB from "./PieChartB"; // Import your PieChartB component

const ServiceExpiredCard = () => {
  return (
    <div
      className="flex items-center space-x-3 bg-white px-4 pr-1 py-3 rounded-md border-1 relative"
      role="region"
      aria-labelledby="serviceExpiredTitle"
    >
      {/* Pie Chart Section */}
      <div aria-hidden="true">
        <PieChartB />
      </div>

      {/* Information Section */}
      <div className="grow">
        <h2 id="serviceExpiredTitle" className="pb-3 text-sm" aria-live="polite">
          Service expired in Last 90 Days
        </h2>
        <div className="flex flex-row items-end">
          <div className="grow">
            <span className="grow text-5xl font-semibold" aria-live="polite">
              12
            </span>
          </div>
          <div className="flex flex-row items-end">
            <div
              className="flex flex-row space-x-2 text-xs font-semibold items-center"
              aria-label="Percentage decrease in expired services"
            >
              <p>-38.8%</p>
              <Icon
                name="bearish"
                size={20}
                color="none"
                strokeColor=""
                className="stroke-red-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dashed Line */}
      <div
        className="h-0.25 -ml-1 w-7 border border-gray-500 border-dashed absolute top-1/2"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default ServiceExpiredCard;