import React from "react";
import Icon from "./Icon"; // Make sure to import the Icon component

const NewlyDeployedSitesCard = () => {
  return (
    <div
      className="flex flex-col bg-white px-3 py-3 rounded-md border-1  col-span-1 lg:col-span-2 xl:col-span-2"
      aria-labelledby="newlyDeployedSitesTitle"
      role="region"
    >
      {/* Title */}
      <h2 id="newlyDeployedSitesTitle" className="pb-3 text-sm" aria-live="polite">
        Newly Deployed Sites
      </h2>

      {/* Content Section */}
      <div
        className="flex flex-row grow items-end"
        aria-labelledby="siteProgress"
      >
        <div className="grow">
          <span
            id="siteProgress"
            className="grow text-5xl font-semibold"
            aria-live="polite"
          >
            43
          </span>
          {" "} of 71
        </div>

        {/* Percentage and Icon */}
        <div className="flex flex-row items-end" aria-label="Percentage and progress icon">
          <div
            className="flex flex-row space-x-1 text-xs font-semibold items-center"
            aria-label="Percentage of newly deployed sites"
          >
            <p>12%</p>
            <Icon
              name="bullish"
              size={20}
              color="none"
              strokeColor=""
              className="stroke-blue-500"
              aria-hidden="true" // Icon is purely decorative
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewlyDeployedSitesCard;