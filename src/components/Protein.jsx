import styles from "../styles/mainContent.module.css";

function Protein() {
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
        <li>Name: </li>
        <li>Protein ID: </li>
        <li>Organism: </li>
        <li>Organism ID</li>
        <li>Lenght (aa): </li>
        <li>Composition: </li>
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
