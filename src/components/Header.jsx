import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Process', href: '/process' },
    { label: 'Impact', href: '/impact' },
    { label: 'Reports', href: '/reports' },
    {
      label: 'Industries',
      href: '/clients',
      children: [
        { label: 'Major Clients: Airports & Railway Stations', href: '/clients' }
      ]
    },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_b7b68fff-9fa9-493a-b571-55243341b519/artifacts/vw3lnlct_Finalized%20one%20%283%29.png"
              alt="Resrishti Logo"
              className="h-14 w-14"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-emerald-800 leading-tight tracking-wide">ReSrishti</span>
              <span className="text-xs text-slate-600 leading-tight">GreenEarth Integrated Facility Pvt. Ltd.</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-emerald-600 font-bold' : 'text-slate-700 hover:text-emerald-600'
                      }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-emerald-600 font-bold' : 'text-slate-700 hover:text-emerald-600'
                    }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/contact">
              <Button className="bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Get Started
              </Button>
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="space-y-2">
                  <div
                    className="flex items-center justify-between font-medium py-2 text-slate-700"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <Link
                      to={item.href}
                      className={`${isActive(item.href) ? 'text-emerald-600' : 'text-slate-700'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDropdown(item.label);
                    }}>
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {activeDropdown === item.label && (
                    <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 text-sm text-slate-600 hover:text-emerald-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium py-2 ${isActive(item.href) ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full mt-4">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;