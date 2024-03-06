import { useState } from "react";
import styles from "../styles/mainContent.module.css";

function DownloadByGenusMorph() {
  return (
    <div className={styles.batchDownload}>
      <h3>Download by genus/morphology</h3>
      <form>
        <label>Download</label>
        <select>
          <option>all</option>
          <option>ICTV accepted</option>
          <option>with reference</option>
        </select>
        <select>
          <option>genomes</option>
          <option>orfeomes</option>
          <option>proteomes</option>
        </select>
        <label>of</label>
        <select>
          <option>Baculoviridae</option>
          <option>A</option>
          <option>AI</option>
          <option>AII</option>
          <option>B / GV</option>
          <option>G</option>
          <option>D</option>
          <option>SNPV</option>
          <option>MNPV</option>
        </select>
        <button>Download</button>
      </form>
    </div>
  );
}

function DownloadByID() {
  const [ids, setIds] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setIds(e.target.value);
    console.log(ids);
  };

  return (
    <div className={styles.batchDownload}>
      <h3>Download by ID</h3>
      <form onSubmit={handleSubmit}>
        <label>Download</label>
        <select>
          <option>genomes</option>
          <option>orfeomes</option>
          <option>proteomes</option>
        </select>
        <label>of</label>
        <input
          type="text"
          placeholder="genomes IDs (coma separated)"
          onChange={handleChange}
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
