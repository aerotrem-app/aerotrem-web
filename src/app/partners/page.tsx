import Navbar from "@/components/layout/Navbar";
import PartnerHero from "@/components/partners/PartnerHero";
import Impact from "@/components/partners/Impact";
import Credentials from "@/components/partners/Credentials";
import PartnerCTA from "@/components/partners/PartnerCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Enterprise Partners | Aerotrem",
  description:
    "Partner with Aerotrem to transform emergency response in your community. Data-driven solutions backed by McGill research.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      <PartnerHero />
      <Impact />
      <Credentials />
      <PartnerCTA />
      <Footer />
    </main>
  );
}
