import Link from "next/link";
import { useComponentVisible, useNavbarView } from "./views/useNavbarView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";
import ToastContainer from "@/src/@components/ErrorCard/ToastContainer";


const Navbar = () => {
  const { submit, user, isNavbarActive, toast, setToast } = useNavbarView();
  const { pathname } = useRouter();
  const { ref, isActive, setActive } = useComponentVisible(false);

  return (
    <section
      id="navbar"
      className="navbar sticky top-0 z-20"
      style={{
        background:
          "transparent linear-gradient(248deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="container mx-auto lg:px-2 md:px-3 sm:px-3 px-5">
        <div className="h-14 items-center flex">
          <Link href="/" className="text-white font-bold text-lg">
            <h1>
              My<span className="text-blue-500">Jobs</span>
            </h1>
          </Link>
          {toast ? (
            <ToastContainer
              title="Logout"
              desc="You have successfully logged out."
              isToast={setToast}
            />
          ) : null}
          {!user ? (
            <div className="ml-auto">
              {pathname !== "/login" && pathname !== "/signup" ? (
                <button className="ml-auto rounded py-[7px] text-sm border bg-[#00b2ff1a] cursor-pointer border-blue-500 text-white">
                  <Link
                    href="/login"
                    className="py-2 ml-4 hover:underline mr-1"
                  >
                    Login
                  </Link>
                  /
                  <Link
                    href="/signup"
                    className="py-2 mr-4 hover:underline ml-1"
                  >
                    Signup
                  </Link>
                </button>
              ) : null}
            </div>
          ) : (
            <div className="ml-auto flex">
              {!user?.userRole ? (
                <Link
                  href="/jobPost"
                  className="px-4 py-2 font-extralight text-sm text-white relative"
                >
                  Post a Job
                  {pathname === "/jobPost" ? (
                    <div className="realtive justify-center flex">
                      <div className="border-b-[3px] border-blue-400 w-12 absolute bottom-[-11px]"></div>
                    </div>
                  ) : null}
                </Link>
              ) : (
                <Link
                  href="/applied"
                  className="px-4 py-2 font-extralight text-sm text-white relative"
                >
                  Applied Jobs
                  {pathname === "/applied" ? (
                    <div className="realtive justify-center flex">
                      <div className="border-b-[3px] border-blue-400 w-12 absolute bottom-[-11px]"></div>
                    </div>
                  ) : null}
                </Link>
              )}
              <div className="relative items-center flex text-left">
                <div
                  ref={ref}
                  onClick={() => setActive(!isActive)}
                  className="bg-blue-100 h-9 w-9 flex rounded-full items-center justify-center font-light cursor-pointer ml-5"
                >
                  {!user?.userRole ? "R" : "C"}
                  <div className="mt-[53px] z-10">
                    {isActive && (
                      <div>
                        <div className="border border-l-[6px] border-l-transparent border-r-transparent border-b-white w-0 h-0 border-r-[6px] border-b-8 mt-[-8px] ml-[18px] absolute border-t-0"></div>
                        <button
                          onClick={submit}
                          className="text-gray-700 absolute right-0 w-28 px-3 py-2 text-left cursor-pointer shadow-lg bg-white rounded text-xs hover:text-blue-400"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <ArrowDropDownIcon
                  className="text-white shadow-lg cursor-pointer"
                  onClick={() => setActive(!isActive)}
                />
              </div>
            </div>
          )}
        </div>
        {!isNavbarActive ? (
          <hr style={{ borderTop: "0.5px solid #4D618E" }}></hr>
        ) : null}
      </div>
    </section>
  );
};

export default Navbar;
