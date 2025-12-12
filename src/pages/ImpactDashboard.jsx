import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Leaf, Zap, Droplets, Recycle, Users, Globe, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

// Animated Counter Component
const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = parseFloat(value.replace(/,/g, ''));
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                if (ref.current) {
                    ref.current.innerText = Math.floor(start).toLocaleString();
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return <span ref={ref}>0</span>;
};

const ImpactDashboard = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-6">
                            Our Environmental Footprint
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Creating a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Sustainable Future</span><br /> Through Action
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            We don't just manage waste; we transform it. Our integrated approach ensures that resources are recovered, energy is generated, and the environment is protected.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Key Impact Stats - Big Numbers */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: 'Tons Waste Processed', value: '125,000', suffix: '+', icon: Recycle, color: 'text-emerald-600' },
                            { label: 'Landfill Diversion', value: '98', suffix: '%', icon: TrendingUp, color: 'text-blue-600' },
                            { label: 'CO₂ Emissions Saved', value: '45,000', suffix: 't', icon: Leaf, color: 'text-green-600' },
                            { label: 'Clean Energy Generated', value: '12', suffix: 'GWh', icon: Zap, color: 'text-amber-500' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-slate-50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                                    <Counter value={stat.value} />{stat.suffix}
                                </div>
                                <p className="text-slate-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Visual Impact Section - Split Layout */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Real World Impact</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Numbers on a spreadsheet don't tell the whole story. Here's what our annual environmental contribution looks like in the real world.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Equivalent to planting', value: '250,000 Trees', icon: Leaf, desc: 'Carbon sequestration impact' },
                                    { title: 'Powering', value: '8,500 Homes', icon: Zap, desc: 'Annual electricity needs met' },
                                    { title: 'Removing', value: '15,000 Cars', icon: Globe, desc: 'From the road annually' },
                                    { title: 'Saving', value: '1.2M Liters', icon: Droplets, desc: 'Of fresh water resources' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-colors">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{item.value}</h3>
                                            <p className="text-slate-500 text-sm"><span className="font-medium text-slate-700">{item.title}</span> - {item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 relative shadow-2xl">
                                {/* Abstract representation of circular economy */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-800"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 border-[20px] border-white/10 rounded-full flex items-center justify-center">
                                        <div className="w-3/4 h-3/4 border-[20px] border-white/20 rounded-full flex items-center justify-center">
                                            <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white p-8 text-center">
                                                <Recycle className="w-16 h-16 mb-4 text-emerald-300" />
                                                <span className="text-3xl font-bold">100%</span>
                                                <span className="text-sm font-medium opacity-80">Circular Economy<br />Commitment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="w-6 h-6 text-amber-500" />
                                    <span className="font-bold text-slate-900">Certified Impact</span>
                                </div>
                                <p className="text-sm text-slate-500">Audited and verified by leading environmental agencies.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Operational Scale Metrics */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Operational Scale Metrics</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Real numbers demonstrating our capacity and reach.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-emerald-500/50 transition-all"
                        >
                            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-5xl font-bold mb-2">80+</h3>
                            <p className="text-xl font-semibold text-blue-300 mb-2">Corporate Clients Served</p>
                            <p className="text-slate-400">80+ corporate and industrial clients across Hyderabad</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-emerald-500/50 transition-all"
                        >
                            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-5xl font-bold mb-2">Major</h3>
                            <p className="text-xl font-semibold text-purple-300 mb-2">Institutional Partnerships</p>
                            <p className="text-slate-400">Waste management operations at major Airports & Railway Stations</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:border-emerald-500/50 transition-all"
                        >
                            <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-amber-400" />
                            </div>
                            <h3 className="text-5xl font-bold mb-2">8+</h3>
                            <p className="text-xl font-semibold text-amber-300 mb-2">Years of Experience</p>
                            <p className="text-slate-400">8+ years in the waste management and recycling sector</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to make a difference?</h2>
                    <p className="text-lg text-slate-600 mb-10">
                        Partner with us to reduce your environmental footprint and contribute to a sustainable future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full">
                            Download Sustainability Report
                        </Button>
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-full">
                            Contact Our ESG Team
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ImpactDashboard;
