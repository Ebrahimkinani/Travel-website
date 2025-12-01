import { PRICING_PLANS } from '@/constants'

const PricingCards = () => {
  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses = {
      blue: {
        card: 'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100',
        accent: 'bg-blue-500',
        text: 'text-blue-600',
        button: 'bg-blue-500 hover:bg-blue-600 text-white'
      },
      green: {
        card: 'border-green-200 bg-gradient-to-br from-green-50 to-green-100',
        accent: 'bg-green-500',
        text: 'text-green-600',
        button: 'bg-green-500 hover:bg-green-600 text-white'
      },
      purple: {
        card: 'border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100',
        accent: 'bg-purple-500',
        text: 'text-purple-600',
        button: 'bg-purple-500 hover:bg-purple-600 text-white'
      }
    }
    
    const classes = baseClasses[color as keyof typeof baseClasses]
    return popular ? {
      ...classes,
      card: classes.card + ' ring-2 ring-green-300 shadow-xl',
      badge: 'bg-green-500 text-white'
    } : {
      ...classes,
      badge: 'bg-gray-500 text-white'
    }
  }

  return (
    <section className="padding-container py-16 bg-white">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const colors = getColorClasses(plan.color, plan.popular)
            
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${colors.card}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-6 py-2 rounded-full text-sm font-semibold ${colors.badge}`}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-800">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className={`w-5 h-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included (if any) */}
                {plan.notIncluded.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-600 mb-4">Not Included:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-500 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg ${colors.button}`}>
                    Choose {plan.name}
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 ${colors.accent} rounded-b-3xl`}></div>
              </div>
            )
          })}
        </div>

        {/* Custom Package Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                  Need a Custom Package?
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Create your perfect camping adventure with our bespoke packages tailored to your unique vision
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Flexible Group Sizes</h4>
                  <p className="text-gray-600 text-sm">From intimate couples retreats to large corporate team building adventures</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Personalized Experience</h4>
                  <p className="text-gray-600 text-sm">Custom activities, locations, and amenities based on your preferences</p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Competitive Pricing</h4>
                  <p className="text-gray-600 text-sm">Transparent pricing with no hidden fees and flexible payment options</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group relative bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10">Get Custom Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">Call us: (123) 456-7890</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm mt-4">
                  Free consultation • No obligation • Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCards
