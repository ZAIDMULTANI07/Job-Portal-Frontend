import axiosInstance from "../constants/ApiConstants";



export const RecruiterRequest = async (page: number) => {
  const res = await axiosInstance.get(`recruiters/jobs?page=${page}`);

  return res.data?.data;
};

export const RecruiterOneJobRequest = async (id: string) => {
  const res = await axiosInstance.get(`/recruiters/jobs/${id}/candidates`);

  return res.data?.data;
};

export const postAJob = async (
  title: string,
  description: string,
  location: string
) => {
  const res = await axiosInstance.post("/jobs/", {
    title,
    description,
    location,
  });

  return res.data;
};
