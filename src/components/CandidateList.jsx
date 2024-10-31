import React, { useEffect, useState } from 'react';
import candidatesData from './candidates.json';
import styles from "./candidateList.module.css"

export default function CandidateList(){
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {

        setCandidates(candidatesData);
    }, []);

    const handleVote = (candidateId) => {
        alert(`You voted for candidate ID: ${candidateId}`);
    };

    return (
        <div className="candidate-list">
            <h1>Candidates for Voting</h1>
            <ul>
                {candidates.map((candidate) => (
                    <li key={candidate.id} className={styles.candidate_name}>
                        <h2>{candidate.name}</h2>
                        <p>Category: {candidate.category}</p>
                        <p>{candidate.description}</p>
                        <button onClick={() => handleVote(candidate.id)}>Vote</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}