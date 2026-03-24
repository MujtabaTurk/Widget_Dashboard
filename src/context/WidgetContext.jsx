import React, { createContext, useContext, useState } from "react";

import {
  localStorageGetItem,
  localStorageSetItem,
} from "../utils/localstorage";
import { ModalView, STORAGE_KEY, Types } from "../constants";
import axios from "axios";

export const WidgetContext = createContext();

export const WidgetContextProvider = (props) => {
  const [widget, setWidgets] = useState(null);
  const [widgetVersion, setWidgetVersion] = useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalView, setModalView] = useState(null);

  const isWidget = modalView === ModalView.Widget;
  const isGithubProfile = modalView === ModalView.GithubProfile;
  const isGithubRepo = modalView === ModalView.GithubRepo;
  const isDevTo = modalView === ModalView.DevTo;
  const isStackOverflow = modalView === ModalView.StackOverflow;
  const isHackerNews = modalView === ModalView.HackerNews;

  const widgets = React.useMemo(() => {
    const data = localStorageGetItem(STORAGE_KEY);
    return JSON.parse(data ?? "[]");
  }, [widgetVersion]);

  const setGitHubProfile = async (username) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      localStorageSetItem(STORAGE_KEY, {
        type: Types.GithubProfile,
        data: response?.data,
      });

      return response?.data;
    } catch (error) {
      console.log("error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
      setIsLoading(false);
    }
  };

  const setGithubRepo = async (username) => {
    try {
      setWidgetVersion(true);
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );
      if (!response) return [];

      const limitedRepos = response?.data?.slice(0, 10);

      if (limitedRepos?.length) {
        localStorageSetItem(STORAGE_KEY, {
          type: Types.GithubRepo,
          data: limitedRepos,
        });
      }

      return response?.data;
    } catch (error) {
      console.log("error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
      setIsLoading(false);
    }
  };

  const setDevToArticles = async (username) => {
    try {
      const response = await axios.get(
        `https://dev.to/api/articles?username=${username}`,
      );

      if (!response) return [];

      const limitedArticles = response?.data?.slice(0, 10);

      if (limitedArticles?.length) {
        localStorageSetItem(STORAGE_KEY, {
          type: Types.DevTo,
          data: limitedArticles,
        });
      }

      return response?.data;
    } catch (error) {
      console.log("error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
      setIsLoading(false);
    }
  };

  const setStackOverflowProfile = async (userId) => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`,
      );
      if (!response) return null;
      localStorageSetItem(STORAGE_KEY, {
        type: Types.StackOverflow,
        data: response?.data,
      });
    } catch (error) {
      console.log("error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
      setIsLoading(false);
    }
  };

  const setHackerNewsProfile = async (username) => {
    try {
      let payload;
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/user/${username}.json`,
      );

      if (!response) return null;

      const ids = response?.data?.submitted.slice(0, 5);

      const posts = await Promise.all(
        ids.map((id) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json(),
          ),
        ),
      );

      if (!posts?.length) return null;

      payload = {
        id: response?.data?.id,
        karma: response?.data?.karma,
        posts: posts,
      };

      localStorageSetItem(STORAGE_KEY, {
        type: Types.HackerNews,
        data: payload,
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
      setIsLoading(false);
    }
  };

  const handleDelete = (index) => {
    try {
      const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const updatedData = storedData.filter((item, i) => i !== index);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setWidgetVersion((v) => v + 1);
    }
  };

  const widgetRefreshFunc = () => {
    const response = localStorageGetItem(STORAGE_KEY);
    setWidgets(response ? JSON.parse(response) : []);
  };

  const onOpenAddWidget = () => {
    setModalView(ModalView.Widget);
  };

  const onOpenGithubProfile = () => {
    setModalView(ModalView.GithubProfile);
  };

  const onOpenGithubRepo = () => {
    setModalView(ModalView.GithubRepo);
  };

  const onOpenDevTo = () => {
    setModalView(ModalView.DevTo);
  };
  const onOpenStackOverflow = () => {
    setModalView(ModalView.StackOverflow);
  };
  const onOpenHackerNews = () => {
    setModalView(ModalView.HackerNews);
  };

  const onCloseModal = () => {
    setModalView(null);
  };

  const values = {
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

  return (
    <WidgetContext.Provider value={values}>
      {props.children}
    </WidgetContext.Provider>
  );
};
