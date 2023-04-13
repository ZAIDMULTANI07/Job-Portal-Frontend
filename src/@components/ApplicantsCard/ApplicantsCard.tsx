
import { IApplicants } from "@/src/Interfaces/cardsInterfaces";
import React from "react";

const ApplicantsCard = (props: IApplicants) => {
  return (
    <div className="max-w-md">
      <div className="border bg-gray-50 border-gray-400 p-2 rounded">
        <div className="flex items-center">
          <div className="h-10 px-[14.5px] items-center justify-center flex rounded-full bg-blue-100">
            {props.name.charAt(0).toUpperCase()}
          </div>
          <div className="text-xs ml-2">
            <p>{props.name}</p>
            <p
              className="font-light text-gray-500 line-clamp-1 break-all"
              title={props.email}
              data-toggle="tooltip"
            >
              {props.email}
            </p>
          </div>
        </div>
        <div className="mt-5 text-xs">
          <div>Skills</div>
          <p className="font-light text-gray-500 line-clamp-2">
            {props.skills}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
