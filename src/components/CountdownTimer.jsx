import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function CountdownTimer(){
    const initialSeconds = 24 * 60 * 60; // 24 hours in seconds
    const [timeRemaining, setTimeRemaining] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timerId;
        if (isActive && timeRemaining > 0) {
            timerId = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            setIsActive(false); // Stop the timer when it reaches zero
        }
        return () => clearInterval(timerId); // Cleanup interval on unmount
    }, [isActive, timeRemaining]);

    // const startTimer = () => setIsActive(true);
    // const pauseTimer = () => setIsActive(false);
    // const resetTimer = () => {
    //     setIsActive(false);
    //     setTimeRemaining(initialSeconds);
    // };

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (3600 * 24));
    const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div style={{justifyContent:"center",display:"flex",marginLeft:"6rem", alignItems:"center"}}>
            <h2>
                {days}d {hours}h {minutes}m {seconds}s
            </h2>
        </div>
    );
};

