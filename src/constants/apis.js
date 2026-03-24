import axios from "axios";
import { localStorageSetItem } from "../utils/localstorage";
import { STORAGE_KEY, Types } from "./misc";

export const setGitHubProfile = async (username) => {
  try {
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
  }
};

export const setGithubRepo = async (username) => {
  try {
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
  }
};

export const setDevToArticles = async (username) => {
  try {
    const response = await axios.get(`https://dev.to/api/articles?${username}`);

    if (!response) return [];

    localStorageSetItem(STORAGE_KEY, {
      type: Types.DevTo,
      data: response?.data,
    });
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
  }
};

export const setStackOverflowProfile = async (userId) => {
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
  }
};

export const setHackerNewsProfile = async (username) => {
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

    console.log("posts:", posts);
    console.log("payload:", payload);

    localStorageSetItem(STORAGE_KEY, {
      type: Types.HackerNews,
      data: payload,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
