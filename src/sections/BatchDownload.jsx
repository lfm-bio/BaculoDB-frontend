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
  const [DB, setDB] = useState();
  const [chosenSeqs, setChosenSeqs] = useState();
  const [genomeData, setGenomeData] = useState();
  const [download, setDownload] = useState(false);

  useEffect(() => {
    mainSearch(" ").then(setDB);
  }, []);

  useEffect(() => {
    const genomeInfo = {};
    if (DB !== undefined) {
      for (const seq of DB) {
        if (seq.entry_type === "Genome") {
          genomeInfo[seq.id] = {
            genus: seq.genus,
            reference: seq.reference,
            // falta ictv en DB
          };
        }
      }
    }
    setGenomeData(genomeInfo);
  }, [DB]);

  useEffect(() => {
    const filterByType = [];
    const filterByGenusMorph = [];
    const filterByIctvRef = [];

    if (DB !== undefined && genomeData !== undefined) {
      setDownload(false);
      for (const seq of DB) {
        switch (downloadOptions.type) {
          case "genomes":
            if (seq.entry_type === "Genome") {
              filterByType.push(seq);
            }
            break;
          case "proteomes":
          case "orfeomes":
            if (seq.entry_type === "Protein") {
              filterByType.push(seq);
            }
            break;
        }
      }

      for (const seq of filterByType) {
        if (
          (seq.entry_type === "Genome" &&
            genomeData[seq.id].genus === downloadOptions.genusMorph) ||
          (seq.entry_type === "Protein" &&
            genomeData[seq.genome_id].genus === downloadOptions.genusMorph) ||
          downloadOptions.genusMorph === "baculoviridae"
        ) {
          filterByGenusMorph.push(seq);
        }
      }

      for (const seq of filterByGenusMorph) {
        if (downloadOptions.ictvReference === "all") {
          filterByIctvRef.push(seq);
        } else if (downloadOptions.ictvReference === "wreference") {
          if (
            (seq.entry_type === "Genome" && genomeData[seq.id].reference) ||
            (seq.entry_type === "Protein" &&
              genomeData[seq.genome_id].reference)
          ) {
            filterByIctvRef.push(seq);
          }
        }
      }
      setChosenSeqs(filterByIctvRef);
      console.log(filterByIctvRef);
    }
  }, [genomeData, downloadOptions]);

  useEffect(() => {
    if (chosenSeqs !== undefined && download) {
      makeFasta(chosenSeqs);
    }
  }, [download]);

  const handleSubmit = (e) => {
    console.log("submit");
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
