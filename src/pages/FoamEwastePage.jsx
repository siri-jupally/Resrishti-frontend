import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Layers, Cpu, ArrowLeft, CheckCircle, Shield, Truck, Recycle, HardDrive } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const FoamEwastePage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const foamBenefits = [
        'Diverts bulky foam waste from landfills',
        'Produces high-quality rebonded foam for new products',
        'Reduces demand for virgin petrochemicals',
        'Environmentally safe processing of mattresses and cushions'
    ];

    const ewasteBenefits = [
        'Authorized collection and safe handling of electronic waste',
        'Secure data destruction and compliance with regulations',
        'Recovery of valuable metals and components',
        'Prevention of toxic heavy metal leaching into soil/water'
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-pink-200 px-4 py-2 rounded-full shadow-lg">
                                <Layers className="w-4 h-4 text-pink-600" />
                                <span className="text-pink-900 font-bold text-xs tracking-wide">SPECIALIZED RECYCLING</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Foam & E-waste
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
                                    Integrated Recovery Solutions
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                We offer specialized solutions for challenging waste streams. From recycling polyurethane (PU) foam into value-added products to the authorized collection and safe transfer of electronic waste, we ensure responsible handling of materials that require special care.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-pink-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-pink-700">100%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Foam Recovery</p>
                                </div>
                                <div className="bg-white border-2 border-purple-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-purple-700">Cert.</p>
                                    <p className="text-sm text-slate-600 font-semibold">Authorized E-waste</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Image */}
                        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-pink-200">
                            <div className="text-center space-y-4">
                                <div className="flex justify-center gap-4">
                                    <Layers className="w-20 h-20 text-pink-600 opacity-50" />
                                    <Cpu className="w-20 h-20 text-purple-600 opacity-50" />
                                </div>
                                <div>
                                    <p className="text-slate-800 font-bold text-lg">Integrated Facility Image</p>
                                    <p className="text-slate-600 text-sm">Foam Processing & E-waste Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="content-container py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                    {/* Foam Recycling Section */}
                    <section className="content-section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                                <Layers className="w-6 h-6 text-pink-600" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900">PU Foam Recycling</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Polyurethane (PU) foam, commonly found in mattresses, furniture, and automotive seating, is voluminous and difficult to manage in landfills. Our facility employs specialized shredding and bonding technologies to give this material a second life.
                                </p>
                                <div className="bg-pink-50 border border-pink-100 rounded-xl p-6">
                                    <h3 className="font-bold text-pink-900 mb-4">Our Process</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-pink-200 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                                            <span className="text-slate-700">Collection and segregation of foam waste from industrial and municipal sources.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-pink-200 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                                            <span className="text-slate-700">Sanitization and shredding into uniform granules.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-pink-200 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                                            <span className="text-slate-700">Mixing with eco-friendly binders and compression molding.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-pink-200 text-pink-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                                            <span className="text-slate-700">Production of high-density rebonded foam for carpet underlays, gym mats, and soundproofing.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {foamBenefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-pink-400 hover:shadow-md transition-all">
                                        <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="h-px bg-slate-200"></div>

                    {/* E-waste Section */}
                    <section className="content-section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900">E-waste Collection</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 grid gap-4">
                                {ewasteBenefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-purple-400 hover:shadow-md transition-all">
                                        <Shield className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Electronic waste is one of the fastest-growing waste streams. We serve as an authorized collection center, ensuring that your old electronics don't end up in informal sectors where they cause environmental harm.
                                </p>
                                <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                                    <h3 className="font-bold text-purple-900 mb-4">What We Collect</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <HardDrive className="w-4 h-4 text-purple-600" /> Computers & Laptops
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <Cpu className="w-4 h-4 text-purple-600" /> Circuit Boards
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <Truck className="w-4 h-4 text-purple-600" /> Printers & Scanners
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-700">
                                            <Recycle className="w-4 h-4 text-purple-600" /> Consumer Electronics
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-purple-200">
                                        <p className="text-sm text-purple-800 font-medium">
                                            *We ensure safe transfer to government-authorized recyclers for final processing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
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

export default FoamEwastePage;
