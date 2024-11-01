import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styles from './vote.module.css';

export default function Vote() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidates, setCandidates] = useState([]);
  const contractAddress = '0xf6de812a075E03f13279dE493ceEc38614cA8672';
  const contractABI = [
    // Add the ABI of the contract here
  ];

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      setWalletAddress(await signer.getAddress());

      const votingContract = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(votingContract);
    } else {
      alert('Please install MetaMask!');
    }
  };

  const addCandidate = async () => {
    if (contract && candidateName) {
      await contract.addCandidate(candidateName);
      setCandidateName('');
      fetchCandidates();
    }
  };

  const fetchCandidates = async () => {
    if (contract) {
      const count = await contract.candidateCount();
      const candidatesList = [];
      for (let i = 1; i <= count; i++) {
        const candidate = await contract.getCandidate(i);
        candidatesList.push(candidate);
      }
      setCandidates(candidatesList);
    }
  };

  const vote = async (candidateId) => {
    if (contract) {
      await contract.vote(candidateId);
      fetchCandidates();
    }
  };

//   useEffect(() => {
//     if (contract) fetchCandidates();
//   }, [contract]);

  return (
    <div className={styles.voteContainer}>
      <h1 className={styles.header}>Voting App</h1>
      {walletAddress ? (
        <div>
          <p>Connected as: {walletAddress}</p>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Candidate Name"
            className={styles.inputField}
          />
          <button onClick={addCandidate} className={styles.button}>Vote Candidate</button>

          <h2>Candidates</h2>
          <div className={styles.candidateList}>
            {candidates.map((candidate) => (
              <div key={candidate[0].toString()} className={styles.candidateItem}>
                <p>{candidate[1]} - Votes: {candidate[2].toString()}</p>
                <button onClick={() => vote(candidate[0].toString())} className={styles.voteButton}>
                  Vote
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={connectWallet} className={styles.button}>Connect Wallet</button>
      )}
    </div>
  );
}
