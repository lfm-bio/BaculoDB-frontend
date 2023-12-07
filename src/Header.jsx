import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/header.module.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    selection: "ID",
  });

  console.log(searchQuery);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(searchQuery);
  }

  function handleSearch(event) {
    const { name, value } = event.target;

    setSearchQuery((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <>
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
            <Link to="#">Batch Download</Link>
          </li>
        </ul>
      </div>

      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <select
          name="selection"
          id="selection"
          onChange={handleSearch}
          value={searchQuery.selection}
        >
          <option value="ID">ID</option>
          <option value="species">Species</option>
          <option value="protein">Protein</option>
          <option value="orthologyGroup">Orthology Group</option>
        </select>
        <input
          type="text"
          autoFocus="autofocus"
          onChange={handleSearch}
          name="query"
          value={searchQuery.query}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default Header;
