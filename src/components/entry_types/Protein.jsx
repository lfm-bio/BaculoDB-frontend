import styles from "../../styles/mainContent.module.css";
import { generatePath } from "react-router-dom";
import { makeFasta } from "../../utils";

function Protein(props) {
  const entry = props.entryData;

  function OrfData(props) {
    return (
      <>
        <ul className={styles.orfData}>
          <li>
            <b>Length(bp):</b> {props.orfSeq.length}
          </li>
          <li>
            <b>%GC:</b> {props.orfGcPerc}
          </li>
          <li>
            <a
              href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastn&PAGE_TYPE=BlastSearch&BLAST_SPEC=&LINK_LOC=blasttab&LAST_PAGE=blastp&QUERY=${props.orfSeq}`}
              target="_blank"
            >
              <b>Run BlastN</b>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                makeFasta(entry.gb_accss, props.orfSeq);
              }}
            >
              Download ORF Fasta
            </button>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <h1>Protein</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entry.name}
        </li>
        <li>
          <b>Protein ID:</b> {entry.gb_accss}
        </li>
        <li>
          <b>Organism:</b>{" "}
          <a
            href={generatePath("../entry/:id", {
              id: entry.genome,
            })}
          >
            {entry.genome}
          </a>{" "}
          ({entry.genome_name})
        </li>
        <li>
          <b>Lenght(aa):</b> {entry.seq.length}
        </li>
        <li>
          <b>Orthology Group:</b>{" "}
        </li>
        <li>
          <a
            href={`https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE=Proteins&PROGRAM=blastp&BLAST_PROGRAMS=blastp&QUERY=${entry.gb_accss}&LINK_LOC=protein&PAGE_TYPE=BlastSearch`}
            target="_blank"
          >
            <b>Run BlastP</b>
          </a>
        </li>
        <li>
          <a
            href={`https://www.ebi.ac.uk/interpro/search/sequence/${entry.seq}`}
            target="_blank"
          >
            <b>Run InterProScan</b>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta(entry.gb_accss, entry.seq);
            }}
          >
            Download Protein Fasta
          </button>
        </li>
        <li>
          <u>
            <b>ORF Data</b>
          </u>
        </li>
        <OrfData
          orfLength={entry.orf_length}
          orfGcPerc={entry.orf_gc_perc}
          orfSeq={entry.orf_seq}
        />
      </ul>
    </>
  );
}

export default Protein;
