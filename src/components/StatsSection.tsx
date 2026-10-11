"use client";

import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function StatsSection() {
  const clientPills = [
    "15,000+ ACTIVE CLIENTS",
    "SALARIED EXECUTIVES",
    "IT EXPORTERS & FREELANCERS",
    "REAL ESTATE INVESTORS",
    "TRADERS & SMES",
  ];

  const stats = [
    {
      value: "15,000+",
      label: "Satisfied Taxpayers & Active Salaried Individuals",
      sub: "Across all major sectors in Pakistan",
      icon: Users,
    },
    {
      value: "100%",
      label: "FBR Active Taxpayer List (ATL) Status Guaranteed",
      sub: "Zero rejection rate on Iris filings",
      icon: ShieldCheck,
    },
    {
      value: "PKR 50M+",
      label: "Taxes Saved & Penalties Avoided Legally",
      sub: "Under Section 182 & wealth audit reconciliation",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Trust Header & Chips */}
        <div className="text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Trusted by 15,000+ salaried individuals, business owners, freelancers & exporters nationwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {clientPills.map((pill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-[11px] font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3 Main Stat Cards in Dark Emerald Container */}
        <div className="bg-[#0b281e] rounded-2xl p-6 sm:p-10 shadow-xl border border-emerald-900/60 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-emerald-800/60">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx !== 0 ? "pt-6 md:pt-0" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-700/60 flex items-center justify-center text-emerald-300 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-100 max-w-xs leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-emerald-300/70 mt-1">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
