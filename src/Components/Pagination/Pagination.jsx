import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../redux/operations/planetsOperation";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const prev = useSelector((state) => state.prevPage);
  const next = useSelector((state) => state.nextPage);

  const searchPage = ({ target: { value } }) => {
    dispatch(getPlanets(value));
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
