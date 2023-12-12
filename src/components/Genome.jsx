import styles from "../styles/mainContent.module.css";
import { GetAllDbs, getGenome } from "../api/dbs.api";
import { useEffect, useState } from "react";

function Genome() {
  const [entry, setEntry] = useState();

  useEffect(() => {
    async function loadEntry() {
      const res = await getGenome();
      console.log(res.data);
      setEntry(res.data[0]);
    }
    loadEntry();
  }, []);

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
