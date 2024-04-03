import { useEffect, useState } from "react";
import styles from "../../styles/mainContent.module.css";
import { getProteinOrthologyGroup } from "../../api/dbs.api";
import { makeFasta } from "../../utils/utils";

function OrthologyGroup(props) {
  const [proteins, setProteins] = useState();

  useEffect(() => {
    getProteinOrthologyGroup(entryData.name).then(setProteins);
  });

  const entryData = props.entryData;

  if (proteins === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Orthology Group</h1>
      <ul className={styles.entryData}>
        <li>
          <b>Name:</b> {entryData.name}
        </li>
        <li>
          <b>N Genes:</b> {entryData.n_genes}
        </li>
        <li>
          <b>Genus:</b> {entryData.genus_code}
        </li>
        <li>
          <button
            onClick={() => {
              makeFasta(proteins);
            }}
          >
            Download Orthology Group Fasta
          </button>
        </li>
      </ul>
    </>
  );
}

export default OrthologyGroup;
