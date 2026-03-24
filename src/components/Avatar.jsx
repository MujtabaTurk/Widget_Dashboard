import React from "react";

export const Avatar = ({ name, image, reputation }) => {
  const initaial = name?.charAt(0).toUpperCase();

  return (
    <>
      <div className="flex gap-4 items-center p-4">
        {image ? (
          <img
            src={image}
            alt="userImage"
            className="h-12 w-12 rounded-full bg-none"
          />
        ) : (
          <div className="font-medium text-3xl text-white bg-[#38b1a1] h-12 w-12 flex items-center justify-center rounded-full">
            {initaial}
          </div>
        )}
        <div className="font-medium text-[14px]">
          <p>{name}</p>
          {reputation ? (
            <div className="flex text-gray-400 text-[12px] ">
              <p>Reputation :{reputation}</p>

            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
