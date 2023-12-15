import { useParams } from "react-router-dom";
import { getGenome } from "../api/dbs.api";
import { useState } from "react";
import Genome from "./entry_types/Genome";
import Protein from "./entry_types/Protein";
import NcRNA from "./entry_types/NcRNA";
import Ori from "./entry_types/Ori";
import RegulatoryElement from "./entry_types/RegulatoryElement";

function Entry() {
  const params = useParams();
  const [entry, setEntry] = useState();

  async function loadEntry() {
    const res = await getGenome(params.id);
    setEntry(res.data[0]);
  }

  if (entry === undefined) {
    loadEntry();
    return <h1>Loading</h1>;
  } else {
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
