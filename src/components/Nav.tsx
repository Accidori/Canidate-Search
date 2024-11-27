import React from 'react';
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/potential-candidates">Potential Candidates</Link>
    </nav>
  )
};

export default Nav;
