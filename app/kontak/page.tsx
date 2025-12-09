import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/contact/FAQSection";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactHero />

      <div className="container mt-16 relative z-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t border-gray-200 pt-12">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
