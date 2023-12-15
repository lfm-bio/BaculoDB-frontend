import styles from "../../styles/mainContent.module.css";

function NcRNA() {
  return (
    <>
      <ul className={styles.entryData}>
        <li>Name: </li>
        <li>ID</li>
        <li>Organism: </li>
        <li>Organism ID</li>
        <li>Lenght (bp): </li>
        <li>pre-miRNA length: </li>
        <li>pre-miRNA %GC: </li>
        <li>pre-miRNA dG: </li>
        <li>Prs: </li>
        <li>Ter: </li>
        <li>Reference: </li>
        <li>Sequence: </li>
      </ul>
    </>
  );
}

export default NcRNA;
