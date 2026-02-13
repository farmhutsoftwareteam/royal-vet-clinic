import Link from "next/link";
import Container from "@/components/ui/Container";
import { locations } from "@/data/locations";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-3">
            <span className="text-lg tracking-[0.08em] uppercase font-sans font-medium">
              Royal<span className="font-normal opacity-40">vet</span>
            </span>
            <p className="mt-6 text-sm leading-relaxed text-white/40 font-sans">
              Veterinary care rooted in compassion.
              Two clinics in Cape Town.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-5">
            <p className="text-xs tracking-[0.2em] uppercase text-white/25 font-sans mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          {locations.map((loc, i) => (
            <div key={loc.id} className={i === 0 ? "lg:col-span-3 lg:col-start-8" : "lg:col-span-3"}>
              <p className="text-xs tracking-[0.2em] uppercase text-white/25 font-sans mb-6">
                {loc.name.replace(" Clinic", "")}
              </p>
              <address className="space-y-2 text-sm not-italic text-white/50 font-sans">
                <p>{loc.address}</p>
                <p>
                  <a href={`tel:${loc.phone}`} className="hover:text-white transition-colors">
                    {loc.phone}
                  </a>
                </p>
                <div className="pt-2 text-xs text-white/30">
                  <p>{loc.hours.weekdays}</p>
                  <p>{loc.hours.saturday}</p>
                </div>
              </address>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/25 font-sans">
            &copy; {new Date().getFullYear()} Royal Veterinary Clinic
          </p>
          <div className="flex gap-6">
            {["Facebook", "Instagram", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors font-sans">
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
