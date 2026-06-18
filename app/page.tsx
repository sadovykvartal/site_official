import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Quality from "@/components/Quality";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Apartments from "@/components/Apartments";
import Commercial from "@/components/Commercial";
import Specs from "@/components/Specs";
import Pricing from "@/components/Pricing";
import Progress from "@/components/Progress";
import Sales from "@/components/Sales";
import Developer from "@/components/Developer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Quality />
        <Gallery />
        <Location />
        <Apartments />
        <Commercial />
        <Specs />
        <Pricing />
        <Progress />
        <Sales />
        <Developer />
      </main>
      <Footer />
    </>
  );
}
