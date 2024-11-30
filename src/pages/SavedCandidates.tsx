import React  from "react";
import { Candidate } from "../interfaces/Candidate.interface";


const SavedCandidates: React.FC = () => {

  //going into storgae units
  const savedCandidates: Candidate[]= JSON.parse (localStorage.getItem("savedCandidates") || "[]");
 
  // return if no candidates have been saved
  if (savedCandidates.length === 0) {
    return <h1>No candidates have been accepted.</h1>;
  }

  //returning the saved candidates
  return (
    <div className="SavedCandidates">
      <h1>Potential Candidates</h1>
      <ul>
        {savedCandidates.map((candidate, index) => (
          <li key = {index}>
            <div>
              <h3>{candidate.username}</h3>
              <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`}/>
              <h2>{candidate.name}</h2>
              <p>{candidate.email}</p>
              <p>{candidate.location}</p>
              <p>{candidate.company}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </li>
        ))};
      </ul>
    </div>
  );
};

export default SavedCandidates;
