import React, { useState } from 'react';
import styles from './success.module.css'; // Import the CSS module

export default function Success({ electionID }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(electionID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🎉 Election Created Successfully! 🎉</h1>
      <p className={styles.message}>Here is your Election ID:</p>
      <div className={styles.idContainer}>
        <span className={styles.electionID}>{electionID}</span>
        <button onClick={copyToClipboard} className={styles.copyButton}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
