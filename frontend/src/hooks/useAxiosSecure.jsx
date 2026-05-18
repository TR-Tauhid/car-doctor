import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const authValue = useAuth();
  const { logOut, notify } = authValue;
  
  useEffect(() => {
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          logOut()
            .then(() => {
              notify(`Error: Invalid user...!!!`, "error");
            })
            .catch(() => notify("Something went wrong...!!!", "error"));
          navigate("/login");
        }
      },
    );

    return () => {
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate, notify]);
  return axiosSecure;
};

export default useAxiosSecure;
