import React, { useState } from 'react';
import styles from "./searchId.module.css"
import { useNavigate } from 'react-router-dom';





export default function SearchId(){
  const navigate = useNavigate()

  const [searchID, setSearchID] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!searchID) {
      setError('Please enter an Election ID');
      return;
    }
    
    setError('');
    // Simulate an API call to fetch election details by ID
    const result = await fetchElectionByID(searchID);

    if (result) {
      setSearchResult(result);
      navigate("/homepage/searchId/vote2")

    } else {
      setError('No election found with this ID');
    }
  };

  // Placeholder for actual API call
  const fetchElectionByID = async (id) => {
    // Mock data
    const mockData = {
      '12345-ABCDE': { title: '2024 Presidential Election', candidates: ['Candidate A', 'Candidate B'] },
    };
    return mockData[id] || null;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search for Election</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter Election ID"
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {searchResult && (
        <div style={styles.resultContainer}>
          <h2>{searchResult.title}</h2>
          <p><strong>Candidates:</strong> {searchResult.candidates.join(', ')}</p>
        </div>
      )}
    </div>
  );
};


