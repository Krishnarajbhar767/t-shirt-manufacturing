import Hero from "./components/Hero"
import AboutPreview from "./components/AboutPreview"
import ServicesOverview from "./components/ServicesOverview"
import FeaturedProducts from "./components/FeaturedProducts"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import IndustryExpertise from "./components/IndustryExpertise"
import QualityAssurance from "./components/QualityAssurance"
import Stats from "./components/Stats"
import TestimonialsPreview from "./components/TestimonialsPreview"

import CTA from "./components/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <FeaturedProducts />
      <HowItWorks />
      <WhyChooseUs />
      <IndustryExpertise />
      <QualityAssurance />
      <Stats />
      <TestimonialsPreview />

      <CTA />
    </>
  )
}
