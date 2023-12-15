import styles from "../../styles/mainContent.module.css";

function Genome(props) {
  const entry = props.entryData;
  function handleClick() {
    //esto o poner Link en conditional rendering
    window.location.href = `https://pubmed.ncbi.nlm.nih.gov/${entry.reference}`;
  }
  return (
    <>
      <ul className={styles.entryData}>
        <li>{`Name: ${entry.name}`}</li>
        <li>{`Organism ID: ${entry.gb_accss}`}</li>
        <li>ICTV: </li>
        <li onClick={handleClick}>
          {entry.reference && `Reference: ${entry.reference}`}
        </li>
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
