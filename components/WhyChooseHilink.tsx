import Image from 'next/image'
import { FEATURES } from '@/constants'

const WhyChooseHilink = () => {
  return (
    <section className="padding-container py-16 bg-gray-800">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose Hilink Camping?
          </h2>
          <p className="text-lg text-gray-300">
            Our comprehensive camping services make every outdoor adventure safe, comfortable, and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    feature.variant === 'green' 
                      ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-200' 
                      : 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-200' 
                  }`}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  
                  {/* Floating Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  feature.variant === 'green' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-cyan-400 to-cyan-600'
                } rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseHilink
