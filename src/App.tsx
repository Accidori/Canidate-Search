import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PotentialCandidates from './components/PotentialCandidates';
import Nav from './components/Nav';


//stylize however really
import './App.css';


const App: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);



    //local storage my behated
    useEffect(() => {
        const saved = localStorage.getItem('savedCandidates');
        if(saved) {
            setSavedCandidates(JSON.parse(saved));
        }
    }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potential-candidates" element={<PotentialCandidates savedCandidates={savedCandidates} />} />
      </Routes>
    </Router>
  );
};

export default App;
