import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        
        {/* Left side — Hero content */}
        <div>
          <span className="mb-6 inline-block rounded-full border border-[#009CFF]/30 bg-[#009CFF]/10 px-4 py-2 text-sm text-[#009CFF]">
            Friendly Home Technology Support
          </span>

          <h1 className="mb-6 font-bold">
            Technology
            <br />
            Made Simple.
          </h1>

          <p className="mb-10 max-w-xl text-lg">
            Professional in-home computer support, Wi-Fi troubleshooting,
            printer installation, laptop setup, and smart home assistance
            across Toronto & North York.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+16473636461"
              className="btn-primary"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/16473636461"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Right side — Hero image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#151b23] p-3 shadow-2xl shadow-black/30">
            <Image
              src="/images/hometech-hero.png"
              alt="HomeTech+ friendly home technology support"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full rounded-[18px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}