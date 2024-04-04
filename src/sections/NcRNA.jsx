import styles from "../styles/mainContent.module.css";
import { useEffect, useState } from "react";
import { getNcrna } from "../api/dbs.api";
import { Link } from "react-router-dom";

function EachNcRNA(props) {
  return (
    <div className={styles.searchElement}>
      <Link to={`../entry/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <div className={styles.elementDescrip}>
        <p>Organism: {props.genome}</p>
      </div>
    </div>
  );
}

function AllNcRNAs(props) {
  const searchResults = props.entries.map((result, index) => {
    return (
      <li key={index}>
        <EachNcRNA
          id={result.id}
          name={result.name}
          genome={result.genome_name}
          genome_id={result.genome_id}
        />
      </li>
    );
  });
  return searchResults;
}

function NcRNA() {
  const [ncrnas, setNcrnas] = useState();

  useEffect(() => {
    getNcrna().then(setNcrnas);
  }, []);

  if (ncrnas === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={styles.searchResult}>
      <AllNcRNAs entries={ncrnas} />
    </ul>
  );
}

export default NcRNA;
