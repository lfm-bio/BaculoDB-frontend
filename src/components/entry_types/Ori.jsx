import styles from "../../styles/mainContent.module.css";

function Ori() {
  return (
    <>
      <ul className={styles.entryData}>
        <li>Name: </li>
        <li>ID</li>
        <li>Organism: </li>
        <li>Organism ID</li>
        <li>Reference: </li>
      </ul>
    </>
  );
}

export default Ori;
