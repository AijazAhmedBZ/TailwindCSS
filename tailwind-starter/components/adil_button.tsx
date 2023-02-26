import React from "react";
function AdilButton({ children }) {
  return (
    <div>
      <button className="my-4 px-4 py-2 rounded-lg bg-white hover:scale-150 hover:bg-red-900 hover:text-black hover:border-white">
        {children}
      </button>
    </div>
  );
}

export default AdilButton;
