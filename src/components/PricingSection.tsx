"use client";

import React from "react";
import { Check, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "Individual Tax Return",
      target: "SALARIED INDIVIDUALS",
      price: "PKR 3,500",
      period: "/ one-time",
      desc: "Ideal for government and private sector employees with single or dual salary income.",
      isPopular: false,
      features: [
        "Salary certificate & tax deduction analysis",
        "Wealth statement (Form 116) reconciliation",
        "Active Taxpayer List (ATL) status within 24h",
        "Official FBR Iris submission CPR acknowledgment",
        "Bank transaction withholding tax adjustment",
      ],
      ctaText: "Choose Individual Plan",
      ctaHref: "https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20file%20under%20the%20Individual%20Salaried%20Plan%20(PKR%203,500).",
    },
    {
      title: "Business Tax Package",
      target: "SOLE PROPRIETORS & FREELANCERS",
      price: "PKR 8,900",
      period: "/ one-time",
      desc: "For IT freelancers, remote workers, e-commerce sellers, and proprietary business owners.",
      isPopular: true,
      features: [
        "0.25% or 1% foreign remittance exemption claim",
        "Multi-stream revenue & business expense computation",
        "Complete multi-year wealth statement balancing",
        "PRC / FBR Iris export certificate reconciliation",
        "Priority 24-hour turnaround with certified advocate",
        "Year-round legal advisory against audit notices",
      ],
      ctaText: "Get Business Plan",
      ctaHref: "https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20file%20under%20the%20Business%20Tax%20Package%20(PKR%208,900).",
    },
    {
      title: "Corporate Retainer",
      target: "COMPANIES & PARTNERSHIPS",
      price: "Custom",
      period: "/ quarterly or annual",
      desc: "Dedicated retainership for SMCs, Private Limited companies, and AOP partnerships.",
      isPopular: false,
      features: [
        "Annual corporate income tax return filing",
        "Monthly FBR and provincial (PRA/SRB) sales tax filings",
        "Quarterly & annual withholding statements (Sec 165)",
        "Advance tax estimation & filing (Sec 147)",
        "Audit notice defense & litigation representation",
        "Dedicated corporate tax partner on call",
      ],
      ctaText: "Request Corporate Proposal",
      ctaHref: "https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20am%20interested%20in%20a%20Corporate%20Retainer%20for%20my%20company.",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT FLAT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
            Plans for every taxpayer
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are a salaried individual, freelancer, or run an enterprise, we guarantee accurate filing with zero hidden surprise charges.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#0B281E] text-white border-2 border-emerald-500 shadow-2xl shadow-emerald-950/20 scale-100 md:-translate-y-3"
                  : "bg-slate-50 border border-slate-200 text-slate-900 hover:border-slate-300 shadow-xs"
              }`}
            >
              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black tracking-widest uppercase shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-widest ${
                      plan.isPopular ? "text-amber-300" : "text-slate-400"
                    }`}
                  >
                    {plan.target}
                  </span>
                  <h3 className="text-xl font-bold font-serif mt-1">
                    {plan.title}
                  </h3>
                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      plan.isPopular ? "text-emerald-100/80" : "text-slate-500"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div
                  className={`pt-5 pb-4 border-y ${
                    plan.isPopular ? "border-emerald-800" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black font-serif tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        plan.isPopular ? "text-emerald-300" : "text-slate-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      plan.isPopular ? "text-emerald-300" : "text-slate-700"
                    }`}
                  >
                    Included In Package:
                  </p>
                  <div className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.isPopular
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={`leading-snug ${
                            plan.isPopular ? "text-emerald-100" : "text-slate-600"
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button */}
              <div
                className={`pt-6 mt-8 border-t ${
                  plan.isPopular ? "border-emerald-800" : "border-slate-200"
                }`}
              >
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md ${
                    plan.isPopular
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 font-black shadow-amber-400/20"
                      : "bg-white hover:bg-slate-100 text-slate-800 border border-slate-300"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
