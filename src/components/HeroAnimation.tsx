"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, ShieldCheck, Award, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 80;
const FPS = 24; // Smooth cinematic playback
const FRAME_DURATION = 1000 / FPS;

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(true);

  // Sync ref with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Format frame filename with zero padding (e.g. ezgif-frame-001.jpg)
  const getFrameSrc = useCallback((index: number) => {
    const padded = String(index + 1).padStart(3, "0");
    return `/hero-frames/ezgif-frame-${padded}.jpg`;
  }, []);

  // Preload frames progressively
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Prioritize frame 1 for instant display
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

      // Draw initial frame immediately to avoid any white flash
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = firstImg.naturalWidth || 1920;
          canvas.height = firstImg.naturalHeight || 1080;
          ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      }

      // Preload remaining frames
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameSrc(i);
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount >= TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };
        images[i] = img;
      }
    };

    imagesRef.current = images;

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [getFrameSrc]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let pauseUntil = 0;

    const render = (currentTime: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = currentTime;
      }

      const elapsed = currentTime - lastFrameTimeRef.current;

      if (isPlayingRef.current && currentTime > pauseUntil) {
        if (elapsed >= FRAME_DURATION) {
          lastFrameTimeRef.current = currentTime - (elapsed % FRAME_DURATION);

          const currentIdx = frameIndexRef.current;
          const img = imagesRef.current[currentIdx];

          if (img && img.complete) {
            if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;
            }
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }

          // Advance frame
          if (currentIdx >= TOTAL_FRAMES - 1) {
            // Stay at last heroic pose for ~2.5 seconds, then restart smoothly
            pauseUntil = currentTime + 2500;
            frameIndexRef.current = 0;
          } else {
            frameIndexRef.current = currentIdx + 1;
          }
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const handleRestart = () => {
    frameIndexRef.current = 0;
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none group">
      
      {/* Golden & Emerald Ambient Glow Behind Container */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -inset-3 bg-gradient-to-r from-emerald-500/30 via-amber-500/20 to-teal-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" 
      />

      {/* Frame Container */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/80 aspect-[16/9]">
        
        {/* Main Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{ imageRendering: "auto" }}
        />

        {/* Cinematic Gradient Overlays (subtle vignette for elite look) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-lg">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
            Meet Our Senior Tax Partners
          </span>
        </div>

        {/* Top Right Live Filer Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md text-[11px] font-medium text-emerald-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>FBR Registered</span>
        </div>

        {/* Bottom Floating Info Banner */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/85 border border-slate-800/90 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                <span>Corporate & Tax Advocates</span>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                100% Legal Representation & Strategic Tax Defense
              </div>
            </div>
          </div>

          {/* Quick Playback Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={togglePlay}
              type="button"
              title={isPlaying ? "Pause animation" : "Play animation"}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleRestart}
              type="button"
              title="Restart walk animation"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progressive Loading Bar (only visible while initial frames are caching) */}
        {!isLoaded && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-20">
            <div 
              className="h-full bg-emerald-400 transition-all duration-300 ease-out" 
              style={{ width: `${loadProgress}%` }} 
            />
          </div>
        )}

      </div>

      {/* Floating Trust Pill Below Video */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" /> High-Court Certified Advocates
        </span>
        <span className="text-slate-400">
          Over 1,500+ tax audits successfully handled
        </span>
      </div>

    </div>
  );
}
