import CategoriesSection from "@/components/home/CategoriesSection";
import CTASection from "@/components/home/CTASection";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";

import { getOpportunities } from "@/lib/mockApi";

export default async function HomePage() {
  const opportunities = await getOpportunities();

  return (
    <main>
      <HeroSection opportunities={opportunities}  />

      <FeaturedOpportunities opportunities={opportunities} />

      <CategoriesSection opportunities={opportunities} />

      <StatisticsSection opportunities={opportunities} />

      <CTASection />
    </main>
  );
}