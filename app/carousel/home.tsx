/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Dispatch, SetStateAction } from "react";
import Clock from "./components/clock";
import styles from "./home.module.css";

const Home = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    return (
        <>
            <div
                className={styles.backgroundCircle}
                style={{ backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}` }}
                onMouseEnter={() => setHoveredElements([true, ""])}
                onMouseLeave={() => setHoveredElements([false, ""])}
            ></div>

            <div className={styles.containerClock} onMouseEnter={() => setHoveredElements([true, ""])}>
                <Clock />
            </div>

            <div
                className={`${styles.containerLinkProfile} ${hoveredElements[0] && hoveredElements[1] !== "" ? styles.containerLinkProfileHoverLogo : ""}`}
                style={{ transform: `translate(${profileLinkPositionX}, calc(47vh - 30px))` }}
                onMouseEnter={() => setHoveredElements([true, ""])}
                onMouseLeave={() => setHoveredElements([false, ""])}
            >
                <a href="https://github.com/Sololiquy" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${styles.logo} ${hoveredElements[0] && hoveredElements[1] == "#ffffffb3" ? styles.logoHover : ""}`}
                        src="/github_logo.svg"
                        alt=""
                        onMouseEnter={() => setHoveredElements([true, "#ffffffb3"])}
                        onMouseLeave={() => setHoveredElements([true, ""])}
                    />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${styles.logo} ${hoveredElements[0] && hoveredElements[1] == "#ff66abb3" ? styles.logoHover : ""}`}
                        src="/osu_logo.svg"
                        alt=""
                        onMouseEnter={() => setHoveredElements([true, "#ff66abb3"])}
                        onMouseLeave={() => setHoveredElements([true, ""])}
                    />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${styles.logo} ${hoveredElements[0] && hoveredElements[1] == "#009dffb3" ? styles.logoHover : ""}`}
                        src="/pixiv_logo.svg"
                        alt=""
                        onMouseEnter={() => setHoveredElements([true, "#009dffb3"])}
                        onMouseLeave={() => setHoveredElements([true, ""])}
                    />
                </a>
            </div>
        </>
    );
};

interface propType {
    backgroundPositionX: string;
    backgroundPositionY: string;
    profileLinkPositionX: string;
    hoveredElements: [boolean, string];
    setHoveredElements: Dispatch<SetStateAction<[boolean, string]>>;
}

export default Home;
