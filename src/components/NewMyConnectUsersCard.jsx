import React from "react";
import Icon from "./Icon";

const NewMyConnectUsersCard = () => {
  return (
    <div
      className="flex flex-col bg-white px-3 py-3 rounded-md border-1 col-span-1 lg:col-span-2 xl:col-span-2"
      role="region"
      aria-labelledby="newMyConnectUsersTitle"
    >
      <h2 id="newMyConnectUsersTitle" className="pb-3 text-sm" aria-live="polite">
        New My Connect Users
      </h2>
      <div className="flex flex-row grow items-end">
        <div className="grow">
          <span className="grow text-5xl font-semibold" aria-live="polite">
            22
          </span>{" "}
          of 203
        </div>
        <div className="flex flex-row items-end">
          <div
            className="flex flex-row space-x-1 text-xs font-semibold items-center"
            aria-label="Percentage increase of new users"
          >
            <p>6%</p>
            <Icon
              name="bullish"
              size={20}
              color="none"
              strokeColor=""
              className="stroke-blue-500"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMyConnectUsersCard;