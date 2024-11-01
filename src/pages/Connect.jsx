import React, { useState } from "react";
import styles from "./connect.module.css";
import { useNavigate } from "react-router-dom";

export default function Connect() {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const [account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(account);
        console.log("Wallet connected:", account);
        
        // Show the "Connected" message
        setIsConnected(true);

        // Delay navigation to allow the message to display
        setTimeout(() => {
          navigate("/homepage");
        }, 2000); // 2-second delay
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className={styles.connect}>
      <h2>Get Started</h2>
      <button className={styles.button} onClick={connectWallet}>
        {walletAddress ? "Connected" : "Connect Wallet"}
      </button>
      {isConnected && <p className={styles.connected}>Wallet Connected</p>}
      {walletAddress && <p className={styles.connected}>Connected Wallet Address: {walletAddress}</p>}
    </div>
  );
};
