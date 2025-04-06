import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pagesPerSet = 10; // Number of pages to display at once

    // Calculate the starting page and the ending page for pagination
    const startPage = Math.floor((currentPage - 1) / pagesPerSet) * pagesPerSet + 1;
    const endPage = Math.min(startPage + pagesPerSet - 1, totalPages);

    // Create an array for the page numbers to display
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex w-full flex-wrap border px-4 py-3 bg-white rounded-b-lg border-t-0 items-center" aria-label="Table Navigation" >

            {/* Page Summary */}
            <p className="grow align-middle text-xs pb-2 lg:pb-0" aria-live="polite">
                Showing <span className="font-semibold">{currentPage * 10 - 9}</span> to <span className="font-semibold">{Math.min(currentPage * 10, totalPages * 10)}</span> of <span className="font-semibold">{totalPages * 10}</span> results
            </p>
            <nav className="flex" aria-label="Pagination Navigation">

                {/* Back Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1.5.5 text-xs border rounded-l-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    aria-label="Previous Page"
                >
                    Back
                </button>

                {/* Page Numbers */}
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1.5 text-xs border border-l-0 ${currentPage === page ? "bg-sky-200" : "hover:bg-gray-200"}`}
                        aria-current={currentPage === page ? "page" : undefined}
                        aria-label={`Go to page ${page}`}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1.5 text-xs border border-l-0 rounded-r-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    aria-label="Next Page"
                >
                    Next
                </button>
            </nav>
        </div>
    );
};

export default Pagination;