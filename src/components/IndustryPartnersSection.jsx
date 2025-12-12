import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IndustryPartnersSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Industry cards - stagger
      const cards = gridRef.current.querySelectorAll('.industry-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // CTA box animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const industries = [
    { name: 'Airports & Railway Stations', count: '40+', icon: '✈️', icon2: '🚂' },
    { name: 'FMCG & Consumer Goods', count: '35+', icon: '🏪' },
    { name: 'Hospitality & Restaurants', count: '40+', icon: '🏨' },
    { name: 'Manufacturing', count: '28+', icon: '🏭' },
    { name: 'Municipal Bodies', count: '12+', icon: '🏛️' },
    { name: 'Textile & Apparel', count: '20+', icon: '👔' }

  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Partnering with 150+ leading organizations across South India
          </p>
        </div>

        {/* Industry Grid - Compact */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight">
                  {industry.name}
                </h3>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  {industry.count}
                </p>
                <p className="text-xs text-slate-600">Partners</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box - Compact */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-slate-900 to-emerald-900 rounded-2xl p-8 text-center group hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Join 150+ Corporate Partners
              </h3>
              <p className="text-emerald-100 text-sm">
                Leading organizations trust Resrishti for scientifically validated, transparent, and compliant waste management solutions
              </p>
            </div>
            <button className="group/btn bg-white hover:bg-emerald-50 text-emerald-900 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:scale-105 flex items-center gap-2">
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPartnersSection;