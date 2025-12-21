import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, ArrowLeft, TrendingUp, Filter, Factory, RotateCw, Globe, ArrowRight, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const PlasticRecyclingPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const plasticsHandled = [
        { name: 'Plastic Films', desc: 'LDPE/LLDPE loose films and packaging' },
        { name: 'PET Bottles', desc: 'Beverage bottles, cosmetic containers' },
        { name: 'HDPE', desc: 'Containers, crates, caps, drums' },
        { name: 'LDPE', desc: 'Grocery bags, squeeze bottles' },
        { name: 'PP', desc: 'Automotive parts, food containers' },
        { name: 'Multilayer Plastics', desc: 'Selected recyclable laminates' }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Collection & Segregation',
            icon: Filter,
            desc: 'Post-consumer and industrial plastic waste is collected and meticulously segregated by polymer type (PET, HDPE, LDPE, PP) to ensure purity.',
            color: 'text-orange-600',
            bg: 'bg-orange-100'
        },
        {
            step: '2',
            title: 'Shredding',
            icon: RotateCw,
            desc: 'Segregated plastic items are fed into high-capacity shredders, reducing them into uniform flakes or chips for efficient processing.',
            color: 'text-amber-600',
            bg: 'bg-amber-100'
        },
        {
            step: '3',
            title: 'Washing & Drying',
            icon: Factory,
            desc: 'Flakes undergo intensive washing to remove labels, adhesives, and organic contaminants, followed by thorough drying.',
            color: 'text-orange-600',
            bg: 'bg-orange-100'
        },
        {
            step: '4',
            title: 'Granulation',
            icon: Package,
            desc: 'Clean, dry flakes are melted and extruded through fine mesh screens to form high-quality recycled granules ready for manufacturing.',
            color: 'text-amber-600',
            bg: 'bg-amber-100'
        }
    ];

    const specs = [
        { label: 'Processing Type', value: 'Mechanical Recycling' },
        { label: 'Materials', value: 'PET, HDPE, LDPE, PP' },
        { label: 'Form', value: 'Granules & Flakes' },
        { label: 'Purity', value: '>98% (Premium Grade)' },
        { label: 'Filtration', value: '100-120 Mesh' },
        { label: 'Capacity', value: 'High Volume Industrial' }
    ];

    const environmentalImpact = [
        { value: 'Circular', label: 'Economy Support', icon: RotateCw },
        { value: 'Zero', label: 'Landfill Contribution', icon: CheckCircle },
        { value: 'Lower', label: 'Carbon Footprint', icon: TrendingUp }
    ];

    const faqData = [
        {
            q: 'What is the "Make-in-India" advantage?',
            a: 'By producing high-quality recycled granules domestically, we reduce reliance on imported virgin polymers, supporting local manufacturing industries and the "Make in India" initiative.'
        },
        {
            q: 'Can these granules be used for food packaging?',
            a: 'Our granules are primarily used for non-food applications like textiles, automotive parts, construction materials, and carry bags, adhering to strict safety and quality standards.'
        },
        {
            q: 'How does this help the environment?',
            a: 'Mechanical recycling significantly reduces the energy and crude oil required to produce virgin plastic. It also prevents plastic waste from lingering in landfills or polluting oceans.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(249 115 22) 1px, transparent 1px), linear-gradient(to bottom, rgb(245 158 11) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-200 px-4 py-2 rounded-full shadow-lg">
                                <Package className="w-4 h-4 text-orange-600" />
                                <span className="text-orange-900 font-bold text-xs tracking-wide">MECHANICAL RECYCLING SYSTEM</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Plastic Recycling Unit
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mt-2">
                                    (Closing the Loop)
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                GreenEarth processes recyclable plastic waste through an advanced mechanical recycling system. We recover plastics and reintroduce them into the manufacturing cycle, preventing them from ending up in landfills or open burning.
                            </p>

                            {/* Hero Stats Boxes */}
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-orange-700">Multi</p>
                                    <p className="text-sm text-slate-600 font-semibold">Polymer</p>
                                </div>
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-orange-700">98%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Purity</p>
                                </div>
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg min-w-[120px]">
                                    <p className="text-3xl font-black text-orange-700">ISO</p>
                                    <p className="text-sm text-slate-600 font-semibold">Certified</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                        Partner With Us
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-lg text-orange-800 font-semibold border border-orange-200">
                                    <Globe className="w-4 h-4" />
                                    Supports Make-in-India
                                </div>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-orange-200 relative overflow-hidden group">
                            {/* Decorative Elements */}
                            <div className="absolute top-10 left-10 w-20 h-20 bg-white/40 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/30 rounded-full blur-3xl"></div>

                            <div className="text-center relative z-10">
                                <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-orange-100 mb-6 group-hover:scale-105 transition-transform duration-500">
                                    <RotateCw className="w-20 h-20 text-orange-500 animate-spin-slow" />
                                </div>
                                <p className="text-orange-900 font-black text-2xl mb-1">Circular Economy</p>
                                <p className="text-orange-700/80 font-medium">Waste to Value</p>
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
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Recycling Process</h2>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                                <CheckCircle className="w-4 h-4" />
                                ISO Standard Compliant
                            </div>
                        </div>

                        <div className="relative">
                            {/* Desktop Connecting Line */}
                            <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 transform -translate-y-1/2 z-0"></div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {processSteps.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="relative group">
                                            {/* Step Card */}
                                            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 text-center hover:shadow-xl hover:border-orange-300 transition-all duration-300 h-full flex flex-col items-center">
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
                                                    <div className="bg-white p-1 rounded-full border-2 border-orange-200">
                                                        <ArrowRight className="w-5 h-5 text-orange-400" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Plastics Handled */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Plastics We Handle</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plasticsHandled.map((item, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Outputs & Applications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Outputs & Applications</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <Package className="w-8 h-8 text-orange-600" />
                                    Outputs
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Recycled Granules</h4>
                                            <p className="text-sm text-slate-600">Uniform, melt-filtered pellets ready for molding.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Layers className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Washed Flakes</h4>
                                            <p className="text-sm text-slate-600">Clean, shredded plastic ready for fiber application.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <Factory className="w-8 h-8 text-amber-600" />
                                    Key Advantages
                                </h3>
                                <div className="grid gap-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Supports circular economy & Make-in-India</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Reduces virgin plastic consumption</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Prevents pollution and landfill usage</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">Conserves energy resources</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specs */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="border-l-4 border-orange-600 pl-4">
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
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-orange-900 to-amber-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-8">Environmental Impact & Sustainability</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {environmentalImpact.map((impact, idx) => {
                                const Icon = impact.icon;
                                return (
                                    <div key={idx}>
                                        <Icon className="w-12 h-12 mb-4 text-orange-400" />
                                        <p className="text-4xl font-black mb-2">{impact.value}</p>
                                        <p className="text-orange-200">{impact.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-orange-100 leading-relaxed">
                            Mechanical recycling significantly reduces the energy and crude oil required to produce virgin plastic. It also prevents plastic waste from lingering in landfills or polluting oceans, supporting a cleaner, greener future.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Partner with Us for Plastic Recycling</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Join us in closing the loop on plastic waste.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Get in Touch
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PlasticRecyclingPage;
