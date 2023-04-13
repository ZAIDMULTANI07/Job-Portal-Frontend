import { FC } from "react";

interface IToastContainer{
  title:string
  desc:string
  isToast:(state:boolean)=> void
}

const ToastContainer:FC<IToastContainer> = ({title,desc,isToast}) => {
  return (
    <div className="flex items-center rounded shadow-xl top-20 absolute bg-white right-8 lg:right-[5.5rem] text-sm font-bold p-3 animate-toast">
      <div className="flex">
        <div className="mr-4">
          <div className="text-blue-400 text-lg">{title}</div>
          <div className="font-light text-xs mt-1">
            {desc}
          </div>
        </div>
        <div
          className="ml-auto text-xl font-bold h-0 cursor-pointer"
          style={{ marginTop: "-8px" }}
          onClick={()=>isToast(false)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default ToastContainer;
