import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Productpage from "./components/Productpage";
import ContactForm from "./components/ContactForm";

import Developer from './components/Developer';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/"  element={<Homepage />} />
      <Route path="/productpage"  element={<Productpage />} />
      <Route path="/contactForm"  element={<ContactForm />} />
      <Route path="/developer"  element={<Developer />} />
   
    </Routes>
    </Router>
  );
};

export default App;