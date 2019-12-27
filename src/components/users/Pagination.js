import React, { useState } from "react";
import "./Users.css";

const Pagination = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const PAGE_DIFFERENCE = 6;
  const BUTTONS_COUNT = 8;
  const START_BUTTON_NUMBER = 1;
  const pageRange = 3;

  let start = props.currentPage - pageRange;
  let end = props.currentPage + pageRange;

  if (props.currentPage <= PAGE_DIFFERENCE) {
    start = START_BUTTON_NUMBER;
    end = start + BUTTONS_COUNT;
  }
  if (props.currentPage > pagesCount - PAGE_DIFFERENCE) {
    start = pagesCount - BUTTONS_COUNT;
    end = pagesCount;
  }

  let pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const hasFirstPage = () => {
    return props.currentPage > PAGE_DIFFERENCE;
  };
  const hasLastPage = () => {
    return props.currentPage <= pagesCount - PAGE_DIFFERENCE;
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
