import styles from "../styles/mainContent.module.css";
import { useParams, Link, Navigate, generatePath } from "react-router-dom";
import { mainSearch } from "../api/dbs.api";
import { useState, useEffect } from "react";
import { makeFasta, makeCsv } from "../utils";

function SearchElement(props) {
  let entryName = "";
  if (props.entry_type === "Protein") {
    entryName = `${props.name}, ${props.genome_name}`;
  } else {
    entryName = props.name;
  }

  return (
    <div className={styles.searchElement}>
      <Link to={`../entry/${props.id}`}>
        <h3>{entryName}</h3>
      </Link>
      <div className={styles.elementDescrip}>
        <p>ID: {props.gb_accss}</p>
        <p>Type: {props.entry_type}</p>
        <p>Length: {props.length}</p>
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
          genome_name={result.genome_name}
          gb_accss={result.gb_accss}
          length={result.seq.length}
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
    mainSearch(searchQuery).then(setEntries);
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
        <li className={styles.entriesFound}>Entries found: {entries.length}</li>
        <button
          onClick={() => {
            makeFasta(entries);
          }}
        >
          Download Fasta
        </button>
        <button
          onClick={() => {
            makeCsv(entries);
          }}
        >
          Download IDs
        </button>
        <SearchElements entries={entries} />
      </ul>
    );
  }
}

export default SearchResults;
