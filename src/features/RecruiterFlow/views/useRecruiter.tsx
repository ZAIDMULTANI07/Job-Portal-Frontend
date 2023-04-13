

import { RecruiterOneJobRequest, RecruiterRequest } from "@/src/apis/recruiter";
import { UserContext } from "@/src/contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export const useRecruiter = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [activeJob, setActiveJob] = useState<string>("");

  const [page, setPage] = useState(Number(router.query.page) || 1);
  const [totalPages, setTotalPages] = useState(1);

  const { data: jobs, isLoading } = useQuery(
    ["recruiterJobs", page],
    () => RecruiterRequest(page),
    {
      enabled: !!user?.token,
      onSuccess: (data) => {
        router.push(
          `/recruiter`,
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

  const { data: oneJob, isLoading: oneJobLoading } = useQuery(
    ["oneJob", activeJob],
    () => RecruiterOneJobRequest(activeJob),
    {
      enabled: !!user?.token && activeJob !== "",
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
    isLoading,
    oneJobLoading,
    oneJob,
    openModal,
    totalPages,
    page,
    setPage,
  };
};
