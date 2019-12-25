import React from "react";
import "./Users.css";

const Pagination = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pageRange = 8;
  if (
    props.currentPage > pageRange + 1 &&
    props.currentPage < pagesCount - pageRange
  ) {
    pageRange = pageRange - 1;
  }
  const rangeStart = () => {
    const start = props.currentPage - pageRange;
    const end = props.currentPage + pageRange;
    if (end >= pagesCount) {
      return start - (end - pagesCount);
    }
    if (start > 0) {
      return start;
    } else {
      return 1;
    }
  };
  const rangeEnd = () => {
    const end = props.currentPage + pageRange;
    const start = props.currentPage - pageRange;
    if (start <= 1) {
      return end - start;
    }
    if (end < pagesCount) {
      return end;
    } else {
      return pagesCount;
    }
  };
  let pages = [];
  const start = rangeStart();
  const end = rangeEnd();

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const hasFirstPage = () => {
    return start > 1;
  };
  const hasLastPage = () => {
    return end < pagesCount;
  };

  const buttons = pages.map((page, i) => (
    <button
      key={i}
      disabled={props.currentPage === page}
      className={
        props.currentPage === page
          ? "users__selectedPage"
          : "users__page-number"
      }
      onClick={() => props.onPageButtonClick(page)}
    >
      {page}
    </button>
  ));

  return (
    <div className="users__pagination">
      {hasFirstPage() && (
        <button
          onClick={() => props.onPageButtonClick(1)}
          className={
            props.currentPage === 1
              ? "users__selectedPage"
              : "users__page-number"
          }
        >
          1
        </button>
      )}
      {hasFirstPage() && <span> . . . </span>}
      {buttons}
      {hasLastPage() && <span> . . . </span>}
      {hasLastPage() && (
        <button
          onClick={() => props.onPageButtonClick(pagesCount)}
          className={
            props.currentPage === pagesCount
              ? "users__selectedPage"
              : "users__page-number"
          }
        >
          {pagesCount}
        </button>
      )}
    </div>
  );
};

export default Pagination;
