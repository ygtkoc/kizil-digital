import { RevealWrapper } from  'next-reveal';
import React from 'react';


const Promotion = () => {
 

 return <>
    <section className="h-128 relative bg-gradient-to-b  items-center justify-center flex from-black to-stone-900 to-10%">
    <div className="group flex md:flex-row flex-col relative  h-3/4 w-3/4 items-center text-center justify-between mt-20">
        <div className="w-full h-1/2 md:w-1/2 md:h-full  justify-center items-center flex flex-col md:mr-10">
                <h1>Başlık 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptas?</p>
        </div>
        <div className="h-auto w-1/6  justify-center items-end flex">
        <a href='/iletisim' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group transition-transform bg-gradient-to-br from-black to-stone-500 group-hover:from-stone-700 group-hover:to-black group-hover:text-white dark:text-white  dark:focus:ring-blue-800 duration-1000 shadow-xl">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold font-inter">
            Sayfaya Git
            </span>
        </a>
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full  flex items-center justify-center md:ml-10">
                <div className="bg-[url('./images/mainslider4.jpg')] bg-cover bg-center h-full w-full rounded-3xl shadow-xl group-hover:scale-105 duration-500"></div>
        </div>
     
    </div>
</section>

<section className="h-128 relative bg-gradient-to-t from-green-900 to-stone-900 to-10% items-center justify-center flex  pb-10">
<div className="group flex md:flex-row flex-col relative  h-3/4 w-3/4 items-center text-center justify-between mt-20">
   
<div className="w-full h-1/2 md:w-1/2 md:h-full  flex items-center justify-center md:ml-10">
            <div className="bg-[url('./images/mainslider4.jpg')] bg-cover bg-center h-full w-full rounded-3xl shadow-xl group-hover:scale-105 duration-500"></div>
    </div>
    <div className="h-auto w-1/6  justify-center items-end flex">
        <a href='/iletisim' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group transition-transform bg-gradient-to-br from-black to-stone-500 group-hover:from-stone-700 group-hover:to-black group-hover:text-white dark:text-white  dark:focus:ring-blue-800 duration-1000 shadow-xl">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold font-inter">
            Sayfaya Git
            </span>
        </a>
        </div>
    <div className="w-full h-1/2 md:w-1/2 md:h-full  justify-center items-center flex flex-col md:mr-10">
            <h1>Başlık 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptas?</p>
    </div>
    
    
 
</div>
</section>
</>
  
}

export default Promotion