
import axios from "axios";
import { getCookie } from "../utils/Cookies";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(

  (config) => {
    if(getCookie("userData")!==null && getCookie("userData")?.token){
      config.headers["Authorization"] = `${getCookie("userData")?.token}`;
    }
      return config;
    
  },
  (err) => Promise.reject(err)
);


export default axiosInstance;
