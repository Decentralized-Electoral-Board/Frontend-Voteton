import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./createElection.module.css"

export default function CreateElection() {
    const [electionName, setElectionName] = useState('');
    const [category, setCategory] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [candidateName, setCandidateName] = useState('');
    const [candidatePhoto, setCandidatePhoto] = useState(null);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddCandidate = () => {
        if (!candidateName || !candidatePhoto) {
            setError('Candidate name and photo cannot be empty');
            return;
        }
        const candidateData = { name: candidateName, photo: candidatePhoto };
        setCandidates([...candidates, candidateData]);
        setCandidateName('');
        setCandidatePhoto(null);
        setError('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        const formData = new FormData();
        formData.append('name', electionName);
        formData.append('category', category);
        formData.append('candidates', JSON.stringify(candidates));

        try {
            // Make a POST request to create the election
            const response = await axios.post('/api/elections/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                setSuccessMessage('Election created successfully!');
                // Optionally reset the form
                setElectionName('');
                setCategory('');
                setCandidates([]);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('An error occurred while creating the election.');
            console.error(err);
        }
    };




  return (
    <div className={styles.createElection}>
            <h2>Create Election</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.electionName}>
                    <label>Election Name:</label>
                    <input
                        type="text"
                        value={electionName}
                        onChange={(e) => setElectionName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.category}>

                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.candidates}>

                    <label>Candidate Name:</label>
                    <input
                        type="text"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Candidate Photo:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCandidatePhoto(e.target.files[0])}
                    />
                </div>
                <button type="button" onClick={handleAddCandidate}>
                    Add Candidate
                </button>
                <ul>
                    {candidates.map((candidate, index) => (
                        <li key={index}>
                            {candidate.name} - {candidate.photo ? candidate.photo.name : 'No photo uploaded'}
                        </li>
                    ))}
                </ul>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit">Create Election</button>
            </form>
        </div>
  );
}
