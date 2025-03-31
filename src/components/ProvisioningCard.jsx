import React from "react";
import PieChartComponent from "./PieChartComponent"; // Make sure to import your PieChartComponent here

const ProvisioningCard = () => {
  return (
    <div
      className="flex flex-row space-x-3 col-span-1 lg:col-span-2 xl:col-span-2 bg-white px-4 py-4 rounded-md border-1"
      aria-labelledby="provisioningPipelineTitle"
      role="region"
    >
      {/* Pie Chart Section */}
      <div className="flex h-full items-center" aria-hidden="true">
        <PieChartComponent />
      </div>

      {/* Information Section */}
      <div className="grow">
        <h2 id="provisioningPipelineTitle" className="pb-3 text-sm" aria-live="polite">
          Provisioning <br />Pipeline
        </h2>
        <div className="flex flex-row items-end">
          <div className="grow">
            <span className="grow text-5xl font-semibold" aria-live="polite">
              72
            </span>
          </div>
        </div>
      </div>

      {/* Status Sections */}
      <div className="flex flex-col grow py-2">
        <div className="grow">
          <div className="grid grid-cols-4 gap-1 h-full" aria-labelledby="statusSection">
            {/* New Status */}
            <div className="relative" aria-label="New Status">
              <svg
                className="absolute inset-0 h-full w-full top-0 left-0 bg-transparent"
                viewBox="0 0 70 80"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 2.68629 2.68629 0 6 0H49.003C51.4084 0 53.5812 1.43649 54.5235 3.64961L68.9993 37.6496C69.6387 39.1513 69.6387 40.8487 68.9993 42.3504L54.5235 76.3504C53.5812 78.5635 51.4084 80 49.003 80H6C2.68629 80 0 77.3137 0 74V6Z"
                  className="fill-sky-200"
                />
              </svg>
              <div className="relative h-full w-full flex flex-col items-center justify-center grow pr-2">
                <p className="text-xl font-bold">22</p>
                <p className="text-xs">New</p>
              </div>
            </div>

            {/* Open Status */}
            <div className="relative" aria-label="Open Status">
              <svg
                className="absolute inset-0 h-full w-full top-0 left-0"
                viewBox="0 0 70 80"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 2.68629 2.68629 0 6 0H49.003C51.4084 0 53.5812 1.43649 54.5235 3.64961L68.9993 37.6496C69.6387 39.1513 69.6387 40.8487 68.9993 42.3504L54.5235 76.3504C53.5812 78.5635 51.4084 80 49.003 80H6C2.68629 80 0 77.3137 0 74V6Z"
                  className="fill-sky-300"
                />
              </svg>
              <div className="relative h-full w-full flex flex-col items-center justify-center grow pr-2">
                <p className="text-xl font-bold">6</p>
                <p className="text-xs">Open</p>
              </div>
            </div>

            {/* Pending Status */}
            <div className="relative" aria-label="Pending Status">
              <svg
                className="absolute inset-0 h-full w-full top-0 left-0"
                viewBox="0 0 70 80"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 2.68629 2.68629 0 6 0H49.003C51.4084 0 53.5812 1.43649 54.5235 3.64961L68.9993 37.6496C69.6387 39.1513 69.6387 40.8487 68.9993 42.3504L54.5235 76.3504C53.5812 78.5635 51.4084 80 49.003 80H6C2.68629 80 0 77.3137 0 74V6Z"
                  className="fill-sky-400"
                />
              </svg>
              <div className="relative h-full w-full flex flex-col items-center justify-center grow pr-2">
                <p className="text-xl font-bold">12</p>
                <p className="text-xs">Pending</p>
              </div>
            </div>

            {/* Close Status */}
            <div className="relative" aria-label="Close Status">
              <svg
                className="absolute inset-0 h-full w-full top-0 left-0"
                viewBox="0 0 70 80"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 2.68629 2.68629 0 6 0H49.003C51.4084 0 53.5812 1.43649 54.5235 3.64961L68.9993 37.6496C69.6387 39.1513 69.6387 40.8487 68.9993 42.3504L54.5235 76.3504C53.5812 78.5635 51.4084 80 49.003 80H6C2.68629 80 0 77.3137 0 74V6Z"
                  className="fill-emerald-500"
                />
              </svg>
              <div className="relative h-full w-full flex flex-col items-center justify-center grow pr-2">
                <p className="text-xl font-bold">32</p>
                <p className="text-xs">Close</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvisioningCard;