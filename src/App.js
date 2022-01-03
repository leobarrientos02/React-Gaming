import React from "react";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

// STYLES
import GlobalStyles from "./components/GlobalStyles";

// ROUTES
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
