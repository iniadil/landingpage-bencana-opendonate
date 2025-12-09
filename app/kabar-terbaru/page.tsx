import { KabarHero } from "@/components/kabar-terbaru/KabarHero";
import { UpdateTimeline } from "@/components/kabar-terbaru/UpdateTimeline";
import { MiniDonationWidget } from "@/components/kabar-terbaru/MiniDonationWidget";

export default function KabarTerbaruPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <KabarHero />

      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Main Content - Timeline */}
          <div className="md:col-span-2">
            <UpdateTimeline />
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <MiniDonationWidget />
            {/* Optional: Add list of "Pahlawan Kebaikan" (Top Donors) here if needed based on the cut-off text in screenshot */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6 opacity-60">
              <h4 className="font-bold text-gray-600 flex items-center gap-2">
                <span className="text-yellow-500">✪</span> Pahlawan Kebaikan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
