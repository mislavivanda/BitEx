import { usePagination } from "./usePagination";
import ChevronRight from "../chevronRight";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex list-none mt-5">
      {/* Left navigation arrow */}
      <li
        className={`flex items-center py-0 px-1 h-[32px] min-w[32px] text-center mx-1 text-font-color rounded-[1rem] text-base hover:cursor-pointer hover:bg-hover-select ${
          currentPage === 1 ? "pointer-events-none hover:cursor-default" : ""
        }`}
        onClick={onPrevious}
      >
        <ChevronRight classes="rotate-180" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "DOTS") {
          return (
            <li
              key={index}
              className="flex items-center py-0 px-3 h-[32px] min-w[32px] text-center mx-1 text-font-color rounded-[1rem] text-base cursor-default bg-transparent"
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            className={`flex items-center py-0 px-3 h-[32px] min-w[32px] text-center mx-1 text-font-color rounded-[1rem] text-base hover:cursor-pointer hover:bg-hover-select ${
              pageNumber === currentPage
                ? "bg-pagination-select pointer-events-none"
                : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`flex items-center py-0 px-1 h-[32px] min-w[32px] text-center mx-1 text-font-color rounded-[1rem] text-base hover:cursor-pointer hover:bg-hover-select ${
          currentPage === lastPage
            ? "pointer-events-none hover:cursor-default"
            : ""
        }`}
        onClick={onNext}
      >
        <ChevronRight />
      </li>
    </ul>
  );
};

export default Pagination;
