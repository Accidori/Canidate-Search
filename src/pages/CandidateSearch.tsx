import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      searchGithub(search)
        .then((data) => {
          setCandidates(data);
        })
        .catch((error) => {
          console.error('Error fetching candidates:', error);
        });
    }
  }, [search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search candidates..."
      />
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - {candidate.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
