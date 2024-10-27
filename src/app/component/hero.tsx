import React from 'react'
const Hero = () => {
  return (
    
  
        <section className="flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-16 bg-white">
          {/* Left Side - Title and Navigation */}
          <div className="flex flex-col items-start md:w-1/2 space-y-4">
            <div className='ml-[90px]'>
              <h2 className="text-[64px] text[Roboto] font-light leading-[64px] text-gray-500">PROJECT</h2>
              <h1 className="text-[64px] text[Roboto] font-bold leading-[64px] text-gray-800">Lorum</h1>
            </div>
    
           
    </div>
          {/* Right Side - Image and View Project Button */}
          <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
            <img
              className="w-[600px] h-[500px] object-cover rounded-lg shadow-md"
              src="/Rectangle 6.png" // Replace with your image path
              alt="Project Image"
            />
            
            {/* View Project Button */}
            <div className="mt-4 flex items-center space-x-2">
              <span className="uppercase text-sm text-gray-600 tracking-wide">View Project</span>
              <span className="text-lg font-bold">→</span>
            </div>
          </div>
        </section>
      );
    };
    
   
  


export default Hero;