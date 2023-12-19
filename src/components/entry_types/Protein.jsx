import styles from "../../styles/mainContent.module.css";

function Protein(props) {
  const entry = props.entryData;
  function OrfData() {
    return (
      <>
        <ul className={styles.orfData}>
          <li>
            <b>Length(bp):</b>{" "}
          </li>
          <li>
            <b>%GC:</b>{" "}
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entry.name}
        </li>
        <li>
          <b>Protein ID:</b> {entry.gb_accss}
        </li>
        <li>
          <b>Organism:</b>{" "}
        </li>
        <li>
          <b>Lenght(aa):</b> {entry.length}
        </li>
        <li>
          <b>MW:</b>{" "}
        </li>
        <li>
          <b>Function:</b>{" "}
        </li>
        <li>
          <b>Orthology Group:</b>{" "}
        </li>
        <li>
          <u>
            <b>ORF Data</b>
          </u>
        </li>
        <OrfData />
      </ul>
    </>
  );
}

export default Protein;
