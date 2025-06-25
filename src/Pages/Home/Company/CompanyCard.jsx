import React from "react";
import card1 from "../../../assets/Company/1.jpg";
import card2 from "../../../assets/Company/2.jpg";
import card3 from "../../../assets/Company/3.jpg";
import card4 from "../../../assets/Company/4.jpg";
import card5 from "../../../assets/Company/5.jpg";
import card6 from "../../../assets/Company/6.jpg";

// Card data array
const companyCards = [
  { image: card1, title: "Palli Bidyut" },
  { image: card2, title: "DESCO" },
  { image: card3, title: "NESCO" },
  { image: card4, title: "WASA" },
  { image: card5, title: "Link2" },
  { image: card6, title: "Karnaphuli Gas" },
];

const CompanyCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 justify-items-center">
      {companyCards.map((card, index) => (
        <div key={index} className="card bg-base-100 w-80 shadow-sm cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <figure className="px-10 pt-10">
            <img src={card.image} alt={card.title} className="rounded-xl h-40 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCard;
