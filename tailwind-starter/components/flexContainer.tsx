import React from "react";

const FlexContainer = () => {
  return (
    <div className="flex flex-auto bg-pink-100 p-8 m-4 rounded shadow-xl gap-x-8">
      <div className="basis-1/3 bg-white rounded-md p-8 shadow-sm">
        <h1 className="font-black text-xl">Standard</h1>
        <h2 className="text-gray-600">Monthly Plan</h2>
        <h1 className="font-bold text-3xl mt-4">$25.00</h1>
      </div>
      <div className="basis-1/3 bg-pink-600 text-white rounded-md p-8 shadow-sm">
        <h1 className="font-black text-xl">Popular</h1>
        <h2 className="text-pink-100">Monthly Plan</h2>
        <h1 className="font-bold text-3xl mt-4">$25.00</h1>
      </div>
      <div className="basis-1/3 bg-white rounded-md p-8 shadow-sm">
        <h1 className="font-black text-xl">Premium</h1>
        <h2 className="text-gray-600">Monthly Plan</h2>
        <h1 className="font-bold text-3xl mt-4">$25.00</h1>
      </div>
    </div>
  );
};

export default FlexContainer;
