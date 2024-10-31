import React, { useEffect, useState } from "react";
import votesData from "./votes.json";
import styles from "./votes.module.css"
export default function Votes() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    setVotes(votesData);
  }, []);
  return (
    <div className={styles.container}>
        <h1> Results</h1>
        <ul>
          {votes.map((vote, index) => (
            <li key={index} className={styles.vote_item}>
             <span className={styles.vote_name}> {vote.name}</span> 
             <span className={styles.vote_count}>No of votes: {vote.votes} votes</span>
             <span className={styles.vote_category}>Category: ({vote.category})</span>
            </li>
          ))}
        </ul>
    </div>
  );
}
