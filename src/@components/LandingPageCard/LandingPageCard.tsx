
import { ILandingPage } from "@/src/Interfaces/cardsInterfaces";
import React from "react";

function LandingPageCard(props:ILandingPage) {
  return (
    <div className="max-w-md">
      <div className="p-4 pb-5 bg-white shadow-md rounded-lg hover:top-[-10px] top-0">
        <p className="text-[22px] text-blue-400">
          {props.title1}
          <br></br> {props.title2}
        </p>
        <p className="text-[14px] text-gray-700 mt-5 text-justify line-clamp-3" data-toggle="tooltip" title={props.description}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default LandingPageCard;
