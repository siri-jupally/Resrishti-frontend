import React from 'react';
import { Settings, Users } from 'lucide-react';

const CreditsSection = () => {
    return (
        <section className="py-16 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Our Partners & Team Behind the Work
                    </h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0">
                                <Settings className="w-8 h-8 text-emerald-400" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Machinery Credits
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Advanced recycling machinery and technology infrastructure provided by <span className="text-emerald-400 font-semibold">AG ROA</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreditsSection;
