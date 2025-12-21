import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowLeft, TrendingUp, Archive, Truck, ArrowRight, Layers, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const BulkPaperPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const paperTypes = [
        { name: 'Office Paper', desc: 'A4 sheets, documents, envelopes' },
        { name: 'Cardboard & Cartons', desc: 'Corrugated boxes, packaging cartons' },
        { name: 'Newsprint', desc: 'Newspapers, magazines, flyers' },
        { name: 'Mixed Paper', desc: 'Brochures, receipts, packaging paper' }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Source Segregation',
            icon: Layers,
            desc: 'Initial sorting at the generator source to separate paper from wet waste and other contaminants.',
            color: 'text-teal-600',
            bg: 'bg-teal-100'
        },
        {
            step: '2',
            title: 'Bulk Collection',
            icon: Truck,
            desc: 'Dedicated logistics team collects pre-segregated paper waste in bulk from corporate and industrial clients.',
            color: 'text-emerald-600',
            bg: 'bg-emerald-100'
        },
        {
            step: '3',
            title: 'Baling & Storage',
            icon: Archive,
            desc: 'collected paper is compacted into large bales and stored efficiently to optimize transport volume.',
            color: 'text-teal-600',
            bg: 'bg-teal-100'
        },
        {
            step: '4',
            title: 'Authorized Transfer',
            icon: Shield,
            desc: 'Baled paper is supplied directly to authorized paper recycling mills for pulping and remanufacturing.',
            color: 'text-emerald-600',
            bg: 'bg-emerald-100'
        }
    ];

    const specs = [
        { label: 'Service Type', value: 'Bulk B2B Collection' },
        { label: 'Capacity', value: 'Scalable to Demand' },
        { label: 'Accepted Materials', value: 'All Paper Grades' },
        { label: 'Primary Output', value: 'Recyclable Paper Bales' },
        { label: 'Compliance', value: 'Waste Mgmt Rules 2016' },
        { label: 'Traceability', value: 'End-to-End Tracking' }
    ];

    const environmentalImpact = [
        { value: '17', label: 'Trees Saved per Ton', icon: Layers },
        { value: '26,000L', label: 'Water Conserved per Ton', icon: TrendingUp },
        { value: 'Lower', label: 'Carbon Emissions', icon: CheckCircle }
    ];

    const faqData = [
        {
            q: 'Do you recycle the paper on-site?',
            a: 'No, we act as a specialized bulk collector and aggregator. We segregate, bale, and channelize the paper to authorized paper recycling mills.',
        },
        {
            q: 'What is the minimum quantity for pickup?',
            a: 'We generally serve bulk generators like offices, institutions, and industries. Minimum pickup quantities are tailored to logistical feasibility.',
        },
        {
            q: 'Do you provide certificate of recycling?',
            a: 'Yes, we provide certification stating that your waste has been channelized to an authorized recycler in compliance with regulations.',
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(13 148 136) 1px, transparent 1px), linear-gradient(to bottom, rgb(16 185 129) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-teal-200 px-4 py-2 rounded-full shadow-lg">
                                <FileText className="w-4 h-4 text-teal-600" />
                                <span className="text-teal-900 font-bold text-xs tracking-wide">ORGANIZED COLLECTION SERVICE</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Bulk Paper Waste
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                                    Collection
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                GreenEarth manages bulk paper waste through organized collection and channelized recycling. We ensure recovered paper materials are diverted from landfills and support the recycling industry.
                            </p>

                            {/* Hero Stats Boxes - Matching AGR/Plastic/E-waste Style */}
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-teal-700">Bulk</p>
                                    <p className="text-sm text-slate-600 font-semibold">Collection</p>
                                </div>
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-teal-700">100%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Recyclable</p>
                                </div>
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-teal-700">Traceable</p>
                                    <p className="text-sm text-slate-600 font-semibold">Supply Chain</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-teal-200 relative overflow-hidden group">
                            {/* Decorative Elements */}
                            <div className="absolute top-10 right-10 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-300/30 rounded-full blur-3xl"></div>

                            <div className="text-center relative z-10">
                                <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-teal-100 mb-6 group-hover:scale-105 transition-transform duration-500">
                                    <Archive className="w-20 h-20 text-teal-600" />
                                </div>
                                <p className="text-teal-900 font-black text-2xl mb-1">Paper Recovery</p>
                                <p className="text-teal-700/80 font-medium">Sustainable Channelization</p>
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
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Collection & Channelization Process</h2>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
                                <CheckCircle className="w-4 h-4" />
                                Transparent Chain of Custody
                            </div>
                        </div>

                        <div className="relative">
                            {/* Desktop Connecting Line */}
                            <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-emerald-200 to-teal-200 transform -translate-y-1/2 z-0"></div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {processSteps.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="relative group">
                                            {/* Step Card */}
                                            <div className="bg-white border-2 border-teal-100 rounded-xl p-6 text-center hover:shadow-xl hover:border-teal-300 transition-all duration-300 h-full flex flex-col items-center">
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
                                                    <div className="bg-white p-1 rounded-full border-2 border-teal-200">
                                                        <ArrowRight className="w-5 h-5 text-teal-400" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Paper Types */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Paper Waste Handled</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {paperTypes.map((item, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Outputs & Advantage */}
                    <section className="content-section grid md:grid-cols-2 gap-8">
                        {/* Output */}
                        <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <Archive className="w-6 h-6 text-teal-600" />
                                Outputs
                            </h3>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                                We produce high-density, sorted paper bales ready for immediate use by paper mills. This ensures clean feedstock and efficient recycling.
                            </p>
                            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                                <p className="font-bold text-teal-900">Primary Output: Recyclable Paper Bales</p>
                                <p className="text-sm text-teal-700">Supplied to Paper Recycling Units</p>
                            </div>
                        </div>

                        {/* Advantage */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-2xl font-black mb-4 text-teal-400">Key Advantage</h3>
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                Reduces landfill load, saves trees and water resources, and enables compliance with legal waste management norms for bulk generators.
                            </p>
                            <div className="flex items-center gap-2 text-teal-200 font-semibold">
                                <CheckCircle className="w-5 h-5" />
                                <span>Sustainability Compliance</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specs */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Service Specifications</h2>
                        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="border-l-4 border-teal-600 pl-4">
                                        <p className="text-sm text-slate-600 font-semibold mb-1">{spec.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-teal-400 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-teal-900 to-emerald-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-8">Environmental Impact (Per Ton of Paper)</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {environmentalImpact.map((impact, idx) => {
                                const Icon = impact.icon;
                                return (
                                    <div key={idx}>
                                        <Icon className="w-12 h-12 mb-4 text-teal-400" />
                                        <p className="text-4xl font-black mb-2">{impact.value}</p>
                                        <p className="text-teal-200">{impact.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-teal-100 leading-relaxed">
                            Recycling paper significantly reduces the demand for virgin wood pulp, conserving forests and saving massive amounts of water and energy compared to producing new paper.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Start Bulk Paper Collection</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Partner with us for reliable, compliant, and eco-friendly paper waste management.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Schedule Pickup
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BulkPaperPage;
