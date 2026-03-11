'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollExpandHeroProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    bgImageSrc: string;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const ScrollExpandHero = ({
    mediaType = 'video',
    mediaSrc,
    bgImageSrc,
    title,
    subtitle,
    children,
}: ScrollExpandHeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // We'll use a longer scroll distance to make the animation feel more deliberate and smooth
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform values based on scroll progress
    const mediaWidth = useTransform(smoothProgress, [0, 0.8], ["300px", "100%"]);
    const mediaHeight = useTransform(smoothProgress, [0, 0.8], ["450px", "100vh"]);
    const mediaRadius = useTransform(smoothProgress, [0, 0.5], ["24px", "0px"]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
    const textXLeft = useTransform(smoothProgress, [0, 0.6], ["0%", "-150%"]);
    const textXRight = useTransform(smoothProgress, [0, 0.6], ["0%", "150%"]);
    const contentOpacity = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.7, 1], [100, 0]);

    const titleWords = title?.split(' ') || [];
    const firstHalf = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
    const secondHalf = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
            {/* Sticky viewport content */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Layer */}
                <motion.div
                    style={{ opacity: bgOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={bgImageSrc}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </motion.div>

                {/* Text Layers (Split Title) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6">
                    <motion.h1
                        style={{ x: textXLeft }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mix-blend-difference tracking-tighter"
                    >
                        {firstHalf}
                    </motion.h1>
                    <motion.h1
                        style={{ x: textXRight }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mix-blend-difference tracking-tighter"
                    >
                        {secondHalf}
                    </motion.h1>
                    <motion.p
                        style={{ opacity: bgOpacity }}
                        className="mt-8 text-xl md:text-2xl text-white/70 font-medium tracking-widest uppercase"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Expanding Media Container */}
                <motion.div
                    style={{
                        width: mediaWidth,
                        height: mediaHeight,
                        borderRadius: mediaRadius,
                    }}
                    className="relative z-10 overflow-hidden shadow-2xl bg-neutral-900 ring-1 ring-white/10"
                >
                    {mediaType === 'video' ? (
                        <div className="relative w-full h-full">
                            <video
                                src={mediaSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover brightness-[1.1] contrast-[1.1] saturate-[1.1]"
                            />
                            {/* Cinematic Fine Grain Overlay to mask potential artifacts */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                        </div>
                    ) : (
                        <Image
                            src={mediaSrc}
                            alt="Hero Media"
                            fill
                            className="object-cover"
                        />
                    )}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: bgOpacity }}
                    className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Scroll to explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-green-600 to-transparent" />
                </motion.div>

                {/* Scrolled Content Overlay */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute inset-0 z-30 overflow-y-auto pt-[20vh]"
                >
                    <div className="w-full min-h-screen">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollExpandHero;
