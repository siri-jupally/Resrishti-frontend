import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Droplets, Flame, Fuel, ArrowRight, Package, Layers, Cpu, Recycle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation - fade in and slide up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Service cards - stagger animation with 3D effect
      const cards = cardsRef.current.querySelectorAll('.service-card');
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          rotateX: -15,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // CTA button - fade in with scale
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
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

  const services = [
    {
      icon: Leaf,
      title: 'Accelerated Anaerobic Composting (AAC)',
      description: 'Advanced composting technology that transforms organic waste into nutrient-rich compost in record time, reducing methane emissions.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverShadow: 'hover:shadow-green-500/20'
    },
    {
      icon: Droplets,
      title: 'Anaerobic Gas Lift Reactor (AGR)',
      description: 'State-of-the-art biogas generation system converting organic waste into renewable energy and bio-fertilizer.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverShadow: 'hover:shadow-blue-500/20'
    },
    {
      icon: Recycle,
      title: 'Plastic Recycling Unit',
      description: 'Mechanical recycling system recovering PET, HDPE, LDPE, and PP plastics into high-quality granules for manufacturing.',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      hoverShadow: 'hover:shadow-orange-500/20'
    },
    {
      icon: Layers,
      title: 'E-Waste Foam & Thermocol Recycling (EPS)',
      description: 'Specialized facility for reducing volume of problematic foam waste and recovering materials for reuse.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      hoverShadow: 'hover:shadow-purple-500/20'
    },
    {
      icon: Package,
      title: 'Bulk Paper Waste Collection',
      description: 'Organized bulk collection and channelization service for office paper, cardboard, and cartons to authorized recyclers.',
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      hoverShadow: 'hover:shadow-teal-500/20'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">

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
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Core Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four integrated technologies working in harmony to achieve 100% waste diversion from landfills
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`service-card group hover:shadow-2xl ${service.hoverShadow} transition-all duration-500 border border-slate-200 hover:border-emerald-300 cursor-pointer overflow-hidden hover:scale-105 hover:-translate-y-2`}
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">

                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor} group-hover:scale-125 transition-transform duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-12 text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
            <span>Learn More About Our Technologies</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;