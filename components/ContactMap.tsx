import React from 'react'

const ContactMap = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>

      {/* Address Information */}
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
            <p className="text-gray-600 text-sm">
              123 Adventure Lane<br />
              Mountain View, CA 94041<br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
            <p className="text-gray-600 text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg flex-shrink-0">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Best Time to Visit</h4>
            <p className="text-gray-600 text-sm">
              Weekdays: 10 AM - 4 PM<br />
              Saturdays: 10 AM - 2 PM<br />
              Walk-ins welcome, appointments recommended
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMap
