import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Test from "./pages/Test";
//components
import Navbar from "./components/Navbar";
import EntryDetail from "./components/EntryDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
