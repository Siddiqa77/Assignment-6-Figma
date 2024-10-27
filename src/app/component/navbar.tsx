import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    
     <div className="Component1 w-96 h-24 relative ">
  <div className="Rectangle20 w-96 h-24 left-0 top-0 absolute"></div>
  <div className="Group11 w-16 h-11 left-[135px] top-[29.14px] absolute">
    <img src="/Group 11.png" alt="" />
    <div className="Group8 w-16 h-10 left-[1.45px] top-[-0px] absolute"></div>
  </div>
  <Link href="/"> <div className="Main w-16 h-3 left-[549px] top-[44.69px] absolute text-zinc-800 text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">Main</div></Link>
  <Link href="/gallery"><div className="Gallery left-[663px] top-[44.69px] absolute text-zinc-800 text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">GALLERY</div></Link>
  <Link href="/project"><div className="Projects w-20 h-2.5 left-[789px] top-[45px] absolute text-zinc-800 text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">PROJECTS</div></Link>
  <Link href="/contact"><div className="Contacts w-20 h-3 left-[1092px] top-[44.69px] absolute text-zinc-800 text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">CONTACTS</div></Link>
  <Link href="/certification"> <div className="Certifications w-32 h-2.5 left-[920px] top-[45px] absolute text-zinc-800 text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">CERTIFICATIONS</div></Link>
  <div className="Rectangle18 w-16 h-px left-[535px] top-[60.23px] absolute bg-zinc-800"></div>
  <div className="Rectangle19 w-16 h-px left-[535px] top-[39.83px] absolute bg-zinc-800"></div>
</div>
  

  );
};

export default Navbar;