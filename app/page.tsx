import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { DonationWidget } from "@/components/home/DonationWidget";
import { RecentDonors } from "@/components/home/RecentDonors";
import { StorySection } from "@/components/home/StorySection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <HeroSection />
      <StatsSection />

      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Main Content - Left 2 Columns */}
          <div className="md:col-span-2">
            <StorySection />
          </div>

          {/* Sidebar - Right 1 Column */}
          <div className="md:col-span-1">
            <DonationWidget />
            <RecentDonors />
          </div>
        </div>
      </div>
    </div>
  );
}
