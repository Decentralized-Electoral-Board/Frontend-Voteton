import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./homepage.module.css";
import Footer from "../components/Footer";
import UniqueId from "../components/UniqueID";
import arrow from "../assets/arrow.svg";

export default function Homepage() {
  const navigate = useNavigate();
  function handleClick() {}
  function handleKYC() {
    navigate("./KYC");
  }
  return (
    <div>
      <div className={styles.homepage}>
        <nav>
          <h1>Homepage</h1>
          <button onClick={handleClick}>+</button>
        </nav>
        <UniqueId />
        <div onClick={handleKYC} className={styles.kyc}>
          <div>KYC Verification</div> <div><img src={arrow} alt="" id={styles.img}/></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
