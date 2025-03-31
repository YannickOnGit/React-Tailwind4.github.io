import React from "react";
import Icon from "./Icon";

const Toolbar = () => {
  return (
    <div className="px-4 py-2 flex w-full flex-wrap items-end justify-between gap-4 border border-b-0 bg-white">
      {/* Search Field */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs"
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
        <button className="px-3 py-2 text-xs border-1 rounded-md hover:bg-gray-100 active:bg bg-gray-200">
          Add Sites...
        </button>
        <button className="px-3 py-2 text-xs border-1 rounded-md hover:bg-gray-100 active:bg bg-gray-200">
          Add Locations...
        </button>
      </div>
    </div>
  );
};

export default Toolbar;