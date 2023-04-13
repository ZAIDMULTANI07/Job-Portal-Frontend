
import { Background } from "@/src/@common/Background";
import { usePostAJob } from "./views/usePostAJob";

function PostJob() {
  const {
    loading,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = usePostAJob();

  return (
    <div className="h-screen">
      <Background height="h-[270px]" name="> Post a Job" display={false} />
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
              <h2 className="text-[16px]">Post a Job</h2>
              <form className="mt-3" onSubmit={handleSubmit}>
                <div className="text-xs">
                  Job title<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="title"
                  className={
                    errors.title && touched.title
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 p-2 text-xs mt-1"
                      : "focus:border-blue-400 bg-gray-50 w-full focus:outline-none border rounded h-8 p-2 text-xs mt-1"
                  }
                  placeholder="Enter job title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.title}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="flex mt-1 text-xs">
                  <div>
                    Description<span className="text-red-500">*</span>
                  </div>
                </div>
                <textarea
                  rows={5}
                  className={
                    errors.description && touched.description
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded p-2 text-xs mt-1"
                      : "focus:border-blue-400 bg-gray-50 w-full focus:outline-none border rounded p-2 text-xs mt-1"
                  }
                  placeholder="Enter job description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.description && touched.description ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.description}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="text-xs mt-1">
                  Location<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="location"
                  className={
                    errors.location && touched.location
                      ? "border-red-400 bg-gray-50 w-full focus:outline-none border rounded h-8 p-2 text-xs mt-1"
                      : "focus:border-blue-400 bg-gray-50 w-full focus:outline-none border rounded h-8 p-2 text-xs mt-1"
                  }
                  placeholder="Enter location"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.location && touched.location ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors.location}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <div className="justify-center flex">
                  <button
                    type="submit"
                    className="rounded mt-6 bg-[#43AFFF] hover:bg-[#289cf5] text-white px-10 py-2 text-sm"
                  >
                    Post
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

export default PostJob;
