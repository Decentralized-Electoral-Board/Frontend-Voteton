import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function Vote2(){
  const [walletAddress, setWalletAddress] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [contract, setContract] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const contractAddress = "0x6d0A9Fd66Eac67C83937e5014cb84Fa996317c63";
  const contractABI = [
    // Add your contract ABI here
    {
      "inputs": [],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "hasVoted",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
  ];

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Define Arbitrum network parameters
        const arbitrumNetwork = {
          chainId: "0xa4b1", // Arbitrum One chain ID in hexadecimal
          chainName: "Arbitrum One",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
          },
          rpcUrls: ["https://arb1.arbitrum.io/rpc"],
          blockExplorerUrls: ["https://arbiscan.io"]
        };
  
        // Check if the user is already connected to Arbitrum
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [arbitrumNetwork]
        });
  
        // Create a provider and signer with the current network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setWalletAddress(await signer.getAddress());
  
        // Initialize the contract
        const votingContract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(votingContract);
  
      } catch (error) {
        setErrorMessage("Could not connect to Arbitrum. Please check your MetaMask settings.");
      }
    } else {
      setErrorMessage("Please install MetaMask to connect your wallet.");
    }
  };
  

  const castVote = async () => {
    if (contract) {
      try {
        const tx = await contract.vote();
        await tx.wait();
        setHasVoted(true);
      } catch (error) {
        setErrorMessage("Error casting vote or already voted.");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Voting App</h1>
      {walletAddress ? (
        <>
          <p>Connected wallet: {walletAddress}</p>
          {hasVoted ? (
            <p>You have voted! Thank you for your participation.</p>
          ) : (
            <button onClick={castVote}>Cast Vote</button>
          )}
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

