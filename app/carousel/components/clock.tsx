/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import styles from "./clock.module.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={styles.clock}>
                <div className="grid grid-cols-2 grid-rows-2 justify-end">
                    <div className={styles.clockHour}>{Math.floor(time.getHours() / 10).toString()}</div>
                    <div className={styles.clockHour}>{(time.getHours() % 10).toString()}</div>
                    <div className={styles.clockMinute}>{Math.floor(time.getMinutes() / 10).toString()}</div>
                    <div className={styles.clockMinute}>{(time.getMinutes() % 10).toString()}</div>
                </div>

                <div className={styles.clockSecond}>{time.getSeconds().toString().padStart(2, "0")}</div>
            </div>
        </>
    );
};

export default Clock;
