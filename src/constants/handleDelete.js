import { STORAGE_KEY } from "./misc";

export const handleDelete = (index) => {
  const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedData = storedData.filter((item, i) => i !== index);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
};
