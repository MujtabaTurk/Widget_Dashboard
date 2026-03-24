import React from "react";
import { cn } from "../libs/utils";

export const IconButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        "h-6 w-6 hover:bg-[#38b1a1] hover:text-white flex items-center justify-center rounded-[6px] cursor-pointer ",
      )}
    >
      {children}
    </button>
  );
};
