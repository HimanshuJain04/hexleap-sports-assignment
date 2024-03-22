"use client";
import React from "react";

const Button = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <button
      onClick={clickHandler}
      className="py-[10px] rounded-[3px] px-[30px] text-base font-semibold text-white bg-bg-button"
    >
      <span>See More</span>
    </button>
  );
};

export default Button;
