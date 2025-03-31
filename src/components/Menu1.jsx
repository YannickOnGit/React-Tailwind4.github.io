import React from "react";
import Icon from "./Icon"; // Import the Icon component
import LogoFull from "./LogoFull";

const Menu1 = () => {
  return (
    <>
      {/* Logo Section */}
      <div className="flex justify-center items-center p-6 mt-2">
        <LogoFull />
        <span className="sr-only">Company Logo</span>
      </div>

      {/* Main Navigation */}
      <div className="grow">
        <nav aria-label="Primary Navigation">
          <ul>
            <li>
              <a
                href="#"
                role="button"
                aria-label="Go to Dashboard"
                className="flex flex-row px-6 py-2 hover:bg-sky-100 active:bg-sky-200 items-center"
              >
                <Icon
                  name="dashboard"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                role="button"
                aria-label="Go to Service Order"
                className="flex flex-row px-6 py-2 hover:bg-sky-100 active:bg-sky-200 items-center"
              >
                <Icon
                  name="box"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                Service Order
              </a>
            </li>
            <li>
              <a
                href="#"
                role="button"
                aria-label="Go to Networks"
                className="flex flex-row px-6 py-2 hover:bg-sky-100 active:bg-sky-200 items-center"
              >
                <Icon
                  name="networks"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                Networks
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
              <a
                href="#"
                role="button"
                aria-label="Go to Settings"
                className="flex flex-row px-6 py-2 hover:bg-sky-100 active:bg-sky-200 items-center"
              >
                <Icon
                  name="settings"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                role="button"
                aria-label="Go to Support"
                className="flex flex-row px-6 py-2 hover:bg-sky-100 active:bg-sky-200 items-center"
              >
                <Icon
                  name="users"
                  size={20}
                  color="none"
                  strokeColor=""
                  className="mr-2 stroke-gray-600"
                  aria-hidden="true"
                />
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu1;