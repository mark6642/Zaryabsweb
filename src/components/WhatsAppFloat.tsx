"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      <div className="hidden sm:flex items-center bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>Chat with Tax Advisor</span>
      </div>

      <a
        href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20need%20assistance%20with%20my%20Income%20Tax%20Return."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Tax Consultant"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
