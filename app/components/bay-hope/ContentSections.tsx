import { ministries } from "@/data/ministries";
import { services } from "@/data/services";
import { mediaResources } from "@/data/sermons";
import { mission } from "@/data/missions";

export default function BayHopeContent() {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-pink-500 to-pink-600",
  ];

  return (
    <div className="bg-white">
      {/* Campus Locations Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Wellington
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="w-full h-64 bg-gradient-to-br from-orange-300 to-red-300 rounded-2xl mb-4"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services.location.city}
                </h3>
                <p className="text-gray-700 mb-6">
                  {services.location.region}
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {services.sunday.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {services.contact.phone}
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    {services.parking.general}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ministries for Everyone
            </h2>
            <p className="text-xl text-gray-600">
              Find your place to grow and connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div
                key={ministry.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${colors[index % colors.length]}`}></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    {ministry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <a
                    href={`#${ministry.id}`}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch & Resources Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Watch & Listen
            </h2>
            <p className="text-xl text-gray-600">
              Can't make it in person? Connect online!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaResources.map((resource, index) => (
              <a
                key={resource.name}
                href={resource.href}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${colors[index % colors.length]} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {resource.name}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            How Can We Pray for You?
          </h2>
          <p className="text-xl mb-8 text-orange-50 leading-relaxed">
            We believe in the power of prayer. Share your prayer request with us and our team will be praying for you.
          </p>
          <a
            href="#prayer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
          >
            Submit Prayer Request
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {mission.taglines.bayHope}
            </h2>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              {mission.vision}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {mission.values.slice(0, 2).map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
