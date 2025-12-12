import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ZeroWasteScience = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            <main className="pt-24 pb-16">
                {/* Article Header */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/blogs" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Insights
                    </Link>

                    <header className="mb-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-6"
                        >
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                Technology
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Nov 20, 2024</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
                        >
                            The Science Behind Zero-Waste Management
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-6 text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                                    <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=10b981&color=fff" alt="Dr. Priya Sharma" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-slate-900">Dr. Priya Sharma</p>
                                    <p className="text-xs">Chief Scientific Officer</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                        </motion.div>
                    </header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                            alt="Laboratory research on waste management"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
                                    Zero-waste management isn't just an environmental goal—it's a scientifically rigorous approach to resource conservation. At Resrishti, we employ four proprietary technologies validated by CSIR-IICT to achieve 98.5% landfill diversion, fundamentally changing how we view "waste."
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Molecular Transformation</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Traditional waste management often relies on displacement—moving trash from one place to another. Our approach is different; it relies on <strong>transformation</strong>. By understanding the molecular composition of waste streams, we can apply specific biological and chemical processes to recover value.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    For organic waste, we utilize <strong>Accelerated Anaerobic Composting (AAC)</strong>. This isn't your backyard compost pile. We use a proprietary consortium of thermophilic microbes that thrive at high temperatures (55-65°C). These microbes break down complex carbohydrates, proteins, and lipids at 3x the speed of conventional composting, resulting in a nutrient-dense soil amendment that is pathogen-free.
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Thermodynamics of Thermal Conversion</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Non-recyclable plastics pose the biggest challenge. They are energy-dense but chemically stable, making them persistent pollutants. Our solution is <strong>Advanced Thermal Conversion</strong>—thermal decomposition in the absence of oxygen.
                                </p>
                                <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-xl text-slate-700 my-8 bg-slate-50 py-4 pr-4 rounded-r-lg">
                                    "We don't burn plastic; we depolymerize it. By carefully controlling temperature and pressure, we revert the polymer chains back into their original hydrocarbon forms."
                                </blockquote>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    This process yields three valuable outputs:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                                    <li><strong>Recycled Fuel Oil:</strong> A high-calorific fuel suitable for industrial boilers and furnaces.</li>
                                    <li><strong>Carbon Black:</strong> Used as a reinforcing filler in tires and other rubber products.</li>
                                    <li><strong>Syngas:</strong> A mixture of hydrogen and carbon monoxide used to power the conversion unit itself, making the process energy-neutral.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Biological Engine: AGR</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Our <strong>Anaerobic Gas Lift Reactor (AGR)</strong> represents the pinnacle of biogas technology. Unlike standard digesters, our high-rate reactor uses a specialized granulation process where bacteria form dense aggregates. This allows for a high concentration of active biomass, enabling us to process high-COD (Chemical Oxygen Demand) wastewater and food slurry efficiently.
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    The result is a clean-burning methane gas that powers our facility's operations, closing the energy loop completely.
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Conclusion: Science as a Solution</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Zero waste is achievable, but only through the application of rigorous science. By treating waste not as garbage but as a complex mixture of chemical resources, we can design systems that recover nearly 100% of that value. This is the future of environmental engineering—where the concept of "waste" becomes obsolete.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <div className="flex flex-wrap gap-2">
                                    {['Zero Waste', 'Science', 'Technology', 'Innovation', 'Sustainability'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8">
                            {/* Share Widget */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Share2 className="w-4 h-4" /> Share this article
                                </h3>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-6">Related Articles</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Advanced Recycling: Converting Plastic to Fuel", date: "Nov 10, 2024" },
                                        { title: "The Role of AI in Modern Waste Sorting", date: "Oct 12, 2024" },
                                        { title: "Biogas Generation: Turning Organic Waste into Energy", date: "Oct 20, 2024" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group cursor-pointer">
                                            <h4 className="font-medium text-slate-800 group-hover:text-emerald-600 transition-colors mb-1 line-clamp-2">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-slate-500">{item.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-6 text-white">
                                <h3 className="font-bold text-lg mb-2">Subscribe to Insights</h3>
                                <p className="text-emerald-100 text-sm mb-4">Get the latest scientific breakthroughs in waste management delivered to your inbox.</p>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white mb-3"
                                />
                                <button className="w-full bg-white text-emerald-700 font-bold py-2 rounded-lg hover:bg-emerald-50 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </aside>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default ZeroWasteScience;
