import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./footer.module.css";
import home from "../assets/Home.svg";
import icon from "../assets/Icon.svg";
import vector from "../assets/Vector.svg";


export default function Footer() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("./");
  }

  function handleIcon() {
    navigate("./");
  }

  function handleVector() {
    navigate("./profile");
  }

  return (
    <footer className={styles.footer}>
      <div><img src={home} alt="Home" onClick={handleHome} className={styles.img} /></div>
      <div><img src={icon} alt="Vote" onClick={handleIcon} className={styles.img} /></div>
      <div><img src={vector} alt="Profile" onClick={handleVector}className={styles.img} /></div>
    </footer>
  );
}
