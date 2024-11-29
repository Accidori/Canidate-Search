import React from 'react';
import { Link } from 'react-router-dom';


//hey theres a nav bar that has two links to 2 pages
const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Candidate Search</Link></li>
        <li><Link to="/saved-candidates">Potential Candidates</Link></li>
      </ul>
    </nav>
  )
};

export default Nav;
