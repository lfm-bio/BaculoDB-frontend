import styles from "../../styles/mainContent.module.css";

function Genome(props) {
  const entry = props.entryData;
  return (
    <>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entry.name}
        </li>
        <li>
          <b>Organism ID:</b> {entry.gb_accss}
        </li>
        <li>
          {entry.reference && <b>Reference: </b>}
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${entry.reference}`}
            target="_blank"
          >
            {entry.reference && `${entry.reference}`}
          </a>
        </li>
        <li>
          <b>Genus:</b>{" "}
        </li>
        <li>
          <b>Morphology:</b>{" "}
        </li>
        <li>
          <b>Lenght(bp):</b> {entry.length}
        </li>
        <li>
          <b>%GC:</b> {entry.gc_perc}
        </li>
      </ul>
    </>
  );
}

export default Genome;
