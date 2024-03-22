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
  const [filteredGroups, setFilteredGroups] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getOrthologyGroup().then(setOrthologyGroups);
  }, []);

  useEffect(() => {
    if (orthologyGroups !== undefined) {
      setFilteredGroups(filterGroups(searchQuery));
    }
  }, [orthologyGroups, searchQuery]);

  const filterGroups = (searchQuery) => {
    const finalGroups = [];
    for (const group of orthologyGroups) {
      if (group.name.indexOf(searchQuery) !== -1) {
        finalGroups.push(group);
      }
    }
    return finalGroups;
  };

  if (filteredGroups !== undefined) {
    filteredGroups.sort((a, b) => b.n_genes - a.n_genes);

    return (
      <>
        <form>
          <input
            type="text"
            autoFocus="autofocus"
            onChange={handleChange}
            name="query"
            value={searchQuery}
          />
        </form>
        <ul className={styles.searchResult}>
          <AllOrthologyGroups entries={filteredGroups} />
        </ul>
      </>
    );
  }
  return <h1>Loading..</h1>;
}

export default OrthologyGroups;
