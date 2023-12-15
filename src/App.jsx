import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles/main.module.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Baculoviridae from "./components/Baculoviridae";
import SearchResults from "./components/SearchResults";
import BatchDownload from "./components/BatchDownload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SearchResults />} />
            <Route path="/baculoviridae" element={<Baculoviridae />} />
            <Route path="/batchdownload" element={<BatchDownload />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
