
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../constants/ApiConstants";

export const LoginRequest = async (email: string, password: string) => {
  const res: any = await axiosInstance
    .post("/auth/login/", {
      email: email,
      password: password,
    })
    .catch((err) => {
      toast.error("Invalid Credentials !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });
    });
  return res;
};
