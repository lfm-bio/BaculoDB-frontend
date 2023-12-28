import styles from "../../styles/mainContent.module.css";

function OrthologyGroup(props) {
  const entryData = props.entryData;
  return (
    <>
      <h1>Orthology Group</h1>
      <ul className={styles.entryData}>
        <li>Name: {entryData.name}</li>
        <li>ID: {entryData.id}</li>
        <li>N Genes: {entryData.n_genes}</li>
        <li>Genus: {entryData.genus_code}</li>
      </ul>
    </>
  );
}

export default OrthologyGroup;
