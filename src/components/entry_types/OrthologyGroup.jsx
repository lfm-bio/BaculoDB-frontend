import styles from "../../styles/mainContent.module.css";

function OrthologyGroup(props) {
  const entry = props.entryData;
  return (
    <>
      <h1>Orthology Group</h1>
      <ul className={styles.entryData}>
        <li>Name: {entry.name}</li>
        <li>ID: {entry.id}</li>
        <li>N Genes: {entry.n_genes}</li>
        <li>Genus: {entry.genus_code}</li>
      </ul>
    </>
  );
}

export default OrthologyGroup;
