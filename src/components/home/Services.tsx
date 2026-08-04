import {
  Laptop,
  Printer,
  Wifi,
  Smartphone,
  Tv,
  HardDrive,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Computer Support",
    description:
      "Slow computer, Windows problems, software issues, updates and everyday troubleshooting.",
  },
  {
    icon: Printer,
    title: "Printer & Scanner",
    description:
      "Installation, wireless setup, scanning, connectivity and printer troubleshooting.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Internet",
    description:
      "Improve connectivity, troubleshoot Wi-Fi problems and set up home networks.",
  },
  {
    icon: Smartphone,
    title: "Phones & Tablets",
    description:
      "New device setup, accounts, apps, email, backups and connecting your devices.",
  },
  {
    icon: Tv,
    title: "Smart Home & TV",
    description:
      "Smart TVs, streaming devices and other connected technology around your home.",
  },
  {
    icon: HardDrive,
    title: "Setup & Data Transfer",
    description:
      "Set up a new computer and move your documents, photos and other important files.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section border-t border-white/5">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#009CFF]">
            How I Can Help
          </span>

          <h2 className="mb-5 font-bold tracking-tight">
            Help with the technology you use every day.
          </h2>

          <p className="text-lg">
            From a stubborn printer to a new laptop or unreliable Wi-Fi,
            HomeTech+ provides friendly, practical help right in your home.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#009CFF]/20 bg-[#009CFF]/10 text-[#009CFF] transition-transform group-hover:scale-110">
                <Icon size={24} strokeWidth={1.8} />
              </div>

              <h3 className="mb-3 text-xl font-semibold">{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}