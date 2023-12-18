import styles from "../../styles/mainContent.module.css";

function Protein(props) {
  const entry = props.entryData;
  function OrfData() {
    return (
      <>
        <ul className={styles.orfData}>
          <li>Length (bp): </li>
          <li>%GC: </li>
          <li>Prs: </li>
          <li>Ter: </li>
          <li>ORF Sequence: </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <ul className={styles.entryData}>
        <li>Name: {entry.name}</li>
        <li>Protein ID: {entry.gb_accss}</li>
        <li>Organism: </li>
        <li>Organism ID</li>
        <li>Lenght (aa): {entry.length}</li>
        <li>MW: </li>
        <li>PI: </li>
        <li>Subcellular Localization Signal: </li>
        <li>Function: </li>
        <li>Domains: </li>
        <li>Orthology Group: </li>
        <li>ORF Data: </li>
        <OrfData />
        <li>Protein Sequence: </li>
      </ul>
    </>
  );
}

export default Protein;
