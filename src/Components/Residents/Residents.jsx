import React, { useEffect, useState } from "react";
import axios from "axios";
// import styles from "./Residents.module.css";

const Residents = ({ residents }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (residents) {
      residents.map((item) =>
        axios(item).then(({ data }) => setPeople((p) => [...p, data]))
      );
    }
  }, [residents]);

  return (
    <ol>
      {people.length > 0 ? (
        people.map((item) => <li>{item.name}</li>)
      ) : (
        <li>There are no residents on this planet</li>
      )}
    </ol>
  );
};

export default Residents;

// the second way  how to get residents of each planet

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./Residents.module.css";

// const Residents = ({ residents }) => {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     if (residents) {
//       residents.map((item) =>
//         axios(item).then(({ data }) => setPeople((p) => [...p, data]))
//       );
//     }
//   }, [residents]);

//   return (
//     <ol>
//       {people.length > 0 ? (
//         people.map((item) => <li>{item.name}</li>)
//       ) : (
//         <li>There are no residents on this planet</li>
//       )}
//     </ol>
//   );
// };

// export default Residents;
