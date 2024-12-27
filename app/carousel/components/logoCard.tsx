import React, { Dispatch, SetStateAction } from "react";
import styles from "./logoCard.module.css";

export default function LogoCard({ imgSource, nameCard, setNameCard }: PropType) {
    console.log(nameCard);
    return (
        <>
            <div className={`${styles.container} ${nameCard === imgSource ? styles.containerHover : ""}`} onMouseEnter={() => setNameCard(imgSource)} onMouseLeave={() => setNameCard("")}>
                <img className={styles.imgContainer} src={imgSource} alt="" />
            </div>
        </>
    );
}

interface PropType {
    imgSource: string;
    nameCard: string;
    setNameCard: Dispatch<SetStateAction<string>>;
}
