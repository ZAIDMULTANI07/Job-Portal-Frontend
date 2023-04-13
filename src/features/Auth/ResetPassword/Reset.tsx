
import { Background } from "@/src/@common/Background";
import { useResetPasswordView } from "./views/useResetPasswordView";

function Reset() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    validation,
    setValidation
  } = useResetPasswordView();

  return (
    <div className="h-screen">
      <Background height="h-[230px]" display={true} name="" />
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
            <h2 className="text-[16px]">Reset Your Password</h2>
              <p className="font-light text-xs my-3">
                Enter your new password below.
              </p>
              <form className="pt-3" onSubmit={handleSubmit}>
                <label className="text-xs">New password<span className="text-red-500">*</span></label>
                <input
                  type="password"
                  className={
                    (errors.password && touched.password) || validation === true
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "bg-gray-50 focus:border-blue-400 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onClick={()=>setValidation(false)}
                />
                {(errors.password && touched.password) ||
                validation === true ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.password ||  <p className="text-white text-[10px] text-right">.</p>}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <label className="text-xs mt-1">
                  Confirm new password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className={
                    (errors.confirmPassword && touched.confirmPassword) ||
                    validation === true
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                      : "bg-gray-50 focus:border-blue-400 w-full focus:outline-none border rounded h-8 pl-3 text-xs mt-1"
                  }
                  placeholder="Enter your password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onClick={()=>setValidation(false)}
                />
                {(errors.confirmPassword && touched.confirmPassword) ||
                validation === true ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.confirmPassword ||
                      "New password can't be same as old password"}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="justify-center mt-5 mb-2 flex">
                  <button
                    type="submit"
                    className="rounded bg-[#43AFFF] hover:bg-[#289cf5] text-white px-10 py-2 text-sm"
                  >
                    Reset
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

export default Reset;
