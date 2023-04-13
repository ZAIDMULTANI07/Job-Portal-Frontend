import * as Yup from "yup";

export const signupSchema = Yup.object({
  userRole: Yup.boolean(),
  name: Yup.string()
    .min(2)
    .max(25)
    .required("This field is mandatory")
    .matches(
      /^[a-zA-Z ]+$/,
      "Name cannot have special characters and whitespaces"
    )
    .strict(true)
    .trim(),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is mandatory"),
  password: Yup.string()
    .min(6)
    .required("This field is mandatory")
    .strict(true)
    .trim("Password cannot have trailing & leading whitespaces"),
  confirmPassword: Yup.string()
    .required("This field is mandatory")
    .oneOf([Yup.ref("password")], "Password must match"),
  skills: Yup.string()
.min(3)
.required("This field is mandatory")
  });
// Yup.string().when("userRole", {
//   is: true,
//   then: Yup.string().min(3).required("This field is mandatory"),
// }),

export const loginSchema = Yup.object({
  email: Yup.string().email().required("This field is mandatory"),
  password: Yup.string().min(6).required("Incorrect email address or password"),
});

export const forgotSchema = Yup.object({
  email: Yup.string().email().required("This field is mandatory"),
});

export const resetSchema = Yup.object({
  password: Yup.string().min(6).required("This field is mandatory"),
  confirmPassword: Yup.string()
    .required("This field is mandatory")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export const jobPostSchema = Yup.object({
  title: Yup.string()
    .min(3)
    .max(100)
    .required("This field is mandatory")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9@#&$+()-./ ]*$/,
      "Title cannot have only special characters & numbers"
    ),
  description: Yup.string()
    .min(3)
    .max(300)
    .required("This field is mandatory")
    .strict(false)
    .trim("Description cannot have trailing & leading whitespaces"),
  location: Yup.string()
    .min(3)
    .max(100)
    .required("This field is mandatory")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9@#&$/ ]*$/,
      "Location cannot have only special characters & numbers"
    ),
});
