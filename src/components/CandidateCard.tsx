import React from "react";
import  Candidate  from "../interfaces/Candidate.interface";


interface Props {
    candidate: Candidate;
    onSkip: () => void;
    onSave: () => void;
}

const CandidateCard: React.FC<Props> = ({ candidate, onSave, onSkip }) => {
    return (
        <div className="candidate-card">
            <h3>{candidate.username}</h3>
            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`}/>
            <h2>{candidate.name}</h2>
            <p>{candidate.email}</p>
            <p>{candidate.location}</p>
            <p>{candidate.company}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
            <div>
                <button onClick={onSave}>+</button>
                <button onClick={onSkip}>-</button>
            </div>
        </div> 
    );

}

export default CandidateCard;