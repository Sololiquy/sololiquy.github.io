import React, { Dispatch, SetStateAction } from "react";
import styles from "./logoCard.module.css";

export default function LogoCard({ programs, nameCard, setNameCard }: PropType) {
    return (
        <>
            <div className={`${styles.container} ${nameCard[0] === programs.name ? styles.containerHover : ""}`} onMouseEnter={() => setNameCard([programs.name, programs.exp])}>
                <img className={styles.imgContainer} src={`/${programs.name}.png`} alt="" />
            </div>
        </>
    );
}

interface PropType {
    programs: { name: string; exp: number };
    nameCard: [string, number];
    setNameCard: Dispatch<SetStateAction<[string, number]>>;
}
