/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LogoCard from "./components/logoCard";
import styles from "./skillset.module.css";

const Skillset = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    const [cards, setCards] = useState<JSX.Element[]>([]);
    const [nameCard, setNameCard] = useState<[string, number]>(["x", 0]);
    const programs = [
        { name: "Tailwind", exp: 5 },
        { name: "React", exp: 4 },
        { name: "PHP", exp: 4 },
        { name: "HTML", exp: 5 },
        { name: "CSS", exp: 5 },
        { name: "Javascript", exp: 4 },
        { name: "Typescript", exp: 4 },
        { name: "Java", exp: 3 },
        { name: "MySQL", exp: 3 },
        { name: "Vue", exp: 2 },
        { name: "Python", exp: 3 },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(nameCard);
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
                <div className={styles.cardContainer} onMouseLeave={() => setNameCard(["", 0])}>
                    {cards}
                </div>
                <div className="bottom-[180px] absolute flex flex-col items-center">
                    <div className={styles.nameCard}>{nameCard[0]}</div>
                    <div className={styles.expContainer}>
                        {nameCard[1] !== 0 && (
                            <>
                                <div>EXP</div>
                                <div className="gap-1 flex flex-row">
                                    {Array.from({ length: 5 }).map((_, i) =>
                                        nameCard[1] > i ? (
                                            <div key={i} className={`${styles.blockIndicatorEmpty} ${styles.blockIndicatorFull}`}></div>
                                        ) : (
                                            <div key={i} className={styles.blockIndicatorEmpty}></div>
                                        )
                                    )}
                                </div>
                            </>
                        )}
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

export default Skillset;
