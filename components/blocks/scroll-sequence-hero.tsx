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
        stiffness: 200, // Faster response
        damping: 50,
        restDelta: 0.01
    });

    // Expansion transforms for the content that comes in later
    const contentOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.8, 1], [30, 0]);

    // Faster text fade so deconstruction is seen immediately
    const textOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
    const textScale = useTransform(smoothProgress, [0, 0.1], [1, 0.95]);

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

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false }); // Optimize for non-transparent
        if (!context) return;

        let rafId: number;
        let lastFrame = -1;

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            context.scale(dpr, dpr);
            render();
        };

        const render = () => {
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(smoothProgress.get() * frameCount)
            );

            if (frameIndex === lastFrame) return;
            lastFrame = frameIndex;

            const img = images[frameIndex];
            if (!img) return;

            const w = window.innerWidth;
            const h = window.innerHeight;

            const canvasAspect = w / h;
            const imgAspect = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                drawWidth = w;
                drawHeight = w / imgAspect;
                offsetX = 0;
                offsetY = (h - drawHeight) / 2;
            } else {
                drawWidth = h * imgAspect;
                drawHeight = h;
                offsetX = (w - drawWidth) / 2;
                offsetY = 0;
            }

            context.fillStyle = '#040505';
            context.fillRect(0, 0, w, h);
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const handleScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(render);
        };

        const unsubscribe = smoothProgress.on("change", handleScroll);

        // Initial setup
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            unsubscribe();
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [images, frameCount, smoothProgress]);

    return (
        <div ref={containerRef} className="relative h-[250vh] md:h-[400vh] w-full bg-[#040505]">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden will-change-transform">

                {/* Canvas Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 w-full h-full transform-gpu pointer-events-none"
                />

                {/* Initial Hero Text Overlay */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.img 
                        src="/ieee-cass-logo.png" 
                        alt="IEEE CASS Kerala Logo" 
                        className="h-14 md:h-24 lg:h-32 mb-4 md:mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <h1 className="text-3xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase mb-1 md:mb-4">
                        <span className="text-green-600">CASS</span> <span className="text-white">KERALA</span>
                    </h1>
                    <p className="text-[10px] md:text-xl lg:text-2xl font-medium tracking-[0.2em] md:tracking-[0.5em] uppercase">
                        <span className="text-green-600">Innovation</span> <span className="text-white">and Reality</span>
                    </p>
                </motion.div>

                {/* Sub-content Overlay (appears as scroll reaches end) */}
                <motion.div
                    style={{ 
                        opacity: contentOpacity, 
                        y: contentY,
                        pointerEvents: smoothProgress.get() > 0.8 ? 'auto' : 'none'
                    }}
                    className="absolute inset-0 z-20 overflow-y-auto pt-[10vh] md:pt-[20vh]"
                >
                    <div className="w-full min-h-screen">
                        {children}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] text-white/30">Scroll to Deconstruct</span>
                    <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-green-600 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollSequenceHero;
