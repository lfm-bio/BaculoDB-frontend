import styles from "../../styles/mainContent.module.css";
import { generatePath } from "react-router-dom";
import { makeFasta } from "../../utils";

function Protein(props) {
  const entryData = props.entryData;

  return (
    <>
      <h1>Protein</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entryData.name}
        </li>
        <li>
          <b>Protein ID: </b>
          <a
            href={`https://www.ncbi.nlm.nih.gov/protein/${entryData.gb_accss}`}
            target="_blank"
          >
            {entryData.gb_accss}
          </a>
        </li>
        <li>
          <b>Organism:</b>{" "}
          <a
            href={generatePath("../entry/:id", {
              id: entryData.genome_id,
            })}
          >
            {entryData.genome_id}
          </a>{" "}
          ({entryData.genome_name})
        </li>
        <li>
          <b>Lenght(aa):</b> {entryData.seq.length}
        </li>
        <li>
          {entryData.orthology_group_id && <b>Orthology Group: </b>}
          <a
            href={generatePath("../entry/:id", {
              id: entryData.orthology_group_id,
            })}
          >
            {entryData.orthology_group_id && `${entryData.orthology_group_id}`}
          </a>
        </li>
        <li>
          <b>Genomic Position:</b> {entryData.genomic_position}
        </li>
        <li>
          <b>ORF Length(bp):</b> {entryData.orf_seq.length}
        </li>
        <li>
          <b>ORF %GC:</b> {entryData.orf_gc_perc}%
        </li>
        <li>
          <a
            href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins&PROGRAM=blastp&BLAST_PROGRAMS=blastp&QUERY=${entryData.gb_accss}&LINK_LOC=protein&PAGE_TYPE=BlastSearch`}
            target="_blank"
          >
            <b>Run BlastP</b>
          </a>
        </li>
        <li>
          <a
            href={`https://www.ebi.ac.uk/interpro/search/sequence/${entryData.seq}`}
            target="_blank"
          >
            <b>Run InterProScan</b>
          </a>
        </li>
        <li>
          <a
            href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&BLAST_SPEC=&LINK_LOC=blasttab&LAST_PAGE=blastp&QUERY=${entryData.orf_seq}`}
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
            Download Protein Fasta
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta([entryData], true);
            }}
          >
            Download ORF Fasta
          </button>
        </li>
      </ul>
    </>
  );
}

export default Protein;
