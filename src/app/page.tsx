import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Audience from "@/components/Audience";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Solution />
      <Audience />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
