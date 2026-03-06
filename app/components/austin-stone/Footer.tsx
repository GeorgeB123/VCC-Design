import { services } from "@/data/services";
import { ministriesCategories } from "@/data/ministries";

export default function AustinStoneFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Connect Column */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#new" className="hover:text-cyan-400 transition-colors">
                  New Here?
                </a>
              </li>
              <li>
                <a href="#small-groups" className="hover:text-cyan-400 transition-colors">
                  Small Groups
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-cyan-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#prayer" className="hover:text-cyan-400 transition-colors">
                  Prayer
                </a>
              </li>
            </ul>
          </div>

          {/* Grow Column */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              Grow
            </h3>
            <ul className="space-y-3 text-sm">
              {ministriesCategories.austinStone.media.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serve Column */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              Serve
            </h3>
            <ul className="space-y-3 text-sm">
              {ministriesCategories.austinStone.ministries.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-cyan-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Missions Column */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              Missions
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#local" className="hover:text-cyan-400 transition-colors">
                  Local Outreach
                </a>
              </li>
              <li>
                <a href="#global" className="hover:text-cyan-400 transition-colors">
                  Global Missions
                </a>
              </li>
              <li>
                <a href="#missions-involved" className="hover:text-cyan-400 transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              About
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#give" className="hover:text-cyan-400 transition-colors">
                  Give
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Victory Christian Centre
          </p>
        </div>
      </div>
    </footer>
  );
}
