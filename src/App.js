import React from 'react';
import './App.css';
import "./fontawasome.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
