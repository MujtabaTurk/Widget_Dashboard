import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useFormik } from "formik";
import { gitProfileinputValidation } from "../yupSchema";
import { useWidgetContext } from "../hooks/useWidgetContext";

const initialValues = {
  username: "",
};

export const GithubProfile = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setGitHubProfile } = useWidgetContext();

  const onSubmit = async (payload) => {
    try {
      setIsLoading(true);
      await setGitHubProfile(payload?.username);

      onClose();
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: gitProfileinputValidation,
      onSubmit: onSubmit,
    });

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-40"
        onClick={onClose}
      />
      <div className="h-auto w-[520px] p-6 bg-gray-100 text-black rounded-[20px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50! flex flex-col gap-2 ">
        <span className="flex justify-between items-center  text-[19px]">
          <h2 className="font-medium">Configure GitHub Profile</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            {" "}
            <RxCross2 />
          </button>
        </span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <span className="flex flex-col gap-2">
            <h2 className=" font-bold text-[14px] ">GitHub Username</h2>{" "}
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-[#38b1a1] rounded-[13px] py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
            />
            {errors.username && touched.username ? (
              <p className="text-red-500 text-[10px]">{errors.username}</p>
            ) : null}
          </span>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#38b1a1] text-white py-2 px-4  rounded-[13px] w-full cursor-pointer "
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};
