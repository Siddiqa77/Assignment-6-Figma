// import React from "react";

// const About = () => {
//   return (
//     <div className="flex">
//       <div className="w-full max-w-[1170px] mx-auto h-auto relative p-4 md:p-8">
//         {/* Background Container */}
//         <div className="w-full h-[400px] md:h-[435px] bg-neutral-50 rounded-lg"></div>

//         {/* Title */}
//         <div className="absolute top-[30px] right-0 left-auto text-center md:left-[700px] text-[#bdbdbd] text-4xl md:text-[64px] font-light font-['Roboto'] leading-tight md:leading-[64px]">
//           About
//         </div>

//         {/* Images */}
//         <img
//           className="absolute left-4 top-[30px] w-[120px] h-[115px] md:w-[270px] md:h-[265px] rounded-lg"
//           src="/Rectangle8.png"
//           alt="Image 1"
//         />
//         <img
//           className="absolute left-0 md:left-[400px] top-[60px] w-[120px] h-[150px] md:w-[270px] md:h-[345px] rounded-lg"
//           src="/Rectangle 9.png"
//           alt="Image 2"
//         />
//         <img
//           className="absolute left-0 top-[200px] md:left-[100px] md:top-[325px] w-[120px] h-[70px] md:w-[270px] md:h-[140px] rounded-lg"
//           src="/Rectangle 10.png"
//           alt="Image 3"
//         />

//         {/* Button */}
//         <div className="absolute left-auto right-4 md:left-[700px] top-[334px] md:top-[334px] w-[150px] md:w-[222px] h-10 md:h-[71px] flex items-center justify-center bg-white rounded-lg shadow-md">
//           <span className="text-[#333333] text-xs md:text-base font-normal font-['Roboto'] uppercase tracking-widest">
//             Read More
//           </span>
//           <div className="w-4 h-4 md:w-6 md:h-6 ml-2 flex items-center justify-center">
//             {/* Icon content can go here */}
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="absolute left-auto right-4 md:left-[700px] top-[114px] md:top-[114px] w-[90%] md:w-[400px] h-auto text-black text-sm md:text-base font-light font-['Roboto'] leading-5 md:leading-[25px]">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1170px] mx-auto h-auto relative p-4 md:p-8">
        {/* Background Container */}
        <div className="w-full h-[400px] md:h-[435px] bg-neutral-50 rounded-lg"></div>

        {/* Title */}
        <div className="absolute top-[20px] right-0 left-auto md:left-[700px] text-center md:text-left text-[#bdbdbd] text-4xl md:text-[64px] font-light font-['Roboto'] leading-tight md:leading-[64px]">
          About
        </div>

        {/* Images */}
        <img
          className="absolute left-4 top-[30px] w-[120px] h-[115px] md:w-[270px] md:h-[265px] rounded-lg"
          src="/Rectangle8.png"
          alt="Image 1"
        />
        <img
          className="absolute left-1/4 top-[60px] md:left-[400px] w-[120px] h-[150px] md:w-[270px] md:h-[345px] rounded-lg"
          src="/Rectangle 9.png"
          alt="Image 2"
        />
        <img
          className="absolute left-8 top-[200px] md:left-[100px] md:top-[325px] w-[120px] h-[70px] md:w-[270px] md:h-[140px] rounded-lg"
          src="/Rectangle 10.png"
          alt="Image 3"
        />

        {/* Button */}
        <div className="absolute right-4 md:left-[700px] top-[334px] md:top-[334px] w-[150px] md:w-[222px] h-10 md:h-[71px] flex items-center justify-center bg-white rounded-lg shadow-md">
          <span className="text-[#333333] text-xs md:text-base font-normal font-['Roboto'] uppercase tracking-widest">
            Read More
          </span>
          <div className="w-4 h-4 md:w-6 md:h-6 ml-2 flex items-center justify-center">
            {/* Icon content can go here */}
          </div>
        </div>

        {/* Text Content */}
        <div className="absolute right-4 md:left-[700px] top-[114px] md:top-[114px] w-[90%] md:w-[400px] text-black text-sm md:text-base font-light font-['Roboto'] leading-5 md:leading-[25px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
};

export default About;
