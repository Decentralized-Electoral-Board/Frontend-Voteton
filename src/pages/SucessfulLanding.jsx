import styles from "./successfulLanding.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function SuccessfulLanding() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("./home");
  }

  return (
    <div>
      <div className={styles.h3}>Connection Successfull</div>
      <h6>Mission Statement</h6>

      <button className={styles.button} onClick={handleButtonClick}>
        Vote Now! 
      </button>

    </div>
  );
}
