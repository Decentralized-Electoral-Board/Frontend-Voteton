import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./uniqueId.module.css";
import tokenIcon from "../assets/token Icon.svg";
import withdraw from "../assets/withdraw.svg";
import history from "../assets/history.svg";
export default function UniqueId() {
  function handleWithdraw() {}
  function handleHistory() {}
  return (
    <div className={styles.profile}>
      <div className={styles.uniqueId}>
        <h5>
          # You unique id has not been assigned yet. Complete your KYC
          verification.
        </h5>
        <p>
          <div>Reward: 0</div> <img src={tokenIcon} alt="" id={styles.tokenIcon} />
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
    </div>
  );
}
