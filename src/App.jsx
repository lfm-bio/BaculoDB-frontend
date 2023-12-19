import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles/main.module.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Baculoviridae from "./sections/Baculoviridae";
import SearchResults from "./components/SearchResults";
import BatchDownload from "./sections/BatchDownload";
import RegulatoryElements from "./sections/RegulatoryElements";
import SubcellularLocalization from "./sections/SubcellularLocalization";
import Entry from "./components/Entry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:query" element={<SearchResults />} />
            <Route path="/entry/:id" element={<Entry />} />
            <Route path="/baculoviridae" element={<Baculoviridae />} />
            <Route
              path="/regulatoryelements"
              element={<RegulatoryElements />}
            />
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
