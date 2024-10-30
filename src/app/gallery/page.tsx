
// import React from 'react'

// const Gallery = () => {
//   return (
//     <section >
       
//        <div className="h-32 flex-col justify-start items-start inline-flex ml-[130px]">
//   <div className="w-[277.76px] text-[#bdbdbd] text-[64px] font-light font-['Roboto'] leading-[64px]">Photo</div>
//   <div className="text-[#333333] text-[64px] font-bold font-['Roboto'] leading-[64px]">Gallery</div>
// </div>

// {/* Horizontal Divider */}
// <div className="w-full max-w-screen-xl h-px bg-[#f2f2f2] mb-8" />

// {/* Project Images Grid */}
// <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-xl ml-[150px]">
//   <div className="w-[210px] h-[260px] bg-[#c4c4c4]"></div>
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 23.png"
//     alt="Project 1"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 24.png"
//     alt="Project 2"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 25.png"
//     alt="Project 3"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 26.png"
//     alt="Project 4"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 27.png"
//     alt="Project 5"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 28.png"
//     alt="Project 6"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 29.png"
//     alt="Project 7"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 30.png"
//     alt="Project 8"
//   />
//   <img
//     className="w-[210px] h-[260px] object-cover"
//     src="/Rectangle 31.png"
//     alt="Project 9"
//   />
// </div>
// </section>  
    
//   )
// }

// export default Gallery
import React from 'react';

const Gallery = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8">
      {/* Title Section */}
      <div className="flex flex-col items-start mb-8">
        <div className="text-gray-400 text-4xl sm:text-5xl md:text-6xl font-light leading-tight font-['Roboto']">
          Photo
        </div>
        <div className="text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-['Roboto']">
          Gallery
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="w-full max-w-screen-xl h-px bg-gray-200 mb-8 mx-auto" />

      {/* Project Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto">
        {/* Placeholder Image */}
        <div className="w-full h-48 sm:h-60 bg-gray-300"></div>
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 23.png"
          alt="Project 1"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 24.png"
          alt="Project 2"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 25.png"
          alt="Project 3"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 26.png"
          alt="Project 4"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 27.png"
          alt="Project 5"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 28.png"
          alt="Project 6"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 29.png"
          alt="Project 7"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 30.png"
          alt="Project 8"
        />
        <img
          className="w-full h-48 sm:h-60 object-cover"
          src="/Rectangle 31.png"
          alt="Project 9"
        />
      </div>
    </section>
  );
};

export default Gallery;
