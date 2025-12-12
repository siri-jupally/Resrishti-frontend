import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Search, Cog, Recycle, Package, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsRef = useRef(null);
  const guaranteeRef = useRef(null);

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

      // Timeline line animation
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Process steps - combined animation
      const steps = stepsRef.current.querySelectorAll('.process-step');
      steps.forEach((step, index) => {
        const isEven = index % 2 === 0;
        const content = step.querySelector('.step-content');
        const iconContainer = step.querySelector('.step-icon-container'); // Corrected selector
        const icon = step.querySelector('.step-icon-container .step-icon'); // Corrected selector

        // Content animation
        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: isEven ? -50 : 50
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Icon container bubble animation
        gsap.fromTo(
          iconContainer,
          {
            scale: 0,
            y: 30,
            opacity: 0
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.3,
            ease: 'elastic.out(1, 0.6)',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Inner icon rotation
        gsap.fromTo(
          icon,
          {
            rotation: -180,
            scale: 0.5
          },
          {
            rotation: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.4,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Guarantee box animation
      gsap.fromTo(
        guaranteeRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: guaranteeRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax background orbs
      gsap.to('.process-orb-1', {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('.process-orb-2', {
        y: 60,
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

  const processSteps = [
    {
      icon: Truck,
      step: '01',
      title: 'Waste Collection',
      description: 'Scheduled pickup from your facility with proper segregation guidance and documentation',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Search,
      step: '02',
      title: 'Waste Characterization',
      description: 'Scientific analysis and categorization to determine optimal processing method',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Cog,
      step: '03',
      title: 'Processing',
      description: 'Advanced treatment using AAC, AGR, Advanced Thermal Conversion, or AFRF based on waste type',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Recycle,
      step: '04',
      title: 'Resource Recovery',
      description: 'Extraction of valuable outputs: compost, biogas, fuel oil, or alternative fuel',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Package,
      step: '05',
      title: 'Product Distribution',
      description: 'Recovered resources supplied to industries as renewable raw materials',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: CheckCircle,
      step: '06',
      title: 'Compliance & Reporting',
      description: 'Certificate of Disposal and detailed sustainability reports for your records',
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-linear-to-b from-white via-emerald-50 to-white relative overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="process-orb-1 absolute top-20 right-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="process-orb-2 absolute bottom-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Waste-to-Resource Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A transparent, scientifically validated process from collection to certification
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-emerald-200 via-teal-200 to-emerald-200 hidden lg:block rounded-full"
          ></div>

          {/* Process Steps */}
          <div ref={stepsRef} className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`process-step flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* Content Side */}
                  <div className={`step-content flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'
                    } text-center`}>
                    <div className={`inline-block bg-linear-to-r ${step.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-3 shadow-lg`}>
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed ${isEven ? '' : 'max-w-md'}`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Icon Circle */}
                  <div className="step-icon-container relative shrink-0 group">
                    <div
                      className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center border border-gray-300 bg-emerald-50 border-opacity-50 relative z-10 group-hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <IconComponent className={`step-icon w-10 h-10 ${step.iconColor}`} />
                    </div>
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 rounded-full ${step.iconBg} opacity-0 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500`}></div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Zero Waste Guarantee */}
        <div ref={guaranteeRef} className="mt-16 text-center">
          <div className="inline-block bg-linear-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 border-2 border-emerald-300 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 cursor-pointer group">
            <p className="text-lg font-semibold text-emerald-900 mb-2 group-hover:scale-105 transition-transform">
              🌱 Zero Waste Guarantee
            </p>
            <p className="text-slate-700">
              Every kilogram of waste is tracked, processed, and transformed - nothing goes to landfills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;