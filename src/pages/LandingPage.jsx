import Voteton from "../components/Voteton";
import styles from "./landingPage.module.css";
import background from "../components/background.module.css"
import React from 'react'; 
import { useNavigate } from "react-router-dom";
import Options from "./Options";


export default function LandingPage() {
  const navigate = useNavigate()




  return (
    <div className={styles.body}>
      <div className={styles.landing_page}>
 
        <Voteton />
        <Options/>
      </div>
    </div>
  );
}
