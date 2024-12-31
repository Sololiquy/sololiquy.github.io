/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LogoCard from "./components/logoCard";
import styles from "./skillset.module.css";

const Skillset = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    const [cards, setCards] = useState<JSX.Element[]>([]);
    const [nameCard, setNameCard] = useState<string>("");
    const programs = ["Tailwind", "React", "PHP", "HTML", "CSS", "Javascript", "Typescript", "Java", "MySQL"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prevCards) => {
                return [...prevCards, <LogoCard key={Date.now()} programs={programs[currentImageIndex]} nameCard={nameCard} setNameCard={setNameCard} />];
            });

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % programs.length);

            setTimeout(() => {
                setCards((prevCards) => prevCards.slice(1));
            }, 12000);
        }, 1200);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <>
            <div className={styles.backgroundCircle} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}></div>
            <div className={styles.container} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}>
                <div className={styles.cardContainer}>{cards}</div>
                <div className="bottom-[180px] absolute flex flex-col items-center">
                    <div className={styles.nameCard}>{nameCard}</div>
                    <div>aaa</div>
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

export default Skillset;
