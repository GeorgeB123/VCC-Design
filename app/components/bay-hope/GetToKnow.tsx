import Link from "next/link";

export default function GetToKnow() {
  return (
    <section className="bg-gray-100 pt-20 pb-60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get to Know Victory Christian Centre
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Victory Christian Centre is a church family that loves the gospel,
              loves each other, and loves serving the Heart of Hutt City community.
            </p>
            <Link
              href="#about"
              className="inline-flex items-center bg-[#6b8e99] text-white px-8 py-3 text-sm font-medium hover:bg-[#5a7a85] transition-colors group"
            >
              LEARN MORE
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Column - Four Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Pillar 1: Biblical Teaching */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#34495e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biblical Teaching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe that the gospel is the center of the Bible's story. So our
                teaching is centered on the gospel and applicable for everyday life.
              </p>
            </div>

            {/* Pillar 2: Community */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#34495e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Community matters at Victory Christian Centre. During our small group
                meetings we pray, study God's Word, eat good food, and enjoy
                time together.
              </p>
            </div>

            {/* Pillar 3: Serving our Area */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#34495e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Serving our Area</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hutt City is not only our location. It is also our mission field. Together,
                we look to love our neighbors by sharing the gospel and caring for
                their needs.
              </p>
            </div>

            {/* Pillar 4: All are Welcome */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#34495e] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All are Welcome</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No matter your religious background or life experience, there is
                complete forgiveness and acceptance for all who put their
                faith in Christ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
