import styles from "../../styles/mainContent.module.css";

function NcRNA(props) {
  const entryData = props.entryData;

  return (
    <>
      <h1>NcRNA</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name: </b>
          {entryData.name}
        </li>
        <li>
          <b>Organism: </b>
          {entryData.genome_name}
        </li>
        <li>
          <b>Mature miRNA seq: </b>
          {entryData.mature_seq}
        </li>
        <li>
          <b>Mature miRNA length(bp): </b>
          {entryData.mature_seq.length}
        </li>
        <li>
          <b>Pre-miRNA seq: </b>
          {entryData.premirna_seq}
        </li>
        <li>
          <b>Pre-miRNA length(bp): </b>
          {entryData.premirna_seq.length}
        </li>
        <li>
          <b>Pre-miRNA dG(Kcal/mol): </b>
          {entryData.premirna_dg}
        </li>
        <li>
          <b>Reference: </b>
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${entryData.reference}`}
            target="blank_"
          >
            {entryData.reference}
          </a>
        </li>
      </ul>
    </>
  );
}

export default NcRNA;
