import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Security from "@/components/sections/Security";
import Platform from "@/components/sections/Platform";
import Interface from "@/components/sections/Interface";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Security />
        <Platform />
        <Interface />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}