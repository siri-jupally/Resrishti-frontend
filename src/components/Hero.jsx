import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, Leaf, Recycle, TrendingUp, CheckCircle, Award, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import Header from './Header';

const Hero = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animate floating elements
      const floatingElements = heroRef.current.querySelectorAll('.float-element');
      floatingElements.forEach((element, i) => {
        gsap.to(element, {
          y: -15,
          duration: 3 + Math.random() * 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3
        });
      });

      // Animate stats on load
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.4,
            ease: 'power2.out'
          }
        );
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Recycle, value: '100%', label: 'Zero Landfill', color: 'emerald' },
    { icon: Award, value: '4', label: 'Technologies', color: 'teal' },
    { icon: Building2, value: '150+', label: 'Partners', color: 'cyan' },
    { icon: CheckCircle, value: '15+', label: 'Years Experience', color: 'green' }
  ];

  return (
    <>
      <Header />
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Decorative Circles */}
        <div className="float-element absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-40"></div>
        <div className="float-element absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">

            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 px-4 py-2 rounded-full shadow-lg">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-900 font-bold text-xs tracking-wide">TELANGANA'S FIRST ZERO-WASTE FACILITY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Transforming Waste
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Into Resources
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                <p className="text-lg md:text-xl text-slate-700 font-bold">
                  100% Circular Economy
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>

            {/* Professional Description */}
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              India's pioneering integrated waste management facility, leveraging
              <span className="text-emerald-700 font-bold"> four CSIR-IICT validated technologies </span>
              to achieve complete waste diversion from landfills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 flex-wrap">
              <Link to="/contact">
                <Button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300">
                  <span>Book a Pickup</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button className="group bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span>Partner with Us</span>
                  <Building2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>

              <Link to="/process">
                <Button className="group bg-slate-100 hover:bg-slate-200 text-slate-700 border-2 border-slate-200 px-8 py-4 text-lg font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <span>Know Our Recycling Process</span>
                  <Recycle className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </Button>
              </Link>
            </div>

            {/* Stats Cards - Compact
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="stat-card group bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 text-${stat.color}-600`} />
                    </div>
                    <p className="text-2xl font-black text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-slate-600 font-semibold uppercase tracking-wide">{stat.label}</p>
                  </div>
                );
              })}
            </div> */}

            {/* Trust Indicators - Compact */}
            {/* <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 font-semibold text-xs">CSIR-IICT Validated</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 font-semibold text-xs">TGPCB Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-700 font-semibold text-xs">ISO Certified</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
            <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;