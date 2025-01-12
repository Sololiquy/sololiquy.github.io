/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ProjectCard from "./components/projectCard";

import styles from "./roadmap.module.css";

const Roadmap = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    const roadmapContainer = useRef<HTMLDivElement>(null);
    const data = [
        {
            Name: "osu!Beatmap tools",
            Description: "Old program for converting lazer to stable",
            Date: "17 May 2023",
            Program: ["Java"],
        },
        {
            Name: "Forecasting with Autoencoder",
            Description: "Autoencoder for forecasting population for College project ",
            Date: "13 November 2023",
            Program: ["Python"],
        },
        {
            Name: "Personal Website",
            Description: "About me, roadmap, etc.",
            Date: "30 October 2024",
            Program: ["React", "Tailwind", "Typescript", "HTML", "PHP", "CSS"],
        },
        {
            Name: "Blue Archive Wiki",
            Description: "Website show all data information from blue archive games",
            Date: "02 November 2024",
            Program: ["React", "Tailwind", "Typescript", "HTML", "PHP", "CSS"],
        },
    ];

    useEffect(() => {
        if (roadmapContainer.current) {
            roadmapContainer.current.scrollTop = roadmapContainer.current.scrollHeight;
        }
    }, []);
    return (
        <>
            <div className={styles.backgroundCircle} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}></div>
            <div className={styles.container} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}>
                <div className={styles.containerScroll} ref={roadmapContainer}>
                    <div className={styles.roadmapContainer}>
                        <div className="h-[75%] translate-y-[12vh] absolute">
                            <div className="relative flex justify-center">
                                <div className={styles.dotText}>NOW...</div>
                                <div className={styles.dotCircle}></div>
                                <div className={styles.ripple}></div>
                            </div>
                            <div className={styles.verticalLine}></div>
                            <div className="relative flex justify-center">
                                <div className={styles.horizontalLine}></div>
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            {data.map((index, x) => (
                                <ProjectCard key={x} Direction={x % 2 === 0 ? "Left" : "Right"} Name={index.Name} Description={index.Description} Date={index.Date} Program={index.Program} />
                            ))}
                        </div>
                    </div>
                </div>
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

export default Roadmap;
