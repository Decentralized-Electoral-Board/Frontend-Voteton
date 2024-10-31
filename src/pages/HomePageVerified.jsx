import styles from "./homePageVerified.module.css";
import tokenIcon from "../assets/token Icon.svg";
import withdraw from "../assets/withdraw.svg";
import history from "../assets/history.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import CountdownTimer from "../components/CountdownTimer";
import Votes from "../components/Votes";

export default function HomePageVerified() {
  function handleWithdraw() {}
  function handleHistory() {}

  return (
    <div className={styles.profile}>
      <div className={styles.uniqueId}>
        <h1>Voter Profile</h1>
        <h5># 43453456</h5>
        <p>
          <div>Reward: 5000 </div>
          <img src={tokenIcon} alt="" id={styles.tokenIcon} />
        </p>
        <p className={styles.withdraw_history}>
          <div className={styles.withdraw}>
            <img
              src={withdraw}
              alt=""
              id={styles.withdraw}
              onClick={handleWithdraw}
            />
            <div>Withdraw</div>
          </div>
          <div className={styles.history}>
            <img
              src={history}
              alt=""
              id={styles.history}
              onClick={handleHistory}
            />
            <div>History</div>
          </div>
        </p>
      </div>
      <hr style={{ opacity: "0.2", marginTop: "2rem" }} />
      <div className={styles.timer_container}>
        <h2>SUG Election: 28/10/2024</h2>
        <h3>Started: 10:45am GMT +1</h3>
        <h4>Ends:</h4>
        <CountdownTimer />
      </div>
      <h2>Leaderboard</h2>
      <p>329 voters</p>
      <Votes />
      <Footer />
    </div>
  );
}
