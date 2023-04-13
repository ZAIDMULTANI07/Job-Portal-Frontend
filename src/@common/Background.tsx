import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";


import { useLoginView } from "../features/Auth/Login/views/useLoginView";
import { IBackground } from "../Interfaces/cardsInterfaces";


export const Background = (props: IBackground) => {
  const { user } = useLoginView();

  return (
    <div
      className={props.height}
      style={{
        background:
          "transparent linear-gradient(248deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div
        className={
          props.display
            ? "hidden"
            : "container lg:px-24 mx-auto md:px-3 sm:px-3 px-5"
        }
      >
        <div className="flex text-[12px] items-center absolute text-white mt-2 cursor-pointer">
          <Link
            href={user?.userRole ? "/candidate" : "/recruiter"}
            className="mr-1 items-center flex hover:text-blue-400 z-10"
          >
            <HomeIcon className="mr-1 text-[15px]"/> Home
          </Link>
          <div className="text-white">{props.name}</div>
        </div>
      </div>
    </div>
  );
};
