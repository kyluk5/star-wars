import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const history = useHistory();

  const prev = useSelector((state) => state.prevPage);
  const next = useSelector((state) => state.nextPage);

  const searchPage = ({ target: { value } }) => {
    if (value !== "") {
      history.push({
        pathname: value.split("http://swapi.dev/api/planets/?")[1],
      });
    } else {
      alert("Cледующей страницы планет нет :(");
      return;
    }
  };

  return (
    <>
      <button
        onClick={searchPage}
        className={styles.pagination_prev}
        value={prev}
      >
        Prev
      </button>
      <button
        onClick={searchPage}
        className={styles.pagination_next}
        value={next}
      >
        Next
      </button>
    </>
  );
};

export default Pagination;
