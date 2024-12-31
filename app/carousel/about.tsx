/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Dispatch, SetStateAction } from "react";

import styles from "./about.module.css";

const About = ({ backgroundPositionX, backgroundPositionY, profileLinkPositionX, hoveredElements, setHoveredElements }: propType) => {
    return (
        <>
            <div className={styles.backgroundCircle} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}></div>
            <div className={styles.content} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}>
                <div className={styles.containerScroll}>
                    <div className={styles.aboutMeContainer}>
                        <div className="text-2xl px-2">about me?</div>
                        <hr className="w-[300px] ml-[50px] my-1" />
                        <div className="ml-[50px]">An Artist in draw illustration</div>
                        <div className="flex justify-center">Also</div>
                        <div className="ml-[150px]">A Frontend Engineering (mostly on web)</div>
                    </div>
                    <div className={styles.educationContainer}>
                        <div className="text-3xl px-16 flex justify-center">Education</div>
                        <hr />
                        <div className="px-4 mt-2 gap-1.5 flex flex-col">
                            <div className="gap-2 flex flex-row items-center">
                                <div>Bachellor Degree</div>
                                <div>Sriwijaya University</div>
                                <div>2024</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactContainer}>
                        <div className="text-3xl px-16 flex justify-center">Contact</div>
                        <hr />
                        <div className="px-4 mt-2 gap-1.5 flex flex-col">
                            <div className="gap-3 flex flex-row items-center">
                                <img className={styles.contactLogo} src="/contact logo/github.svg" alt="" />
                                <div>Sololiquy</div>
                            </div>
                            <div className="gap-3 flex flex-row items-center">
                                <img className={styles.contactLogo} src="/contact logo/email.svg" alt="" />
                                <div>alfathadityaputra10@gmail.com</div>
                            </div>
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

export default About;
