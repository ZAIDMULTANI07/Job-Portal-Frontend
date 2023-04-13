

import { ForgetRequest } from "@/src/apis/forget";
import { forgotSchema } from "@/src/schemas";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

export const useForgotPasswordView = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialValues = {
    password: "",
    cpassword: "",
    email: "",
  };

  const { mutate } = useMutation({
    mutationFn: ({ email }: { email: string }) => ForgetRequest(email),
    onSuccess: (res) => {
      const data = res?.data.data;

      router.push(`/reset/?token=${data.token}`);
    },
    onError: () => {
      setLoading(false);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const { email } = values;
        mutate({ email });
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
  };
};
