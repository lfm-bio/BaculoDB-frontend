import styles from "../../styles/mainContent.module.css";
import { makeFasta } from "../../utils/utils";
import { getProteome } from "../../api/dbs.api";
import { useState, useEffect } from "react";

function Genome(props) {
  const entryData = props.entryData;
  const [proteome, setProteome] = useState();

  useEffect(() => {
    getProteome(entryData.id).then(setProteome);
  }, []);

  if (proteome === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Genome</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entryData.name}
        </li>
        <li>
          <b>Organism ID: </b>
          <a
            href={`https://www.ncbi.nlm.nih.gov/nuccore/${entryData.gb_accss}`}
            target="_blank"
          >
            {entryData.gb_accss}
          </a>
        </li>
        <li>
          {entryData.reference && <b>Reference: </b>}
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${entryData.reference}`}
            target="_blank"
          >
            {entryData.reference && `${entryData.reference}`}
          </a>
        </li>
        <li>
          <b>Genus:</b> {entryData.genus}
        </li>
        <li>
          {entryData.virus_morphology && <b>Morphology: </b>}
          {entryData.virus_morphology && `${entryData.virus_morphology}`}
        </li>
        <li>
          <b>Lenght(bp):</b> {entryData.seq.length}
        </li>
        <li>
          <b>%GC:</b> {entryData.gc_perc}%
        </li>
        <li>
          <a
            href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&BLAST_SPEC=&LINK_LOC=blasttab&LAST_PAGE=blastp&QUERY=${entryData.gb_accss}`}
            target="_blank"
          >
            <b>Run BlastN</b>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta([entryData]);
            }}
          >
            Download Genome Fasta
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta(proteome);
            }}
          >
            Download Proteome Fasta
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta(proteome, true);
            }}
          >
            Download Orfeome Fasta
          </button>
        </li>
      </ul>
    </>
  );
}

export default Genome;
