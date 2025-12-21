import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Recycle, Droplets, Zap, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurProcess = () => {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: 'Collection & Segregation',
            description: 'Waste is collected from source and segregated into organic, recyclable, and non-recyclable streams using automated systems.',
            icon: Recycle,
            color: 'from-emerald-500 to-teal-500',
            position: 0 // Start of infinity
        },
        {
            id: 2,
            title: 'Processing & Treatment',
            description: 'Each waste stream is processed through specialized technologies: composting, biogas generation, thermal conversion, and recycling.',
            icon: Zap,
            color: 'from-blue-500 to-cyan-500',
            position: 0.25 // First curve
        },
        {
            id: 3,
            title: 'Resource Recovery',
            description: 'Valuable resources are extracted: compost, biogas, fuel oil, carbon black, and recycled materials.',
            icon: Droplets,
            color: 'from-orange-500 to-red-500',
            position: 0.5 // Center crossing
        },
        {
            id: 4,
            title: 'Quality Control',
            description: 'All outputs undergo rigorous testing to ensure they meet industry standards and regulatory compliance.',
            icon: CheckCircle,
            color: 'from-purple-500 to-pink-500',
            position: 0.75 // Second curve
        },
        {
            id: 5,
            title: 'Distribution & Impact',
            description: 'Products are distributed to end users, completing the circular economy loop with zero landfill waste.',
            icon: Leaf,
            color: 'from-teal-500 to-emerald-500',
            position: 1 // End of infinity
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!containerRef.current || !pathRef.current) return;

        const ctx = gsap.context(() => {
            // Create main scroll timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=400%',
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const stepIndex = Math.floor(progress * processSteps.length);
                        setActiveStep(Math.min(stepIndex, processSteps.length - 1));
                    }
                }
            });

            // Animate the glowing path
            tl.fromTo(
                '.infinity-glow',
                { strokeDashoffset: 2000 },
                { strokeDashoffset: 0, duration: 1, ease: 'none' },
                0
            );

            // Animate each step marker and card
            processSteps.forEach((step, index) => {
                const markerEl = `.step-${step.id}-marker`;
                const cardEl = `.step-${step.id}`;
                const startProgress = index / processSteps.length;
                const endProgress = (index + 1) / processSteps.length;

                // Marker appears and scales
                tl.fromTo(
                    markerEl,
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1, duration: 0.1, ease: 'back.out(2)' },
                    startProgress
                );

                // Card appears ONLY when step is active
                tl.fromTo(
                    cardEl,
                    { opacity: 0, scale: 0.5, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.15, ease: 'back.out(1.5)' },
                    startProgress + 0.05
                );

                // Card fades out when moving to next step
                if (index < processSteps.length - 1) {
                    tl.to(
                        cardEl,
                        { opacity: 0, scale: 0.8, duration: 0.1 },
                        endProgress - 0.05
                    );
                }
            });

            // Floating particles animation
            gsap.to('.particle', {
                y: 'random(-100, 100)',
                x: 'random(-100, 100)',
                duration: 'random(3, 6)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 0.2,
                    from: 'random'
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Our Process
                    </h1>
                    <p className="text-xl text-emerald-400 mb-2">
                        The Circular Journey
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Follow the infinity loop to discover how we transform waste into valuable resources through our integrated process
                    </p>
                </div>
            </section>

            {/* Infinity Loop Animation Section */}
            <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center pb-32 md:pb-0">

                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Light Beams */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>

                {/* Content Container - Maintains Aspect Ratio */}
                <div className="relative w-full max-w-7xl aspect-[10/7] mx-auto flex items-center justify-center">

                    {/* SVG Infinity Path */}
                    <svg
                        ref={pathRef}
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 1000 700"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            {/* Glow Filter */}
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            {/* Gradient for path */}
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="25%" stopColor="#06b6d4" />
                                <stop offset="50%" stopColor="#f97316" />
                                <stop offset="75%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>

                        {/* Base Infinity Path (dim) */}
                        <path
                            d="M 250,380 C 250,230 350,230 500,380 C 650,530 750,530 750,380 C 750,230 650,230 500,380 C 350,530 250,530 250,380 Z"
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="3"
                            opacity="0.3"
                        />

                        {/* Animated Glowing Path */}
                        <path
                            className="infinity-glow"
                            d="M 250,380 C 250,230 350,230 500,380 C 650,530 750,530 750,380 C 750,230 650,230 500,380 C 350,530 250,530 250,380 Z"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="4"
                            strokeDasharray="2000"
                            strokeDashoffset="2000"
                            filter="url(#glow)"
                            opacity="0.8"
                        />
                    </svg>

                    {/* Process Steps */}
                    <div className="absolute inset-0 pointer-events-none">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            // Position step markers ON the infinity path
                            const markerPositions = [
                                { left: '25%', top: '50%' },   // Step 1: Left start
                                { left: '37.5%', top: '40%' }, // Step 2: Left top curve
                                { left: '50%', top: '53%' },   // Step 3: Center crossing
                                { left: '64.5%', top: '68%' }, // Step 4: Right bottom curve
                                { left: '75%', top: '50%' }    // Step 5: Right end
                            ];

                            // Offset cards OUTSIDE the path - Desktop
                            const desktopCardOffsets = [
                                { offsetX: '-200px', offsetY: '0px' },      // Step 1: Left
                                { offsetX: '180px', offsetY: '-80px' },      // Step 2: Top
                                { offsetX: '0px', offsetY: '180px' },       // Step 3: Bottom
                                { offsetX: '180px', offsetY: '130px' },       // Step 4: Bottom
                                { offsetX: '200px', offsetY: '0px' }        // Step 5: Right
                            ];

                            // Offset cards for Mobile - Positioned closer and generally below/center
                            const mobileCardOffsets = [
                                { offsetX: '0px', offsetY: '0px' },
                                { offsetX: '0px', offsetY: '0px' },
                                { offsetX: '0px', offsetY: '0px' },
                                { offsetX: '0px', offsetY: '0px' },
                                { offsetX: '0px', offsetY: '0px' }
                            ];

                            const markerPos = markerPositions[index];
                            const cardOffset = isMobile ? mobileCardOffsets[index] : desktopCardOffsets[index];
                            const isActive = activeStep === index;

                            return (
                                <div key={step.id}>
                                    {/* Step Marker ON the path */}
                                    <div
                                        className={`step-${step.id}-marker absolute transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto`}
                                        style={{ left: markerPos.left, top: markerPos.top }}
                                    >
                                        {/* Glow Effect */}
                                        {isActive && (
                                            <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 blur-2xl rounded-full scale-[3] animate-pulse`}></div>
                                        )}

                                        {/* Icon Circle on Path */}
                                        <div className={`relative w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 ${isActive ? 'border-white scale-125' : 'border-slate-800'} transition-all duration-500`}>
                                            <Icon className="w-8 h-8 text-white" />

                                            {/* Step Number Badge */}
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-slate-900 font-black text-xs shadow-lg">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Line (Dashed) - Desktop Only */}
                                    {!isMobile && (
                                        <div
                                            className={`step-${step.id} absolute z-10 pointer-events-none transition-opacity duration-300`}
                                            style={{
                                                left: markerPos.left,
                                                top: markerPos.top,
                                                opacity: isActive ? 1 : 0
                                            }}
                                        >
                                            <svg width="400" height="400" className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 overflow-visible">
                                                <line
                                                    x1="50%"
                                                    y1="50%"
                                                    x2={`calc(50% + ${cardOffset.offsetX})`}
                                                    y2={`calc(50% + ${cardOffset.offsetY})`}
                                                    stroke={isActive ? "#34d399" : "#475569"}
                                                    strokeWidth="2"
                                                    strokeDasharray="4 4"
                                                />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Step Card - Positioned Offset - Desktop Only */}
                                    {!isMobile && (
                                        <div
                                            className={`step-${step.id} absolute transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto`}
                                            style={{
                                                left: `calc(${markerPos.left} + ${cardOffset.offsetX})`,
                                                top: `calc(${markerPos.top} + ${cardOffset.offsetY})`
                                            }}
                                        >
                                            {/* Step Card */}
                                            <div className={`relative bg-slate-900/95 backdrop-blur-md border-2 ${isActive ? 'border-emerald-400 shadow-2xl shadow-emerald-500/50' : 'border-slate-700'} rounded-xl p-3 md:p-4 w-48 md:w-56 transition-all duration-500 ${isActive ? 'scale-105' : 'scale-95 opacity-70'}`}>

                                                {/* Content */}
                                                <h3 className={`text-sm md:text-base font-bold mb-1 md:mb-2 ${isActive ? 'text-emerald-400' : 'text-white'} transition-colors`}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Active Step Card - Fixed at Bottom */}
                {isMobile && (
                    <div className="absolute bottom-36 left-0 w-full px-4 z-40">
                        <div className="bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl shadow-emerald-900/20 transform transition-all duration-500">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-emerald-500/50 shrink-0">
                                    {React.createElement(processSteps[activeStep].icon, {
                                        className: "w-6 h-6 text-emerald-400"
                                    })}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                                            Step {processSteps[activeStep].id}
                                        </span>
                                        <div className="h-px flex-1 bg-emerald-500/20"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {processSteps[activeStep].title}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {processSteps[activeStep].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-emerald-400 text-sm font-semibold mb-2">Scroll to explore</p>
                    <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2 animate-bounce mx-auto">
                        <div className="w-1 h-2 bg-emerald-400 rounded-full mb-1"></div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                        style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Summary Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Complete Circular Economy
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            Our integrated process ensures that every kilogram of waste is transformed into valuable resources, achieving 100% landfill diversion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">100%</div>
                            <p className="text-white font-semibold mb-1">Zero Landfill</p>
                            <p className="text-slate-400 text-sm">Complete waste diversion through integrated technologies</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">5</div>
                            <p className="text-white font-semibold mb-1">Core Technologies</p>
                            <p className="text-slate-400 text-sm">Complementary systems working in harmony</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">24/7</div>
                            <p className="text-white font-semibold mb-1">Continuous Operations</p>
                            <p className="text-slate-400 text-sm">Round-the-clock processing and monitoring</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurProcess;
