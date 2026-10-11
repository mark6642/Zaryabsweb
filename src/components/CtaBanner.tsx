"use client";

import React from "react";
import { MessageCircle, ArrowRight, PhoneCall, Mail, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#072418] via-[#0D3827] to-[#082218] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-emerald-800/80 overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LAST CHANCE TO AVOID PENALTIES BEFORE 2026 FILING DEADLINE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-serif">
              Ready to file your Tax Year 2026 return with certified professionals?
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
              Take 2 minutes to submit your documents or connect with our WhatsApp desk directly for instant onboarding and guaranteed Active Taxpayer List (ATL) status.
            </p>

            {/* Direct Contact info */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Direct Hotline: <strong className="text-white">0306 6155527</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email: <strong className="text-white">zaryabtax@gmail.com</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20am%20ready%20to%20file%20my%20Tax%20Year%202026%20return."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-400/20 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>WhatsApp Advisor: 0306 6155527</span>
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border border-emerald-600/60 backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <span>View Filing Plans</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
