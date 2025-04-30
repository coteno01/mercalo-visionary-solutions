
import ServicesHero from "@/components/services/ServicesHero";
import MainServices from "@/components/services/MainServices";
import AdditionalServices from "@/components/services/AdditionalServices";
import OurApproach from "@/components/services/OurApproach";
import ServicesTestimonial from "@/components/services/ServicesTestimonial";
import ServicesCtaSection from "@/components/services/ServicesCtaSection";

const ServicesPage = () => {
  return (
    <div className="flex flex-col" id="top">
      <ServicesHero />
      <MainServices />
      <AdditionalServices />
      <OurApproach />
      <ServicesTestimonial />
      <ServicesCtaSection />
    </div>
  );
};

export default ServicesPage;
