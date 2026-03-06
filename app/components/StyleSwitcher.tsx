"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const styles = [
  { name: "v1", href: "/" },
  { name: "v2", href: "/v2" },
  { name: "v3", href: "/v3" },
];

export default function StyleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-900 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-1">
        {styles.map((style, index) => {
          const isActive = pathname === style.href;
          return (
            <div key={style.href} className="flex items-center">
              <Link
                href={style.href}
                className={`px-4 py-1 rounded text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {style.name}
              </Link>
              {index < styles.length - 1 && (
                <span className="text-gray-600 mx-1">|</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
