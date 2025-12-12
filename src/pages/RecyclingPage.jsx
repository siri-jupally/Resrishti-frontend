import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Recycle, CheckCircle, ArrowLeft, TrendingUp, Package, FileText, Box } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const RecyclingPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const benefits = [
        'Processes all types of dry recyclable waste under one roof',
        'Automated segregation reduces manual labor and improves efficiency',
        'Converts plastic waste into high-quality reusable granules',
        'Thermocol recycling prevents EPS pollution in soil and water',
        'Paper and cardboard recycling saves trees and reduces deforestation',
        'Reduces demand for virgin plastic production by 40%',
        'Creates jobs in the circular economy sector',
        'Diverts thousands of tons of waste from landfills annually'
    ];

    const recyclingStreams = [
        {
            title: 'Plastic Recycling',
            icon: Package,
            types: ['PET Bottles', 'HDPE/LDPE Films', 'PP Containers', 'Multi-Layer Plastics'],
            process: 'Collection → Sorting → Shredding → Washing → Drying → Extrusion → Granulation',
            output: 'High-quality plastic granules for manufacturing',
            applications: ['Packaging materials', 'Plastic products', 'Construction materials', 'Textile fibers']
        },
        {
            title: 'Thermocol Recycling',
            icon: Box,
            types: ['EPS Packaging', 'Foam Containers', 'Protective Packaging', 'Insulation Materials'],
            process: 'Collection → Compaction → Melting → Extrusion → Reprocessing',
            output: 'Recycled thermocol sheets and blocks',
            applications: ['Packaging materials', 'Insulation boards', 'Construction materials', 'Protective packaging']
        },
        {
            title: 'Paper & Cardboard Collection',
            icon: FileText,
            types: ['Office Paper', 'Cardboard Boxes', 'Newspapers', 'Magazines'],
            process: 'Collection → Sorting → Pulping → Cleaning → De-inking → Drying',
            output: 'Recycled paper and cardboard products',
            applications: ['Packaging boxes', 'Paper products', 'Newsprint', 'Tissue paper']
        }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Collection & Transportation',
            desc: 'Dry waste is collected from residential, commercial, and industrial sources through our network of collection partners. Materials are transported to our facility in dedicated vehicles to prevent contamination with wet waste.'
        },
        {
            step: '2',
            title: 'Automated Segregation',
            desc: 'Advanced sorting systems separate plastics by type (PET, HDPE, LDPE, PP, PS), remove contaminants, and classify materials by color and quality. Thermocol, paper, cardboard, metal, and glass are segregated into separate streams.'
        },
        {
            step: '3',
            title: 'Cleaning & Pre-Processing',
            desc: 'Materials are cleaned to remove dirt, labels, adhesives, and residual contents. Plastics are washed with eco-friendly detergents, thermocol is compacted to reduce volume, and paper is sorted by grade and quality.'
        },
        {
            step: '4',
            title: 'Shredding & Size Reduction',
            desc: 'Sorted materials are shredded into uniform particle sizes. Plastics are cut into flakes (5-10mm), thermocol is compacted into dense blocks, and paper is pulped into fiber slurry.'
        },
        {
            step: '5',
            title: 'Reprocessing & Manufacturing',
            desc: 'Plastic flakes are melted and extruded into granules. Thermocol is melted and molded into reusable forms. Paper pulp is cleaned, de-inked, and reformed into recycled paper products.'
        },
        {
            step: '6',
            title: 'Quality Control & Packaging',
            desc: 'All recycled materials undergo rigorous quality testing to ensure they meet industry standards. Products are packaged and distributed to manufacturers for use in new products, completing the circular economy loop.'
        }
    ];

    const plasticGranules = [
        { type: 'PET Granules', color: 'Clear/Colored', use: 'Bottles, containers, textile fibers', purity: '95-98%' },
        { type: 'HDPE Granules', color: 'Natural/Colored', use: 'Pipes, containers, bags', purity: '92-95%' },
        { type: 'LDPE Granules', color: 'Natural/Colored', use: 'Films, bags, packaging', purity: '90-93%' },
        { type: 'PP Granules', color: 'Natural/Colored', use: 'Containers, automotive parts', purity: '93-96%' }
    ];

    const specs = [
        { label: 'Total Processing Capacity', value: 'Variable (scalable)' },
        { label: 'Plastic Recycling', value: '2-3 tons/day' },
        { label: 'Thermocol Recycling', value: '500-800 kg/day' },
        { label: 'Paper Recycling', value: '1-2 tons/day' },
        { label: 'Segregation Efficiency', value: '95%+ accuracy' },
        { label: 'Granule Purity', value: '90-98% (grade-dependent)' },
        { label: 'Water Recycling', value: '80% (closed-loop system)' },
        { label: 'Energy Source', value: 'Solar + Grid hybrid' }
    ];

    const environmentalImpact = [
        { value: '1,200 Tons', label: 'Recyclable waste processed annually', icon: TrendingUp },
        { value: '40%', label: 'Reduction in virgin plastic demand', icon: Package },
        { value: '15,000', label: 'Trees saved through paper recycling', icon: FileText }
    ];

    const faqData = [
        {
            q: 'What types of plastic can be recycled at your facility?',
            a: 'We recycle PET (polyethylene terephthalate), HDPE (high-density polyethylene), LDPE (low-density polyethylene), PP (polypropylene), and some types of PS (polystyrene). We do not recycle PVC, multi-layer plastics with aluminum foil, or heavily contaminated plastics. All materials must be clean and free of food residue.'
        },
        {
            q: 'How is thermocol (EPS) recycled?',
            a: 'Thermocol (expanded polystyrene) is collected, compacted to reduce volume by 95%, and then melted at controlled temperatures. The melted EPS is extruded into dense blocks or sheets that can be reused for packaging, insulation, or construction materials. This prevents non-biodegradable EPS from polluting landfills and water bodies.'
        },
        {
            q: 'What happens to recycled plastic granules?',
            a: 'Recycled plastic granules are sold to manufacturers who use them to create new plastic products, packaging materials, construction materials, and textile fibers. High-quality granules can replace virgin plastic in many applications, reducing the environmental impact of plastic production.'
        },
        {
            q: 'Is recycled paper as good as virgin paper?',
            a: 'Recycled paper quality depends on the grade and number of recycling cycles. High-quality recycled paper is suitable for printing, packaging, and office use. While fiber length decreases with each recycling cycle, recycled paper saves trees, water, and energy compared to virgin paper production.'
        },
        {
            q: 'How does dry waste recycling contribute to sustainability?',
            a: 'Dry waste recycling reduces landfill burden, conserves natural resources, saves energy, and prevents pollution. Recycling one ton of plastic saves 5,774 kWh of energy, recycling one ton of paper saves 17 trees, and recycling thermocol prevents persistent EPS pollution. It is a cornerstone of the circular economy.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
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
                                <Recycle className="w-4 h-4 text-teal-600" />
                                <span className="text-teal-900 font-bold text-xs tracking-wide">COMPREHENSIVE RECYCLING SOLUTIONS</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Dry Waste Recycling Facility
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                                    (Plastic, Thermocol & Paper Recycling)
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our integrated dry waste recycling facility processes plastic, thermocol (EPS), paper, and cardboard through advanced automated systems. We transform recyclable waste into high-quality raw materials for manufacturing, closing the loop on resource consumption and preventing landfill pollution.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-teal-700">3+ Tons</p>
                                    <p className="text-sm text-slate-600 font-semibold">Daily Capacity</p>
                                </div>
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-teal-700">95%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Segregation Accuracy</p>
                                </div>
                                <div className="bg-white border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-teal-700">100%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Circular Economy</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Image */}
                        <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-teal-200">
                            <div className="text-center">
                                <Recycle className="w-32 h-32 text-teal-600 mx-auto mb-4 opacity-50" />
                                <p className="text-teal-800 font-bold text-lg">Recycling Facility Image</p>
                                <p className="text-teal-700 text-sm">Sorting & Processing Units</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="content-container py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* Recycling Streams */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-8">Our Recycling Streams</h2>
                        <div className="space-y-8">
                            {recyclingStreams.map((stream, idx) => {
                                const Icon = stream.icon;
                                return (
                                    <div key={idx} className="bg-gradient-to-r from-teal-50 to-white border-2 border-teal-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center shrink-0">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-black text-slate-900 mb-2">{stream.title}</h3>
                                                <p className="text-sm text-teal-700 font-semibold mb-4">Process: {stream.process}</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-sm font-bold text-slate-700 mb-2">Materials Processed:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {stream.types.map((type, i) => (
                                                        <span key={i} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold">{type}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700 mb-2">Output: {stream.output}</p>
                                                <p className="text-sm font-bold text-slate-700 mb-2 mt-4">Applications:</p>
                                                <div className="space-y-1">
                                                    {stream.applications.map((app, i) => (
                                                        <div key={i} className="flex items-center gap-2">
                                                            <CheckCircle className="w-3 h-3 text-teal-600" />
                                                            <span className="text-xs text-slate-600">{app}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Process Steps */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-8">Complete Recycling Process</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((item, idx) => (
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-teal-400 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Plastic Granules */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Recycled Plastic Granules</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {plasticGranules.map((granule, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-teal-800 mb-3">{granule.type}</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-semibold text-slate-700">Color:</span> {granule.color}</p>
                                        <p><span className="font-semibold text-slate-700">Purity:</span> {granule.purity}</p>
                                        <p><span className="font-semibold text-slate-700">Use:</span> {granule.use}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Benefits */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Key Benefits of Dry Waste Recycling</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-teal-400 hover:shadow-lg transition-all">
                                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                                    <span className="text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Technical Specifications</h2>
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

                    {/* FAQ Section */}
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
                        <h2 className="text-3xl font-black mb-8">Environmental Impact & Circular Economy</h2>
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
                            Dry waste recycling is the foundation of a circular economy. By converting plastic, thermocol, and paper waste into reusable raw materials, we reduce landfill burden, conserve natural resources, save energy, and prevent pollution. Every ton of recycled material keeps our planet cleaner and healthier for future generations.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Partner with Us for Sustainable Recycling</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Join the circular economy movement. Let us help you manage your dry waste sustainably and responsibly.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Start Recycling Today
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RecyclingPage;
