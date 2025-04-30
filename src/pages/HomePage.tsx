
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CtaSection from "@/components/home/CtaSection";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
