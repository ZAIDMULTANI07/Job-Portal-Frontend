
import React from "react";
import { useForgotPasswordView } from "./views/useForgotPasswordView";
import { Background } from "@/src/@common/Background";

function Forgot() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
  } = useForgotPasswordView();
  return (
    <div className="h-screen">
      <Background height="h-[230px]" display={true} name=""/>
      <div className="relative items-center flex justify-center">
        <div className="rounded-xl absolute shadow-xl bg-white max-w-md w-[calc(100%-theme(space.5))]">
          <div className="relative">
            {loading ? (
              <div className="absolute mx-auto w-full h-full bg-[#ffffff80] rounded-xl">
                <div className="items-center justify-center h-full flex">
                  <div
                    className="items-center justify-center bg-white flex rounded-full w-[33px] h-[33px] shadow-silver"
                  >
                    <div
                      id="spinner"
                      className="text-center w-[25px] h-[25px] rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="p-5">
              <h2 className="text-[16px]">Forgot your password?</h2>
              <p className="font-light text-xs my-3">
                Enter the email associated with your account and we&apos;ll send you
                instructions to reset your password.
              </p>
              <form className="" onSubmit={handleSubmit}>
                <label className="text-xs">Email address<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className={
                    errors.email && touched.email
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "bg-gray-50 focus:border-blue-400 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.email}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="justify-center mt-5 mb-2 flex">
                  <button
                    type="submit"
                    className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white px-10 py-2 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
