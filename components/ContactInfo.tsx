import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        {/* Office Hours */}
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl flex-shrink-0">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Emergency Support</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>24/7 Emergency Line: (123) 456-7890</p>
              <p>For urgent camping emergencies</p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl flex-shrink-0">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Response Time</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Email inquiries: Within 24 hours</p>
              <p>Phone calls: Immediate during business hours</p>
              <p>Emergency calls: Immediate response</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl flex-shrink-0">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2m-5 9v3m0 0l-2-2m2 2l2-2" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Follow Us</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Instagram: @hilinkcamping</p>
              <p>Facebook: Hilink Camping Adventures</p>
              <p>YouTube: Hilink Camping Channel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Additional Services</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Custom Packages</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Group Discounts</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Equipment Rental</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
