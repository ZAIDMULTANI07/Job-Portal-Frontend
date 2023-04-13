
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../constants/ApiConstants";

export const ForgetRequest = async (email: string) => {
  const res: any = await axiosInstance
    .get(`/auth/resetpassword?email=${email}`)
    .catch(() => {
      toast.error("Email doesn't exist !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });
    });

  return res;
};
