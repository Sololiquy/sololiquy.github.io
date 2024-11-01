/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Clock from "./components/clock";
import styles from "./home.module.css";

const Home = ({
    backgroundPositionX,
    backgroundPositionY,
    profileLinkPositionX,
    hoveredElements,
    setHoveredElements,
}: {
    backgroundPositionX: string;
    backgroundPositionY: string;
    profileLinkPositionX: string;
    hoveredElements: [boolean, string];
    setHoveredElements: React.Dispatch<React.SetStateAction<[boolean, string]>>;
}) => {
    return (
        <>
            <div
                className={styles.backgroundCircle}
                style={{ backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}` }}
                onMouseEnter={() => setHoveredElements([true, ""])}
                onMouseLeave={() => setHoveredElements([false, ""])}
            ></div>

            <div className={styles.containerClock}>
                <Clock />
            </div>

            <div
                className={`${styles.containerLinkProfile} ${hoveredElements[0] && hoveredElements[1] !== "" ? styles.containerLinkProfileHoverLogo : ""}`}
                style={{ transform: `translate(${profileLinkPositionX}, calc(47vh - 30px))` }}
                onMouseEnter={() => setHoveredElements([true, ""])}
                onMouseLeave={() => setHoveredElements([false, ""])}
            >
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${styles.logo} ${hoveredElements[0] && hoveredElements[1] == "#ffffffb3" ? styles.logoHover : ""}`}
                        src="/github_logo.svg"
                        alt=""
                        onMouseEnter={() => setHoveredElements([true, "#ffffffb3"])}
                        onMouseLeave={() => setHoveredElements([true, ""])}
                    />
                </a>
                <a href="https://osu.ppy.sh/users/4350087" target="_blank" rel="noopener noreferrer">
                    <img
                        className={`${styles.logo} ${hoveredElements[0] && hoveredElements[1] == "#ff66abb3" ? styles.logoHover : ""}`}
                        src="/osu_logo.svg"
                        alt=""
                        onMouseEnter={() => setHoveredElements([true, "#ff66abb3"])}
                        onMouseLeave={() => setHoveredElements([true, ""])}
                    />
                </a>
                <a href="https://www.pixiv.net/users/39623345" target="_blank" rel="noopener noreferrer">
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

export default Home;
