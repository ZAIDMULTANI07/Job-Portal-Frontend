import Link from "next/link";
import HomepageCard from "../../@components/HomePageCard/HomePageCard";


import { useAppliedJobs } from "./views/useAppliedJobs";

import { useRouter } from "next/router";
import { IJobs } from "@/src/Interfaces/featuresInterface";
import Pagination from "@/src/@components/Pagination/Pagination";
import { Background } from "@/src/@common/Background";

function AppliedJobs() {
  const {
    activeJob,
    oneJobLoading,
    isLoading,
    openModal,
    applied,
    oneJob,
    setPage,
    page,
  } = useAppliedJobs();
  const router = useRouter();
  return (
    <section className="relative">
      <Background height="h-[150px]" name="> Applied Jobs" display={false} />
      <div className="mt-[-137px] w-full">
        <div className="container lg:px-24 mx-auto md:px-0 sm:px-0 px-5">
          <h2 className="text-xl text-white my-8">Jobs applied by you</h2>
          {isLoading ? (
            <div className="items-center justify-center min-h-[80vh] mx-auto flex">
              <div className="items-center justify-center flex rounded-full w-[33px] h-[33px] shadow-silver">
                <div
                  id="spinner"
                  className="text-center w-[25px] h-[25px] rounded-full"
                ></div>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              {!applied ? (
                <div className="items-center min-h-[80vh] justify-center flex">
                  <div className="text-center">
                    <img
                      src="/Images/writing.png"
                      className="mx-auto w-[90px] mb-4"
                    />
                    <div className="items-center mb-8 justify-center flex font-light">
                      Your applied jobs will show here!
                    </div>
                    <Link
                      href="/candidate"
                      className="rounded w-min mx-auto bg-[#43AFFF] hover:bg-[#289cf5] text-white px-6 py-2 text-sm"
                    >
                      See all jobs
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 animate-bottom">
                  {applied
                    ?.slice((page - 1) * 20, page * 20)
                    ?.map((item: IJobs) => {
                      return (
                        <HomepageCard
                          key={item.id}
                          title={item.title}
                          location={item.location}
                          description={item.description}
                          btnName={"Preview"}
                          active={() => openModal(item.id)}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          )}
          {applied?.length >= 1 ? (
            <Pagination
              page={page}
              totalPages={Math.ceil(applied?.length / 20)}
              active={({ selected }: any) => {
                router.push(
                  `/applied`,
                  {
                    query: {
                      page: `${selected + 1}`,
                    },
                  },
                  {
                    scroll: false,
                  }
                );
                window.scroll(0, 0);
                setPage(selected + 1);
              }}
            />
          ) : null}
        </div>
        {activeJob !== "" ? (
          <div
            className="h-screen fixed top-0 bg-black bg-opacity-50 w-full z-20"
            onClick={() => openModal("")}
          >
            <div className="h-screen items-center justify-center flex">
              <div className="bg-gray-50 p-4 max-w-md w-[calc(100%-theme(space.5))] rounded-2xl">
                {oneJobLoading ? (
                  <div className="items-center justify-center min-h-[152px] mx-auto flex">
                    <div className="items-center justify-center flex rounded-full w-[33px] h-[33px] shadow-silver">
                      <div
                        id="spinner"
                        className="text-center w-[25px] h-[25px] rounded-full"
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="relative">
                      <div>Apply to this job</div>
                      <button
                        className="right-[-5px] top-[-10px] absolute text-xl font-bold cursor-pointer"
                        onClick={() => openModal("")}
                      >
                        &times;
                      </button>
                    </div>
                    <hr className="mt-1"></hr>
                    <div className="font-light text-xs my-2 flex">
                      Applied on
                      <div className="ml-1 flex font-[500]">
                        {oneJob?.createdAt.split("T")[0]}
                        <span className="mx-1 font-light">at</span>
                        <div className="font-[500]">
                          {oneJob?.createdAt.split("T")[1].split(".")[0]}
                        </div>
                      </div>
                    </div>
                    {!oneJob ? (
                      <div className="bg-gray-200 rounded-lg h-[233px]">
                        <div className="text-md font-light items-center justify-center flex h-full">
                          No data available!
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm mt-3">
                        <div className="flex">
                          <div className="mr-5">Profile:</div>
                          <div className="ml-auto text-right font-light">
                            {oneJob.title}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-5">Description:</div>
                          <div
                            className="ml-auto text-righ text-justify font-light line-clamp-3"
                            data-toggle="tooltip"
                            title={oneJob.description}
                          >
                            {oneJob.description}
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-5">Location:</div>
                          <div className="ml-auto text-right font-light">
                            {oneJob.location}
                          </div>
                        </div>
                        <div className="flex justify-end mt-5">
                          <button
                            onClick={() => openModal("")}
                            className=" text-gray-800 font-light bg-blue-100 px-3 py-2 rounded cursor-pointer"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}

export default AppliedJobs;
