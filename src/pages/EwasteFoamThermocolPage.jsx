import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Layers, Cpu, Zap, Box, Shrink, Factory, Shield, CheckCircle, ArrowLeft, ArrowRight, Truck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const EwasteFoamThermocolPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const sourceMaterials = [
        {
            title: 'E-Waste Foam',
            icon: Cpu,
            desc: 'Found in refrigerators, ACs, and electronic packaging.',
            characteristics: ['Lightweight & Bulky', 'Mixed Polymers', 'Requires Specialized Handling'],
            color: 'text-purple-600',
            bg: 'bg-purple-100',
            border: 'border-purple-200'
        },
        {
            title: 'Thermocol (EPS)',
            icon: Box,
            desc: 'Packaging material for appliances and consumer goods.',
            characteristics: ['Clean Polymer Structure', 'High Volume', '98% Air Content'],
            color: 'text-indigo-600',
            bg: 'bg-indigo-100',
            border: 'border-indigo-200'
        }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Collection & Segregation',
            icon: Truck,
            desc: 'Manual and mechanical segregation to remove metals, wires, tapes, and contaminants. Critical for process safety and output quality.',
            color: 'text-purple-600',
            bg: 'bg-purple-100'
        },
        {
            step: '2',
            title: 'Size Reduction',
            icon: Layers,
            desc: 'Industrial shredders reduce large foam blocks into uniform fragments, improving material handling and feeding efficiency.',
            color: 'text-indigo-600',
            bg: 'bg-indigo-100'
        },
        {
            step: '3',
            title: 'Densification',
            icon: Shrink,
            desc: 'The most critical step. Thermal or mechanical densifiers remove trapped air, reducing volume by 90-95% to create solid blocks.',
            color: 'text-purple-600',
            bg: 'bg-purple-100'
        },
        {
            step: '4',
            title: 'Reprocessing',
            icon: Factory,
            desc: 'Densified blocks are cooled, cut, and stored for supply to recyclers or use in manufacturing new polymer products.',
            color: 'text-indigo-600',
            bg: 'bg-indigo-100'
        }
    ];

    const techSpecs = [
        { label: 'Processing Capacity', value: '1–2 Tons/day (Low Density)' },
        { label: 'Volume Reduction', value: '90–95%' },
        { label: 'Output Form', value: 'Densified EPS / Foam Blocks' },
        { label: 'Contamination Handling', value: 'Manual + Mechanical Segregation' },
        { label: 'Energy Consumption', value: 'Optimized for Efficiency' },
        { label: 'Regulatory Category', value: 'E-Waste & Plastic Waste' }
    ];

    const advantages = [
        { title: 'Environmental Protection', desc: 'Prevents 500+ year landfill persistence and microplastic formation.', icon: Shield },
        { title: 'Volume Reduction', desc: 'Converts bulky waste into compact blocks, cutting transport emissions.', icon: Shrink },
        { title: 'Circular Economy', desc: 'Recovers usable polymers for industrial reuse instead of disposal.', icon: Zap },
        { title: 'Compliance & Safety', desc: 'Safely handles contaminated e-waste foam per regulations.', icon: CheckCircle }
    ];

    const impactStats = [
        { value: '300+', label: 'Tons Diverted/Year' },
        { value: '95%', label: 'Volume Reduction' },
        { value: '100%', label: 'Regulatory Compliance' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(88 28 135) 1px, transparent 1px), linear-gradient(to bottom, rgb(79 70 229) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-purple-200 px-4 py-2 rounded-full shadow-lg">
                                <Zap className="w-4 h-4 text-purple-600" />
                                <span className="text-purple-900 font-bold text-xs tracking-wide">SPECIALIZED RECOVERY UNIT</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                E-Waste Foam & Thermocol
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                                    (EPS) Recycling Unit
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                A dedicated facility designed to recover and recycle low-density, non-biodegradable foam waste generated from electronic waste and packaging materials. We transform problematic waste into valuable industrial resources.
                            </p>

                            {/* Hero Stats Boxes */}
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-purple-700">~95%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Vol Reduction</p>
                                </div>
                                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-purple-700">1-2 TPD</p>
                                    <p className="text-sm text-slate-600 font-semibold">Capacity</p>
                                </div>
                                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-purple-700">Zero</p>
                                    <p className="text-sm text-slate-600 font-semibold">Landfill</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                        Schedule Collection
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-lg text-purple-800 font-semibold border border-purple-200">
                                    <Shield className="w-4 h-4" />
                                    Authorized Recycler
                                </div>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-purple-200 relative overflow-hidden group">
                            {/* Decorative Elements */}
                            <div className="absolute top-10 right-10 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-300/30 rounded-full blur-3xl"></div>

                            <div className="text-center relative z-10">
                                <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-purple-100 mb-6 group-hover:scale-105 transition-transform duration-500">
                                    <Shrink className="w-20 h-20 text-purple-600" />
                                </div>
                                <p className="text-purple-900 font-black text-2xl mb-1">95% Volume Reduction</p>
                                <p className="text-purple-700/80 font-medium">Densification Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="content-container py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* Process Flow */}
                    <section className="content-section">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-4">How the Process Works</h2>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full border border-purple-100">
                                <CheckCircle className="w-4 h-4" />
                                95% Volume Reduction
                            </div>
                        </div>

                        <div className="relative">
                            {/* Desktop Connecting Line */}
                            <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-purple-200 transform -translate-y-1/2 z-0"></div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {processSteps.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="relative group">
                                            {/* Step Card */}
                                            <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center hover:shadow-xl hover:border-purple-300 transition-all duration-300 h-full flex flex-col items-center">
                                                <div className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:scale-110 transition-transform relative`}>
                                                    <Icon className={`w-8 h-8 ${item.color}`} />
                                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                                                        {item.step}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                            </div>

                                            {/* Arrow for Desktop */}
                                            {idx < processSteps.length - 1 && (
                                                <div className="hidden lg:block absolute top-[2.5rem] -right-5 transform -translate-y-1/2 z-20">
                                                    <div className="bg-white p-1 rounded-full border-2 border-purple-200">
                                                        <ArrowRight className="w-5 h-5 text-purple-400" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Source Materials */}
                    <section className="content-section">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Nature & Source of Materials</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                We handle contaminated and heterogeneous foam materials requiring specialized processing.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {sourceMaterials.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className={`bg-white border-2 ${item.border} rounded-2xl p-8 hover:shadow-lg transition-all`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${item.color}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                                <p className="text-sm text-slate-500 font-semibold">Regulated Waste Stream</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                                        <div className="space-y-2">
                                            {item.characteristics.map((char, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle className={`w-4 h-4 ${item.color}`} />
                                                    <span className="text-slate-700 text-sm font-medium">{char}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Applications of Recycled Output</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Industrial Plastic Recycling', 'Insulation Panels', 'Construction Boards', 'Polymer Blending'].map((app, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-6 hover:scale-105 transition-transform text-center flex items-center justify-center min-h-[120px]">
                                    <p className="text-lg font-bold text-indigo-900">{app}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Advantages */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Key Advantages of Our Unit</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {advantages.map((adv, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white border border-slate-200 rounded-lg p-5 hover:border-purple-400 hover:shadow-lg transition-all">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        {React.createElement(adv.icon, { className: "w-5 h-5 text-purple-600" })}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{adv.title}</h3>
                                        <p className="text-sm text-slate-600">{adv.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Specs */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {techSpecs.map((spec, idx) => (
                                    <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                                        <p className="text-sm text-slate-600 font-semibold mb-1">{spec.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-8">Environmental Impact & Sustainability</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {impactStats.map((stat, idx) => (
                                <div key={idx} className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                    {idx === 0 && <Layers className="w-8 h-8 mb-3 text-purple-300" />}
                                    {idx === 1 && <Shrink className="w-8 h-8 mb-3 text-purple-300" />}
                                    {idx === 2 && <Shield className="w-8 h-8 mb-3 text-purple-300" />}
                                    <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                                    <p className="text-sm text-purple-200 uppercase tracking-wider font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-purple-100 leading-relaxed italic opacity-90 border-l-4 border-purple-500 pl-4">
                            "Transforming one of the most problematic waste streams—lightweight plastic foam—into valuable reusable material, delivering high environmental impact and regulatory compliance."
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center pt-8">
                        <div className="bg-slate-900 rounded-2xl p-12 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-slate-900"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black text-white mb-4">Responsible Disposal Starts Here</h2>
                                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                                    Whether you have bulk foam waste or obsolete electronics, we provide a compliant and eco-friendly disposal solution.
                                </p>
                                <Link to="/contact">
                                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                        Schedule Collection
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EwasteFoamThermocolPage;
