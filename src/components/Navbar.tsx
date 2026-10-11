"use client";

import React, { useState } from "react";
import { ShieldCheck, Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[37px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-950 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-slate-900 font-serif">
                  SYED TAX
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 tracking-wider">
                  PRO
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Legal & Tax Advisory
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#services"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Tax Services
            </a>
            <a
              href="#penalties"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Penalties & Fines
            </a>
            <a
              href="#team"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Meet Our Team
            </a>
            <a
              href="#pricing"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              Filing Plans
            </a>
            <a
              href="#faqs"
              className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Availability Pill */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available 24/7</span>
            </div>

            {/* Direct WhatsApp / File Return Button */}
            <a
              href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20file%20my%20Income%20Tax%20Return%20for%20Tax%20Year%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F2E22] hover:bg-[#164231] text-white text-xs font-bold shadow-md shadow-emerald-950/20 transition-all hover:shadow-lg active:scale-95"
            >
              <span>File Income Tax</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Tax Services
            </a>
            <a
              href="#penalties"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Penalties & Fines
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Meet Our Team
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              Filing Plans
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              FAQs
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20file%20my%20Income%20Tax%20Return."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0F2E22] text-white font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Advisor: 0306 6155527</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
