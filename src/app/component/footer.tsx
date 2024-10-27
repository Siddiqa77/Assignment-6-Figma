import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Brand */}
        <div className="flex flex-col items-start">
          <img src="/Group 11 1.png" alt="Logo" className="h-12 w-[100px] mb-2" />
        
        </div>
        
        {/* Information Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Main</a></li>
            <li><a href="#" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Certifications</a></li>
            <li><a href="#" className="hover:text-white transition">Contacts</a></li>
          </ul>
        </div>
        
        {/* Contacts */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className=" text-white"><img src="vector1.png" alt="location" /></span>
              <span>1234 Sample Street, <br /> Austin, Texas 78704</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-white"><img src="Group.png" alt="phone" /></span>
              <span>512.333.2222</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons text-white"><img src="vector2.png" alt="email" /></span>
              <span>sampleemail@gmail.com</span>
            </li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition"><img src="/shape.png" alt="facebook" /></a>
            <a href="#" className="hover:text-white transition"><img src="/shape1.png" alt="twitter" /></a>
            <a href="#" className="hover:text-white transition"><img src="/shape2.png" alt="linkedin" /></a>
            <a href="#" className="hover:text-white transition"><img src="/shape3.png" alt="p" /></a>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2021 All Rights Reserved
      </div>
    </footer>
  
  )
}

export default Footer