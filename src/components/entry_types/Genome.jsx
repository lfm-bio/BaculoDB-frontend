import styles from "../../styles/mainContent.module.css";

function Genome(props) {
  const entry = props.entryData;
  return (
    <>
      <ul className={styles.entryData}>
        <li>{`Name: ${entry.name}`}</li>
        <li>{`Organism ID: ${entry.gb_accss}`}</li>
        <li>ICTV: </li>
        <li>{entry.reference && `Reference: ${entry.reference}`}</li>
        <li>Genus: </li>
        <li>Morphology: </li>
        <li>{`Lenght (bp): ${entry.length}`}</li>
        <li>{`%GC: ${entry.gc_perc}`}</li>
        <li>N proteins: </li>
        <li>Sequence: </li>
      </ul>
    </>
  );
}

export default Genome;
