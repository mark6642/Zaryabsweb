"use client";

import React from "react";
import { 
  FileText, 
  Calculator, 
  Coins, 
  ShieldCheck, 
  FileCheck2, 
  TrendingUp, 
  Receipt, 
  Scale, 
  Building2,
  ArrowRight
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Tax Return Preparation & Filing",
      desc: "Accurate income tax filing for salaried staff, high net worth individuals, freelancers, and businesses with zero error rate on FBR Iris.",
      icon: FileText,
    },
    {
      title: "Tax Computation & Review",
      desc: "Comprehensive review of bank statements, tax credits, and financial records to compute exact tax liability and avoid excess deductions.",
      icon: Calculator,
    },
    {
      title: "Wealth Statement Reconciliation",
      desc: "Flawless asset, liability, and personal expense declarations matching your declared income year-over-year to prevent audit red flags.",
      icon: ShieldCheck,
    },
    {
      title: "NTN / Sales Tax Registration & Support",
      desc: "Expedited NTN registration, business addition, and sales tax enlistment with FBR, PRA, SRB, and KPRA revenue authorities.",
      icon: FileCheck2,
    },
    {
      title: "Tax Exemption & Refunds",
      desc: "Assistance in securing legitimate IT foreign remittance exemptions and recovering adjustable advance tax deductions from banks & utilities.",
      icon: Coins,
    },
    {
      title: "Tax Planning & Advisory",
      desc: "Proactive structuring and advisory to legally reduce overall tax liability before fiscal year-end through valid exemptions and credits.",
      icon: TrendingUp,
    },
    {
      title: "Withholding Tax Support",
      desc: "Preparation and filing of bi-annual or quarterly withholding statements under Section 165 with full vendor tax challan reconciliation.",
      icon: Receipt,
    },
    {
      title: "Tax Disputes & Litigation Support",
      desc: "Expert legal replies and formal representation before FBR Commissioners, CIR Appeals, and Appellate Tribunals against audit notices.",
      icon: Scale,
    },
    {
      title: "Corporate Advance & Annual Tax Advisory",
      desc: "Complete corporate tax compliance, quarterly advance tax estimations under Section 147, and statutory year-end audit facilitation.",
      icon: Building2,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase">
            <span>COMPREHENSIVE TAX & COMPLIANCE SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
            Our Professional Tax Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tailored tax strategy, accurate documentation, and full legal representation across the Federal Board of Revenue.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors font-serif">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <a
                    href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20am%20inquiring%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Inquire Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[11px] text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
