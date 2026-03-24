import React, { useState } from "react";
import { IconButton } from "../components/IconButton";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { useWidgetContext } from "../hooks/useWidgetContext";
import { ModalView } from "../constants";
import { AddWidgetModal } from "./AddWidgetModal";
import { DevToModal } from "./DevToModal";
// import { handleDelete } from "../constants/handleDelete";

export const DevToCard = ({ data = [], index }) => {
  const { handleDelete, onOpenDevTo, isWidget, isDevTo, onCloseModal } =
    useWidgetContext();

  return (
    <>
      <div className="h-fit w-[500px] bg-white rounded-2xl  p-2">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[#38b1a1] text-[12px] flex gap-2 items-center font-medium">
            DEV.TO <span className="text-[#38b1a1]">.</span>{" "}
            <p className="text-black text-[14px] font-semibold">
              Dev.to Articles
            </p>
          </h2>
          <div className="flex gap-3 ">
            <IconButton>
              <LuRefreshCw />
            </IconButton>
            <IconButton>
              <IoSettingsOutline onClick={onOpenDevTo} />
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
        <div className="flex flex-col mt-1">
          {data?.slice(0, 10).map((article) => (
            <div
              key={article.id}
              className="w-full hover:bg-gray-100 rounded-2xl transition p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-medium">{article?.title}</p>
              </div>
              <div className="text-[12px] text-gray-400">
                <div className="flex items-center gap-1 ">
                  <p>
                    <IoMdHeartEmpty />
                  </p>
                  <p>{article?.positive_reactions_count}</p>
                  <p>
                    <LuMessageCircle />
                  </p>
                  <p>{article?.comments_count}</p>
                  <p>
                    <MdAccessTime />
                  </p>
                  <p>{article?.readable_publish_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isWidget && <AddWidgetModal onOpenDevTo={onOpenDevTo} />}
      {isDevTo && <DevToModal isOpen={isDevTo} onClose={onCloseModal} />}
    </>
  );
};
