import styles from "../styles/mainContent.module.css";
import { useState } from "react";
import { getRegulatoryElements } from "../api/dbs.api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RegulatoryElement(props) {
  return (
    <div className={styles.searchElement}>
      <Link to={`../entry/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <div className={styles.elementDescrip}>
        <p>Type: {props.type}</p>
        <p>Description: {props.description}</p>
      </div>
    </div>
  );
}

function AllRegulatoryElements(props) {
  const searchResults = props.entries.map((result, index) => {
    return (
      <li key={index}>
        <RegulatoryElement
          id={result.id}
          name={result.name}
          type={result.re_type}
          description={result.description}
        />
      </li>
    );
  });
  return searchResults;
}

function RegulatoryElements() {
  const [regulatoryElements, setRegulatoryElements] = useState();

  useEffect(() => {
    getRegulatoryElements().then(setRegulatoryElements);
  }, []);

  if (regulatoryElements === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={styles.searchResult}>
      <AllRegulatoryElements entries={regulatoryElements} />
    </ul>
  );
}

export default RegulatoryElements;
