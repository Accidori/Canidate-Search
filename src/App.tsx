import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
