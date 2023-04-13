
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../constants/ApiConstants";

export const ResetRequest = async (
  password: string,
  confirmPassword: string,
  token: string
) => {
  const res = await axiosInstance.post(
    "/auth/resetpassword",
    {
      password: password,
      confirmPassword: confirmPassword,
      token: token,
    }
  );
  toast.success("Password Changed !", {
    position: toast.POSITION.TOP_RIGHT,
    className: "toast-login",
    hideProgressBar: true,
    autoClose: 3000,
  });
  return res;
};
