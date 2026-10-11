"use client";

import React from "react";
import { 
  AlertTriangle, 
  ArrowRight, 
  User, 
  Users2, 
  Building, 
  CheckCircle2, 
  XCircle,
  ShieldAlert
} from "lucide-react";

export default function PenaltyAlertSection() {
  const penaltyTiers = [
    {
      category: "INDIVIDUALS",
      title: "Salaried Individuals",
      desc: "Personal tax returns for salaried staff with single or dual income streams.",
      icon: User,
      iconBg: "bg-amber-100 text-amber-800",
      fine: "PKR 25,000",
      subFine: "+ Section 182 minimum penalty",
      isFeatured: false,
      consequences: [
        "Double withholding tax on banking & cash withdrawals",
        "Higher non-filer tax rate on motor vehicle registration",
        "Non-filer rate on real estate purchase & transfer",
      ],
    },
    {
      category: "PARTNERSHIPS",
      title: "AOPs (Partnership)",
      desc: "Partnership firms, joint ventures, and registered associations under FBR.",
      icon: Users2,
      iconBg: "bg-emerald-100 text-emerald-800",
      badge: "HIGH SCRUTINY",
      fine: "PKR 50,000",
      subFine: "+ Inactive ATL surcharge & penalty",
      isFeatured: true,
      consequences: [
        "Bank accounts subject to freeze without prior notice",
        "Disqualification from government and corporate tenders",
        "Automatic summons for wealth and business reconciliation",
      ],
    },
    {
      category: "CORPORATE & SMCS",
      title: "Businesses & Companies",
      desc: "Private Ltd, SMCs, and corporate entities with statutory audit obligations.",
      icon: Building,
      iconBg: "bg-rose-100 text-rose-800",
      fine: "PKR 100,000",
      subFine: "+ Default surcharge & prosecution notice",
      isFeatured: false,
      consequences: [
        "Freezing of business bank accounts under Section 140",
        "Immediate selection for comprehensive tax audit",
        "Directors personal wealth statements marked for audit",
      ],
    },
  ];

  return (
    <section id="penalties" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold tracking-wide uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>COMPLIANCE ALERT: PENALTIES REVISED UNDER THE FINANCE ACT 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
            Late Filing Fine After October 15 Deadline
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Missing the statutory deadline automatically attracts mandatory penalties under Section 182 and places you on the Inactive ATL, doubling taxes on bank withdrawals and car purchases.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {penaltyTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  tier.isFeatured
                    ? "bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-950/10 scale-100 md:-translate-y-2"
                    : "bg-slate-50/70 border border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* Badge if featured */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[10px] font-black tracking-widest uppercase shadow-md">
                    {tier.badge}
                  </div>
                )}

                {/* Top Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tier.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                      {tier.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  {/* Fine Highlight Box */}
                  <div className="pt-4 pb-3 border-y border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                      MANDATORY STATUTORY FINE
                    </div>
                    <div className="text-3xl font-black text-rose-600 tracking-tight mt-0.5">
                      {tier.fine}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {tier.subFine}
                    </div>
                  </div>

                  {/* Consequences List */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      Non-Filer Consequences:
                    </p>
                    {tier.consequences.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20avoid%20the%20late%20filing%20penalty%20for%20Tax%20Year%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all ${
                      tier.isFeatured
                        ? "bg-[#0F2E22] hover:bg-[#164231] text-white shadow-md shadow-emerald-950/20"
                        : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-200"
                    }`}
                  >
                    <span>Avoid Penalty Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/90 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Immediate benefits of Timely Filing with Syed Tax:
              </p>
              <p className="text-xs text-slate-600">
                Avoid 0.6% bank transaction deductions, acquire property smoothly, and preserve active ATL status instantly.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20file%20and%20save%20penalties."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F2E22] hover:bg-[#164231] text-white text-xs font-bold shrink-0 shadow-md transition-all active:scale-95"
          >
            <span>File & Save Penalties Today</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
