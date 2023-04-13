
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { postAJob } from "@/src/apis/recruiter";
import { jobPostSchema } from "@/src/schemas";

export const usePostAJob = () => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(true);
  const { mutate } = useMutation({
    mutationFn: ({
      title,
      description,
      location,
    }: {
      title: string;
      description: string;
      location: string;
    }) => postAJob(title, description, location),
    onSuccess: () => {
      toast.success("Job Created !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });

      router.push("/recruiter");
    },
    onError: () => {
      setLoading(false);
    },
  });

  const router = useRouter();

  const initialValues = {
    title: "",
    description: "",
    location: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: jobPostSchema,
      onSubmit: async (values) => {
        setRedirect(false);
        setLoading(true);
        const { title, description, location } = values;
        mutate({
          title: title.trim(),
          description: description.trim(),
          location: location.trim(),
        });
      },
    });

  const unSavedChanges = useCallback(() => {
    if (values.description.length > 0) {
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
            window.history.pushState(null, "jobPost", "/jobPost");
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
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    loading,
  };
};
