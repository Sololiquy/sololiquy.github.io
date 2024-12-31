import React, { useEffect, useRef, useState } from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({ Direction, Name, Description, Date, Program }: propType) => {
    const container = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState<number>(0);

    useEffect(() => {
        if (container.current) {
            if (Direction === "Left") {
                setTranslateX((container.current.offsetWidth / 2 + 10) * -1);
            } else if (Direction === "Right") {
                setTranslateX(container.current.offsetWidth / 2 + 10);
            }
        }
    }, []);

    return (
        <>
            <div
                className={styles.container}
                ref={container}
                style={{
                    transform: `translateX(${translateX}px)`,
                }}
            >
                <div className={styles.name}>{Name}</div>
                <div>
                    <div className={styles.description}>{Description}</div>
                    <div className={styles.date}>{Date}</div>
                </div>
                <div className={styles.programLogo}>
                    {Program.map((index, x) => (
                        <img key={x} className={styles.imgLogo} src={`/${index}.png`} alt={index} />
                    ))}
                </div>
            </div>
        </>
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
