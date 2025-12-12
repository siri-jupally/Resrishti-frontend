import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    industry: '',
    testimonial: '',
    rating: 5,
    image: null
  });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/testimonials`);
        setTestimonials(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
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
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate carousel container
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: carouselRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate card transitions
  useEffect(() => {
    if (!carouselRef.current) return;

    const ctx = gsap.context(() => {
      const card = carouselRef.current.querySelector('.testimonial-card');
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }, carouselRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/testimonials`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success('Testimonial submitted successfully! It will appear after approval.');
      setShowForm(false);
      setFormData({
        name: '',
        position: '',
        company: '',
        industry: '',
        testimonial: '',
        rating: 5,
        image: null
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error('Failed to submit testimonial.');
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            What Our Partners Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            Trusted by leading companies across South India
          </p>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" /> Share Your Experience
          </Button>
        </div>

        {/* Submission Form Modal (Simple inline for now) */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Submit Testimonial</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <textarea
                  name="testimonial"
                  placeholder="Your Testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600">Rating:</label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Stars</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-slate-600">Photo (Optional):</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                  />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Carousel */}
        {loading ? (
          <div className="text-center py-12 text-slate-500">Loading testimonials...</div>
        ) : testimonials.length > 0 ? (
          <div ref={carouselRef} className="relative">

            {/* Testimonial Card */}
            <Card className="testimonial-card hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-emerald-300 overflow-hidden">
              <CardContent className="p-6 md:p-8">

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-emerald-600 mb-4" />

                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed mb-6 text-lg italic">
                  "{currentTestimonial.testimonial}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-2xl">★</span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  {currentTestimonial.image ? (
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${currentTestimonial.image.replace(/\\/g, '/')}`}
                      alt={currentTestimonial.name}
                      crossOrigin="anonymous"
                      className="w-14 h-14 rounded-full object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{currentTestimonial.name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</h4>
                    <p className="text-sm text-slate-600">{currentTestimonial.position}</p>
                    <p className="text-sm text-emerald-600 font-semibold">{currentTestimonial.company}</p>
                  </div>
                </div>

                {/* Industry Badge */}
                {currentTestimonial.industry && (
                  <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-emerald-800">{currentTestimonial.industry}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            No testimonials yet. Be the first to share your experience!
          </div>
        )}

        {/* Dots Navigation */}
        {testimonials.length > 0 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-emerald-600 to-teal-600'
                  : 'w-3 h-3 bg-slate-300 hover:bg-emerald-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {testimonials.length > 0 && (
          <div className="text-center mt-4 text-slate-500 text-sm font-medium">
            {currentIndex + 1} / {testimonials.length}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;