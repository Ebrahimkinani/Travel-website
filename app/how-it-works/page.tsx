import HeroSection from '@/components/HeroSection'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import CallToAction from '@/components/CallToAction'

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <HeroSection />
      <HowItWorksSteps />
      <CallToAction />
    </div>
  )
}

export default HowItWorks
