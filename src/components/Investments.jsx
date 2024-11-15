import {INVESTMENTS} from '../constants';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Investments() {
  const [isOpen , setIsOpen] = useState(false)

  return (

    <section id="" className=' grid grid-cols-1 items-center '>
    {INVESTMENTS.map((general, index) => (
<div  className=' relative px-28'>
    <button onClick={() => setIsOpen((prev) => !prev )} key= {index}  className=' w-full  py-5 cursor-pointer appearance-none '>

      <div className='flex justify-between items-center'>
          <p className='text-gray-400'>{general.no}</p>
          <h2 className='text-left max-sm:pl-3 md:pl-5'>{general.id}</h2>
          <div className='text-neutral-950 text-lg rounded-sm grid justify-end'> 
           {!isOpen ? (<MdKeyboardArrowDown />): ( <MdKeyboardArrowUp />)}
          </div>
      </div>
    </button>

        {isOpen && ( <div key={index} className=' overflow-hidden  text-left justify-center text-gray-500 px-5 max-md:text-sm md:px-10'>{general.description}</div> 
                    )}
        <div className='border-b-2 my-5' />
 </div>

))}

    </section>

  )
}

export default Investments