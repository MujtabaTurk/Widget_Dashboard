import React, { useEffect, useState } from "react";
import { IconButton } from "../components/IconButton";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { useWidgetContext } from "../hooks/useWidgetContext";
// import { handleDelete } from "../constants/handleDelete";

export const HackerNewsCard = ({ data = {}, index }) => {
  const { handleDelete,onOpenHackerNews } = useWidgetContext();

  return (
    <div className="h-fit w-[500px] bg-white rounded-2xl p-2">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-[#38b1a1] text-[12px] flex gap-2 items-center font-medium">
          HACKERNEWS <span className="text-[#38b1a1]">.</span>
          <p className="text-black text-[14px] font-semibold">
            HackerNews Activity
          </p>
        </h2>

        <div className="flex gap-3">
          <IconButton>
            <LuRefreshCw />
          </IconButton>

          <IconButton>
            <IoSettingsOutline onClick={onOpenHackerNews}/>
          </IconButton>

          <IconButton>
            <RiDeleteBinLine
              className="text-gray-500 hover:text-red-500"
              onClick={() => handleDelete(index)}
            />
          </IconButton>
        </div>
      </div>

      <hr className="text-gray-300 w-full" />

      <div className="flex items-center justify-between p-4">
        <p className="font-medium">{data?.id}</p>

        <p className="font-jet-brain flex gap-1 font-bold">
          {data?.karma}
          <span className="text-gray-400 text-[14px] mt-1 font-medium">
            KARMA
          </span>
        </p>
      </div>

      {data?.posts?.map((post) => (
        <div
          key={post.id}
          className="flex p-3 items-center hover:bg-gray-200 duration-300 h-14 w-full rounded-[10px] cursor-pointer"
        >
          <p className="text-[13px] font-medium ml-3">
            <FiMessageSquare />
          </p>

          <p className="text-gray-400 text-[12px] ml-3 line-clamp-1">
            {post?.text || "No content"}
          </p>
        </div>
      ))}
    </div>
  );
};
