import Image from 'next/image'

const steps = [
  {
    id: 1,
    title: 'Book Your Camping Experience',
    description: 'Choose from our guided camping adventures, equipment rental, or exclusive locations. Book online or call our camping specialists.',
    icon: '/phone.png',
    color: 'bg-green-50'
  },
  {
    id: 2,
    title: 'Select Your Camping Package',
    description: 'Choose from our range of camping services - guided adventures, equipment rental, skills training, or exclusive location access.',
    icon: '/map.svg',
    color: 'bg-blue-50'
  },
  {
    id: 3,
    title: 'Prepare for Your Adventure',
    description: 'We handle all the planning - equipment setup, meal planning, safety briefings, and transportation arrangements.',
    icon: '/calendar.svg',
    color: 'bg-orange-50'
  },
  {
    id: 4,
    title: 'Enjoy Your Camping Experience',
    description: 'Relax and enjoy your camping adventure with our expert guides, premium equipment, and exclusive locations.',
    icon: '/tech.svg',
    color: 'bg-purple-50'
  },
  {
    id: 5,
    title: 'Share Your Memories',
    description: 'Document your camping experience and share with our community. Leave reviews and help others discover amazing camping spots.',
    icon: '/star.svg',
    color: 'bg-yellow-50'
  }
]

const HowItWorksSteps = () => {
  return (
    <section className="padding-container py-10 lg:py-20">
      <div className="max-container">
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-6`}>
                  <span className="text-2xl font-bold text-gray-800">{step.id}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSteps
