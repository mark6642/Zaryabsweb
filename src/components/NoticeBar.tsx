"use client";

import React from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

export default function NoticeBar() {
  return (
    <aside aria-label="Tax Filing Deadline Notice" className="bg-[#0b130e] text-slate-200 border-b border-emerald-950/60 text-xs py-2.5 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 tracking-wider">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            NOTICE FOR 2026
          </span>
          <p className="text-slate-300 text-xs font-medium">
            Filing Deadline Approaching: <span className="text-white font-bold">September 30, 2026</span>. Avoid penalty under Section 182: <span className="text-amber-400 font-bold">PKR 25,000+</span>.
          </p>
        </div>

        <a
          href="#penalties"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors underline decoration-emerald-500/40 hover:decoration-emerald-300 text-[11px]"
        >
          <span>Check Penalty Matrix</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
}
