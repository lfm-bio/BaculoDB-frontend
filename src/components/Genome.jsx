import styles from "../styles/mainContent.module.css";
import { getGenome } from "../api/dbs.api";
import { useState } from "react";

function Genome() {
  const [entry, setEntry] = useState();
  let searchQuery = "AP006270";

  // fuera ed un effect
  async function loadEntry(searchQuery) {
    const res = await getGenome(searchQuery);
    console.log(res.data, "loadEntry");
    setEntry(res.data[0]);
  }

  if (entry === undefined) {
    loadEntry(searchQuery);
  }

  if (entry === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <ul className={styles.entryData}>
          <li>{`Name: ${entry.name}`}</li>
          <li>Organism: </li>
          <li>{`Organism ID: ${entry.gb_accss}`}</li>
          <li>ICTV: </li>
          <li>{entry.reference && `Reference: ${entry.reference}`}</li>
          <li>Genus: </li>
          <li>Morphology: </li>
          <li>{`Lenght (bp): ${entry.length}`}</li>
          <li>{`%GC: ${entry.gc_perc}`}</li>
          <li>N proteins: </li>
          <li>Codon Usage: </li>
          <li>Sequence: </li>
        </ul>
      </>
    );
  }
}

export default Genome;
