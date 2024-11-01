"use client";

import { useState, useEffect } from "react";
import styles from "./home.module.css";
import HomeCarousel from "./carousel/home";
import SkillsetCarousel from "./carousel/skillset";
import AboutCarousel from "./carousel/about";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredElements, setHoveredElements] = useState<[boolean, string]>([false, ""]);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [backgroundPosition, setBackgroundPosition] = useState({ x: "50%", y: "50%" });
    const [profileLinkPositionX, setProfileLinkPositionX] = useState("0px");

    useEffect(() => {
        if (typeof window !== "undefined") {
            let previousMousePositionX = 0;
            let previousMousePositionY = 0;

            const handleMouseMove = (event: MouseEvent) => {
                const { clientX, clientY } = event;
                const x = (previousMousePositionX + (clientX - previousMousePositionX) / 10) | 0;
                const y = (previousMousePositionY + (clientY - previousMousePositionY) / 10) | 0;
                previousMousePositionX = x;
                previousMousePositionY = y;
                setMousePosition({ x, y });
            };

            window.addEventListener("mousemove", handleMouseMove, { passive: true });

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const originalScrollRestoration = window.history.scrollRestoration;
            window.history.scrollRestoration = "manual";

            return () => {
                window.history.scrollRestoration = originalScrollRestoration;
                window.scrollTo(0, 0);
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const parallaxIntensity = 95;
            setBackgroundPosition({
                x: `calc(50% + ${(mousePosition.x - window.innerWidth / 2) / parallaxIntensity}px)`,
                y: `calc(50% + ${(mousePosition.y - window.innerHeight / 2) / parallaxIntensity}px)`,
            });
            setProfileLinkPositionX(`calc(${(mousePosition.x - window.innerWidth / 2) / parallaxIntensity}px)`);
        }
    }, [mousePosition]);

    const carouselPages = [
        <HomeCarousel
            key="page-1"
            backgroundPositionX={backgroundPosition.x}
            backgroundPositionY={backgroundPosition.y}
            profileLinkPositionX={profileLinkPositionX}
            hoveredElements={hoveredElements}
            setHoveredElements={setHoveredElements}
        />,
        <SkillsetCarousel
            key="page-2"
            backgroundPositionX={backgroundPosition.x}
            backgroundPositionY={backgroundPosition.y}
            profileLinkPositionX={profileLinkPositionX}
            hoveredElements={hoveredElements}
            setHoveredElements={setHoveredElements}
        />,
        <AboutCarousel key="page-3" />,
    ];

    const handleNext = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselPages.length);
    };

    const handlePrevious = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselPages.length) % carouselPages.length);
    };

    return (
        <>
            <div className={`${styles.background} ${hoveredElements[0] ? styles.backgroundHover : ""}`} style={{ backgroundPosition: `${backgroundPosition.x} ${backgroundPosition.y}` }}></div>

            <div className={styles.container}>
                <div className={styles.outlineCircleSpinning}></div>

                <div
                    className={`${styles.circleBorder} ${hoveredElements[0] && hoveredElements[1] !== "" ? styles.circleBorderHover : ""}`}
                    style={{
                        backgroundColor: hoveredElements[0] && hoveredElements[1] !== "" ? hoveredElements[1] : "",
                    }}
                ></div>

                <div className={styles.circleCentered}>
                    {carouselPages.map((page, index) => (
                        <div
                            key={index}
                            className={`${styles.test} ${index === carouselIndex ? styles.activeCon : ""}`}
                            style={{
                                opacity: index === carouselIndex ? 1 : 0,
                                transition: "opacity 0.2s ease-in-out",
                            }}
                        >
                            {page}
                        </div>
                    ))}

                    <button className={styles.buttonPrevious} onClick={handlePrevious} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}>
                        <img className={styles.arrowImg} src="/arrow.svg" alt="" />
                    </button>
                    <button className={styles.buttonNext} onClick={handleNext} onMouseEnter={() => setHoveredElements([true, ""])} onMouseLeave={() => setHoveredElements([false, ""])}>
                        <img className={styles.arrowImg} src="/arrow.svg" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}
