"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="section">

      <div className="container grid items-center gap-16 lg:grid-cols-2">

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

            Professional in-home computer support,
            Wi-Fi troubleshooting,
            printer installation,
            laptop setup,
            and smart home assistance
            across Toronto & North York.

          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="tel:+16476736360"
              className="btn-primary"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/16476736360"
              className="btn-secondary"
            >
              WhatsApp

              <ArrowRight
                size={18}
                className="ml-2"
              />

            </a>

          </div>

        </div>

        <div>

          <div className="card">

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#009CFF]/20 via-[#0B0F14] to-[#E6B325]/20 flex items-center justify-center">

              <div className="text-center">

                <h2 className="mb-2">

                  HomeTech+

                </h2>

                <p>

                  Hero image coming soon

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}