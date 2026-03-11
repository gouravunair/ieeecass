'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollSequenceHeroProps {
    frameCount: number;
    imagePath: (index: number) => string;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const ScrollSequenceHero = ({
    frameCount,
    imagePath,
    title,
    subtitle,
    children,
}: ScrollSequenceHeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Expansion transforms for the content that comes in later
    const contentOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.8, 1], [100, 0]);

    // Text animation (split and fade)
    const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const textScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = imagePath(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, [frameCount, imagePath]);

    // Draw to canvas based on scroll
    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return;

        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            if (!context) return;

            // Calculate current frame
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(smoothProgress.get() * frameCount)
            );

            const img = images[frameIndex];
            if (!img) return;

            // Responsive canvas sizing
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw image centered and covering (cover object-fit equivalent)
            const canvasAspect = canvas.width / canvas.height;
            const imgAspect = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgAspect;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgAspect;
                drawHeight = canvas.height;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const unsubscribe = smoothProgress.on("change", render);

        // Initial draw
        render();
        window.addEventListener('resize', render);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', render);
        };
    }, [images, frameCount, smoothProgress]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-[#040505]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Canvas Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 w-full h-full"
                />

                {/* Initial Hero Text Overlay */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
                >
                    <motion.img 
                        src="/ieee-cass-logo.png" 
                        alt="IEEE CASS Kerala Logo" 
                        className="h-24 md:h-32 mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase mb-4">
                        <span className="text-green-600">CASS</span> <span className="text-white">KERALA</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium tracking-[0.5em] uppercase">
                        <span className="text-green-600">Innovation</span> <span className="text-white">and Reality</span>
                    </p>
                </motion.div>

                {/* Sub-content Overlay (appears as scroll reaches end) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute inset-0 z-20 overflow-y-auto pt-[20vh]"
                >
                    <div className="w-full min-h-screen">
                        {children}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30">Scroll to Deconstruct</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-green-600 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollSequenceHero;
