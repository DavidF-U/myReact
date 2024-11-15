import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <header id="home" className="sm:py-[5rem] max-sm:py-[2.5rem] md:max-w-[48rem] mx-auto  w-full xl:px-[4rem]  ">
      <h1 className=" w-full text-[3rem] font-bold  leading-[1.4] mb-6 max-sm:font-semibold max-sm:text-[2.5rem] md:text-[2.5rem]">
        Frequently <br className="hidden max-sm:block"/>asked questions
      </h1>
      <p className="leading-[2] text-base max-sm:text-[14px] md:text-[12px] relative">Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.</p>
      <form className=" mt-9 flex flex-row justify-center items-center max-w-full">
        <input type="text" className="h-12 pl-4 pr-[3.625rem] py-[0.875rem] rounded-full text-sm w-50% relative" placeholder="Search for anything..."></input>

       <button className=" absolute bg-blue-500 rounded-full max-sm:right-1/4  py-2 px-2 sm:right-1/3 "> <CiSearch className="text-neutral-100 cursor-pointer text-bold size-3" /> </button>
       </form>

    </header>
  )
}

export default Home