import styles from "../../styles/mainContent.module.css";

function Protein(props) {
  const entry = props.entryData;
  function OrfData(props) {
    return (
      <>
        <ul className={styles.orfData}>
          <li>
            <b>Length(bp):</b> {props.orfLength}
          </li>
          <li>
            <b>%GC:</b> {props.orfGcPerc}
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
          <b>Organism:</b> {entry.genome} ({entry.genome_name})
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
        <OrfData orfLength={entry.orf_length} orfGcPerc={entry.orf_gc_perc} />
      </ul>
    </>
  );
}

export default Protein;
