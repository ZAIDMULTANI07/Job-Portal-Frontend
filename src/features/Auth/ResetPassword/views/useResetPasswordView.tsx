

import { ResetRequest } from "@/src/apis/reset";
import { resetSchema } from "@/src/schemas";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

export const useResetPasswordView = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const initialValues = {
    password: "",
    confirmPassword: "",
    token: "",
  };

  const { mutate } = useMutation({
    mutationFn: ({
      password,
      confirmPassword,
      token,
    }: {
      password: string;
      confirmPassword: string;
      token: string;
    }) => ResetRequest(password, confirmPassword, token),
    onSuccess: () => {
      router.push("/login");
    },
    onError: () => {
      setValidation(true);
      setLoading(false);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const token: any = router.query.token;
        const { password, confirmPassword } = values;
        mutate({ password, confirmPassword, token });
      },
    });
  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    validation,
    setValidation
  };
};
