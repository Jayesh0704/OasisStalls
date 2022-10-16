import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Productpage from "./components/Productpage";
import Contact from "./components/Contact";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/"  element={<Homepage />} />
      <Route path="/productpage"  element={<Productpage />} />
      <Route path="/contact"  element={<Contact />} />
    </Routes>
    </Router>
  );
};

export default App;