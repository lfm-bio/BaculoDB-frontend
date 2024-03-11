import { useState, useEffect } from "react";
import styles from "../styles/mainContent.module.css";
import { makeFasta, removeWhitespace } from "../utils/utils";
import { getProteome, mainSearch } from "../api/dbs.api";

function DownloadByGenusMorph() {
  const [downloadOptions, setDownloadOptions] = useState({
    ictvReference: "all",
    type: "genomes",
    genusMorph: "baculoviridae",
  });

  const handleChange = (e) => {
    const selectName = e.target.name;
    setDownloadOptions({
      ...downloadOptions,
      [selectName]: e.target.value,
    });
  };

  return (
    <div className={styles.batchDownload}>
      <h3>Download by genus/morphology</h3>
      <form>
        <label>Download</label>
        <select onChange={handleChange} name="ictvReference">
          <option value="all">all</option>
          <option value="ictv">ICTV accepted</option>
          <option value="wreference">with reference</option>
        </select>
        <select name="type" onChange={handleChange}>
          <option value="genomes">genomes</option>
          <option value="orfeomes">orfeomes</option>
          <option value="proteomes">proteomes</option>
        </select>
        <label>of</label>
        <select name="genusMorph" onChange={handleChange}>
          <option value="baculoviridae">Baculoviridae</option>
          <option value="A">A</option>
          <option value="AI">AI</option>
          <option value="AII">AII</option>
          <option value="B">B / GV</option>
          <option value="G">G</option>
          <option value="D">D</option>
          <option value="snpv">SNPV</option>
          <option value="mnpv">MNPV</option>
        </select>
        <button>Download</button>
      </form>
    </div>
  );
}

function DownloadByID() {
  const [ids, setIds] = useState("");
  const [idsArray, setIdsArray] = useState();
  const [type, setType] = useState("genomes");
  const [DB, setDB] = useState();
  const [chosenSeqs, setChosenSeqs] = useState();

  console.log(DB);

  useEffect(() => {
    //get all proteomes
    if (type === "proteomes" || type === "orfeomes") {
      getProteome("").then(setDB);
    } else {
      mainSearch("").then(setDB);
    }
  }, [type]);

  useEffect(() => {
    //filter DB
    if (idsArray !== undefined) {
      const chosenSeqsTmp = [];
      for (const seq of DB) {
        if (
          (type === "proteomes" || type === "orfeomes") &&
          idsArray.indexOf(seq.genome_id) > -1
        ) {
          chosenSeqsTmp.push(seq);
        } else if (type === "genomes" && idsArray.indexOf(seq.id) > -1) {
          chosenSeqsTmp.push(seq);
        }
      }
      setChosenSeqs(chosenSeqsTmp);
    }
  }, [idsArray]);

  useEffect(() => {
    //download fasta
    if (chosenSeqs !== undefined) {
      if (type === "genomes" || type === "proteomes") {
        makeFasta(chosenSeqs);
      } else {
        makeFasta(chosenSeqs, true);
      }
    }
  }, [chosenSeqs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdsArray(removeWhitespace(ids.split(",")));
  };

  const handleInputChange = (e) => {
    setIds(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  if (DB === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.batchDownload}>
      <h3>Download by ID</h3>
      <form onSubmit={handleSubmit}>
        <label>Download</label>
        <select onChange={handleTypeChange}>
          <option value="genomes">genomes</option>
          <option value="orfeomes">orfeomes</option>
          <option value="proteomes">proteomes</option>
        </select>
        <label>of</label>
        <input
          type="text"
          placeholder="genomes IDs (coma separated)"
          onChange={handleInputChange}
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

function BatchDownload() {
  return (
    <>
      <DownloadByGenusMorph />
      <DownloadByID />
    </>
  );
}

export default BatchDownload;
