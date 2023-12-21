import styles from "../../styles/mainContent.module.css";
import { makeFasta, makeMultiFasta } from "../../utils";
import { getProteome } from "../../api/dbs.api";
import { useState, useEffect } from "react";

function Genome(props) {
  const entry = props.entryData;
  const [proteome, setProteome] = useState();

  useEffect(() => {
    getProteome(entry.id).then(setProteome);
  }, []);

  if (proteome === undefined) {
    return <h1>Loading...</h1>;
  }

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
            Download Genome
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              makeMultiFasta(proteome, "prot");
            }}
          >
            Download Proteome
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              makeMultiFasta(proteome, "orf");
            }}
          >
            Download Orfeome
          </button>
        </li>
      </ul>
    </>
  );
}

export default Genome;
