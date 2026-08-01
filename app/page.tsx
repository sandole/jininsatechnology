import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import GovProcurement from "@/components/GovProcurement";
import TechStack from "@/components/TechStack";
import ContactFooter from "@/components/ContactFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JININSA TECHNOLOGY",
  url: "https://jininsatechnology.com",
  email: "sandole97@gmail.com",
  description:
    "Canadian IT consulting and enterprise software engineering firm delivering production AI and agentic systems, cloud-native architecture, and data pipeline orchestration for public sector and enterprise clients.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: [
    "https://github.com/sandole",
    "https://www.linkedin.com/in/minjunseong/",
  ],
  knowsAbout: [
    "Enterprise Software Engineering",
    "AI & Agentic Workflows",
    "Cloud-Native Architecture",
    "Data Engineering",
    "Government IT Procurement",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Capabilities />
      <GovProcurement />
      <TechStack />
      <ContactFooter />
    </main>
  );
}
