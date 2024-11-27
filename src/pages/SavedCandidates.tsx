import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch the saved candidates from the API
    fetch('/api/candidates')
      .then((response) => response.json())
      .then((data: Candidate[]) => {
        setCandidates(data);
      })
      .catch((error) => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - {candidate.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SavedCandidates;
