import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientsIndustries = () => {
    const sectors = [
        { title: "Municipalities", description: "Partnering with local governments for efficient city-wide waste management." },
        { title: "Manufacturing", description: "Industrial waste solutions for factories and production plants." },
        { title: "Corporate Offices", description: "Zero-waste programs for office buildings and tech parks." },
        { title: "Hospitality", description: "Sustainable waste handling for hotels, resorts, and restaurants." },
        { title: "Retail", description: "Packaging recycling and waste reduction for retail chains." },
        { title: "Construction", description: "Construction and demolition waste recovery and recycling." },
        { title: "Major Clients: Airports & Railway Stations", description: "Specialized waste management solutions for high-traffic transport hubs ensuring cleanliness and sustainability." }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-20">
                <section className="py-20 bg-emerald-900 text-white text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Ecosystem
                    </motion.h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto px-4">
                        Serving a diverse range of industries with tailored sustainable solutions.
                    </p>
                </section>

                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                                <p className="text-slate-600">{sector.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-white text-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Trusted Partners</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder for logos */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="h-20 bg-slate-100 rounded-lg flex items-center justify-center">
                                    <span className="text-slate-400 font-bold">Client {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ClientsIndustries;
