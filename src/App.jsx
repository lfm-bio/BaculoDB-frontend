import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Baculoviridae from "./sections/Baculoviridae";
import SearchResults from "./components/SearchResults";
import OrthologyGroups from "./sections/OrthologyGroups";
import BatchDownload from "./sections/BatchDownload";
import NcRNA from "./sections/NcRNA";
import RegulatoryElements from "./sections/RegulatoryElements";
import SubcellularLocalization from "./sections/SubcellularLocalization";
import Entry from "./components/Entry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:query" element={<SearchResults />} />
            <Route path="/entry/:id" element={<Entry />} />
            <Route path="/baculoviridae" element={<Baculoviridae />} />
            <Route
              path="/regulatoryelements"
              element={<RegulatoryElements />}
            />
            <Route path="/ncrna" element={<NcRNA />} />
            <Route path="/orthologygroups" element={<OrthologyGroups />} />
            <Route
              path="/subcellularlocalization"
              element={<SubcellularLocalization />}
            />
            <Route path="/batchdownload" element={<BatchDownload />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
