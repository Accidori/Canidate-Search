import React, { useState, useEffect } from 'react';
import { Candidate } from "../interfaces/Candidate.interface";
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';


//this is the main page that will show the candidate search
const CandidateSearch:  React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>();



  //loading the candidates
  useEffect(() => {
    const loadCandidates = async () => {
      try{
        const candidateData = await searchGithub();
        const formatCandidates = candidateData.map((user: any) => ({
          username: user.login,
          avatar: user.avatar_url,
          name: user.name,
          location: user.location,
          email: user.email,
          html_url: user.html_url,
          company: user.company,

        }));
        setCandidates(formatCandidates);
      } catch (error) {
        console.error('Error loading candidate:', error);
      }
    };
    loadCandidates();
  }, []);



  //save candidate
  const handleSaveCan= () => {
    const savingCandidate = candidates[currentIndex];
    const updateSavedCan = [...savedCandidates, savingCandidate];
    setSavedCandidates(updateSavedCan);
    localStorage.setItem('savedCandidates', JSON.stringify(updateSavedCan));
    setCurrentIndex(currentIndex + 1);
  }

  //skip candidate
  const  handleSkipCan = () => {
    setCurrentIndex(currentIndex + 1);
  }



  //search for a candidate
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a username.');
      return;
    }

    try{
      const user = await searchGithubUser(searchTerm);
      if(user.login){
        setError(null);
        const formatUser = {
          username: user.login,
          avatar_url: user.avatar_url,
          name: user.name,
          location: user.location,
          email: user.email,
          html_url: user.html_url,
          company: user.company,
        }
        setCandidates([formatUser]);
        setCurrentIndex(0);
        
        
      } else {
        setError('User not found.');
      }
    }catch (err){
      setError('Error searching for user.');
    }
  }




  //if there are no more candidates to view
  if (currentIndex >= candidates.length) {
    return <h1>No more candidates to view.</h1>;
  }

  return (
    <>
      <h1>Candidate Search</h1>
      <input 
      type = 'text' 
      value = {searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder = 'Enter a github user.'
      />

      {error && <p>{error}</p>}


      <button onClick={handleSearch}>Search</button>
      <div>
        <CandidateCard candidate={candidates[currentIndex]} />
        <button onClick={handleSaveCan}> + </button>
        <button onClick={handleSkipCan}> - </button>
      </div>
    </>
  )


};

export default CandidateSearch;
