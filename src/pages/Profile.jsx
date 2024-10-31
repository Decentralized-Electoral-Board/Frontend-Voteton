import styles from "./profile.module.css";
import tokenIcon from "../assets/token Icon.svg";
import withdraw from "../assets/withdraw.svg";
import history from "../assets/history.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
export default function Profile() {
  function handleWithdraw() {}
  function handleHistory() {}
  return (
    <div className={styles.profile}>
      <div className={styles.uniqueId}>
        <h5># 43453456</h5>
        <p>
          <div>Reward: 5000 </div><img src={tokenIcon} alt="" id={styles.tokenIcon} />
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
      <div style={{marginTop:"2rem",marginLeft:"1rem"}}>
        ACTIVITIES
      </div>
      <Footer/>
    </div>
  );
}
