
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Router } from "next/router";
import { SignupRequest } from "@/src/apis/signup";
import { signupSchema } from "@/src/schemas";

export const useSignupView = () => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const router = useRouter();
  const [validation, setValidation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(true);
  const initialValues = {
    userRole: 0,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
  };

  const { mutate } = useMutation({
    mutationFn: ({
      email,
      password,
      userRole,
      name,
      confirmPassword,
      skills,
    }: {
      email: string;
      password: string;
      userRole: number;
      name: string;
      confirmPassword: string;
      skills: string;
    }) =>
      SignupRequest(email, password, userRole, name, confirmPassword, skills),
    onSuccess: (res) => {
      if (res?.status === 201 || res?.status === 200) {
        if (res.data?.data.userRole) {
          toast.success("Candidate Created Successfully !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-login",
            hideProgressBar: true,
            autoClose: 3000,
          });
        } else {
          toast.success("Recruiter Created Successfully !", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-login",
            hideProgressBar: true,
            autoClose: 3000,
          });
        }
        router.push("/login");
      } else {
        setValidation(true);
        setLoading(false);
      }
    },
    onError: () => {
      setValidation(true);
      setLoading(false);
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setRedirect(false);
      setLoading(true);
      const { userRole, name, email, password, confirmPassword, skills } =
        values;
      mutate({ email, password, userRole, name, confirmPassword, skills });
    },
  });

  const unSavedChanges = useCallback(() => {
    if (values.email.length > 0 && values.name.length > 0) {
      return true;
    } else {
      return false;
    }
  }, [values]);

  useEffect(() => {
    if (unSavedChanges()) {
      const routeChangeStart = (e: any) => {
        if (redirect) {
          const ok = confirm("Are you sure you want to exit?");
          if (!ok) {
            Router.events.emit("routeChangeError");
            window.history.pushState(null, "signup", "/signup");
            throw "Abort route change.";
          }
        }
      };
      Router.events.on("routeChangeStart", routeChangeStart);

      return () => {
        Router.events.off("routeChangeStart", routeChangeStart);
      };
    }
  }, [unSavedChanges, Router, redirect]);

  return {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    initialValues,
    setFieldValue,
    loading,
    validation,
    setValidation
  };
};
