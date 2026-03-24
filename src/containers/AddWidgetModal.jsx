import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Modal } from "../components/Modal";
import { GithubProfile } from "./GithubProfileModal";
import { useWidgetContext } from "../hooks/useWidgetContext";

export const AddWidgetModal = () => {
  const {
    onOpenGithubProfile,
    onOpenGithubRepo,
    onOpenDevTo,
    onOpenStackOverflow,
    onOpenHackerNews,
    onClose,
  } = useWidgetContext();
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-40"
        onClick={onClose}
      />
      <div className="h-fit w-fit bg-gray-100 text-black rounded-[20px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50! ">
        <div className="flex justify-between items-center mt-2 p-3 pl-6 ">
          <h3 className="text-[18px] font-medium ">Add Widget</h3>
          <span
            className="font-medium text-2xl cursor-pointer text-gray-500"
            onClick={onClose}
          >
            <RxCross2 />
          </span>
        </div>
        <div>
          <p className="text-[#38b1a1] ml-[20px] text-[13px] font-bold">
            GITHUB
          </p>
          <div
            className="flex flex-col ml-[27px] mt-1 hover:bg-gray-200 duration-300 h-15 justify-center w-110 rounded-[10px] cursor-pointer hover:text-[#38b1a1]"
            onClick={onOpenGithubProfile}
          >
            <p className="text-[13px] font-medium ml-3 ">GitHub Profile</p>
            <p className="text-gray-400 text-[12px] ml-3">
              User Stats:repos, followers,gists
            </p>
          </div>
        </div>
        <div>
          <div
            className="flex flex-col ml-[27px]  hover:bg-gray-200 duration-300 h-15 justify-center w-110 rounded-[10px] cursor-pointer hover:text-[#38b1a1]"
            onClick={onOpenGithubRepo}
          >
            <p className="text-[13px] font-medium ml-3">GitHub Repos</p>
            <p className="text-gray-400 text-[12px] ml-3">
              Repository:List with stars and forks
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#38b1a1] ml-[25px] text-[13px] font-bold mt-3">
            DEV.TO
          </p>
          <div
            className="flex flex-col ml-[27px] mt-1  hover:bg-gray-200 duration-300 h-15 justify-center w-110 rounded-[10px] cursor-pointer hover:text-[#38b1a1]"
            onClick={onOpenDevTo}
          >
            <p className="text-[13px] font-medium ml-3">Dev.To Articles</p>
            <p className="text-gray-400 text-[12px] ml-3">
              Latest articles with reaction and comments
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#38b1a1] ml-[25px] text-[13px] font-bold mt-3">
            STACK OVERFLOW
          </p>
          <div
            onClick={onOpenStackOverflow}
            className="flex flex-col ml-[27px] mt-1  hover:bg-gray-200 duration-300 h-15 justify-center w-110 rounded-[10px] cursor-pointer hover:text-[#38b1a1]"
          >
            <p className="text-[13px] font-medium ml-3">
              StackOverflow Summary
            </p>
            <p className="text-gray-400 text-[12px] ml-3">
              User stats,reputation,and badges
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#38b1a1] ml-[25px] text-[13px] font-bold mt-3">
            HACKER NEWS
          </p>
          <div
            onClick={onOpenHackerNews}
            className="flex flex-col ml-[27px] mt-1 hover:bg-gray-200 duration-300 h-15 justify-center w-110 rounded-[10px] cursor-pointer hover:text-[#38b1a1]"
          >
            <p className="text-[13px] font-medium ml-3">Hacker News Activity</p>
            <p className="text-gray-400 text-[12px] ml-3">
              Recent submission and karma
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
