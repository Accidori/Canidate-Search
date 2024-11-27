import React from "react";
import Candidate from "../interfaces/Candidate.interface";

interface SavedCandidatesProps {
    savedCandidates: Candidate[];
}

const PotentialCandidates: React.FC<SavedCandidatesProps> = ({ savedCandidates }) => {

    return(
        <div>
            <h2>Potential Candidates</h2>
            {savedCandidates.length === 0 ? (
                <p>No saved candidates yet.</p>
            ):(
                <ul>
                    {savedCandidates.map((candidate, index) => (
                        <li key = {index}>
                            {candidate.username} - {candidate.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PotentialCandidates;