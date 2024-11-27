import React from "react";
import  Candidate  from "../interfaces/Candidate.interface";


interface CandidateCardProps {
    candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate}) => {
    return (
        <div>
            <div>
                <h3>{candidate.username}</h3>
                <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} width = {150}/>
                <h2>{candidate.name}</h2>
                <p>{candidate.email}</p>
                <p>{candidate.location}</p>
                <p>{candidate.company}</p>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            </div> 
        </div>

    );

}

export default CandidateCard;