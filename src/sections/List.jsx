import General from "../components/General";
import Savings from "../components/Savings";
import Creditbuilder from "../components/Creditbuilder";
import Investments from "../components/Investments";
import Cash from "../components/Cash";
import React, { useState } from "react";

const List = () => {

const [pill, setPill] = useState(1)
const pillTab = (index) => {
  setPill(index);
}


  return (

<header id="list" className='flex-col flex items-center ] md:px-[6rem] '>
<section>

 <div className="flex justify-center items-center flex-wrap md:gap-3 lg:gap-5 max-sm:text-[10px] max-sm:gap-5 gap-10   px-7 text-sm min-w-full mb-10 cursor-pointer text-neutral-700 font-semibold xl:text-[0.8rem] md:text-[12px]" >
<div className={`${pill === 1 ? 'bg-blue-500 rounded-full p-2 max-sm:py-1 max-sm:px-2' : ''}`} onClick={() => pillTab(1)}> General</div>
<div className={`${pill === 2 ? 'bg-blue-500 rounded-full p-2 max-sm:py-1 max-sm:px-2' : ''}`} onClick={() => pillTab(2)}> Savings</div>
<div className={`${pill === 3 ? 'bg-blue-500 rounded-full p-2 max-sm:py-1 max-sm:px-2' : ''}`} onClick={() => pillTab(3)}> Credit Builder</div>
<div className={`${pill === 4 ? 'bg-blue-500 rounded-full p-2 max-sm:py-1 max-sm:px-2' : ''}`} onClick={() => pillTab(4)}> Investments</div>
<div className={`${pill === 5 ? 'bg-blue-500 rounded-full p-2 max-sm:py-1 max-sm:px-2' : ''}`} onClick={() => pillTab(5)}> Cash Wallet</div>

</div>



<div >

 <div  className={`${pill === 1 ? 'block' : 'hidden'}`} ><General/></div>
 <div  className={`${pill === 2 ? 'block' : 'hidden'}`}><Savings/></div>
 <div  className={`${pill === 3 ? 'block' : 'hidden'}`}><Creditbuilder/></div>
 <div  className={`${pill === 4 ? 'block' : 'hidden'}`}><Investments/></div>
 <div  className={`${pill === 5 ? 'block' : 'hidden'}`}><Cash/></div>
                  
</div>
</section>

</header> 
)
}

export default List