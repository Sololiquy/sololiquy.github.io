/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LogoCard from "./components/logoCard";
import styles from "./skillset.module.css";

const Skillset = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    const [cards, setCards] = useState<JSX.Element[]>([]);
    const [nameCard, setNameCard] = useState("");
    const images = ["/Tailwind.png", "/React.png", "/PHP.png", "/HTML.png", "/CSS.png", "/Javascript.png", "/Typescript.png", "/Java.png", "/MySQL.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prevCards) => {
                const newCards = [...prevCards, <LogoCard key={Date.now()} imgSource={images[currentImageIndex]} nameCard={nameCard} setNameCard={setNameCard} />];
                return newCards;
            });

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

            setTimeout(() => {
                setCards((prevCards) => prevCards.slice(1));
            }, 12000);
        }, 1200);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <>
            <div className={styles.backgroundCircle}></div>
            <div className={styles.container}>
                <div className={styles.cardContainer}>{cards}</div>
                {/* <LogoCard imgSource={images[1]} nameCard={nameCard} setNameCard={setNameCard} /> */}
            </div>
            <div className={styles.nameCard}>{nameCard}</div>
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
