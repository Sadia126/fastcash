import React from "react";
import { FaBolt, FaLock, FaMobileAlt } from "react-icons/fa";
import { MdLocalSee } from "react-icons/md";


const ChooseUs = () => {
  const features = [
    {
      icon: <FaBolt className="text-4xl text-[#95b864] " />,
      title: "Instant Bill Payment",
      description:
        "Pay your electricity, gas, water, and internet bills in seconds — anytime, anywhere.",
    },
    {
      icon: <FaLock className="text-4xl text-[#95b864]" />,
      title: "Safe & Secure",
      description:
        "All transactions are encrypted and protected with industry-grade security.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#95b864]" />,
      title: "Mobile Friendly",
      description:
        "Our responsive design works seamlessly across phones, tablets, and desktops.",
    },
    {
      icon: <MdLocalSee className="text-4xl text-[#95b864]" />,
      title: "Made for Bangladesh",
      description:
        "Built with love for local users and supports major Bangladeshi utility services.",
    },
  ];

  return (
    <div className="my-20 px-4 ">
      <div className="text-center mb-12">
        <p className="text-[#95b864] font-bold text-xl">WHY CHOOSE US</p>
        <h2 className="text-3xl md:text-5xl font-semibold">
          Key Features We Offer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
