import React from "react";
import { useSelector } from "react-redux";
// import styles from "./Residents.module.css";

const Residents = () => {
  const people = useSelector((state) => state.residents);

  return (
    <ol>
      {people.length > 0 ? (
        people.map((item) => <li key={item.created}>{item.name}</li>)
      ) : (
        <p>There are no residents on this planet</p>
      )}
    </ol>
  );
};

export default Residents;
