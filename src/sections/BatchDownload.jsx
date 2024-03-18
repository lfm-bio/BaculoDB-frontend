import { useState, useEffect } from "react";
import styles from "../styles/mainContent.module.css";
import { makeFasta, removeWhitespace } from "../utils/utils";
import { getProteome, getGenomeBatch } from "../api/dbs.api";

function DownloadByGenusMorph() {
  const [downloadOptions, setDownloadOptions] = useState({
    ictvReference: "all",
    type: "genomes",
    genusMorph: "baculoviridae",
  });
  const [DB, setDB] = useState();
  const [download, setDownload] = useState(false);
  console.log(DB);

  useEffect(() => {
    console.log(downloadOptions);
    if (downloadOptions.genusMorph === "baculoviridae") {
      getGenomeBatch().then(setDB); //GEtall
    } else {
      getGenomeBatch(downloadOptions.genusMorph).then(setDB);
    }
  }, [downloadOptions]);

  useEffect(() => {
    if (DB !== undefined && download) {
      if (
        downloadOptions.type === "genomes" ||
        downloadOptions.type === "proteomes"
      ) {
        makeFasta(DB);
      } else {
        makeFasta(DB, true);
      }
      setDownload(false);
    }
  }, [download, DB]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDownload(true);
  };

  const handleChange = (e) => {
    const selectName = e.target.name;
    setDownloadOptions({
      ...downloadOptions,
      [selectName]: e.target.value,
    });
  };

  if (download && DB === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.batchDownload}>
      <h3>Download by genus/morphology</h3>
      <form onSubmit={handleSubmit}>
        <label>Download</label>
        <select
          onChange={handleChange}
          name="ictvReference"
          value={downloadOptions.ictvReference}
        >
          <option value="all">all</option>
          <option value="ictv">ICTV accepted</option>
          <option value="wreference">with reference</option>
        </select>
        <select
          name="type"
          onChange={handleChange}
          value={downloadOptions.type}
        >
          <option value="genomes">genomes</option>
          <option value="orfeomes">orfeomes</option>
          <option value="proteomes">proteomes</option>
        </select>
        <label>of</label>
        <select
          name="genusMorph"
          onChange={handleChange}
          value={downloadOptions.genusMorph}
        >
          <option value="baculoviridae">Baculoviridae</option>
          <option value="A">A</option>
          <option value="AI">AI</option>
          <option value="AII">AII</option>
          <option value="B">B / GV</option>
          <option value="G">G</option>
          <option value="D">D</option>
          {/* <option value="snpv">SNPV</option>
          <option value="mnpv">MNPV</option> */}
        </select>
        <button type="submit">Download</button>
      </form>
    </div>
  );
}

function DownloadByID() {
  const [ids, setIds] = useState("");
  const [idsArray, setIdsArray] = useState();
  const [type, setType] = useState("genomes");
  const [DB, setDB] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //filter DB
    if (idsArray !== undefined) {
      setLoading(true);
      if (type === "genomes") {
        mainSearch(" ").then(setDB);
      } else {
        getProteome(" ").then(setDB);
      }
    }
  }, [idsArray]);

  useEffect(() => {
    //download fasta
    if (DB !== undefined) {
      const chosenSeqs = [];
      for (const seq of DB) {
        if (
          ((type === "proteomes" || type === "orfeomes") &&
            idsArray.includes(seq.genome_id)) ||
          (type === "genomes" && idsArray.includes(seq.id))
        ) {
          chosenSeqs.push(seq);
        }
      }

      if (type === "genomes" || type === "proteomes") {
        makeFasta(chosenSeqs);
      } else {
        makeFasta(chosenSeqs, true);
      }
    }
    setLoading(false);
  }, [DB]);

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

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.batchDownload}>
      <h3>Download by ID</h3>
      <form onSubmit={handleSubmit}>
        <label>Download</label>
        <select onChange={handleTypeChange} value={type}>
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
