"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

import {
    aquaImages,
    lavandaImages,
    DEFAULT_IMAGES,
} from "../apartmentDetails/apartmentsData";

type Props = {
    images?: string[];
    autoplayMs?: number;
    showControls?: boolean;
    dimmed?: boolean;
};

export default function Carousel({
    images,
    autoplayMs = 0,
    showControls = true,
    dimmed = false,
}: Props) {
    const searchParams = useSearchParams();
    const cabinId = searchParams.get("id");
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const imgs = useMemo(() => {
        if (images && images.length) return images;
        if (cabinId === "2") return lavandaImages;
        if (cabinId === "1") return aquaImages;
        return DEFAULT_IMAGES;
    }, [images, cabinId]);

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    useEffect(() => {
        setIndex(0);
    }, [imgs]);

    const next = () => {
        setDirection(1);
        setIndex((i) => (i + 1) % imgs.length);
    };
    
    const prev = () => {
        setDirection(-1);
        setIndex((i) => (i - 1 + imgs.length) % imgs.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || touchStartY.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchStartX.current - touchEndX;
        const deltaY = touchStartY.current - touchEndY;
        
        const minSwipeDistance = 50;
        const maxVerticalMovement = 100;
        
        if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < maxVerticalMovement) {
            if (deltaX > 0) {
                next();
            } else {
                prev();
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current !== null && touchStartY.current !== null) {
            const touchCurrentX = e.touches[0].clientX;
            const touchCurrentY = e.touches[0].clientY;
            
            const deltaX = Math.abs(touchCurrentX - touchStartX.current);
            const deltaY = Math.abs(touchCurrentY - touchStartY.current);
            
            if (deltaX > deltaY) {
                e.preventDefault();
            }
        }
    };

    useEffect(() => {
        if (!autoplayMs) return;
        const id = setInterval(next, autoplayMs);
        return () => clearInterval(id);
    }, [autoplayMs, imgs.length]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <>
            <div 
                className={styles.bg}
                ref={containerRef}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
            >
                <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.img
                        key={index}
                        src={imgs[index]}
                        alt=""
                        className={styles.bgImg}
                        custom={direction}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.6 },
                        }}
                    />
                </AnimatePresence>

                {/* overlay semitransparente */}
                {dimmed && <div className={styles.overlay} />}
            </div>

            {showControls && (
                <div className={styles.controls} role="group" aria-label="Controles del carrusel">
                    <button className={styles.chev} onClick={prev} aria-label="Anterior">‹</button>
                    <div className={styles.dots} role="tablist" aria-label="Paginación">
                        {imgs.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1);
                                    setIndex(i);
                                }}
                                aria-label={`Ir a la imagen ${i + 1}`}
                                aria-current={i === index ? "true" : undefined}
                            />
                        ))}
                    </div>
                    <button className={styles.chev} onClick={next} aria-label="Siguiente">›</button>
                </div>
            )}
        </>
    );
}