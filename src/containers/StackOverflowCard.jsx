import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { IconButton } from "../components/IconButton";
import { Avatar } from "../components/Avatar";
import { PiMedalLight } from "react-icons/pi";
import { useWidgetContext } from "../hooks/useWidgetContext";
// import { handleDelete } from "../constants/handleDelete";

export const StackOverflowCard = ({ data = [], index }) => {
  const { handleDelete, onOpenStackOverflow } = useWidgetContext();
  return (
    <>
      <div className="h-fit w-[550px] bg-white rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[#38b1a1] text-[12px] flex gap-2 items-center font-medium">
            STACKOVERFLOW <span className="text-[#38b1a1]">.</span>{" "}
            <p className="text-black text-[14px] font-semibold">
              StackOverflow Summary
            </p>
          </h2>
          <div className="flex gap-3 ">
            <IconButton>
              <LuRefreshCw />
            </IconButton>
            <IconButton>
              <IoSettingsOutline onClick={onOpenStackOverflow} />
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

        <Avatar
          name={data.items[0]?.display_name || "USER"}
          reputation={data?.items[0]?.reputation || 0}
          image={data.items[0]?.profile_image || ""}
        />

        <div className="flex item-center justify-between mb-0 p-4">
          <div>
            <p className="text-[12px] text-gray-400">ANSWERS</p>
          </div>
          <div>
            <p className="text-[12px] text-gray-400">QUESTIONS</p>
          </div>
          <div>
            <p className="text-[24px] font-jet-brain font-bold">
              {data?.items[0]?.reputation || 0}
            </p>
            <p className="text-[12px] text-gray-400">REP</p>
          </div>
        </div>

        <div className="flex items-center px-4 py-1 gap-2 mb-2">
          <p>
            <PiMedalLight />
          </p>
          <span className="text-[14px] font-bold text-[#fbd014] text-[12px] font-jet-brain">
            .{data?.items[0]?.badge_counts.gold || 0}
          </span>

          <p className="font-bold text-gray-400 text-[12px] font-jet-brain">
            .{data?.items[0]?.badge_counts.silver || 0}
          </p>
          <p className="font-bold text-[#b8732e] text-[12px] font-jet-brain">
            .{data?.items[0]?.badge_counts.bronze || 0}
          </p>
        </div>
      </div>
    </>
  );
};
