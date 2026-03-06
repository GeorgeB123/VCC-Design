import { services } from "@/data/services";
import Image from "next/image";

export default function BayHopeFooter() {
  return (
    <footer className="bg-[#34495e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/vcc-logo.png"
                alt="Victory Christian Centre"
                width={150}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              A church for everyone. Like one big family.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/80">
              <p>{services.contact.phone}</p>
              <p>{services.contact.email}</p>
              <p className="mt-6">{services.location.city}</p>
              <p>{services.location.region}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#new" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  New Here?
                </a>
              </li>
              <li>
                <a href="#ministries" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Ministries
                </a>
              </li>
              <li>
                <a href="#watch" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Watch Online
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#prayer" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Prayer Request
                </a>
              </li>
              <li>
                <a href="#give" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Give
                </a>
              </li>
              <li>
                <a href="#connect" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Get Connected
                </a>
              </li>
              <li>
                <a href="#live" className="text-white/80 hover:text-[#6b8e99] transition-colors">
                  Live Stream
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Victory Christian Centre. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#facebook"
                className="text-white/80 hover:text-[#6b8e99] transition-colors text-sm font-medium"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#instagram"
                className="text-white/80 hover:text-[#6b8e99] transition-colors text-sm font-medium"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#youtube"
                className="text-white/80 hover:text-[#6b8e99] transition-colors text-sm font-medium"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
