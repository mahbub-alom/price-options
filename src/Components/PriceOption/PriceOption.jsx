import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const {features, name, price } = option;
  return (
    <div className="bg-blue-400 text-white flex flex-col p-4 rounded-md">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {
            features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
        }
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold hover:bg-green-800 rounded-md">Buy Now</button>
    </div>
  );
};

export default PriceOption;
