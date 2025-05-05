import React from "react";

const Button = ({ text, bgColor, primary }) => {
  return (
    <>
      <button
        className={`bg-${bgColor} ${
          primary &&
          "py-3 px-6 text-white font-semibold rounded-md transition-all duration-200 hover:bg-[#34da8a]"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
