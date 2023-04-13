import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { setCookie } from "@/src/utils/Cookies";
import { loginSchema } from "@/src/schemas";
import { UserContext } from "@/src/contexts/UserContext";
import { LoginRequest } from "@/src/apis/login";

export const useLoginView = () => {
  useEffect(() => {
    setValidation(false);
  }, []);

  const { user, setUser } = useContext(UserContext);

  const initialValues = {
    userRole: 0,
    email: "",
    password: "",
  };
  const router = useRouter();
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const { mutate } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      LoginRequest(email, password),
    onSuccess: (res) => {
      const data = res?.data;
      setCookie("userData", JSON.stringify(data.data));
      setCookie("token", data.data.token);
      setUser(data.data);
      if (!data.data.userRole) {
        router.push("/recruiter");
      } else {
        router.push("/candidate");
      }
      if (!data) {
        setValidation(true);
        setLoading(false);
      }
      toast.success("Login successfull !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });
    },
    onError: () => {
      setValidation(true);
      setLoading(false);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const { email, password } = values;

        mutate({ email, password });
      },
    });

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    initialValues,
    loading,
    setLoading,
    user,
    validation,
  };
};
