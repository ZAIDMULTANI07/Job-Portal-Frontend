import Link from "next/link";
import ApplicantsCard from "../../@components/ApplicantsCard/ApplicantsCard";
import HomepageCard from "../../@components/HomePageCard/HomePageCard";
import { useRecruiter } from "./views/useRecruiter";



import { Background } from "@/src/@common/Background";
import Pagination from "@/src/@components/Pagination/Pagination";
import { IJobs, IOneJob } from "@/src/Interfaces/featuresInterface";

function Home() {
  const {
    activeJob,
    jobs,
    isLoading,
    oneJobLoading,
    openModal,
    oneJob,
    page,
    setPage,
    totalPages,
  } = useRecruiter();

  return (
    <section className="relative">
      <Background height="h-[150px]" name="" display={false} />
      <div className="w-full mt-[-137px]">
        <div className="container lg:px-24 mx-auto md:px-3 sm:px-3 px-5 relative">
          <h2 className="text-[22px] text-white mt-8 mb-4">
            Jobs posted by you
          </h2>
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
              {!jobs ? (
                <div className="justify-center flex">
                  <div className="absolute flex top-0">
                    <div className="items-center mx-auto h-screen flex">
                      <div className="text-center">
                        <img
                          src="/Images/writing.png"
                          className="mx-auto w-[90px] mb-4"
                        />
                        <div className="items-center mb-8 justify-center flex font-light">
                          Your posted jobs will show here!
                        </div>
                        <Link
                          href="/jobPost"
                          className="rounded w-min mx-auto bg-[#43AFFF] hover:bg-[#289cf5] text-white px-7 py-2 text-sm"
                        >
                          Post a Job
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 animate-bottom">
                  {jobs?.data.map((item: IJobs) => {
                    return (
                      <HomepageCard
                        key={item.id}
                        title={item.title}
                        location={item.location}
                        description={item.description}
                        btnName={"View Applications"}
                        active={() => openModal(item.id)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {jobs?.data.length >= 1 ? (
            <Pagination
              page={page}
              totalPages={totalPages}
              active={({ selected }: any) => setPage(selected + 1)}
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
                  <div className="items-center justify-center min-h-[572px] mx-auto flex">
                    <div className="items-center justify-center flex rounded-full w-[33px] h-[33px] shadow-silver">
                      <div
                        id="spinner"
                        className="text-center w-[25px] h-[25px] rounded-full"
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex">
                      <div>Applicants for this job</div>
                      <button
                        className="ml-auto text-xl font-bold cursor-pointer"
                        onClick={() => openModal("")}
                      >
                        &times;
                      </button>
                    </div>
                    <hr className="mt-3"></hr>
                    <div className="font-light text-xs my-2">
                      {!oneJob
                        ? `${oneJob?.length || 0} applicants`
                        : oneJob?.length === 1
                        ? `Total ${oneJob?.length} applicant`
                        : `Total ${oneJob?.length} applicants`}
                    </div>
                    {!oneJob ? (
                      <div className="bg-gray-200 rounded-lg items-center justify-center h-[500px] flex">
                        <div>
                          <img
                            src="/Images/collection.png"
                            className="mx-auto w-16 mb-3"
                          />
                          <div className="text-md font-light items-center justify-center flex text-md">
                            {" "}
                            No applications available!
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-2 bg-gray-200 rounded-lg h-[500px] overflow-auto">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
                          {oneJob?.map((item: IOneJob) => {
                            return (
                              <ApplicantsCard
                                key={item.id}
                                title={item.title}
                                name={item.name}
                                email={item.email}
                                skills={item.skills}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Home;
