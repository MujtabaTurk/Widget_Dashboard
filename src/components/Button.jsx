import React from "react";
import { cn } from "../libs/utils";

export const Button = ({ variant, children, ...rests }) => {
  const variantLookup = {
    primary: "text-white bg-[#38b1a1] h-10 w-35  text-[16px]",
    secondry:
      "text-black bg-gray-100 h-10 w-25  text-[14px] hover:bg-[#38b1a1] hover:text-white duration-300",
  };
  return (
    <button
      {...rests}
      className={cn(
        "flex items-center justify-center gap-2 font-medium rounded-[10px] cursor-pointer",
        variantLookup[variant],
      )}
    >
      {children}
    </button>
  );
};
