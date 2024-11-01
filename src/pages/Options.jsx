import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.svg";
import styles from "./options.module.css";

export default function Options() {
  const navigate = useNavigate();
  function handleVote() {
    navigate("/homepage/vote");
  }

  function handleCreateElection() {
    navigate("/homepage/create");
  }

  function handleParticipate() {
    navigate("/homepage/join");
  }

  return (
    <div className={styles.option}>
      <div className={styles.container}>
        <button className={styles.button} onClick={handleVote}>
          Vote Now
        </button>
        <button className={styles.button} onClick={handleCreateElection}>
          Create an Election
        </button>
        <button className={styles.button} onClick={handleParticipate}>
          Enter race as a Candidate
        </button>
      </div>
    </div>
  );
}
