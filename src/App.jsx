import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genome from "./Genome"
import Protein from "./Protein"
import RegulatoryElement from "./RegulatoryElement"
import NcRNA from "./NcRNA"
import Ori from "./Ori"
import Baculoviridae from "./Baculoviridae"

function App() {

return (
  <>
  <BrowserRouter>
  <Header />

  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/genome" element={<Genome />} />
    <Route path="/protein" element={<Protein />} />
    <Route path="/regulatoryelement" element={<RegulatoryElement />} />
    <Route path="/ncrna" element={<NcRNA />} />
    <Route path="/ori" element={<Ori />} />
    <Route path="/baculoviridae" element={<Baculoviridae />} />
  </Routes>

  <Footer />
  </BrowserRouter>
  </>)
}

export default App