const CallToAction = () => {
  return (
    <section className="padding-container py-16">
      <div className="max-container text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Camping Adventure?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of campers who trust Hilink Camping for their outdoor adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
