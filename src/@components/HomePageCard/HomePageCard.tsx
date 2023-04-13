
import { IHomePage } from "@/src/Interfaces/cardsInterfaces";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function HomepageCard(props: IHomePage) {
  return (
    <div className="max-w-sm w-full">
      <div className="p-3 bg-white shadow-md rounded-md min-h-[156px] relative">
        <p
          className="text-md font-light line-clamp-1"
          title={props.title}
          data-toggle="tooltip"
        >
          {props.title}
        </p>
        <p
          className="text-xs text-gray-500 my-2 whitespace-pre-wrap break-all font-light text-justify line-clamp-3 font-sans"
          title={props.description}
          data-toggle="tooltip"
        >
          {props.description}
        </p>
        <div className="flex mt-5 w-full items-center text-xs absolute bottom-[13px]">
          <div className="flex font-light items-center">
            <LocationOnOutlinedIcon className="text-blue-400 text-[20px]" />
            <p
              className="line-clamp-1 max-w-[60px] break-words"
              title={props.location}
              data-toggle="tooltip"
            >
              {props.location}
            </p>
          </div>
          <button
            onClick={props.active}
            className="ml-auto text-gray-800 mr-6 font-light bg-blue-100 max-w-[123px] px-3 py-2 rounded cursor-pointer line-clamp-1"
          >
            {props.btnName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomepageCard;
