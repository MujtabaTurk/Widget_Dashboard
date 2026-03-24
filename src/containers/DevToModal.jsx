import { useFormik } from "formik";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { devToinputValidation } from "../yupSchema";
import { useWidgetContext } from "../hooks/useWidgetContext";

const initialValues = {
  username: "",
  limit: 10,
};

export const DevToModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setDevToArticles } = useWidgetContext();
  
  const onSubmit = async (payload) => {
    try {
      setIsLoading(true);
      await setDevToArticles(payload?.username);
      onClose();
    } catch (error) {
      console.log("error:", error);
    } finally {
      setIsLoading(false);
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
      <div className="h-fit w-[520px] bg-gray-100 text-black p-5 rounded-[20px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50! ">
        <span>
          <div
            className="
          flex items-center justify-between "
          >
            <h2 className="font-medium text-[18px] ">
              Configure Dev.To Articles
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            >
              <RxCross2 />
            </button>
          </div>
        </span>

        <span>
          <form onSubmit={handleSubmit}>
            <span className="flex flex-col mt-3 gap-1">
              <h2 className=" font-semibold text-[13px] ">Dev.To Username</h2>{" "}
              <input
                type="text"
                placeholder="Enter Your Dev.To Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-[#38b1a1] rounded-[7px]  px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
              />
              {errors.username && touched.username ? (
                <p className="text-red-500 text-[10px] pl-3">
                  {errors.username}
                </p>
              ) : null}
            </span>

            <span className="flex flex-col mt-3 ">
              <h2 className="font-semibold text-[13px]">Article Limit</h2>
              <input
                type="number"
                name="limit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.limit}
                className="border  border-[#38b1a1] rounded-[7px]  mt-1 py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
              />
              {errors.limit && touched.limit ? (
                <p className="text-red-500 text-[10px] pl-3">{errors.limit}</p>
              ) : null}
            </span>
            <button
              className="bg-[#38b1a1] text-white py-2 px-4 rounded-[13px] mt-4 w-full "
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </span>
      </div>
    </>
  );
};
