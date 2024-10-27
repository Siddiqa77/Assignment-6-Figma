import React from 'react'

const Mission = () => {
  return (
   <div className="w-full max-w-[1170px] mx-auto h-auto relative p-4 md:p-8">
  {/* Title */}
  <div className="text-center md:text-left text-[#bdbdbd] text-3xl md:text-[64px] font-light font-['Roboto'] leading-tight md:leading-[64px] mb-8">
    Main Focus/Mission Statement
  </div>

  {/* First Block */}
  <div className="flex">
  <div className="flex flex-col md:flex-row items-start md:items-center w-full mb-8 md:mb-0">
    <div className="text-[#f2f2f2] text-8xl md:text-[200px] font-black font-['Roboto']">
      1
    </div>
    <div className="ml-4 md:ml-8 text-[#333333] text-base md:text-[22px] font-normal font-['Roboto'] leading-6 md:leading-9 max-w-xs md:max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
    </div>
  </div>

  {/* Second Block */}
  <div className="flex flex-col md:flex-row items-start md:items-center w-full">
    <div className="text-[#f2f2f2] text-8xl md:text-[200px] font-black font-['Roboto']">
      2
    </div>
    <div className="ml-4 md:ml-8 text-[#333333] text-base md:text-[22px] font-normal font-['Roboto'] leading-6 md:leading-9 max-w-xs md:max-w-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
    </div>
  </div>
</div>
</div>
  )
}

export default Mission