
"use client";

import dynamic from 'next/dynamic';


const ScrollReveal = dynamic(() => import('scrollreveal').then(mod => mod.default), { ssr: false });

const CampaignSection = () => {
    
  

  return (
    <section className="h-128 relative bg-black flex justify-center drop-shadow-lg">
    <div className="bg-black h-full w-11/12 flex items-center justify-center">
      <div className="h-3/6 bg-black w-9/12 md:w-11/12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="border h-full w-full md:w-1/4 text-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white">Campaign 1</h1>
        </div>
        <div className="border h-full w-full md:w-1/4 text-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white">Campaign 2</h1>
        </div>
        <div className="border h-full w-full md:w-1/4 text-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white">Campaign 3</h1>
        </div>
        <div className="border h-full w-full md:w-1/4 text-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white">Campaign 4</h1>
        </div>
      </div>
        {/* <div className=""><a href="#" className="txt-vln-red">BÜTÜN SERVİSLER</a></div> */}
    </div>
  </section>
  )
}

export default CampaignSection