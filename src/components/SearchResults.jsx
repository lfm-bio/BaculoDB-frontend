import styles from "../styles/mainContent.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { getGenome } from "../api/dbs.api";
import { useState } from "react";

function SearchElement(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`../entry/${props.id}`);
  }
  return (
    <div className={styles.searchElement}>
      <h3 onClick={handleClick}>{props.name}</h3>
      <div className={styles.elementDescrip}>
        <p>Length: {props.length}</p>
        <p>ID: {props.gb_accss}</p>
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

  async function loadEntry(searchQuery) {
    const res = await getGenome(searchQuery);
    setEntries(res.data);
  }

  if (entries === undefined) {
    loadEntry(searchQuery);
    return <h1>loading...</h1>;
  } else if (entries == false) {
    return <h1>No entries found =(</h1>;
  } else {
    return (
      <ul className={styles.searchResult}>
        <SearchElements entries={entries} />
      </ul>
    );
  }
}

export default SearchResults;
