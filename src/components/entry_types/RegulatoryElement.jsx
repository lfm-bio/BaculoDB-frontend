import styles from "../../styles/mainContent.module.css";

function RegulatoryElement(props) {
  const entryData = props.entryData;

  return (
    <>
      <h1>Regulatory Element</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entryData.name}
        </li>
        <li>
          <b>Type:</b> {entryData.re_type}
        </li>
        <li>
          <b>Description:</b> {entryData.description}
        </li>
        <li>
          <b>Sequence:</b> {entryData.seq}
        </li>
        <li>
          <b>Reference:</b> {entryData.reference}
        </li>
      </ul>
    </>
  );
}

export default RegulatoryElement;
