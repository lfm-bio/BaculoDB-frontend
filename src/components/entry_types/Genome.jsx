import styles from "../../styles/mainContent.module.css";
import { Link } from "react-router-dom";

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
          <Link to={`https://pubmed.ncbi.nlm.nih.gov/${entry.reference}`}>
            {entry.reference && `${entry.reference}`}
          </Link>
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
