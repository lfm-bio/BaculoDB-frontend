import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/header.module.css";

function Header() {
  return (
    <>
      <Buttons />
      <SearchBar />
    </>
  );
}

function Buttons() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">BaculoDB</Link>
      </h1>
      <ul className={styles.buttons}>
        <li>
          <Link to="/baculoviridae">Baculoviridae</Link>
        </li>
        <li>
          <Link to="/genome">Orthology Groups</Link>
        </li>
        <li>
          <Link to="/regulatoryelement">Regulatory Elements</Link>
        </li>
        <li>
          <Link to="/ori">ORIs</Link>
        </li>
        <li>
          <Link to="/ncrna">ncRNA</Link>
        </li>
        <li>
          <Link to="#">Subcellular Localization</Link>
        </li>
        <li>
          <Link to="/batchdownload">Batch Download</Link>
        </li>
      </ul>
    </div>
  );
}

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(searchQuery);
    console.log(searchQuery, "submit");
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus="autofocus"
          onChange={handleSearch}
          name="query"
          value={searchQuery}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default Header;
