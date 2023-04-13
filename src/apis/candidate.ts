import axiosInstance from "../constants/ApiConstants";


export const AppliedJobs = async () => {
  const res = await axiosInstance.get("/candidates/jobs/applied");

  return res.data?.data;
};

export const AllJobs = async (page: number) => {
  const res = await axiosInstance.get(`/candidates/jobs?page=${page}`);
  return res.data;
};

export const OneJob = async (id: string) => {
  const res = await axiosInstance.get(`/jobs/${id}`);
  return res.data?.data;
};

export const Apply = async (id: string) => {
  const res = await axiosInstance.post("/candidates/jobs", {
    jobId: id,
  });

  return res;
};
