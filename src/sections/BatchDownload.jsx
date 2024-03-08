import { useState } from "react";
import styles from "../styles/mainContent.module.css";

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
  const [type, setType] = useState("genomes");

  const handleSubmit = (e) => {
    e.preventDefault();
    //types & ids
  };

  const handleInputChange = (e) => {
    setIds(e.target.value);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={styles.batchDownload}>
      <h3>Download by ID</h3>
      <form onSubmit={handleSubmit}>
        <label>Download</label>
        <select onChange={handleChange}>
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
