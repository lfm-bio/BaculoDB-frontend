import { useParams } from "react-router-dom";
import { searchInDB } from "../api/dbs.api";
import { useState, useEffect } from "react";
import Genome from "./entry_types/Genome";
import Protein from "./entry_types/Protein";
import NcRNA from "./entry_types/NcRNA";
import Ori from "./entry_types/Ori";
import RegulatoryElement from "./entry_types/RegulatoryElement";
import OrthologyGroup from "./entry_types/OrthologyGroup";

function Entry() {
  const { id } = useParams();
  const [entries, setEntries] = useState();

  useEffect(() => {
    searchInDB(id).then(setEntries);
  }, [id]);

  if (entries === undefined) {
    return <h1>Loading</h1>;
  }

  if (entries.length != 1) {
    return <h1>No entries found</h1>;
  }

  const entry = entries[0];
  switch (entry.entry_type) {
    case "Genome":
      return <Genome entryData={entry} />;
    case "Protein":
      return <Protein entryData={entry} />;
    case "ori":
      return <Ori entryData={entry} />;
    case "ncrna":
      return <NcRNA entryData={entry} />;
    case "regulatoryelement":
      return <RegulatoryElement entryData={entry} />;
    case "OrthologyGroup":
      return <OrthologyGroup entryData={entry} />;
  }
}

export default Entry;
