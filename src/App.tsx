import CandidateSearch from './pages/CandidateSearch';
import Nav from './components/Nav';


//this showes the main content in the front
const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <CandidateSearch/>
    </div>
  );
}

export default App;
