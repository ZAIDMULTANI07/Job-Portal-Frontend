import Link from "next/link";
import HomepageCard from "../../@components/HomePageCard/HomePageCard";
import { useCandidate } from "./views/useCandidate";
import Pagination from "../../@components/Pagination/Pagination";
import { Background } from "@/src/@common/Background";
import { IJobs } from "@/src/Interfaces/featuresInterface";


function Apply() {
  const {
    activeJob,
    jobs,
    oneJob,
    allJobsLoading,
    oneJobLoading,
    ApplyToAJob,
    setPage,
    page,
    openModal,
    totalPages,
  } = useCandidate();

  return (
    <section className="relative">
      <Background height="h-[150px]" name="" display={false} />
      <div className="mt-[-137px] w-full">
        <div className="container lg:px-24 mx-auto md:px-0 sm:px-0 px-5">
          <h2 className="text-xl text-white my-8">Jobs for you</h2>
          {allJobsLoading ? (
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
              {!jobs ? (
                <div className="items-center min-h-[80vh] justify-center flex">
                  <div className="text-center">
                    <div className="items-center mb-8 justify-center flex font-light">
                      No openings!
                    </div>
                    <Link
                      href="/applied"
                      className="rounded w-min mx-auto bg-[#43AFFF] hover:bg-[#289cf5] text-white px-6 py-2 text-sm"
                    >
                      Applied Jobs
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 animate-bottom">
                    {jobs?.data.map((item: IJobs) => {
                      return (
                        <HomepageCard
                          key={item.id}
                          title={item.title}
                          location={item.location}
                          description={item.description}
                          btnName={"Apply"}
                          active={() => openModal(item.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
          <Pagination
            page={page}
            totalPages={totalPages}
            active={({ selected }: any) => setPage(selected + 1)}
          />
        </div>
        {activeJob !== "" ? (
          <div
            className="h-screen fixed top-0 bg-black bg-opacity-50 w-full z-20"
            onClick={() => openModal("")}
          >
            <div className="h-screen items-center justify-center flex">
              <div className="bg-gray-50 p-4 max-w-md w-[calc(100%-theme(space.5))] rounded-2xl">
                {oneJobLoading ? (
                  <div className="items-center justify-center min-h-[137px] mx-auto flex">
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
                    <div className="text-sm mt-3">
                      <div className="font-light">
                        Are you sure you want to apply to this job?
                      </div>
                      <div className="flex justify-end mt-10">
                        <button
                          onClick={() => ApplyToAJob(oneJob.id)}
                          className=" text-gray-800 mr-1 font-light bg-blue-100 px-3 py-2 rounded cursor-pointer"
                        >
                          Apply
                        </button>

                        <button
                          onClick={() => openModal("")}
                          className=" text-gray-800 font-light ml-1 bg-blue-100 px-3 py-2 rounded cursor-pointer"
                        >
                          Close
                        </button>
                      </div>
                    </div>
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

export default Apply;
