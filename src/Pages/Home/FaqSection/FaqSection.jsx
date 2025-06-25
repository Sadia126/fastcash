import React from "react";

const FaqSection = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        📖 Frequently Asked Questions
      </h2>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold">
          Is there any extra fee to pay bills through this website?
        </div>
        <div className="collapse-content text-sm">
          No, there are no hidden charges. You only pay the actual bill amount.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          What happens after I pay a bill?
        </div>
        <div className="collapse-content text-sm">
          Once the payment is successful, the amount is deducted from your
          balance and a ✅ tick mark will appear on that bill.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Can I pay the same bill more than once?
        </div>
        <div className="collapse-content text-sm">
          No, once a bill is paid, it is marked as completed and cannot be paid
          again to avoid duplicate charges.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-4">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          I tried accessing the Bills page but got redirected to login. Why?
        </div>
        <div className="collapse-content text-sm">
          For your security, all billing-related pages are protected. Please log
          in to access them.
        </div>
      </div>

     
    </div>
  );
};

export default FaqSection;
