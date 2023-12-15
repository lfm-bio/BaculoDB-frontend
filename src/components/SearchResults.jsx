import styles from "../styles/mainContent.module.css";
import { useParams } from "react-router-dom";

let searchResultArray = [
  {
    nombre: "Adoxophyes honmai nucleopolyhedrovirus DNA",
    length: "113220 bp",
    id: "AP006270.1",
  },
  {
    nombre: "Adoxophyes honmai nucleopolyhedrovirus DNA",
    length: "113220 bp",
    id: "AP006270.1",
  },
  {
    nombre: "Adoxophyes honmai nucleopolyhedrovirus DNA",
    length: "113220 bp",
    id: "AP006270.1",
  },
  {
    nombre: "Adoxophyes honmai nucleopolyhedrovirus DNA",
    length: "113220 bp",
    id: "AP006270.1",
  },
];

function SearchElement(props) {
  return (
    <div className={styles.searchElement}>
      <h3>{props.nombre}</h3>
      <p>{props.length}</p>
      <p>{props.id}</p>
    </div>
  );
}

function SearchElements() {
  const searchResults = searchResultArray.map((result, index) => {
    return (
      <li key={index}>
        <SearchElement
          nombre={result.nombre}
          id={result.id}
          length={result.length}
        />
      </li>
    );
  });
  return searchResults;
}

function SearchResults() {
  const params = useParams();
  return (
    <ul className={styles.searchResult}>
      <h1>{params.id}</h1>
      <SearchElements />
    </ul>
  );
}

export default SearchResults;
