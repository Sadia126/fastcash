import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const { payBill, paidBills } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id === parseInt(id));
        setBill(found);
      });
  }, [id]);

  if (!bill) return <p className="text-center mt-10">Loading...</p>;
  const isPaid = paidBills.includes(bill.id);

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-20">
      <img
        src={bill.icon}
        alt={bill.organization}
        className="max-h-52 object-contain"
      />
      <div>
        <h2 className="text-2xl font-bold">{bill.organization}</h2>
        <p className="italic text-gray-600 mb-1">{bill.bill_type} Bill</p>
        <p className="mb-1">
          Amount: <strong>{bill.amount} BDT</strong>
        </p>
        <p className="mb-3">
          Due Date: {new Date(bill["due-date"]).toLocaleDateString()}
        </p>
        {isPaid && (
          <p className="text-green-600 flex items-center gap-2 mt-2 font-medium my-5">
            <span>✅</span> This bill has already been paid.
          </p>
        )}
        <button
          onClick={() => {
            payBill(bill.id, bill.amount);
            navigate("/bills");
          }}
          className={`btn text-white ${
            isPaid
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#95b864] hover:bg-green-700 cursor-pointer"
          }`}
          disabled={isPaid}
        >
          {isPaid ? "Paid" : "Pay Bill"}
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
