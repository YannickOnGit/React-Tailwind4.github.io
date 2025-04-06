const PageHead = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 mb-4 px-0">

                {/* Page Title and Description */}
                <div className="col-span-3">
                    <h1 className="text-3xl font-semibold mb-1">Service Orders</h1>
                    <p className="text-xs">
                        Manage and track SD-WAN service orders, including provisioning, configuration, and deployment status.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-3 space-x-2 content-end justify-self-end whitespace-nowrap">
                    <button
                        className="px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs border-0 rounded-md"
                        type="button"
                    >
                        New Service Order...
                    </button>
                    <button
                        className="px-3 py-2 bg-white hover:bg-gray-100 border-1 text-xs rounded-md"
                        type="button"
                    >
                        Export...
                    </button>
                </div>
            </div>
        </>
    );
};

export default PageHead;