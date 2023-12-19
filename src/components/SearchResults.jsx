import styles from "../styles/mainContent.module.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { searchByIDName } from "../api/dbs.api";
import { useState, useEffect } from "react";
import { getFinalArray } from "../utils";

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
  const navigate = useNavigate();

  useEffect(() => {
    const loadEntry = async () => {
      const res = await searchByIDName(searchQuery);
      setEntries(res);
    };
    loadEntry();
  }, []);

  if (entries === undefined) {
    return <h1>loading...</h1>;
  } else {
    const resultsArray = getFinalArray(entries);
    if (resultsArray.length === 0) {
      return <h1>No entries found</h1>;
    } else if (resultsArray.length === 1) {
      navigate(`../entry/${resultsArray[0].id}`);
    } else {
      return (
        <ul className={styles.searchResult}>
          <SearchElements entries={resultsArray} />
        </ul>
      );
    }
  }
}

export default SearchResults;
