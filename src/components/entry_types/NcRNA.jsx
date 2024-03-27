import styles from "../../styles/mainContent.module.css";

function NcRNA() {
  return (
    <>
      <ul className={styles.entryData}>
        <li>Name: </li>
        <li>Organism: </li>
        <li>Organism ID</li>
        <li>Lenght (bp): </li>
        <li>Mature miRNA seq: </li>
        <li>Mature miRNA length: </li>
        <li>Pre-miRNA seq: </li>
        <li>Pre-miRNA length: </li>
        <li>Pre-miRNA dG: </li>
        <li>Reference: </li>
      </ul>
    </>
  );
}

export default NcRNA;
