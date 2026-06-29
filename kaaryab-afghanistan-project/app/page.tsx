import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";

export default function HomePage() {
  return(
    <main>
      <HeroSection />
      <FeaturedOpportunities />
      <CategoriesSection />
      <StatisticsSection />
      <CTASection />
    </main>
  )
}