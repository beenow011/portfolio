import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function mousePointer() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updateMousePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY > 7 ? 7 : e.clientY });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (e.clientY < 80) updateMousePosition(e);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    //   console.log(position);
    return position;
}


