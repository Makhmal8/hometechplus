"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight"
        >
          HomeTech
          <span className="text-[#E6B325]">+</span>
        </Link>

        {/* Navigation */}

        <nav className="hidden gap-8 text-sm font-medium md:flex">

          <Link href="/">Home</Link>

          <Link href="#services">Services</Link>

          <Link href="#about">About</Link>

          <Link href="#contact">Contact</Link>

        </nav>

        {/* CTA */}

        <a
          href="tel:+16473636461"
          className="btn-primary hidden md:inline-flex"
        >
          <Phone size={18} className="mr-2" />

          Call Now

        </a>

      </div>
    </header>
  );
}