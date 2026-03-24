import React, { useContext, useState } from "react";
import { IconButton } from "../components/IconButton";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { PiGitForkDuotone } from "react-icons/pi";
import { useWidgetContext } from "../hooks/useWidgetContext";
import { GithubRepoModal } from "./GithubRepoModal";
// import { handleDelete } from "../constants/handleDelete";
export const GithubRepoCard = ({ data = [], index }) => {
  const { handleDelete, onOpenGithubRepo } = useWidgetContext();

  return (
    <div className=" h-fit w-[500px] bg-white rounded-2xl p-2 shadow-sm">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-[#38b1a1] text-[12px] flex gap-2 items-center font-medium">
          GITHUB <span>.</span>
          <p className="text-black text-[14px] font-semibold">GitHub Repos</p>
        </h2>

        <div className="flex gap-3">
          <IconButton>
            <LuRefreshCw />
          </IconButton>
          <IconButton>
            <IoSettingsOutline onClick={onOpenGithubRepo} />
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

      <div className="flex flex-col mt-3">
        {data?.map((repo) => (
          <div
            key={repo.id}
            className="w-full hover:bg-gray-100 rounded-xl p-3 transition"
            onClick={() => window.open(repo.html_url, "_blank")}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold">{repo.name}</p>
                <p className="text-[12px] text-[#38b1a1] font-medium">
                  {repo.language || "Unknown"}
                </p>
              </div>

              <div className="flex items-center text-gray-500 text-[12px] gap-2">
                <IoMdStarOutline />
                <span>{repo.stargazers_count}</span>

                <PiGitForkDuotone />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
