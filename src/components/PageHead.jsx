const PageHead = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 mb-6 px-0">
                <div className="col-span-3">
                    <h1 className="text-2xl font-semibold mb-">Service Orders</h1>
                    <p className="text-xs">
                        Manage and track SD-WAN service orders, including provisioning, configuration, and deployment status.
                    </p>
                </div>
                <div className=" space-x-2 content-end justify-self-end">
                    <button
                        className="px-3 py-2 bg-emerald-500 text-white text-xs border-0 rounded-md"
                        type="button"
                    >
                        Save Changes
                    </button>
                    <button
                        className="px-3 py-2 bg-white border-1 text-xs rounded-md"
                        type="button"
                    >
                        Discard Changes
                    </button>
                </div>
            </div>
        </>
    );
};

export default PageHead;