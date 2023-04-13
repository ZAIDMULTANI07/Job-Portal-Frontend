import Link from "next/link";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import { useSignupView } from "./views/useSignupView";
import { Background } from "@/src/@common/Background";

function Signup() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    loading,
    validation,
    setValidation
  } = useSignupView();

  return (
    <div className="h-screen">
      <Background height="h-[230px]" display={true} name="" />
      <div className="relative items-center flex justify-center">
        <div className="rounded-xl absolute mt-40 shadow-xl bg-white max-w-md w-[calc(100%-theme(space.5))]">
          <div className="relative">
            {loading ? (
              <div className="absolute z-10 mx-auto w-full h-full bg-[#ffffff80] rounded-xl">
                <div className="items-center justify-center h-full flex">
                  <div className="items-center justify-center flex rounded-full bg-white w-[33px] h-[33px] shadow-silver">
                    <div
                      id="spinner"
                      className="text-center w-[25px] h-[25px] rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="p-5">
              <div>Signup</div>
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="text-xs">
                  I&apos;m a<span className="text-red-500">*</span>
                </div>
                <div className="flex mt-2">
                  <div className="relative">
                    <div
                      className={
                        !values.userRole
                          ? "bg-[#43AFFF] border border-[#43AFFF] text-white p-2 flex text-xs items-center rounded cursor-pointer"
                          : "border border-gray-300 bg-gray-100 p-2 flex text-xs items-center rounded cursor-pointer"
                      }
                      onClick={() => setFieldValue("userRole", 0)}
                    >
                      <PersonSearchOutlinedIcon className="mr-1 text-[20px]" />
                      Recruiter
                    </div>
                  </div>

                  <div className="relative ml-3">
                    <div
                      className={
                        values.userRole
                          ? "bg-[#43AFFF] border border-[#43AFFF] text-white p-2 flex text-xs items-center rounded cursor-pointer"
                          : "border border-gray-300 bg-gray-100 p-2 flex text-xs items-center rounded cursor-pointer"
                      }
                      onClick={() => setFieldValue("userRole", 1)}
                    >
                      <GroupAddOutlinedIcon className="mr-1 text-[20px]" />
                      Candidate
                    </div>
                  </div>
                </div>
                <div className="text-xs mt-4">
                  Full Name<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="name"
                  className={
                    errors.name && touched.name
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "focus:border-[#43AFFF] bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.name}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="text-xs mt-1">
                  Email Address<span className="text-red-500">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  className={
                    (errors.email && touched.email) || validation === true
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "focus:border-[#43AFFF] bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={() => setValidation(false)}
                />
                {(errors.email && touched.email) || validation === true ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.email || (
                      <div className="">Email already registered</div>
                    )}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs mt-1">
                      Password<span className="text-red-500">*</span>
                    </div>
                    <input
                      type="password"
                      className={
                        errors.password && touched.password
                          ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                          : "focus:border-[#43AFFF] bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      }
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="new-password"
                    />
                    {errors.password && touched.password ? (
                      <p className="text-red-500 text-[10px] text-right">
                        {errors.password}
                      </p>
                    ) : (
                      <p className="text-white text-[10px] text-right">.</p>
                    )}
                  </div>
                  <div>
                    <div className="text-xs mt-1">
                      Confirm Password<span className="text-red-500">*</span>
                    </div>
                    <input
                      type="password"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                          : "focus:border-[#43AFFF] bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      }
                      placeholder="Enter your password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="new-password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <p className="text-red-500 text-[10px] text-right">
                        {errors.confirmPassword}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="text-xs mt-1">
                    Skills
                    {values?.userRole ? (
                      <span className="text-red-500">*</span>
                    ) : null}
                  </div>
                  <input
                    type="text"
                    className={
                      errors.skills && touched.skills
                        ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                        : "focus:border-[#43AFFF] bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                    }
                    placeholder="Enter comma separated skills"
                    name="skills"
                    value={values.skills}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  {errors.skills && touched.skills ? (
                    <p className="text-red-500 text-[10px] text-right">
                      {errors.skills}
                    </p>
                  ) : (
                    <p className="text-white text-[10px] text-right">.</p>
                  )}
                </div>
                <div className="justify-center flex mt-5">
                  <button
                    type="submit"
                    className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white px-10 py-2 text-sm"
                  >
                    Signup
                  </button>
                </div>
              </form>
              <h3 className="text-xs mt-9 font-light text-center">
                Have an account?
                <Link
                  href="/login"
                  className="text-[#43AFFF] font-[400] pl-2 cursor-pointer"
                >
                  Login
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
