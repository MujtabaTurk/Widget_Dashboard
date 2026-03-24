import { STORAGE_KEY } from "../constants";

export const localStorageGetItem = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }

  return null;
};

export const localStorageSetItem = (key, payload) => {
  const previousData = localStorage.getItem(STORAGE_KEY) || "[]";
  const parsedData = JSON.parse(previousData);
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify([...parsedData, payload]));
  }

  return null;
};

export const localStorageRemoveItem = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }

  return null;
};
