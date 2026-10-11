"use client";

import React from "react";
import { ShieldCheck, PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05160F] text-slate-400 text-xs border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="font-serif font-black text-xl text-white tracking-tight">
                SYED TAX PRO
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Certified Income Tax Practitioners providing seamless FBR tax filing, Active Taxpayer List (ATL) compliance, wealth statement reconciliation, and legal representation across Pakistan.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct Hotline: <strong className="text-white">0306 6155527</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Email: <strong className="text-white">zaryabtax@gmail.com</strong></span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-serif">
              Services
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Salaried Tax Return
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Freelancer & IT Exemption
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Wealth Reconciliation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  NTN & Sales Tax Enlistment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  FBR Audit & Legal Appeals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Corporate Retainers
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-serif">
              Compliance
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#penalties" className="hover:text-emerald-400 transition-colors">
                  Section 182 Penalties
                </a>
              </li>
              <li>
                <a href="#penalties" className="hover:text-emerald-400 transition-colors">
                  Active Taxpayer List (ATL)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                  Tax Year 2026 Deadlines
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-emerald-400 transition-colors">
                  FBR Iris Guidelines
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-emerald-400 transition-colors">
                  Withholding Tax Slabs
                </a>
              </li>
            </ul>
          </div>

          {/* Head Office / Lead Advocate */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-serif">
              Lead Counsel
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white">
                Zaryab Arif Habib & Partners
              </p>
              <p className="text-slate-400">
                Advocates High Court & FBR Tax Consultants
              </p>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Lahore & Islamabad Chambers, Pakistan</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/923066155527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>0306 6155527</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-12 mt-12 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Syed Tax & Legal Advisory Partners. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              FBR Disclaimer
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
