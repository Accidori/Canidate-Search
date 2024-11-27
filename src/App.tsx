import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import PotentialCandidates from './components/PotentialCandidates';
import './App.css';


 const App: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);



  return (
    <Router>
      <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PotentialCandidates" element={<PotentialCandidates />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
