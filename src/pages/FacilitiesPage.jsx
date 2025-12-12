import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Droplets, Flame, Recycle, Sun, Shield, ArrowRight, CheckCircle, Factory, TrendingUp, Package, Layers, Cpu } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const FacilitiesPage = () => {
    const heroRef = useRef(null);
    const facilitiesRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
            gsap.fromTo('.stat-item', { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: statsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
            });
            const cards = document.querySelectorAll('.facility-card');
            gsap.fromTo(cards, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
                scrollTrigger: { trigger: facilitiesRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }
            });
        });
        return () => ctx.revert();
    }, []);

    const facilities = [
        {
            id: 'aac',
            icon: Leaf,
            title: 'Accelerated Anaerobic Composting',
            subtitle: 'Organic Waste Processing',
            capacity: '1,000 kg/day',
            output: '30-day cycle',
            description: 'Advanced composting technology converting organic waste into premium-grade compost using microbial accelerators and controlled fermentation processes.',
            highlights: ['NPK-rich compost', 'Agricultural grade', 'Odor-free process', 'Energy efficient'],
            color: 'emerald',
            gradient: 'from-emerald-600 to-teal-600',
            link: '/facilities/aac'
        },
        {
            id: 'agr',
            icon: Droplets,
            title: 'Anaerobic Gas Lift Reactor',
            subtitle: 'Biogas Generation',
            capacity: '250 kg/day',
            output: '25,000 L/month',
            description: 'State-of-the-art anaerobic digestion system producing methane-rich biogas and nutrient-dense bio-slurry from biodegradable food waste.',
            highlights: ['Clean biogas', 'Bio-slurry fertilizer', 'Energy recovery', 'Closed-loop system'],
            color: 'blue',
            gradient: 'from-blue-600 to-cyan-600',
            link: '/facilities/agr'
        },

        {
            id: 'recycling-foam-ewaste',
            icon: Layers,
            title: 'Foam & E-waste Recycling',
            subtitle: 'Specialized Material Recovery',
            capacity: 'Collection & Processing',
            output: 'Safe Disposal/Recovery',
            description: 'Integrated facility for PU foam recovery and authorized e-waste collection. We ensure eco-friendly recycling of mattresses/foam and safe transfer of electronic waste to certified recyclers.',
            highlights: ['PU Foam Recovery', 'Mattress Recycling', 'Authorized E-waste Collection', 'Data Security'],
            color: 'pink',
            gradient: 'from-pink-600 to-rose-600',
            link: '/facilities/foam-ewaste-recycling'
        },
        {
            id: 'recycling-dry-waste',
            icon: Recycle,
            title: 'Dry Waste Recycling',
            subtitle: 'Bulk Collection Service',
            capacity: 'Bulk Collection',
            output: 'Authorized Transfer',
            description: 'We are bulk waste collectors for paper and cardboard. We do not recycle paper but ensure it reaches authorized recycling mills.',
            highlights: ['Bulk Collection', 'Cardboard Recovery', 'Paper Sorting', 'Authorized Transfer'],
            color: 'teal',
            gradient: 'from-teal-600 to-emerald-600',
            link: '/facilities/recycling'
        }
    ];

    const supportingInfra = [
        {
            icon: Sun,
            title: 'Solar Power Infrastructure',
            desc: 'Grid-connected solar photovoltaic system providing renewable energy for all facility operations, reducing carbon footprint and operational costs.',
            stat: 'Carbon Neutral Operations'
        }
        // ,
        // {
        //     icon: Shield,
        //     title: 'EHS Compliance Systems',
        //     desc: 'Comprehensive Environment, Health & Safety protocols with CSIR-IICT validation, TGPCB compliance, and continuous monitoring systems.',
        //     stat: 'Full Regulatory Compliance'
        // }
    ];

    const stats = [
        { value: '100%', label: 'Zero Landfill Commitment', icon: TrendingUp },
        { value: '4', label: 'Integrated Technologies', icon: Factory },
        { value: '1,800+', label: 'Tons Processed Annually', icon: Recycle },
        { value: '150+', label: 'Corporate Partners', icon: CheckCircle }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hero-content max-w-4xl mx-auto space-y-6">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 px-5 py-2 rounded-full shadow-md">
                                <Factory className="w-4 h-4 text-emerald-600" />
                                <span className="text-emerald-900 font-bold text-xs tracking-wide uppercase">India's First Integrated Facility</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight text-center">
                            Our Facilities
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-emerald-700 text-center">
                            Where Innovation Meets Responsibility
                        </p>

                        <p className="text-base md:text-lg text-slate-600 leading-relaxed text-center">
                            At Resrishti, we operate India's first truly integrated waste management facility — a comprehensive solution for organic, plastic, thermocol, industrial, and municipal waste. Our state-of-the-art facility in Telangana is built on circular economy principles, ensuring complete waste diversion from landfills through scientifically validated processes.
                        </p>

                        {/* Stats */}
                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={idx} className="stat-item bg-white border-2 border-slate-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-lg transition-all">
                                        <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                                        <p className="text-2xl font-black text-slate-900 mb-1">{stat.value}</p>
                                        <p className="text-xs text-slate-600 font-semibold uppercase tracking-wide">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Technologies */}
            <section ref={facilitiesRef} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                            Core Technologies
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Four complementary waste processing technologies ensuring complete resource recovery and zero landfill impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {facilities.map((facility) => {
                            const Icon = facility.icon;
                            return (
                                <div
                                    key={facility.id}
                                    className="facility-card group bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${facility.gradient} rounded-lg flex items-center justify-center shrink-0 shadow-md`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">{facility.title}</h3>
                                                <p className="text-sm text-slate-600 font-semibold">{facility.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                                                <p className="text-xs text-slate-600 font-semibold mb-1 uppercase">Capacity</p>
                                                <p className="text-base font-bold text-slate-900">{facility.capacity}</p>
                                            </div>
                                            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                                                <p className="text-xs text-slate-600 font-semibold mb-1 uppercase">Output</p>
                                                <p className="text-base font-bold text-slate-900">{facility.output}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            {facility.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {facility.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                                                    <span className="text-xs text-slate-700">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link to={facility.link}>
                                            <Button className="w-full bg-slate-900 hover:bg-emerald-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all group/btn">
                                                <span>View Details</span>
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Supporting Infrastructure */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                            Supporting Infrastructure
                        </h2>
                        <p className="text-lg text-slate-600">
                            Advanced systems ensuring safe, sustainable, and compliant operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {supportingInfra.map((infra, idx) => {
                            const Icon = infra.icon;
                            return (
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{infra.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mb-3">{infra.desc}</p>
                                            <div className="inline-block bg-emerald-100 px-3 py-1 rounded-md">
                                                <span className="text-xs font-bold text-emerald-800">{infra.stat}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Partner with India's Leading Waste Management Facility
                    </h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Schedule a facility tour or request a consultation to learn how our integrated technologies can transform your waste management approach.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 text-base font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all">
                                Schedule Facility Tour
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button className="border-2 border-white bg-transparent hover:bg-white/10 text-white px-8 py-5 text-base font-bold rounded-lg transition-all">
                                Request Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FacilitiesPage;
