import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Award, Users, Zap, Building2, Recycle, Globe, TreeDeciduous } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import AnimatedCounter from './AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const statsRef = useRef(null);
  const sdgRef = useRef(null);

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

      // Mission card - slide from left with rotation
      gsap.fromTo(
        missionRef.current,
        { opacity: 0, x: -100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Vision card - slide from right with rotation
      gsap.fromTo(
        visionRef.current,
        { opacity: 0, x: 100, rotateY: 15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats cards - stagger animation
      const statCards = statsRef.current.querySelectorAll('.stat-card');
      gsap.fromTo(
        statCards,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // SDG section - fade in with scale
      gsap.fromTo(
        sdgRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sdgRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // SDG badges - stagger
      const sdgBadges = sdgRef.current.querySelectorAll('.sdg-badge');
      gsap.fromTo(
        sdgBadges,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sdgRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax background orbs
      gsap.to('.bg-orb-1', {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('.bg-orb-2', {
        y: 80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Award, value: 15, suffix: '+', label: 'Years of Experience', color: 'emerald' },
    { icon: Users, value: 150, suffix: '+', label: 'Corporate Partners', color: 'emerald' },
    { icon: Target, value: 100, suffix: '%', label: 'Waste Diversion', color: 'emerald' },
    { icon: Eye, value: 4, suffix: '', label: 'Technologies', color: 'emerald' }
  ];

  const sdgs = [
    'SDG 7: Clean Energy',
    'SDG 11: Sustainable Cities',
    'SDG 12: Responsible Consumption',
    'SDG 13: Climate Action',
    'SDG 15: Life on Land'
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="bg-orb-1 absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="bg-orb-2 absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Resrishti
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Pioneering sustainable waste management solutions for a greener tomorrow
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Mission Card */}
          <div
            ref={missionRef}
            className="space-y-6 flex"          // ADD flex
            style={{ perspective: '1000px' }}
          >
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 
                    hover:bg-white/15 hover:border-white/30 transition-all duration-500 
                    hover:shadow-2xl hover:shadow-emerald-500/20 
                    h-full w-full">     {/* ADD h-full & w-full */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-emerald-100 leading-relaxed">
                    To eliminate landfill waste across India by providing scientifically validated, integrated waste management solutions that transform waste into valuable resources, contributing to a circular economy and sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className="space-y-6 flex"          // ADD flex
            style={{ perspective: '1000px' }}
          >
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 
                    hover:bg-white/15 hover:border-white/30 transition-all duration-500 
                    hover:shadow-2xl hover:shadow-teal-500/20 
                    h-full w-full">     {/* ADD h-full & w-full */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-emerald-100 leading-relaxed">
                    To be India's leading zero-waste solution provider, setting the benchmark for sustainable waste management through innovation, transparency, and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="stat-card group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <Icon className={`w-12 h-12 text-${stat.color}-400 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`} />
                  <p className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="text-emerald-100 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* SDG Section */}
        <div
          ref={sdgRef}
          className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            UN Sustainable Development Goals Alignment
          </h3>
          <p className="text-emerald-100 text-center mb-6">
            Our operations directly contribute to multiple UN SDGs, creating measurable positive impact
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { id: 7, title: 'Affordable and Clean Energy', img: '/images/sdg/7.png' },
              { id: 11, title: 'Sustainable Cities and Communities', img: '/images/sdg/11.png' },
              { id: 12, title: 'Responsible Consumption and Production', img: '/images/sdg/12.png' },
              { id: 13, title: 'Climate Action', img: '/images/sdg/13.png' },
              { id: 15, title: 'Life on Land', img: '/public/15.png' }
            ].map((sdg, index) => (
              <div
                key={index}
                className="group relative w-40 h-40 rounded-xl overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              >
                <img
                  src={sdg.img}
                  alt={sdg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;