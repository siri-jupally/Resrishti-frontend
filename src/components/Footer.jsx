import React from 'react';
import { Recycle, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_b7b68fff-9fa9-493a-b571-55243341b519/artifacts/vw3lnlct_Finalized%20one%20%283%29.png"
                alt="Resrishti Logo"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-emerald-400 leading-tight">Resrishti</span>
                <span className="text-xs text-slate-400 leading-tight">by GreenEarth</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              India's first integrated zero-waste facility, pioneering sustainable solutions for a greener tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Our Technologies</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/facilities/aac" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-emerald-500" />
                  Anaerobic Composting (AAC)
                </Link>
              </li>
              <li>
                <Link to="/facilities/agr" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-emerald-500" />
                  Biogas Generation (AGR)
                </Link>
              </li>
              <li>
                <Link to="/facilities/plastic-recycling" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-emerald-500" />
                  Plastic Recycling
                </Link>
              </li>
              <li>
                <Link to="/facilities/ewaste-foam-thermocol" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-emerald-500" />
                  E-Waste Foam & Thermocol Recycling 
                </Link>
              </li>
              <li>
                <Link to="/facilities/bulk-paper-waste" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-emerald-500" />
                  Bulk Paper Waste Collection 
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span>YS NO 468, 470, 471 AND 472,<br />Chegur Village, Kothur (M),<br />Rangareddy District</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span>info@resrishti.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Removed redundant credits section */}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-sm">
              © {currentYear} GreenEarth Integrated Facility Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-400">Validated by</span>
              <span className="text-emerald-400 font-semibold">CSIR-IICT</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold">TGPCB Compliant</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              Resrishti is a brand of GreenEarth Integrated Facility Private Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;