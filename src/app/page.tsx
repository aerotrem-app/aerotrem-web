import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
// We will add TrustGrid later
// import TrustGrid from "@/components/landing/TrustGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />

      {/* Placeholder for the Grid Section */}
      <section className="min-h-[50vh] flex items-center justify-center border-t border-white/10">
        <p className="text-zinc-500 text-sm">
          Scroll down for Trust & Data (Coming Next)
        </p>
      </section>
    </main>
  );
}
