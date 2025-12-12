import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Leaf, Wind } from 'lucide-react';

const ImpactDashboard = () => {
  const [counts, setCounts] = useState({
    wasteDiverted: 0,
    emissions: 0,
    energy: 0,
    clients: 0
  });

  const targets = {
    wasteDiverted: 45000,
    emissions: 12500,
    energy: 8500,
    clients: 150
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        wasteDiverted: Math.floor(targets.wasteDiverted * progress),
        emissions: Math.floor(targets.emissions * progress),
        energy: Math.floor(targets.energy * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impacts = [
    {
      icon: TrendingUp,
      value: '12,000+',
      label: 'Tons of Plastic Recycled',
      sublabel: 'processed & recovered',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Leaf,
      value: '45,000+',
      label: 'Total Waste Diverted',
      sublabel: 'from landfills annually',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Zap,
      value: '12 GWh',
      label: 'Clean Energy Generated',
      sublabel: 'powering local communities',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Wind,
      value: '15,000+',
      label: 'CO₂ Emissions Saved',
      sublabel: 'tons of carbon offset',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real numbers, real impact. See how we're creating a sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className={`w-14 h-14 rounded-xl ${impact.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {impact.value}
                  </div>
                  <div className="text-lg font-semibold text-slate-200 mb-1">
                    {impact.label}
                  </div>
                  <div className="text-sm text-slate-400">
                    {impact.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <p className="text-slate-300 mb-2">Validated by</p>
            <div className="flex items-center gap-4 text-white font-semibold text-lg">
              <span>CSIR-IICT</span>
              <span className="text-slate-500">|</span>
              <span>TGPCB Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;