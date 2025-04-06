import React from "react";

const Table = ({ data }) => {
  return (
    <div className="border-0 overflow-x-auto border-x-1">
      <table className="table-auto w-full overflow-auto text-xs border-0" aria-label="User Information Table">
        <thead className="bg-gray-50">
          <tr>

            {/* Header Template */}
            {["ID", "Company", "Name", "Email", "Address", "Phone", "Status", "Actions"].map((header) => (
              <th
                key={header}
                className=" border border-x-0 border-b-0 px-3 py-2 font-semibold first-of-type:pl-4 first-of-type:w-10 last-of-type:w-10"
                scope="col"
                aria-label={header}
              >
                {header}
              </th>
            ))}

          </tr>
        </thead>
        <tbody>

          {/* Row Template */}
          {data.map((user) => (
            <tr key={user.id} className="bg-white hover:bg-gray-100 whitespace-nowrap border-0">
              <td className="border border-x-0 pl-4 pr-3 py-1 text-gray-500" aria-label={`Service Order ID ${user.id}`}>{user.id}</td>
              <td className="border border-x-0 px-3 py-1 font-semibold" aria-label={`Company: ${user.company}`}>{user.company}</td>
              <td className="border border-x-0 px-3 py-1" aria-label={`Name: ${user.name}`}>{user.name}</td>
              <td className="border border-x-0 px-3 py-1" aria-label={`Email: ${user.email}`}>{user.email}</td>
              <td className="border border-x-0 px-3 py-1" aria-label={`Address: ${user.address}`}>{user.address}</td>
              <td className="border border-x-0 px-3 py-1" aria-label={`Phone: ${user.phone}`}>{user.phone}</td>
              <td className="border border-x-0 px-3 py-1 w-25" aria-label={`Status: ${user.status}`}>
                <span className={`block p-0.5 text-xs rounded w-full text-center border-1 ${user.statusColor}`}>
                  {user.status}
                </span>
              </td>
              <td className="border border-x-0 px-3 py-1" aria-label="Actions">
                <div className="space-x-2">
                  <button className="px-3 py-1 underline text-sky-800" aria-label={`Edit ${user.name}`}>Edit</button>
                  <button className="px-3 py-1 underline text-sky-800" aria-label={`Delete ${user.name}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Table;