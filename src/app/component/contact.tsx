import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
   <section>
    <div className="w-[1170px] h-[603px] relative left-[120px]">
  <Link href="#"><div className="left-0 top-0 absolute text-[#bdbdbd] text-[64px] font-light font-['Roboto'] leading-[64px]">Contact Us</div></Link>
  <img className="w-[749px] h-[369px] left-[421px] top-[86px] absolute" src="/image 12.png" />
  <div className="w-[221.81px] h-[71px] left-0 top-[532px] absolute">
    <div className="w-[222px] h-[71px] left-0 top-0 absolute bg-[#333333]" />
    <div className="w-[126px] h-6 left-[47px] top-[24px] absolute">
      <div className="left-0 top-[6px] absolute text-white text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">Send Email</div>
      <div className="w-6 h-6 left-[102px] top-0 absolute">
        <div className="w-6 h-6 left-[-0px] top-[-0px] absolute" />
        <div className="w-[17.21px] h-2 left-[3px] top-[7.50px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="w-[391px] h-[46px] left-0 top-[86px] absolute bg-[#f3f3f3]" />
  <div className="left-[21px] top-[101px] absolute text-[#8d8d8d] text-sm font-normal font-['Roboto'] tracking-wide">Name</div>
  <div className="w-[391px] h-[45px] left-0 top-[142px] absolute bg-[#f3f3f3]" />
  <div className="left-[21px] top-[156px] absolute">
    <span className="text-[#8d8d8d] text-sm font-normal font-['Roboto'] tracking-wide">Phone Number</span><span className="text-[#c30000] text-sm font-normal font-['Roboto'] tracking-wide">*</span></div>
  <div className="w-[391px] h-[46px] left-0 top-[197px] absolute bg-[#f3f3f3]" />
  <div className="left-[21px] top-[211px] absolute">
    <span className="text-[#8d8d8d] text-sm font-normal font-['Roboto'] tracking-wide">E-mail</span><span className="text-[#c30000] text-sm font-normal font-['Roboto'] tracking-wide">*</span></div>
  <div className="w-[391px] h-[45px] left-0 top-[253px] absolute bg-[#f3f3f3]" />
  <div className="left-[21px] top-[267px] absolute text-[#8d8d8d] text-sm font-normal font-['Roboto'] tracking-wide">Interested In</div>
  <div className="w-[391px] h-[147px] left-0 top-[308px] absolute bg-[#f3f3f3]" />
  <div className="left-[21px] top-[322px] absolute">
    <span className="text-[#8d8d8d] text-sm font-normal font-['Roboto'] tracking-wide">Message</span><span className="text-[#c30000] text-sm font-normal font-['Roboto'] tracking-wide">*</span></div>
</div>
</section>
  )
}

export default Contact