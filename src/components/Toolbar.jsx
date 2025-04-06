import React from "react";
import Icon from "./Icon";

const Toolbar = () => {
  return (
    <div className="px-4 py-3 flex w-full flex-wrap items-end justify-between gap-4 border border-b-0 bg-white">

      {/* Search Field */}
      <div className="relative grow ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-lg pl-10 pr-4 py-1.5 border rounded-md focus:outline-none focus:ring-1 bg-white focus:ring-blue-500 focus:border-blue-500 text-xs"
        />
        <Icon
          name="search"
          size={18}
          color="none"
          strokeColor=""
          className="absolute left-3 top-1/2 transform -translate-y-1/2 stroke-gray-400"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-xs border-1 rounded-md hover:bg-gray-100">
          Add Sites...
        </button>
        <button className="px-3 py-1.5 text-xs border-1 rounded-md hover:bg-gray-100">
          Add Locations...
        </button>
      </div>

    </div>
  );
};

export default Toolbar;