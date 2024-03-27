import { useParams } from "react-router-dom";
import { getEntry } from "../api/dbs.api";
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
    getEntry(id).then(setEntries);
  }, [id]);

  if (entries === undefined) {
    return <h1>Loading</h1>;
  }

  if (entries.length != 1) {
    return <h1>Wrong entry</h1>;
  }

  const entry = entries[0];
  switch (entry.entry_type) {
    case "Genome":
      return <Genome entryData={entry} />;
    case "Protein":
      return <Protein entryData={entry} />;
    case "ori":
      return <Ori entryData={entry} />;
    case "NcRNA":
      return <NcRNA entryData={entry} />;
    case "regulatoryelement":
      return <RegulatoryElement entryData={entry} />;
    case "OrthologyGroup":
      return <OrthologyGroup entryData={entry} />;
  }
}

export default Entry;
