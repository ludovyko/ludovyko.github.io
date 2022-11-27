import React from "react";

import { Routes, Route} from "react-router-dom";
// import About from "../../views/about/index.jsx";
import Home from "../../views/home/home";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/about" element = {<About></About>} /> */}
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;