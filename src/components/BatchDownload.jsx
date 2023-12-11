import styles from "../styles/mainContent.module.css";

function BatchDownload() {
  return (
    <>
      <DownloadByGenusMorph />
      <DownloadByID />
    </>
  );
}

function DownloadByGenusMorph() {
  return (
    <div className={styles.batchDownload}>
      <h3>Download by genus/morphology</h3>
      <form>
        <label>Download</label>
        <select>
          <option>all</option>
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
          <option>B</option>
          <option>G</option>
          <option>D</option>
          <option>SNPV</option>
          <option>MNPV</option>
          <option>GV</option>
        </select>
        <button>Download</button>
      </form>
    </div>
  );
}

function DownloadByID() {
  return (
    <div className={styles.batchDownload}>
      <h3>Download by ID</h3>
      <form>
        <label>Download</label>
        <select>
          <option>genomes</option>
          <option>orfeomes</option>
          <option>proteomes</option>
        </select>
        <label>of</label>
        <input type="text" placeholder="genomes IDs (coma separated)" />
        <button>Download</button>
      </form>
    </div>
  );
}

export default BatchDownload;
