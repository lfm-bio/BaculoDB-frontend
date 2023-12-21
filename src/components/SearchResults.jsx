import styles from "../styles/mainContent.module.css";
import { useParams, Link, Navigate, generatePath } from "react-router-dom";
import { searchByIDName } from "../api/dbs.api";
import { useState, useEffect } from "react";

function SearchElement(props) {
  return (
    <div className={styles.searchElement}>
      <Link to={`../entry/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <div className={styles.elementDescrip}>
        <p>ID: {props.gb_accss}</p>
        <p>Length: {props.length}</p>
        <p>Type: {props.entry_type}</p>
      </div>
    </div>
  );
}

function SearchElements(props) {
  const searchResults = props.entries.map((result, index) => {
    return (
      <li key={index}>
        <SearchElement
          id={result.id}
          name={result.name}
          gb_accss={result.gb_accss}
          length={result.length}
          entry_type={result.entry_type}
        />
      </li>
    );
  });
  return searchResults;
}

function SearchResults() {
  const params = useParams();
  const searchQuery = params.query;
  const [entries, setEntries] = useState();

  useEffect(() => {
    searchByIDName(searchQuery).then(setEntries);
  }, []);

  if (entries === undefined) {
    return <h1>Loading...</h1>;
  }

  if (entries.length === 0) {
    return <h1>No entries found</h1>;
  }

  if (entries.length === 1) {
    return (
      <Navigate to={generatePath("../entry/:id", { id: entries[0].id })} />
    );
  } else {
    return (
      <ul className={styles.searchResult}>
        <SearchElements entries={entries} />
      </ul>
    );
  }
}

export default SearchResults;
