import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <section className="py-12 px-6 bg-white">
   <div className="w-[1170px] h-[765px] relative left-[90px]">
  <div className="w-[221.81px] h-[71px] left-[948px] top-[694px] absolute">
    <div className="w-[222px] h-[71px] left-0 top-0 absolute bg-[#333333]" />
    <div className="w-[143px] h-6 left-[39px] top-[24px] absolute">
      <Link href="/project"><div className="left-0 top-[6px] absolute text-white text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">All Projects</div></Link>
      <div className="w-6 h-6 left-[119px] top-0 absolute">
        <div className="w-6 h-6 left-[-0px] top-[-0px] absolute" />
        <div className="w-[17.21px] h-2 left-[3px] top-[7.50px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="left-0 top-0 absolute text-[#bdbdbd] text-[64px] font-light font-['Roboto'] leading-[64px]">Our Projects</div>
  <img className="w-[570px] h-[255px] left-[15px] top-[124px] absolute" src="Rectangle 12.png" />
  <img className="w-[570px] h-[255px] left-[15px] top-[124px] absolute" src="/Rectangle 17.png" />
  <div className="w-[233px] h-40 left-[79px] top-[172px] absolute">
    <div className="w-[129px] h-6 left-0 top-[136px] absolute">
      <div className="left-0 top-[6px] absolute text-white text-xs font-normal font-['Gothic A1'] uppercase leading-3 tracking-widest">View More</div>
      <div className="w-6 h-6 left-[105px] top-0 absolute">
        <div className="w-6 h-6 left-[-0px] top-[-0px] absolute" />
        <div className="w-[17.21px] h-2 left-[3px] top-[7.50px] absolute">
        </div>
      </div>
    </div>
    <div className="left-0 top-0 absolute text-white text-[64px] font-bold font-['Roboto'] leading-[64px]">Sample <br/>Project</div>
  </div>
  
 
  <img className="w-[370px] h-[255px] left-[800px] top-[409px] absolute" src="/image 18.png" />
  <img className="w-[570px] h-[255px] left-[600px] top-[124px] absolute" src="image 15.png" />
  
  <img className="w-[470px] h-[255px] left-[300px] top-[409px] absolute" src="/image 17.png" />
 
  <img className="w-[270px] h-[255px] left-0 top-[409px] absolute" src="/image 16.png" />
</div>
  </section>
  
  )
}

export default Project