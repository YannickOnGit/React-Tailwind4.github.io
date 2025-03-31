import React from "react";
import Icon from "./Icon";
import PieChartA from "./PieChartA"; // Import your PieChartA component

const ServiceExpiringCard = () => {
  return (
    <div
      className="flex items-center space-x-3 bg-white px-4 pr-1 py-3 rounded-md border-1 relative"
      role="region"
      aria-labelledby="serviceExpiringTitle"
    >
      {/* Pie Chart Section */}
      <div aria-hidden="true">
        <PieChartA />
      </div>

      {/* Information Section */}
      <div className="flex-col grow">
        <h2 id="serviceExpiringTitle" className="pb-3 text-sm" aria-live="polite">
          Service expiring within 90 Days
        </h2>
        <div className="flex flex-row items-end">
          <div className="grow">
            <span className="grow text-5xl font-semibold" aria-live="polite">
              19
            </span>
          </div>
          <div className="flex flex-row items-end">
            <div
              className="flex flex-row space-x-2 text-xs font-semibold items-center"
              aria-label="Percentage decrease in services expiring"
            >
              <p>-16.1%</p>
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

export default ServiceExpiringCard;