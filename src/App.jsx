import { Nav, Home, List, Footer, } from './sections';



const App = () => (
  <main className="relative">
    <section className='font'>
      <Nav />
    </section>

    <section className='padding font  text-center bg-[#F1F5FF]  lg:px-24 w-full xl:py-40 pt-[9rem] md:pt-[12rem] md:pb-[7.25rem] '>
       <Home />
    </section>

    <section className='padding font'>
       <List />
    </section>

    <section className='padding font'>
      <Footer />
    </section>

    </main>
  );


export default App;