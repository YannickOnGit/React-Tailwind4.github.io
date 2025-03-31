import React, { useState } from "react";
import Icon from "./Icon"; // Import the Icon component
import Table from "./Table"; // Adjust the path based on your file structure
import Pagination from "./Pagination"; // Import the Icon component
import Toolbar from './Toolbar';

const ServiceOrderTable = () => {

    const users = [
        {
            id: "SO-202403001",
            company: "Anderson Tech",
            name: "Michael Anderson",
            email: "michael.anderson@example.com",
            address: "742 Evergreen Terrace, Springfield, IL 62704",
            phone: "(555) 987-6543",
            status: "New",
            statusColor: "bg-sky-300",
        },
        {
            id: "SO-202403002",
            company: "Thompson Consulting",
            name: "Sarah Thompson",
            email: "sarah.thompson@example.com",
            address: "1024 Oak Street, Dallas, TX 75202",
            phone: "(555) 234-5678",
            status: "Opened",
            statusColor: "bg-sky-400",
        },
        {
            id: "SO-202403003",
            company: "Wilson Enterprises",
            name: "James Wilson",
            email: "james.wilson@example.com",
            address: "56 Maple Drive, San Francisco, CA 94110",
            phone: "(555) 345-6789",
            status: "Pending",
            statusColor: "bg-sky-500",
        },
        {
            id: "SO-202403004",
            company: "Davis & Co.",
            name: "Emily Davis",
            email: "emily.davis@example.com",
            address: "789 Birch Road, Denver, CO 80203",
            phone: "(555) 456-7890",
            status: "Closed",
            statusColor: "bg-emerald-500",
        },
        {
            id: "SO-202403005",
            company: "Johnson Logistics",
            name: "Robert Johnson",
            email: "robert.johnson@example.com",
            address: "321 Pine Avenue, Seattle, WA 98101",
            phone: "(555) 567-8901",
            status: "New",
            statusColor: "bg-sky-300",
        },
        {
            id: "SO-202403006",
            company: "Martinez Financial",
            name: "Laura Martinez",
            email: "laura.martinez@example.com",
            address: "221 Elm Street, Miami, FL 33130",
            phone: "(555) 678-9012",
            status: "Opened",
            statusColor: "bg-sky-400",
        },
        {
            id: "SO-202403007",
            company: "Brown Solutions",
            name: "William Brown",
            email: "william.brown@example.com",
            address: "569 Cedar Lane, Austin, TX 78701",
            phone: "(555) 789-0123",
            status: "Pending",
            statusColor: "bg-sky-500",
        },
        {
            id: "SO-202403008",
            company: "White Architecture",
            name: "Olivia White",
            email: "olivia.white@example.com",
            address: "900 Magnolia Blvd, Atlanta, GA 30303",
            phone: "(555) 890-1234",
            status: "Closed",
            statusColor: "bg-emerald-500",
        },
        {
            id: "SO-202403009",
            company: "Harris IT",
            name: "Daniel Harris",
            email: "daniel.harris@example.com",
            address: "111 Redwood Circle, Boston, MA 02108",
            phone: "(555) 901-2345",
            status: "New",
            statusColor: "bg-sky-300",
        },
        {
            id: "SO-202403010",
            company: "Lee Designs",
            name: "Sophia Lee",
            email: "sophia.lee@example.com",
            address: "789 Willow Court, Phoenix, AZ 85004",
            phone: "(555) 012-3456",
            status: "Opened",
            statusColor: "bg-sky-400",
        },
        {
            id: "SO-202403011",
            company: "Clark Engineering",
            name: "Matthew Clark",
            email: "matthew.clark@example.com",
            address: "420 Sycamore St, Chicago, IL 60601",
            phone: "(555) 123-4567",
            status: "Pending",
            statusColor: "bg-sky-500",
        },
        {
            id: "SO-202403012",
            company: "Lopez Marketing",
            name: "Isabella Lopez",
            email: "isabella.lopez@example.com",
            address: "369 Cypress Ave, Las Vegas, NV 89109",
            phone: "(555) 234-5678",
            status: "Closed",
            statusColor: "bg-emerald-500",
        },
        {
            id: "SO-202403013",
            company: "Scott Law Firm",
            name: "Ethan Scott",
            email: "ethan.scott@example.com",
            address: "258 Palm Blvd, New York, NY 10001",
            phone: "(555) 345-6789",
            status: "New",
            statusColor: "bg-sky-300",
        },
        {
            id: "SO-202403014",
            company: "Green Pharmaceuticals",
            name: "Ava Green",
            email: "ava.green@example.com",
            address: "147 Aspen Road, Philadelphia, PA 19102",
            phone: "(555) 456-7890",
            status: "Opened",
            statusColor: "bg-sky-400",
        },
        {
            id: "SO-202403015",
            company: "Hall Construction",
            name: "Benjamin Hall",
            email: "benjamin.hall@example.com",
            address: "369 Spruce Lane, Houston, TX 77002",
            phone: "(555) 567-8901",
            status: "Pending",
            statusColor: "bg-sky-500",
        },
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 30; // Example total pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <>
            <div className="px-4 py-3 flex w-full flex-wrap items-center justify-between gap-1 border border-b-0 rounded-t-lg bg-white">
                <Icon name="chevron-down" size={18} color="none" strokeColor="" className="stroke-gray-400" />
                <h2 className="grow">Service Order Table</h2>
            </div>
            <Toolbar />
            <Table data={users} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default ServiceOrderTable;
