
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../constants/ApiConstants";

export const SignupRequest = async (
  email: string,
  password: string,
  userRole: number,
  name: string,
  confirmPassword: string,
  skills: string
) => {
  const res: any = await axiosInstance
    .post("/auth/register/", {
      email: email,
      password: password,
      userRole: userRole,
      name: name,
      confirmPassword: confirmPassword,
      skills: skills,
    })
    .catch((err) => {
      const msg = err.response.data;
      toast.warn(`${msg.errors ? msg.errors[0].name : msg.message} !`, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });
    });

  return res;
};
