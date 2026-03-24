import { useFormik } from "formik";
import React from "react";
import { stackOverflowValidation } from "../yupSchema";
import { RxCross2 } from "react-icons/rx";
import { useWidgetContext } from "../hooks/useWidgetContext";

const initialValues = {
  userId: "",
};

export const StackOverflowModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setStackOverflowProfile } = useWidgetContext();
  const onSubmit = async (payload) => {
    try {
      await setStackOverflowProfile(payload?.userId);
      setIsLoading(true);
      onClose();
    } catch (error) {
      console.error("Error fetching data from StackOverflow API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { errors, touched, handleSubmit, handleBlur, handleChange, values } =
    useFormik({
      initialValues,
      validationSchema: stackOverflowValidation,
      onSubmit: onSubmit,
    });
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-40"
        onClick={onClose}
      />

      <div className="h-fit w-[520px] p-6 bg-gray-100 text-black rounded-[20px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50! flex flex-col gap-3">
        <span className="flex justify-between items-center  text-[19px]">
          <h2 className="font-medium">Configure StackOverflow Summury</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            {" "}
            <RxCross2 />
          </button>
        </span>
        <form onSubmit={handleSubmit}>
          <span className="flex flex-col gap-2">
            <h2 className=" font-bold text-[14px] ">StackOverflow User ID</h2>{" "}
            <input
              type="number"
              value={values.userId}
              name="userId"
              onChange={handleChange}
              onBlur={handleBlur}
              className="border border-[#38b1a1] rounded-[13px] py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#38b1a1] focus:border-transparent"
            />
            <p className="font-extralight text-[12px] text-gray-500 mb-3">
              Find your ID in your SO profile URL
            </p>
            {errors.userId && touched.userId ? (
              <p className="text-red-500 text-[10px] pl-3">{errors.userId}</p>
            ) : null}
          </span>
          <button
            className="bg-[#38b1a1] text-white py-2 px-4  rounded-[13px] w-full cursor-pointer"
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
