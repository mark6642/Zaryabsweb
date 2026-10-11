"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Award,
  TrendingUp,
  FileCheck,
  Clock,
  Briefcase,
  MessageCircle
} from "lucide-react";

const TOTAL_FRAMES = 80;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Animation state refs for 60fps lerp
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);

  // Helper to get frame path
  const getFrameSrc = useCallback((index: number) => {
    const padded = String(index + 1).padStart(3, "0");
    return `/hero-frames/ezgif-frame-${padded}.jpg`;
  }, []);

  // Helper: Draw image with object-fit: cover on canvas (slight right bias on wide screens so consultants remain visible)
  const drawCover = useCallback((ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    if (!img || !img.complete || img.naturalWidth === 0) return;
    
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const ratio = Math.max(cw / iw, ch / ih);
    const nw = iw * ratio;
    const nh = ih * ratio;

    // On desktop (cw > 1024), shift frame slightly right so consultants stand proud beside the left-aligned text
    let ox = (cw - nw) / 2;
    if (cw > 1024) {
      ox = Math.min(ox + (cw * 0.12), (cw - nw) * 0.2);
    }
    const oy = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, ox, oy, nw, nh);
  }, []);

  // Preload all 80 frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    // Prioritize frame 0 for instant load
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      loaded++;
      setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));

      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(window.innerWidth * dpr);
        canvas.height = Math.round(window.innerHeight * dpr);
        const ctx = canvas.getContext("2d");
        if (ctx) drawCover(ctx, firstImg, canvas);
      }

      // Preload remaining frames
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameSrc(i);
        img.onload = () => {
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          if (loaded >= TOTAL_FRAMES) {
            setIsPreloaded(true);
          }
        };
        images[i] = img;
      }
    };

    imagesRef.current = images;

    // Handle canvas resize
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      const ctx = canvas.getContext("2d");
      const currentIdx = Math.min(Math.max(Math.round(currentFrameRef.current), 0), TOTAL_FRAMES - 1);
      const img = imagesRef.current[currentIdx];
      if (ctx && img) drawCover(ctx, img, canvas);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getFrameSrc, drawCover]);

  // Scroll listener that updates target frame and progress
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.scrollHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 60FPS RAF Smooth Lerp Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.18;
        const frameIdx = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        const img = imagesRef.current[frameIdx];
        if (img && img.complete) {
          drawCover(ctx, img, canvas);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawCover]);

  return (
    // 280vh scroll track on mobile, 350vh on desktop gives optimal scrub speed for 80 frames
    <section ref={containerRef} className="relative h-[280vh] sm:h-[350vh] bg-slate-950">
      
      {/* Sticky Fullscreen Viewport using 100dvh for mobile address bar safety */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center">
        
        {/* Background Canvas: Hardware Accelerated Frame Scrubbing */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none"
        />

        {/* Directional Background Gradient: Enhanced contrast on mobile for crystal clear text readability */}
        <div className="pointer-events-none absolute inset-0 bg-slate-950/60 sm:bg-slate-950/25" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-7/12 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/95 via-slate-950/85 sm:via-slate-950/70 to-slate-950/40 sm:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-28 bg-gradient-to-b from-slate-950/80 to-transparent" />

        {/* Ambient Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/4 left-10 w-[500px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full" 
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-amber-500/15 blur-[160px] rounded-full" 
        />

        {/* Top Floating Branding Bar (Hidden on mobile to preserve vertical viewport space) */}
        <div className="hidden md:flex absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-6 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-extrabold tracking-wider text-white uppercase block">
                Zaryab <span className="text-emerald-400">Advisory</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase block font-medium">
                Tax & Corporate Consultants
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs text-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Scroll Interactive
            </span>
            <a
              href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20want%20to%20consult%20regarding%20my%20tax%20return."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md transition-all shadow-lg"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Top Progress Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/40 z-40">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 transition-all duration-75"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* =========================================================================
            FREE-FLOATING LEFT-ALIGNED TEXT (NO BOX, NO CONTAINER)
           ========================================================================= */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-12 w-full pt-4 sm:pt-16 pb-14 sm:pb-8">
          
          {/* SCENE 1: (Scroll 0% to 30%) - Left-Aligned Intro (Unboxed) */}
          <div 
            className="transition-all duration-700 ease-out max-w-xl lg:max-w-2xl text-left space-y-3.5 sm:space-y-6"
            style={{
              opacity: scrollProgress < 0.28 ? Math.max(1 - scrollProgress * 3.5, 0) : 0,
              transform: `translateX(${scrollProgress < 0.28 ? -scrollProgress * 60 : -40}px)`,
              pointerEvents: scrollProgress < 0.25 ? "auto" : "none",
              display: scrollProgress > 0.35 ? "none" : "block",
            }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-emerald-400 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Certified Tax Consultants & Legal Advisors</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] drop-shadow-md">
              Maximize Your Savings,{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                Zero Tax Penalties.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
              Take the stress out of tax deadlines. From individual NTN & income tax filing to complex corporate compliance, our certified advocates guarantee 100% legal compliance and maximum refunds.
            </p>

            {/* Checkpoints (2x2 grid on mobile saves critical vertical height) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5 sm:pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="truncate sm:overflow-visible">Active ATL Status</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="truncate sm:overflow-visible">24–48h Filing</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="truncate sm:overflow-visible">Zero Audit Risk</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span className="truncate sm:overflow-visible">100% Confidential</span>
              </div>
            </div>

            {/* WhatsApp Consultation Action */}
            <div className="pt-1 sm:pt-2">
              <a
                href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20would%20like%20to%20book%20a%20free%20consultation%20regarding%20my%20tax%20return."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 sm:gap-5 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-[#25D366] hover:from-emerald-300 hover:to-[#22c55e] text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/30 border border-emerald-300/60 transition-all duration-300 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-950/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-black leading-tight text-slate-950">
                      Book Free Consultation on WhatsApp
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-950/80 mt-0.5">
                      Direct Tax Advisor • 0306 6155527
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>
            </div>

            {/* Scroll Hint */}
            <div className="pt-1 flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-bounce" />
              <span>Scroll down to explore</span>
            </div>
          </div>

          {/* SCENE 2: (Scroll 28% to 68%) - Left-Aligned Strategic Advantage (Unboxed) */}
          <div 
            className="transition-all duration-700 ease-out max-w-xl lg:max-w-2xl text-left space-y-3.5 sm:space-y-6"
            style={{
              opacity: 
                scrollProgress >= 0.28 && scrollProgress < 0.68
                  ? Math.min(Math.sin(((scrollProgress - 0.28) / (0.68 - 0.28)) * Math.PI) * 1.3, 1)
                  : 0,
              transform: `translateX(${scrollProgress >= 0.28 && scrollProgress < 0.68 ? (scrollProgress - 0.48) * 40 : -40}px)`,
              pointerEvents: scrollProgress >= 0.32 && scrollProgress <= 0.64 ? "auto" : "none",
              display: scrollProgress < 0.22 || scrollProgress > 0.74 ? "none" : "block",
            }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-amber-300 tracking-wide">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span>Strategic Tax Defense & Optimization</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              Precision Strategy Behind Every Tax Return.
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
              Our seasoned tax advocates examine every deduction, legal rebate, and wealth statement nuance so you legally keep more of what you earn.
            </p>

            {/* Feature Metrics (Responsive 3-col on all screens) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 sm:pt-2">
              <div className="border-l-2 border-emerald-400/80 pl-2 sm:pl-3.5 py-0.5 sm:py-1">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mb-0.5 sm:mb-1" />
                <div className="text-xs sm:text-base font-bold text-white leading-tight">Up to 35%</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Tax Rebate</div>
              </div>

              <div className="border-l-2 border-teal-400/80 pl-2 sm:pl-3.5 py-0.5 sm:py-1">
                <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 mb-0.5 sm:mb-1" />
                <div className="text-xs sm:text-base font-bold text-white leading-tight">100% ATL</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">FBR Status</div>
              </div>

              <div className="border-l-2 border-amber-400/80 pl-2 sm:pl-3.5 py-0.5 sm:py-1">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 mb-0.5 sm:mb-1" />
                <div className="text-xs sm:text-base font-bold text-white leading-tight">24h Express</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Filing Speed</div>
              </div>
            </div>

            <div className="pt-0.5 sm:pt-1 flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Full legal representation before tax authorities</span>
            </div>
          </div>

          {/* SCENE 3: (Scroll 68% to 100%) - Left-Aligned Closing Action (Unboxed) */}
          <div 
            className="transition-all duration-700 ease-out max-w-xl lg:max-w-2xl text-left space-y-3.5 sm:space-y-6"
            style={{
              opacity: scrollProgress >= 0.68 ? Math.min((scrollProgress - 0.68) * 3.5, 1) : 0,
              transform: `translateX(${scrollProgress >= 0.68 ? (1 - scrollProgress) * 40 : 0}px)`,
              pointerEvents: scrollProgress >= 0.72 ? "auto" : "none",
              display: scrollProgress < 0.65 ? "none" : "block",
            }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-emerald-300 tracking-wide">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Senior Partners At Your Service</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              File With Complete{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                Legal Confidence.
              </span>
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
              Partner with seasoned consultants who understand your business. Get your tax affairs sorted quickly, legally, and cost-effectively today.
            </p>

            {/* WhatsApp Consultation Action */}
            <div className="pt-1 sm:pt-2">
              <a
                href="https://wa.me/923066155527?text=Hello%20Syed%20Tax,%20I%20would%20like%20to%20book%20a%20free%20consultation%20regarding%20my%20tax%20return."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 sm:gap-5 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-[#25D366] hover:from-emerald-300 hover:to-[#22c55e] text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/30 border border-emerald-300/60 transition-all duration-300 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-950/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-black leading-tight text-slate-950">
                      Book Free Consultation on WhatsApp
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-950/80 mt-0.5">
                      Direct Tax Advisor • 0306 6155527
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>
            </div>

            {/* Stats Line */}
            <div className="pt-2 flex items-center gap-5 sm:gap-8 border-t border-slate-800/60">
              <div>
                <div className="text-base sm:text-xl font-black text-white">1,500+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Filed Returns</div>
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-emerald-400">99.8%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">FBR Approval</div>
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-teal-400">10+ Yrs</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Experience</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Floating Status Bar */}
        <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-12 right-4 sm:right-12 z-30 flex items-center justify-between text-xs text-slate-400 pointer-events-none">
          <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800/60 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl backdrop-blur-sm pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium text-[10px] sm:text-xs">Active Taxpayer List (ATL) 2026 Ready</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-slate-950/60 border border-slate-800/60 px-3.5 py-1.5 rounded-xl backdrop-blur-sm pointer-events-auto text-[11px]">
            <span className="text-emerald-400 font-bold">
              {Math.min(Math.round(currentFrameRef.current) + 1, TOTAL_FRAMES)}
            </span>
            <span className="text-slate-500"> / {TOTAL_FRAMES} Cinematic Frames</span>
          </div>
        </div>

      </div>

    </section>
  );
}
