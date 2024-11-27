import React from "react";
import Candidate from "../interfaces/Candidate.interface";

interface SavedCandidatesProps {
    savedCandidates: Candidate[];
}

const PotentialCandidates: React.FC<SavedCandidatesProps> = ({ savedCandidates }) => {

    return(
        <div className="potential-candidates">
            {savedCandidates.length === 0 ? (
                <ul>
                    {savedCandidates.map((candidate, index) => (


                        <li key = {index}>
                            <h3>{candidate.username}</h3>
                            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`}/>
                            <h2>{candidate.name}</h2>
                            <p>{candidate.email}</p>
                            <p>{candidate.location}</p>
                            <p>{candidate.company}</p>
                            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            ):(
                <p>No saved candidates yet.</p>
            )}
        </div>
    );
};

export default PotentialCandidates;