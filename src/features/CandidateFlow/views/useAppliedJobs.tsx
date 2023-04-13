

import { AppliedJobs, OneJob } from "@/src/apis/candidate";
import { UserContext } from "@/src/contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const useAppliedJobs = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [page, setPage] = useState(Number(router.query.page) || 1);
  const [activeJob, setActiveJob] = useState<string>("");
  const [totalPages, setTotalPages] = useState(1);
  const { data: applied, isLoading } = useQuery(
    ["getApplied"],
    () => AppliedJobs(),
    {
      enabled: !!user?.token,
    }
  );
  const { data: oneJob, isLoading: oneJobLoading } = useQuery(
    ["activeJob", activeJob],
    () => OneJob(activeJob),
    {
      enabled: activeJob !== "",
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
    applied,
    isLoading,
    totalPages,
    page,
    setPage,
    activeJob,
    openModal,
    oneJobLoading,
    oneJob,
  };
};
