import React from "react";

const Table = ({ data }) => {
  return (
    <div className="border-0 overflow-x-auto border-x-1">
      <table className="table-auto w-full overflow-auto text-xs border-0" aria-label="User Information Table">
        <thead className="bg-gray-50">
          <tr>
            {["ID", "Company", "Name", "Email", "Address", "Phone", "Status", "Actions"].map((header) => (
              <th
                key={header}
                className="border pl-4 pr-3 py-2 text-center first-of-type:border-l-0 last-of-type:border-r-0 last-of-type:w-10"
                scope="col"
                aria-label={header}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="bg-white hover:bg-gray-100 whitespace-nowrap border-0">
              <td className="border border-l-0 pl-4 pr-3 py-1" aria-label={`Service Order ID ${user.id}`}>{user.id}</td>
              <td className="border px-3 py-1" aria-label={`Company: ${user.company}`}>{user.company}</td>
              <td className="border px-3 py-1" aria-label={`Name: ${user.name}`}>{user.name}</td>
              <td className="border px-3 py-1" aria-label={`Email: ${user.email}`}>{user.email}</td>
              <td className="border px-3 py-1" aria-label={`Address: ${user.address}`}>{user.address}</td>
              <td className="border px-3 py-1" aria-label={`Phone: ${user.phone}`}>{user.phone}</td>
              <td className="border px-3 py-1" aria-label={`Status: ${user.status}`}>
                <span className={`block p-1 rounded w-full text-center text-white font-semibold ${user.statusColor}`}>
                  {user.status}
                </span>
              </td>
              <td className="border border-r-0 px-3 py-1" aria-label="Actions">
                <div className="space-x-2">
                  <button className="px-3 py-1 rounded border" aria-label={`Edit ${user.name}`}>Edit</button>
                  <button className="px-3 py-1 rounded border" aria-label={`Delete ${user.name}`}>Delete</button>
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