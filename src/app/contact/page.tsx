import React from 'react'

const Contactinfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Contact Information */}
        <div>
          <h2 className="text-gray-400 text-3xl font-light mb-2">
            Contact
          </h2>
          <h1 className="text-4xl font-bold mb-6">Information</h1>
  
          <p className="font-semibold text-lg">Company Name</p>
          <p className="text-gray-600 mb-4">
            1234 Sample Street, Austin, Texas 76401
          </p>
  
          <p className="text-2xl font-bold mb-2">512.333.2222</p>
          <p className="text-gray-600 mb-8">sampleemail@gmail.com</p>
  
          <button className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
  
        {/* Right Section - Embedded Image */}
        <div className="w-full h-auto flex justify-center items-center">
          <img
            src="image 14.png"
            alt="Location Map"
            className="w-full max-w-[600px] h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contactinfo