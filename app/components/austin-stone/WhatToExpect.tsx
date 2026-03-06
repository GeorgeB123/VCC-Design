import Link from "next/link";

export default function AustinStoneWhatToExpect() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-gray-600 mb-6">
          WHAT TO EXPECT
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
          Come as you are. Experience genuine community and discover God's purpose for your life.
        </h2>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#visit"
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide"
          >
            PLAN YOUR VISIT
          </Link>
          <Link
            href="#service-times"
            className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-900 hover:text-white transition-colors uppercase tracking-wide"
          >
            SERVICE TIMES
          </Link>
        </div>
      </div>
    </section>
  );
}
