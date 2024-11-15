import {navLinks} from '../constants'
import { CiMenuFries } from "react-icons/ci";
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {

  // change navbar color from blue to white

    const [color, setColor] = useState(false)
  
  const changeBackground = () => {
  if( window.scrollY >= 100 ){
    setColor(true)
  }else{
    setColor(false)
  }
  };
  window.addEventListener('scroll', changeBackground);
  
// Menubar

const [click, setClick] = useState ()
const handleClick = () => setClick(!click)

  return (
    <header  >
      <nav className={ ` ${ color ? 'bg-white shadow-xl ring-1 ring-slate-500/5  w-full' : 'bg-[#F1F5FF]'} fixed top-0 left-0 right-0 w-full px-10 py-5 z-10 md:px-[6rem] flex justify-between items-center max-container`}>
     <div className="font-bold lg:text-lg cursor-pointer"> MY<span className="text-blue-500 ml-1">REACT</span></div>

      <ul className="flex flex-1 justify-left items-center gap-10 max-lg:hidden px-7 text-sm w-full">
            { navLinks.map((item) => (
              <li key={item.label}>
                  <a
                  href={item.href}
                  className='leading-normal font-light text-neutral-700 hover:text-blue-500'>

                      {item.label}

                  </a>
              </li>
            ))}
      </ul>
            <button className='bg-blue-500 rounded-full py-2 px-4 text-white   text-[0.9rem] max-lg:hidden hover:bg-blue-300 '>Download the Credpal App</button>
            <CiMenuFries onClick={handleClick} className='max-lg:block hidden size-5 cursor-pointer hover:text-blue-500' />
    
    </nav>



<div className={  `${click ? "block" : "hidden" } fixed top-0 flex flex-col flex-1 flex-wrap h-screen w-full bg-white lg:hidden z-50` }>

<div className='flex flex-wrap w-full px-10 max-sm:px-10 md:px-[6rem] py-5 justify-between items-center'>
    <div className="font-bold lg:text-lg"> MY<span className="text-blue-500 ml-1">REACT</span></div>
    <FaTimes className='size-5 cursor-pointer' onClick={handleClick} />
</div>

<div className='flex flex-col justify-center items-center mt-8 md:mt-10 md:text-md '>

    <ul className='flex flex-col justify-left w-full px-10 max-sm:px-7 md:px-[6rem]'>

      {navLinks.map((item) => (
        <li key={item.label} className='py-5'>
                  <a
                  href={item.href} className='leading-normal  text-sm hover:text-blue-500'>

                      {item.label}
                    <div className='border-b-2 mt-5 md:mt-6'/>
                  </a>
          </li>      ))}

    </ul>
   <button className='bg-blue-500 rounded-full py-2 px-4 text-white text-[0.9rem] mt-6 w-[60%] md:w-[40%] hover:bg-blue-300 '>Download the Credpal App</button>
 </div>
    </div>
    </header>
  )
}

export default Nav