import React, { useContext, useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { IconButton } from "../components/IconButton";
import { Avatar } from "../components/Avatar";
import { useWidgetContext } from "../hooks/useWidgetContext";
// import { handleDelete } from "../constants/handleDelete";
import { AddWidgetModal } from "../containers/AddWidgetModal";
import { GithubProfile } from "./GithubProfileModal";

export const GithubProfileCard = ({ data, index }) => {
  const [show, setShow] = useState(true);
  const {
    handleDelete,
    onCloseModal,
    isGithubProfile,
    isWidget,
    onOpenGithubProfile,
  } = useWidgetContext();
  if (!show) return null;
  const { avatar_url, login, public_repos, followers, following } = data ?? {};
  return (
    <>
      <div className="h-fit w-full bg-white rounded-2xl "
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-[#38b1a1] text-[12px] flex gap-2 items-center font-medium">
            GITHUB <span className="text-[#38b1a1]">.</span>{" "}
            <p className="text-black text-[14px] font-semibold">
              GitHub Profile
            </p>
          </h2>
          <div className="flex gap-3 ">
            <IconButton>
              <LuRefreshCw />
            </IconButton>
            <IconButton>
              <IoSettingsOutline onClick={onOpenGithubProfile} />
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

        <Avatar name={login} image={avatar_url} />
        {/* <Avatar name={data.login} image={data.avatar_url}/> */}

        <div className="flex item-center gap-8 p-4 ml-4">
          <div>
            <p className="text-[24px] font-jet-brain font-bold">
              {public_repos}
            </p>
            <p className="text-[12px] text-gray-400">REPOS</p>
          </div>
          <div>
            <p className="text-[24px] font-jet-brain font-bold ">{followers}</p>
            <p className="text-[12px] text-gray-400">FOLLOWERS</p>
          </div>
          <div>
            <p className="text-[24px] font-jet-brain font-bold">{following}</p>
            <p className="text-[12px] text-gray-400">FOLLOWING</p>
          </div>
        </div>
      </div>
     
    </>
  );
};
