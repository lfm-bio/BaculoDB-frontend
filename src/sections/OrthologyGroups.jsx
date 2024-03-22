import styles from "../styles/mainContent.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrthologyGroup } from "../api/dbs.api";

function OrthologyGroup(props) {
  return (
    <div className={styles.searchElement}>
      <Link to={`../entry/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <div className={styles.elementDescrip}>
        <p>Type: Orthology Group</p>
        <p>Number of Genes: {props.n_genes}</p>
        <p>Genus Code: {props.genusCode}</p>
      </div>
    </div>
  );
}

function AllOrthologyGroups(props) {
  const searchResults = props.entries.map((result, index) => {
    return (
      <li key={index}>
        <OrthologyGroup
          name={result.name}
          genusCode={result.genus_code}
          n_genes={result.n_genes}
        />
      </li>
    );
  });
  return searchResults;
}

function OrthologyGroups() {
  const [orthologyGroups, setOrthologyGroups] = useState();

  useEffect(() => {
    getOrthologyGroup().then(setOrthologyGroups);
  }, []);

  console.log(orthologyGroups);
  if (orthologyGroups !== undefined) {
    orthologyGroups.sort((a, b) => b.n_genes - a.n_genes);

    return (
      <ul className={styles.searchResult}>
        <AllOrthologyGroups entries={orthologyGroups} />
      </ul>
    );
  }
  return <h1>Loading..</h1>;
}

export default OrthologyGroups;
