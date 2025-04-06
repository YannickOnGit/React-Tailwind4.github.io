import React from "react";
import Icon from "./Icon"; // Import the Icon component
import LogoFull from "./LogoFull";

const Menu1 = () => {
  return (
    <>
      {/* Logo Section */}
      <div className="flex justify-center items-center p-6 mt-2">
        <span className="hidden md:inline-block">
          <LogoFull className="" />
          <span className="sr-only">Company Logo</span>
        </span>
      </div>

      {/* Main Navigation */}
      <div className="grow">
        <nav aria-label="Primary Navigation">
          <ul>
            <li>
              <a href="#" role="button" aria-label="Go to Dashboard" className="text-sm flex flex-row px-0 md:px-6 py-2 bg-sky-100 active:bg-sky-200 items-center justify-center md:justify-start" >
                <Icon name="dashboard" size={20} color="none" strokeColor="" className="mr-2 stroke-gray-600" aria-hidden="true" />
                <span className="hidden md:block">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" role="button" aria-label="Go to Service Order" className="text-sm flex flex-row px-0 md:px-6 py-2 hover:bg-gray-100 active:bg-sky-200 items-center justify-center md:justify-start" >
                <Icon
                  name="box"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                <span className="hidden md:block">Service Order</span>
              </a>
            </li>
            <li>
              <a href="#" role="button" aria-label="Go to Networks" className="text-sm flex flex-row px-0 md:px-6 py-2 hover:bg-gray-100 active:bg-sky-200 items-center justify-center md:justify-start" >
                <Icon name="networks" size={20} color="none" strokeColor="" className="mr-2 stroke-gray-600" aria-hidden="true" />
                <span className="hidden md:block">Networks</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="flex-none">
        <nav className="mb-6" aria-label="Secondary Navigation">
          <ul>
            <li>
              <a href="#" role="button" aria-label="Go to Settings" className="text-sm flex flex-row px-0 md:px-6 py-2 hover:bg-gray-100 active:bg-sky-200 items-center justify-center md:justify-start" >
                <Icon name="settings" size={20} color="none" strokeColor="" className="mr-2 stroke-gray-600" aria-hidden="true" />
                <span className="hidden md:block">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" role="button" aria-label="Go to Support" className="text-sm flex flex-row px-0 md:px-6 py-2 hover:bg-gray-100 active:bg-sky-200 items-center justify-center md:justify-start" >
                <Icon name="users" size={20} color="none" strokeColor="" className="mr-2 stroke-gray-600" aria-hidden="true" />
                <span className="hidden md:block">Support</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu1;