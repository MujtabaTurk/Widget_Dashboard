import { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error("useWidgetContext must be wrap inside Widget Context");
  }
  const {
    widgets,
    isLoading,
    setDevToArticles,
    setGitHubProfile,
    setGithubRepo,
    setHackerNewsProfile,
    setStackOverflowProfile,
    handleDelete,
    widgetRefreshFunc,
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
    isWidget,
  } = context;

  return {
    widgets,
    isLoading,
    setDevToArticles,
    setGitHubProfile,
    setGithubRepo,
    setHackerNewsProfile,
    setStackOverflowProfile,
    handleDelete,
    widgetRefreshFunc,
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
    isLoading,
    isStackOverflow,
    isWidget,
  };
};
