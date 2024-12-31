import React, { Dispatch, SetStateAction } from "react";
import styles from "./logoCard.module.css";

export default function LogoCard({ programs, nameCard, setNameCard }: PropType) {
    return (
        <>
            <div className={`${styles.container} ${nameCard === programs ? styles.containerHover : ""}`} onMouseEnter={() => setNameCard(programs)} onMouseLeave={() => setNameCard("")}>
                <img className={styles.imgContainer} src={`/${programs}.png`} alt="" />
            </div>
        </>
    );
}

interface PropType {
    programs: string;
    nameCard: string;
    setNameCard: Dispatch<SetStateAction<string>>;
}
