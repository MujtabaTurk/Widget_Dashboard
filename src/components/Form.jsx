import React from "react";
import { useFormik } from "formik";
import { formValidation } from "../yupSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Form = () => {
  const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: formValidation,
    });

  return (
    <>
      <form
        className="flex flex-col h-170 w-100 justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-white text-black "
          />
          {errors.name && touched.name ? (
            <p className="text-red-500 text-[10px]">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="bg-white text-black"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />
          {errors.email && touched.email ? (
            <p className="text-red-500 text-[10px]">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="bg-white text-black"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
          />
          {errors.password && touched.password ? (
            <p className="text-red-500 text-[10px]">{errors.password}</p>
          ) : null}
        </div>
        <button type="submit" className="cursor-pointer">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
