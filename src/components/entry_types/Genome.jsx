import styles from "../../styles/mainContent.module.css";
import { makeFasta } from "../../utils";

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
        <li>
          <a
            href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&BLAST_SPEC=&LINK_LOC=blasttab&LAST_PAGE=blastp&QUERY=${entry.gb_accss}`}
            target="_blank"
          >
            <b>Run BlastN</b>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta(entry.gb_accss, entry.seq);
            }}
          >
            Download FASTA
          </button>
        </li>
      </ul>
    </>
  );
}

export default Genome;
