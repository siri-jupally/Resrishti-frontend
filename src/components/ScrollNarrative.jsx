import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Recycle, Leaf, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ScrollNarrative = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const narratives = [
        {
            icon: Recycle,
            number: "01",
            title: "The Loop Starts Here",
            description: "Every year, millions of tons of waste end up in landfills. We're closing that loop with 100% zero-landfill commitment through scientifically validated processes.",
            stat: "100%",
            statLabel: "Zero Landfill",
            gradient: "from-emerald-600 to-teal-600",
            lightGradient: "from-emerald-50 to-teal-50",
            accentColor: "emerald"
        },
        {
            icon: Leaf,
            number: "02",
            title: "Science Meets Sustainability",
            description: "Four CSIR-IICT validated technologies: Accelerated Composting, Biogas Generation, and Advanced Recycling. Research-backed, efficiency-proven.",
            stat: "4",
            statLabel: "Proprietary Technologies",
            gradient: "from-teal-600 to-green-600",
            lightGradient: "from-teal-50 to-green-50",
            accentColor: "teal"
        },
        {
            icon: TrendingUp,
            number: "03",
            title: "Measurable Impact",
            description: "Real-time dashboards tracking CO₂ reduction, energy recovery, and resource conservation. Complete transparency with certified reporting and traceability.",
            stat: "Live",
            statLabel: "Impact Dashboard",
            gradient: "from-green-600 to-emerald-600",
            lightGradient: "from-green-50 to-emerald-50",
            accentColor: "green"
        },
        {
            icon: Zap,
            number: "04",
            title: "Powering the Future",
            description: "Solar-powered operations generating biogas and fuel oil from waste. Circular economy in action, transforming waste into clean energy for communities.",
            stat: "∞",
            statLabel: "Circular Economy",
            gradient: "from-cyan-600 to-blue-600",
            lightGradient: "from-cyan-50 to-blue-50",
            accentColor: "cyan"
        }
    ];

    useEffect(() => {
        if (!containerRef.current || !cardsRef.current) return;

        const cards = cardsRef.current.querySelectorAll('.journey-card');

        // Smooth horizontal scroll
        const scrollTween = gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 0.5,
                snap: {
                    snapTo: 1 / (cards.length - 1),
                    duration: 0.3,
                    ease: 'power2.inOut'
                },
                end: () => `+=${cardsRef.current.offsetWidth * 1.5}`,
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (cards.length - 1));
                    setActiveIndex(index);
                }
            }
        });

        // Subtle parallax for icons
        cards.forEach((card, index) => {
            const icon = card.querySelector('.card-icon');
            const content = card.querySelector('.card-content');

            gsap.to(icon, {
                y: -30,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });

            // Fade in content
            gsap.fromTo(content,
                { opacity: 0.3, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        end: 'center center',
                        scrub: 1
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>

            <section ref={containerRef} className="relative h-screen overflow-hidden bg-white">

                {/* Subtle Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>

                {/* Minimal Grid */}
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                {/* Organic Background Elements */}
                <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" style={{ animation: 'gentle-pulse 8s ease-in-out infinite' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl" style={{ animation: 'gentle-pulse 10s ease-in-out infinite 2s' }}></div>

                {/* Minimal Header - Responsive */}
                <div className="relative pt-26 md:pt-24 pb-4 md:pb-8 z-20 text-center px-4">
                    <div className="inline-flex items-center gap-2 border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-3 md:mb-4 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-xs md:text-sm tracking-wide">Our Journey</span>
                    </div>
                    <h2 className="text-3xl  md:text-4xl font-bold text-slate-900 mb-2">
                        Zero Waste Revolution
                    </h2>
                    <p className="text-slate-600 sm:pb-12 text-xs md:text-sm">Four steps to complete circularity</p>
                </div>

                {/* Horizontal Scrolling Cards */}
                <div ref={cardsRef} className="absolute top-[220px] md:top-[180px] left-0 flex gap-0" style={{ width: `${narratives.length * 100}vw` }}>
                    {narratives.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="journey-card relative w-screen h-[calc(100vh-180px)] md:h-[calc(100vh-200px)] flex items-start md:items-center justify-center px-4 md:px-20 pt-4 md:pt-0"
                            >
                                <div className={`glass-card relative rounded-2xl p-6 md:p-12 shadow-xl border border-slate-200/50 max-w-5xl w-full transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                                    }`}>

                                    {/* Subtle Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.lightGradient} opacity-30 rounded-2xl`}></div>

                                    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">

                                        {/* Left: Minimal Visual - Responsive Layout */}
                                        <div className="md:col-span-2 relative h-40 md:h-72 flex items-center justify-center order-1 md:order-1">

                                            {/* Subtle Ring */}
                                            <div className={`absolute w-32 h-32 md:w-56 md:h-56 border border-slate-200 rounded-full`}></div>
                                            <div className={`absolute w-40 h-40 md:w-64 md:h-64 border border-slate-100 rounded-full`}></div>

                                            {/* Icon Container */}
                                            <div className="card-icon relative" style={{ animation: 'subtle-float 6s ease-in-out infinite' }}>
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-20`}></div>
                                                <div className={`relative rounded-full w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                    <Icon className="w-10 h-10 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Content - Responsive Layout */}
                                        <div className="md:col-span-3 card-content space-y-4 md:space-y-6 order-2 md:order-2 text-center md:text-left">

                                            {/* Number Badge */}
                                            <div className="flex items-center justify-center md:justify-start gap-4">
                                                <span className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                                                    {item.number}
                                                </span>
                                                <div className={`h-px w-12 md:w-auto md:flex-1 bg-gradient-to-r ${item.gradient} opacity-20`}></div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                                {item.description}
                                            </p>

                                            {/* Stat - Minimal Design */}
                                            <div className="flex items-center md:items-end justify-center md:justify-start gap-6 pt-2 md:pt-4">
                                                <div className="border-l-2 border-slate-200 pl-4 text-left">
                                                    <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-1`}>
                                                        {item.stat}
                                                    </div>
                                                    <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">
                                                        {item.statLabel}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Minimal Progress Indicator - Responsive Position */}
                <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-2">
                        {narratives.map((item, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex
                                    ? `w-8 md:w-12 bg-gradient-to-r ${item.gradient}`
                                    : i < activeIndex
                                        ? `w-6 md:w-8 bg-slate-300`
                                        : 'w-4 md:w-6 bg-slate-200'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on Mobile */}
                <div className="hidden md:flex absolute bottom-16 right-16 z-20 items-center gap-3 text-slate-400 text-sm">
                    <span className="font-medium">Scroll</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    </div>
                </div>

                {/* Step Counter - Responsive Position */}
                <div className="absolute pt-20 top-6 right-6 md:top-12 md:right-16 z-20 text-right">
                    <div className="text-xs md:text-sm text-slate-400 font-medium mb-1">Step</div>
                    <div className="text-2xl md:text-4xl font-bold text-slate-900">
                        {String(activeIndex + 1).padStart(2, '0')}
                        <span className="text-slate-300 text-lg md:text-2xl"> / 04</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScrollNarrative;