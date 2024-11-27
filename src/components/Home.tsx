import React, { useEffect, useState } from "react";  
import Candidate from "../interfaces/Candidate.interface";
import  CandidateCard  from "./CandidateCard";
import { searchGithub } from "../api/API";

// // Define the actions
// interface HomeProps {
//     saveCandidates: (condidate: Candidate) => void;
//     skipCandidates: () => void;
//     savedCandidates: Candidate[];
// }



// Define the Home component
const Home: React.FC = () => {

    // Define the state
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);


    // Fetch the candidates from the API
    useEffect(() => {
        const fetchCandidates = async () => {
            const data = await searchGithub('');
            const candidatesData = data.map((user: any) => ({
                name: user.name,
                username: user.login,
                location: user.location,
                avatar: user.avatar_url,
                email: user.email,
                html_url: user.html_url,
                company: user.company,

            }));
            setCandidates(candidatesData);
        };
        fetchCandidates();
        
        //load the saved candidates
        const saved = localStorage.getItem('savedCandidates');
        if(saved) {
            setSavedCandidates(JSON.parse(saved));
        }  
    }, []);

    // Define the current candidate
    const handleSave = (candidate: Candidate) => {
        const updatedSavedCandidates = [...savedCandidates, candidate];
        setSavedCandidates(updatedSavedCandidates);
        localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
    }


    const handleSkip = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, candidates.length - 1));
    }

    const currentCandidate = candidates[currentIndex];


    return (
        <div>
            {currentCandidate ? (
                <CandidateCard 
                    candidate={currentCandidate}
                    onSave={() => handleSave(currentCandidate)}
                    onSkip={handleSkip}
                />
            ) : (
                <p>No Candidates Found!</p>
            )}
        </div>
    );
};  

export default Home;