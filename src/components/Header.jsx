import React, { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { Button } from "./Button";
import { AddWidgetModal } from "../containers/AddWidgetModal";
import { ModalView } from "../constants/misc";
import { GithubProfile } from "../containers/GithubProfileModal";
import { GithubRepoModal } from "../containers/GithubRepoModal";
import { DevToModal } from "../containers/DevToModal";
import { StackOverflowModal } from "../containers/StackOverflowModal";
import { HackerNewsModal } from "../containers/HackerNewsModal";
import { useWidgetContext } from "../hooks/useWidgetContext";

export const Header = ({ refreshWidget }) => {
  const {
    isWidget,
    onCloseModal,
    onOpenAddWidget,
    onOpenDevTo,
    onOpenGithubProfile,
    onOpenGithubRepo,
    onOpenHackerNews,
    onOpenStackOverflow,
    isDevTo,
    isGithubProfile,
    isGithubRepo,
    isHackerNews,
    isStackOverflow,
  } = useWidgetContext();
  return (
    <div>
      <div className="bg-white h-16 flex items-center justify-between gap-2">
        <h2 className="text-black font-bold text-[20px] flex items-start ml-8">
          Analytics <span className="text-teal-600">.</span>
        </h2>

        <div className="flex gap-3 mr-7">
          <Button variant="secondry" onClick={refreshWidget}>
            <span>
              <LuRefreshCw />
            </span>
            {"  "}
            Refresh
          </Button>
          <Button variant="primary" onClick={onOpenAddWidget}>
            <span>
              <FiPlus />
            </span>
            Add Widget
          </Button>
        </div>
      </div>

      {isWidget && (
        <AddWidgetModal
          isOpen={isWidget}
          onClose={onCloseModal}
        />
      )}
      {isGithubProfile && (
        <GithubProfile isOpen={isGithubProfile} onClose={onCloseModal} />
      )}
      {isGithubRepo && (
        <GithubRepoModal isOpen={isGithubRepo} onClose={onCloseModal} />
      )}
      {isDevTo && <DevToModal isOpen={isDevTo} onClose={onCloseModal} />}
      {isStackOverflow && (
        <StackOverflowModal isOpen={isStackOverflow} onClose={onCloseModal} />
      )}
      {isHackerNews && (
        <HackerNewsModal isOpen={isHackerNews} onClose={onCloseModal} />
      )}
    </div>
  );
};
