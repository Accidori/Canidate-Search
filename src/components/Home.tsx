import React, { useEffect, useState } from "react";  
import Candidate from "../interfaces/Candidate.interface";
import  {searchGithub } from "../api/API";
import  CandidateCard  from "./CandidateCard";

// Define the actions
interface HomeProps {
    saveCandidates: (condidate: Candidate) => void;
    // skipCandidates: () => void;
    // savedCandidates: Candidate[];
}



// Define the Home component
const Home: React.FC<HomeProps> = ({saveCandidates, /*skipCandidates, savedCandidates*/}) => {

    // Define the state
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Fetch the candidates from the API
    useEffect(() => {
        const fetchCandidates = async () => {
            const data = await searchGithub('');
            const formattedCandidates = data.map((user: any) => ({
                name: user.name,
                username: user.login,
                location: user.location,
                avatar: user.avatar_url,
                email: user.email,
                html_url: user.html_url,
                company: user.company,

            }));
            setCandidates(formattedCandidates);
        };
        fetchCandidates();
    }, []);



    // Define the next candidate function
    const nextCandidate = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    };


    // Define the current candidate
    const currentCandidate = candidates[currentIndex];


    return (
        <div>
            <h1>Candidate Search</h1>
            {currentCandidate ? (
                <div>
                    <CandidateCard candidate={currentCandidate} />
                    <div>
                        <button onClick = {() => saveCandidates(currentCandidate)}>+</button>
                        <button onClick = {() => nextCandidate()}>-</button>
                    </div>
                </div>
            ) : (
                <p>No Candidates Found!</p>
            )}
        </div>
    );
};  

export default Home;