import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./kyc.module.css"
import image from "../assets/kyc_image.svg"

export default function KYC(){
    const navigate = useNavigate()
    function handlekyc(){
        navigate("./homepage")
    }
    return(<div>
        <div className={styles.KYC}>
            <img src={image} alt="" />
            <h2>Let's verify KYC</h2>
            <h3>For our KYC (Know Your Credentials), please sign into any of the listed social account below.</h3>
            <button id={styles.kyc_button} onClick={handlekyc}>TWITTER</button>
            <button id={styles.kyc_button} onClick={handlekyc}>LINKEDIN</button>
        </div>
    </div>)
}