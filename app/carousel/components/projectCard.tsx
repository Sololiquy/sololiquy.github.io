import React, { useEffect, useRef, useState } from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({ Direction, Name, Description, Date, Program }: propType) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dateRef = useRef<HTMLDivElement>(null);
    const [translateXContainer, setTranslateXContainer] = useState<number>(0);
    const [translateXDate, setTranslateXDate] = useState<number>(0);

    useEffect(() => {
        if (containerRef.current) {
            if (Direction === "Left") {
                setTranslateXContainer((containerRef.current.offsetWidth / 2 + 10) * -1);
            } else if (Direction === "Right") {
                setTranslateXContainer(containerRef.current.offsetWidth / 2 + 10);
            }
        }
        const containerRefWidht: number = containerRef.current?.offsetWidth || 0;

        if (dateRef.current) {
            if (Direction === "Left") {
                setTranslateXDate(containerRefWidht / 2 + dateRef.current.offsetWidth / 2 + 40);
            } else if (Direction === "Right") {
                setTranslateXDate((containerRefWidht / 2 + dateRef.current.offsetWidth / 2 + 40) * -1);
            }
        }
    }, []);

    return (
        <div
            className={styles.container}
            ref={containerRef}
            style={{
                transform: `translateX(${translateXContainer}px)`,
            }}
        >
            <div
                className={styles.date}
                ref={dateRef}
                style={{
                    transform: `translateX(${translateXDate}px)`,
                }}
            >
                {Date}
            </div>
            <div>
                <div className={styles.name}>{Name}</div>
                <div className={styles.banner}></div>
                <div className={styles.description}>{Description}</div>
                <div className={styles.programLogo}>
                    {Program.map((index, x) => (
                        <img key={x} className={styles.imgLogo} src={`/${index}.png`} alt={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface propType {
    Direction: string;
    Name: string;
    Description: string;
    Date: string;
    Program: string[];
}

export default ProjectCard;
