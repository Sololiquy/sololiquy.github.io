/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const Skillset = ({
    backgroundPositionX,
    backgroundPositionY,
    profileLinkPositionX,
    hoveredElements,
    setHoveredElements,
}: {
    backgroundPositionX: string;
    backgroundPositionY: string;
    profileLinkPositionX: string;
    hoveredElements: [boolean, string];
    setHoveredElements: React.Dispatch<React.SetStateAction<[boolean, string]>>;
}) => {
    return <div>Coming Soon...</div>;
};

export default Skillset;
