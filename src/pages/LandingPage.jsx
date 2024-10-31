import Voteton from "../components/Voteton";
import styles from "./landingPage.module.css";
import background from "../components/background.module.css"
import React from 'react'; 
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate()

  function handleButtonClick() {
    navigate("./welcome/successful")
  }


  return (
    <div className={styles.body}>
      <div className={styles.landing_page}>
 
        <Voteton />
          <button className={styles.button} onClick={handleButtonClick}>
            Connect To Metamask
          </button>
      </div>
    </div>
  );
}
