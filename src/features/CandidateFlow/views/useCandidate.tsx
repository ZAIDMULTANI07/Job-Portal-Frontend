
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { AllJobs, Apply, OneJob } from "@/src/apis/candidate";
import { UserContext } from "@/src/contexts/UserContext";

export const useCandidate = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [activeJob, setActiveJob] = useState<string>("");
  const [page, setPage] = useState(Number(router.query.page) || 1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: oneJob, isLoading: oneJobLoading } = useQuery(
    ["activeJob", activeJob],
    () => OneJob(activeJob),
    {
      enabled: activeJob !== "",
    }
  );

  const { mutate, data } = useMutation({
    mutationFn: ({ id }: { id: string }) => Apply(id),
    onSuccess: () => {
      toast.success("Application Sent !", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-login",
        hideProgressBar: true,
        autoClose: 3000,
      });
      openModal("");
    },
  });

  const ApplyToAJob = async (id: string) => {
    mutate({ id });
  };

  const { data: jobs, isLoading: allJobsLoading } = useQuery(
    ["getAllJobs", page, data],
    () => {
      return AllJobs(page);
    },
    {
      enabled: !!user?.token,
      onSuccess: (data) => {
        router.push(
          `/candidate`,
          {
            query: {
              page: page,
            },
          },
          {
            scroll: false,
          }
        );
        window.scroll(0, 0);
        setTotalPages(Math.ceil(data?.metadata?.count / 20));
      },
    }
  );

  const openModal = (id: string) => {
    setActiveJob(id);
    if (id !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return {
    activeJob,
    jobs,
    oneJob,
    setActiveJob,
    oneJobLoading,
    ApplyToAJob,
    setPage,
    page,
    totalPages,
    allJobsLoading,
    openModal,
  };
};
