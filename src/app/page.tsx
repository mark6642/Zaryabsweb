import NoticeBar from "@/components/NoticeBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PenaltyAlertSection from "@/components/PenaltyAlertSection";
import ServicesGrid from "@/components/ServicesGrid";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Urgent Notice Bar */}
      <NoticeBar />

      {/* 2. Main Navigation Header */}
      <Navbar />

      {/* 3. Hero Section (Kept intact as requested) */}
      <main>
        <HeroSection />

        {/* 4. Trust Pills & 3 Metric Counters */}
        <StatsSection />

        {/* 5. Section 182 Late Filing Fine Alert & Matrix */}
        <PenaltyAlertSection />

        {/* 6. 9-Card Professional Tax Services */}
        <ServicesGrid />

        {/* 7. Meet Our Team (Zaryab Abid Shahid & Certified Partners) */}
        <TeamSection />

        {/* 8. Flat-Rate Transparent Pricing Packages */}
        <PricingSection />

        {/* 9. Interactive FAQ Accordion */}
        <FaqSection />

        {/* 10. High-Conversion Final CTA Banner */}
        <CtaBanner />
      </main>

      {/* 11. Directory Footer */}
      <Footer />

      {/* 12. Floating Quick WhatsApp Support Button */}
      <WhatsAppFloat />
    </div>
  );
}
