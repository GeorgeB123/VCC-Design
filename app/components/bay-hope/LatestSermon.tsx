import Image from "next/image";
import Link from "next/link";

export default function LatestSermon() {
  return (
    <section className="relative py-20 -mt-48">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Video Card */}
        <Link href="#watch" className="block group relative z-10">
          <div className="relative aspect-video overflow-hidden shadow-2xl bg-white">
            {/* Sermon Thumbnail */}
            <Image
              src="/images/sermon.png"
              alt="Latest Sermon"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />

            {/* Dark overlay for better play button visibility */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing effect */}
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>

                {/* Main play button */}
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <svg
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[#34495e] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {/* YouTube Icon */}
            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>

            <p className="text-gray-700 text-base lg:text-lg">
              Watch the latest message from Victory Christian Centre
            </p>
          </div>
        </Link>

        {/* Podcast Links */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-6 uppercase tracking-wide font-medium">
            Listen on Your Favorite Platform
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Link
              href="#apple-podcast"
              className="text-gray-700 hover:text-[#6b8e99] transition-colors"
              title="Apple Podcasts"
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Link>

            <Link
              href="#spotify"
              className="text-gray-700 hover:text-[#6b8e99] transition-colors"
              title="Spotify"
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </Link>

            <Link
              href="#google-podcast"
              className="text-gray-700 hover:text-[#6b8e99] transition-colors"
              title="Google Podcasts"
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
