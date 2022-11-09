import "./App.css";

import CareerPage from "./pages/Career";
import Submitted from "./pages/Submitted";
import Test from "./pages/Test";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<CareerPage />}></Route>
          <Route path="/submitted" element={<Submitted />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
