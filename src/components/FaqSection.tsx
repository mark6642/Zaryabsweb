"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is required to file income tax returns in Pakistan?",
      answer:
        "Under Section 114 of the Income Tax Ordinance, 2001, every individual earning taxable salary above PKR 600,000/year, owning immovable property of 500 sq yards or a flat, owning a motor vehicle above 1000cc, possessing an NTN, or obtaining electricity bills exceeding statutory thresholds is legally obligated to file an annual income tax return.",
    },
    {
      question: "What happens if I miss the September 30, 2026 deadline?",
      answer:
        "Missing the statutory September 30 deadline incurs an automatic penalty under Section 182 (minimum PKR 25,000 for individuals, PKR 50,000 for AOPs, and PKR 100,000 for companies). In addition, your status is removed from the Active Taxpayer List (ATL), resulting in double withholding tax deductions on cash withdrawals, banking instruments, property transfers, and vehicle registration.",
    },
    {
      question: "How does Active Taxpayer List (ATL) benefit my bank & business transactions?",
      answer:
        "Active filers enjoy standard withholding tax rates (up to 50% savings on tax deductions compared to non-filers). You avoid the 0.6% banking cash withdrawal tax under Section 236Y, pay standard property registration taxes (instead of punitive 15-20% non-filer surcharges), and remain fully eligible for corporate and government contracts.",
    },
    {
      question: "Can you represent us in FBR audits, notices, or unexplained income queries?",
      answer:
        "Yes. Our team comprises High Court enrolled Advocates and FBR Bar members. We represent you directly before FBR assessing officers, the Commissioner of Inland Revenue (CIR Appeals), and the Appellate Tribunal Inland Revenue (ATIR), providing complete documentation and legal justification.",
    },
    {
      question: "What documents are required to file my tax return?",
      answer:
        "For salaried filers: CNIC copy, annual salary tax deduction certificate from your employer, and bank statement covering July 1 to June 30. For businesses & freelancers: Bank statements, foreign remittance PRCs (if IT exporter), asset purchase receipts, utility bills, and annual expense summary.",
    },
    {
      question: "How long does it take to appear on the Active Taxpayer List (ATL)?",
      answer:
        "Once we submit your return on FBR Iris and verify the CPR challan (if late surcharge applies), your ATL status is updated on the active taxpayer list within 24 to 48 hours. We provide the official FBR acknowledgment slip and verification screenshot immediately.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif">
            Common Tax & FBR Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Quick, clear answers about deadlines, Active Taxpayer status, and our professional filing process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-emerald-100 text-emerald-800 rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Question assistance card */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-500">
            Have a specific FBR question regarding your tax notice or wealth statement?
          </p>
          <a
            href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20have%20a%20specific%20tax%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-850 hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat directly with a Tax Consultant on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
