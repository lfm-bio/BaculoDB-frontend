import { useState } from "react";
import { getOrthologyGroup } from "../api/dbs.api";

function OrthologyGroups() {
  const [orthologyGroups, setOrthologyGroups] = useState();

  if (orthologyGroups === undefined) {
    getOrthologyGroup().then(setOrthologyGroups);
  }

  console.log(orthologyGroups);
  return <h1>Website under construction</h1>;
}

export default OrthologyGroups;
