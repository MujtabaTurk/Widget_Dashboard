import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useFormik } from "formik";
import { devToinputValidation } from "../yupSchema";
// import { setGithubRepo } from "../constants/apis";
import { useWidgetContext } from "../hooks/useWidgetContext";

const initialValues = {
  username: "",
  limit: 5,
};

export const GithubRepoModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsloading] = useState(false);
  const { setGithubRepo } = useWidgetContext();
  const onSubmit = async (payload) => {
    try {
      setIsloading(true);
      await setGithubRepo(payload?.username);

      onClose();
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsloading(false);
    }
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: devToinputValidation,
      onSubmit: onSubmit,
    });

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-40"
        onClick={onClose}
      />
      <div className="h-fit w-[520px] bg-gray-100  p-6 rounded-[20px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50!  flex flex-col ">
        <span className="flex justify-between items-center  text-[19px]">
          <h2 className="font-medium ">Configure GitHub Repos</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            {" "}
            <RxCross2 />
          </button>
        </span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <span className="flex flex-col mt-3 ">
            <h2 className="font-bold text-[14px] ">GitHub Username</h2>{" "}
            <input
              type="text"
              placeholder="Enter Your Username"
              value={values.username}
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-[#38b1a1] rounded-[13px]  mt-1 py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
            />
            {errors.username && touched.username ? (
              <p className="text-red-500 text-[10px] pl-3">{errors.username}</p>
            ) : null}
          </span>

          <span>
            <h2 className="font-medium text-[14px] mt-3">Sort By</h2>

            <select
              className="border border-[#38b1a1] rounded-[13px]  mt-1 py-[10px] px-2 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
              name="sortBy"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option className="bg-[#38b1a1] text-white mt-10">
                Recently Updates
              </option>
              <option className="bg-[#38b1a1] text-white">Stars</option>
              <option className="bg-[#38b1a1] text-white">Names</option>
            </select>
          </span>
          <span className="flex flex-col mt-3 ">
            <h2 className="font-bold text-[13px]">Limit</h2>
            <input
              type="number"
              name="limit"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.limit}
              className="border  border-[#38b1a1] rounded-[13px]  mt-1 py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
            />
            {errors.limit && touched.limit ? (
              <p className="text-red-500 text-[10px] pl-3">{errors.limit}</p>
            ) : null}
          </span>
          <button
            className="bg-[#38b1a1] text-white py-2 px-4 rounded-[13px] mt-3 w-full "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};
