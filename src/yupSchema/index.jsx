import * as yup from "yup";

const Errors = {
  name: {
    Required: "Name Is Required",
    Min: "Must Must Be Minnimum 3 Latters",
  },
  email: {
    Required: "Email Is Required",
    Valid: "Please Enter A Valid Email",
  },
  password: {
    Required: "Password Is Required",
    Min: "Must Must Be Minnimum 8 Latters",
  },
};

export const formValidation = yup.object({
  name: yup.string().required(Errors.name.Required).min(3, Errors.name.Min),
  email: yup.string().email(Errors.email.Valid).required(Errors.email.Required),
  password: yup
    .string()
    .min(8, Errors.password.Min)
    .required(Errors.password.Required),
});

export const gitProfileinputValidation = yup.object({
  username: yup
    .string()
    .required("Username Is Required")
    .min(1, "Limit Must Be At Least 1")
    .max(25, "Limit Cannot Exceed 25"),
});
export const devToinputValidation = yup.object({
  username: yup.string().required("Username Is Required"),
  limit: yup
    .number()
    .min(1, "Limit Must Be At Least 1")
    .max(25, "Limit Cannot Exceed 25")
    .required("Limit Is Required"),
});

export const stackOverflowValidation = yup.object({
  userId: yup.number().required("User ID Is Required"),
});
export const hackerNewsValidation = yup.object({
  username: yup.string().required("Hacker News Username Is Required"),
  limit: yup
    .number()
    .min(1, "Limit Must Be At Least 1")
    .max(25, "Limit Cannot Exceed 25")
    .required("Limit Is Required"),
});
