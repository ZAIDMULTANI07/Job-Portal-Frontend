
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ReactPaginate from "react-paginate";
import { usePagination } from "./views/usePagination";
import { IPagination } from "@/src/Interfaces/cardsInterfaces";

const Pagination = (props: IPagination) => {
  const { width } = usePagination();
  return (
    <div className="flex my-10 justify-center">
      <ReactPaginate
        className="flex gap-x-1 sm:gap-x-2 mx-5 text-[10px] sm:text-sm items-center pagination"
        breakLabel="..."
        nextLabel={
          <button className="border rounded-md items-center flex border-gray-400">
            <ArrowRightIcon
              className={props.page === props.totalPages ? "text-gray-400 cursor-no-drop" : ""}
            />
          </button>
        }
        initialPage={props.page - 1}
        onPageChange={props.active}
        pageRangeDisplayed={width < 600 ? 0 : 2}
        pageCount={props.totalPages}
        previousLabel={
          <button className="border rounded-md items-center flex border-gray-400">
            <ArrowLeftIcon
              className={props.page === 1 ? "text-gray-400 cursor-no-drop" : ""}
            />
          </button>
        }
        containerClassName={"paginationBttns"}
        activeClassName={
          "bg-blue-400 bg-blue-200 items-center flex cursor-pointer rounded-md"
        }
      />
    </div>
  );
};
export default Pagination;
