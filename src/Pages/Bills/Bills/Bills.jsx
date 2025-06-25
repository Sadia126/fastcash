import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, []);

  // Get unique bill types for dropdown
  const billTypes = ["all", ...new Set(bills.map((b) => b.bill_type))];

  // Filter bills based on selection
  const filteredBills =
    selectedType === "all"
      ? bills
      : bills.filter((bill) => bill.bill_type === selectedType);

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Bills</h1>

      {/* Filter Dropdown */}
      <div className="max-w-xs mx-auto mb-10">
        <select
          onChange={(e) => setSelectedType(e.target.value)}
          className="select select-bordered w-full"
          value={selectedType}
        >
          {billTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Bills List */}
      <div className="grid grid-cols-1 gap-10">
        {filteredBills.map((bill) => (
          <div key={bill.id} className="card card-side bg-base-100 shadow-md">
            <figure className="w-32 h-32 p-4">
              <img
                src={bill.icon}
                alt={bill.bill_type}
                className="w-full h-full object-contain"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{bill.organization}</h2>
              <p className="text-sm text-gray-500 capitalize">
                Type: {bill.bill_type}
              </p>
              <p className="text-sm">Amount: ৳{bill.amount}</p>
              <p className="text-sm">
                Due: {new Date(bill["due-date"]).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/bill/${bill.id}`}
                  className="btn bg-[#95b864] btn-md text-white"
                >
                  Bill Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {filteredBills.length === 0 && (
          <p className="text-center text-gray-500">No bills found.</p>
        )}
      </div>
    </div>
  );
};

export default Bills;
