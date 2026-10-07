import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio"
import { SocialProofSection } from "@/components/social-proof-section"
import { ServicesSection } from "@/components/service-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ContactUpworkSection } from "@/components/contact-upwork-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <SocialProofSection />
      <ExperienceSection />
      <TestimonialSection />
      <ContactUpworkSection />
    </>
  )
}
