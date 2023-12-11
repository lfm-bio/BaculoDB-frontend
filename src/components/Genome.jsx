import styles from "../styles/mainContent.module.css";
import { GetAllDbs } from "../api/dbs.api";
import { useEffect } from "react";

function Genome() {
  let reference = "rorman";

  useEffect(() => {
    async function loadDbs() {
      const res = await GetAllDbs();
      console.log(res);
    }
    loadDbs();
  }, []);

  return (
    <>
      <h1>prueba</h1>
      <ul className={styles.entryData}>
        <li>Name: </li>
        <li>Organism: </li>
        <li>Organism ID: </li>
        <li>ICTV: </li>
        <li>{reference && `Reference: ${reference}`}</li>
        <li>Genus: </li>
        <li>Morphology: </li>
        <li>Lenght (bp): </li>
        <li>%GC: </li>
        <li>N proteins: </li>
        <li>Codon Usage: </li>
        <li>Sequence: </li>
      </ul>
    </>
  );
}

export default Genome;
