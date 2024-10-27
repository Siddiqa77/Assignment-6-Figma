import React from 'react'

const Contactinfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Contact Information */}
        <div>
        <div className="text-[#bdbdbd] text-[64px] font-light font-['Roboto'] leading-[64px]">Contact</div>
        <div className="text-[#333333] text-[64px] font-bold font-['Roboto'] leading-[64px]">Information</div>
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