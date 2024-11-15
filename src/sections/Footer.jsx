import {footer} from '../constants';

const Footer = () => {
  return (
      <header className='mt-lg'>
        <footer className='md:grid md:grid-cols-6 md:px-16 md:gap-x-10'>
          {footer.map((id) => (
             <div className='max-sm:grid sm:grid-cols-1 gap-2 md:flex-row  md:text-[12px] md:gap-0 max-sm:mt-4 '>
                <h1 className='font-bold md:text-md'> {id.title} </h1>
            <ul className='py-4 '>
                <li className='footerList'>{id.text[0]}</li>  
                <li className='footerList'>{id.text[1]}</li>  
                <li className='footerList'>{id.text[2]}</li>  
                
            </ul>
              </div>
          )
          )}
        </footer>
<div className=' my-9 border-b-2 '></div>
        <p className='text-[10px] md:text-gray-500 xl:text-[14px]  leading-5'>CredPal financial services are offered by Dawakin Kudu Microfinance Bank Ltd, fully licensed and regulated by the Central bank of Nigeria. CredPal offers innovative financial solutions including payment, savings and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in instalments across online and offline Merchants by providing them with instant access to credit at the point of checkout.
</p>
<div className=' my-9 border-b-2 '></div>
<p className='mt-2 text-[10px] text-gray-500'>Copyright © 2023. All rights reserved</p>
      </header>
  )
}

export default Footer