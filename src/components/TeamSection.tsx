"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck, Award, CheckCircle } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      initials: "QA",
      name: "M. QASIM ABDULLAH",
      role: "Senior Partner / Tax Advocate",
      credentials: "FBR Accredited Advocate | Tax Litigation | High Court Enrollment",
      specialties: [
        "FBR Audit & Show Cause Notices",
        "Appeals before Commissioner (Appeals)",
        "Wealth Reconciliation Defense",
      ],
      isManagingPartner: false,
      whatsapp: "923066155527",
    },
    {
      initials: "ZH",
      name: "ZARYAB ARIF HABIB",
      role: "Managing Partner / Chief Tax Advocate",
      credentials: "FBR Bar Member | Corporate Structuring | Wealth Audit Defense | 10+ Yrs Exp",
      badge: "MANAGING TAX PARTNER",
      image: "/team/zaryab.jpg",
      specialties: [
        "Corporate & High-Net-Worth Individual Strategy",
        "Complete Iris Direct Filings & Exemption Filings",
        "Statutory Dispute Resolution & Appellate Tribunals",
      ],
      isManagingPartner: true,
      whatsapp: "923066155527",
    },
    {
      initials: "FA",
      name: "M. FARZAND ALI",
      role: "Senior Partner / Corporate Tax Specialist",
      credentials: "Corporate Retainers | Sales Tax Expert | Provincial SRB/PRA/KPRA Compliance",
      specialties: [
        "Sales Tax & Withholding Statements",
        "Corporate SMC & Pvt Ltd Compliance",
        "Provincial Revenue Board Advisory",
      ],
      isManagingPartner: false,
      whatsapp: "923066155527",
    },
  ];

  const highlights = [
    { label: "TAX FILINGS", value: "15,000+ COMPLETED" },
    { label: "COMPREHENSIVE AUDITS", value: "PKR 50M+ DEFENDED" },
    { label: "FAST DELIVERY", value: "24-48 HOURS" },
    { label: "CLIENT SATISFACTION", value: "99.8% POSITIVE" },
    { label: "IRIS INTEGRATION", value: "100% ACCREDITED" },
  ];

  return (
    <section id="team" className="py-24 bg-[#082218] text-white border-b border-emerald-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>EXPERT LEGAL, FINANCIAL & TAX ADVISORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-serif">
            MEET OUR TEAM
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase">
            CERTIFIED TAX ADVISORS
          </p>

          <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-xl mx-auto">
            Meet the founders, lead tax lawyers, and chartered compliance specialists dedicated to safeguarding your financial assets.
          </p>
        </div>

        {/* 3 Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                member.isManagingPartner
                  ? "bg-gradient-to-b from-[#0F3526] to-[#0A261B] border-2 border-amber-400/80 shadow-2xl shadow-emerald-950/80 md:-translate-y-3"
                  : "bg-[#0b2b1f]/80 border border-emerald-800/60 shadow-lg hover:border-emerald-700"
              }`}
            >
              {/* Partner Badge */}
              {member.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black tracking-widest uppercase shadow-lg">
                  {member.badge}
                </div>
              )}

              <div className="space-y-6">
                {/* Member Avatar / Photo */}
                <div className="flex justify-center">
                  {member.image ? (
                    <div
                      className={`relative w-24 h-24 rounded-full overflow-hidden border-4 ${
                        member.isManagingPartner
                          ? "border-amber-400 shadow-xl shadow-amber-400/25 ring-4 ring-amber-400/20"
                          : "border-emerald-600 shadow-lg"
                      }`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="96px"
                        priority={member.isManagingPartner}
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center font-serif text-2xl font-black tracking-wider ${
                        member.isManagingPartner
                          ? "bg-amber-400 text-slate-950 border-4 border-amber-300/60 shadow-xl"
                          : "bg-emerald-900 text-emerald-200 border-2 border-emerald-700"
                      }`}
                    >
                      {member.initials}
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-black tracking-wide text-white font-serif">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-300">
                    {member.role}
                  </div>
                  <p className="text-[11px] text-emerald-200/70 pt-1 leading-snug">
                    {member.credentials}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-4 border-t border-emerald-800/60 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 text-center">
                    Core Specialization:
                  </p>
                  <div className="space-y-1.5">
                    {member.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-emerald-100/90">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-[11px] leading-tight">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-emerald-800/60">
                {member.isManagingPartner ? (
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=Hello%20Zaryab%20Arif%20Habib,%20I%20would%20like%20to%20consult%20regarding%20my%20tax%20filing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg shadow-amber-400/20 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-slate-950" />
                    <span>Direct WhatsApp: 0306 6155527</span>
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation%20with%20${encodeURIComponent(member.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white font-bold text-xs border border-emerald-700/60 transition-all active:scale-95"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Metric Ticker */}
        <div className="pt-8 border-t border-emerald-900/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {highlights.map((h, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {h.label}
                </div>
                <div className="text-xs sm:text-sm font-black text-white mt-1">
                  {h.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
