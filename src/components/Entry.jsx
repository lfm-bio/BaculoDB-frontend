import Genome from "./Genome";
import Protein from "./Protein";
import NcRNA from "./NcRNA";
import Ori from "./Ori";
import RegulatoryElement from "./RegulatoryElement";
import { useParams } from "react-router-dom";

function Entry() {
  const params = useParams();
  console.log(params);
  return <Genome />;
}

export default Entry;
