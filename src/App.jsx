import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles/main.module.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Genome from "./components/Genome";
import Protein from "./components/Protein";
import RegulatoryElement from "./components/RegulatoryElement";
import NcRNA from "./components/NcRNA";
import Ori from "./components/Ori";
import Baculoviridae from "./components/Baculoviridae";
import SearchResult from "./components/SearchResult";
import Working from "./components/Working";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/genome" element={<Genome />} />
            <Route path="/protein" element={<Protein />} />
            <Route path="/regulatoryelement" element={<RegulatoryElement />} />
            <Route path="/ncrna" element={<NcRNA />} />
            <Route path="/ori" element={<Ori />} />
            <Route path="/baculoviridae" element={<Baculoviridae />} />
            <Route path="/working" element={<Working />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
