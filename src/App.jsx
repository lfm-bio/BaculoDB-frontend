import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genome from "./Genome"

function App() {

return (<>


  <Header />
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/genome" element={<Genome />} />
  </Routes>
  </BrowserRouter>

  <Footer />




  </>)
}

export default App