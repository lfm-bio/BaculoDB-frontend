import { useParams } from "react-router-dom";
import { searchByIDName } from "../api/dbs.api";
import { useState, useEffect } from "react";
import { getFinalArray } from "../utils";
import Genome from "./entry_types/Genome";
import Protein from "./entry_types/Protein";
import NcRNA from "./entry_types/NcRNA";
import Ori from "./entry_types/Ori";
import RegulatoryElement from "./entry_types/RegulatoryElement";

function Entry() {
  const params = useParams();
  const [entries, setEntries] = useState();

  useEffect(() => {
    const loadEntry = async () => {
      const res = await searchByIDName(params.id);
      setEntries(res);
    };
    loadEntry();
  }, []);

  if (entries === undefined) {
    return <h1>Loading</h1>;
  } else {
    const resultsArray = getFinalArray(entries);
    const entry = resultsArray[0];

    switch (entry.entry_type) {
      case "genome":
        return <Genome entryData={entry} />;
      case "protein":
        return <Protein entryData={entry} />;
      case "Ori":
        return <Ori entryData={entry} />;
      case "ncrna":
        return <NcRNA entryData={entry} />;
      case "regulatoryelement":
        return <RegulatoryElement entryData={entry} />;
    }
  }
}

export default Entry;
