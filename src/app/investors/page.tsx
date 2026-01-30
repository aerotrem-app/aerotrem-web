import Navbar from "@/components/layout/Navbar";
import InvestorHero from "@/components/investors/InvestorHero";
import Vision from "@/components/investors/Vision";
import Technology from "@/components/investors/Technology";
import Traction from "@/components/investors/Traction";
import Team from "@/components/investors/Team";
import InvestorCTA from "@/components/investors/InvestorCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Investors | Aerotrem",
  description:
    "Join the seed round. Be part of the future of autonomous aerospace emergency response.",
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <InvestorHero />
      <Vision />
      <Technology />
      <Traction />
      <Team />
      <InvestorCTA />
      <Footer />
    </main>
  );
}
