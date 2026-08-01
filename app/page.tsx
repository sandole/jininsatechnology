import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import GovProcurement from "@/components/GovProcurement";
import TechStack from "@/components/TechStack";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <GovProcurement />
      <TechStack />
      <ContactFooter />
    </main>
  );
}
