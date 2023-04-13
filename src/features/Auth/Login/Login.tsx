import Link from "next/link";
import { useLoginView } from "./views/useLoginView";
import { Background } from "@/src/@common/Background";

function Login() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    user,
    validation,
  } = useLoginView();

  return (
    <div className="h-screen">
      <Background height="h-[230px]" display={true} name="" />
      <div className="relative items-center flex justify-center">
        <div className="rounded-xl absolute shadow-xl bg-white max-w-md w-[calc(100%-theme(space.5))]">
          <div className="relative">
            {loading ? (
              <div className="absolute mx-auto w-full h-full bg-[#ffffff80] rounded-xl">
                <div className="items-center justify-center h-full flex">
                  <div className="items-center justify-center bg-white flex rounded-full w-[33px] h-[33px] shadow-silver">
                    <div
                      id="spinner"
                      className="text-center w-[25px] h-[25px] rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="p-5">
              <div>Login</div>
              <form className="mt-3" onSubmit={handleSubmit}>
                <label className="text-xs">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={
                    (errors.email && touched.email) || validation === true
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "bg-gray-50 focus:border-[#43AFFF] w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {(errors.email && touched.email) || validation === true ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.email || (
                      <p className="text-white text-[10px] text-right">.</p>
                    )}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="flex mt-1 text-xs">
                  <label>
                    Password<span className="text-red-500">*</span>
                  </label>
                  <Link
                    href="/forgot"
                    className="ml-auto text-[#43AFFF] cursor-pointer"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  className={
                    (errors.password && touched.password) || validation === true
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "bg-gray-50 focus:border-[#43AFFF] w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="new-password"
                />
                {(errors.password && touched.password) ||
                validation === true ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.password || "Incorrect email address or password"}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="justify-center flex">
                  <button
                    type="submit"
                    className="rounded my-5 mb-9 bg-[#43AFFF] hover:bg-[#289cf5] text-white px-10 py-2 text-sm"
                  >
                    Login
                  </button>
                </div>
              </form>
              <h3 className="text-xs font-light text-center">
                New to MyJobs?
                <Link
                  href="/signup"
                  className="text-[#43AFFF] font-[400] pl-2 cursor-pointer"
                >
                  Create an account
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
