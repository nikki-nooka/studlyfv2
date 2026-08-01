import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const items = [
    {
        id: '01',
        shortTitle: 'Learning Paths',
        title: 'Company-Specific Learning Paths',
        description: 'Master placement preparation through structured learning modules tailored for top companies like Google, Amazon, and Microsoft.',
        image: '/images/company-paths.png',
        bgColor: 'bg-[#0F0A1F]',
        borderColor: 'border-purple-500/30'
    },
    {
        id: '02',
        shortTitle: 'Mock Interview',
        title: 'AI Mock Interview Simulator',
        description: 'Experience realistic mock interviews designed for top companies with adaptive questioning, behavioral scenarios, and placement-focused preparation.',
        image: '/images/neural-simulator.png',
        bgColor: 'bg-[#0F0A1F]',
        borderColor: 'border-purple-500/30'
    },
    {
        id: '03',
        shortTitle: 'Career Dreamer',
        title: 'AI Career Dreamer',
        description: 'Discover career paths based on your interests, skills, projects, and strengths with intelligent career recommendations and personalized guidance.',
        image: '/images/career-dreamer.png',
        bgColor: 'bg-[#0F0A1F]',
        borderColor: 'border-purple-500/30'
    },
    {
        id: '04',
        shortTitle: 'Placement Ecosystem',
        title: 'Complete Placement Ecosystem',
        description: 'Everything you need for placements in one platform - learning, mock interviews, career guidance, and structured preparation.',
        image: '/images/placement-ecosystem.png',
        bgColor: 'bg-[#0F0A1F]',
        borderColor: 'border-purple-500/30'
    }
];

const WhatIsStudlyf: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto advance slideshow every 2 seconds unless user is hovering
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const activeItem = items[activeIndex];

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % items.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Header Section */}
            <div className="text-center mb-10 md:mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6"
                >
                    <span className="py-2 px-6 rounded-full bg-purple-50 border border-purple-100 text-[#6C4DFF] font-['Poppins'] font-bold tracking-widest text-xs sm:text-sm uppercase shadow-sm flex items-center gap-2">
                        <Sparkles size={14} className="text-[#6C4DFF]" /> Say hello to latest learning
                    </span>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-6xl font-['Poppins'] font-extrabold text-black leading-tight tracking-tight"
                    >
                        <span>wait, what is </span>
                        <div className="bg-white p-3 sm:p-4 rounded-[1.8rem] sm:rounded-[2.5rem] inline-block shadow-xl border border-gray-100 align-middle ml-2">
                            <img 
                                src="/images-optimized/studlyf.webp" 
                                alt="STUDLYF" 
                                loading="lazy" 
                                className="h-[40px] sm:h-[60px] md:h-[80px] w-auto inline-block" 
                            />
                        </div>
                    </motion.h3>
                </div>
            </div>

            {/* Interactive Tab Pills */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
                {items.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-['Poppins'] font-semibold transition-all duration-300 ${
                                isActive 
                                    ? 'text-white shadow-lg shadow-purple-500/25 scale-105' 
                                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="absolute inset-0 bg-[#6C4DFF] rounded-full -z-0"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="opacity-60">{item.id}</span>
                                <span>{item.shortTitle}</span>
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Main Interactive Showcase Card */}
            <div 
                className="relative max-w-5xl mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className={`relative w-full bg-[#0F0A1F] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-purple-500/30 shadow-[0_0_50px_-12px_rgba(108,77,255,0.3)] min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex flex-col`}>

                    {/* Browser Window Header */}
                    <div className="h-10 bg-[#1A1A1A] border-b border-[#2A2A2A] flex items-center px-4 sm:px-6 gap-3 shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="ml-4 h-7 px-4 bg-[#0A0A0A] rounded-t-lg border-x border-t border-[#2A2A2A] flex items-center gap-2 -mb-[1px]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6C4DFF]"></div>
                            <span className="text-[10px] sm:text-xs font-['Poppins'] font-semibold text-gray-300">Studlyf Experience</span>
                        </div>
                    </div>

                    {/* Animated Card Content */}
                    <div className="flex-1 p-6 sm:p-8 md:p-12 relative overflow-hidden flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            >
                                {/* Text Content */}
                                <div className="order-2 lg:order-1 flex flex-col items-start space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl md:text-5xl font-['Poppins'] font-black text-[#6C4DFF]">
                                            {activeItem.id}
                                        </span>
                                        <div className="h-0.5 w-12 md:w-20 bg-[#6C4DFF]/40"></div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-['Poppins'] font-black text-white tracking-tight leading-tight">
                                            {activeItem.title}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-300 max-w-md font-['Poppins'] leading-relaxed">
                                            {activeItem.description}
                                        </p>
                                    </div>
                                </div>

                                {/* App Viewport / Image */}
                                <div className="order-1 lg:order-2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#121212] border border-[#2A2A2A]">
                                    <img
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all z-20"
                        aria-label="Previous Feature"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all z-20"
                        aria-label="Next Feature"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                idx === activeIndex ? 'w-8 bg-[#6C4DFF]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIsStudlyf;
