
"use client";

import dynamic from 'next/dynamic';
import { RevealWrapper } from  'next-reveal'



const CampaignSection = () => {
    
  

  return (
    
    <section className="h-auto relative  bg-black flex justify-center drop-shadow-lg">
    <div className="bg-black h-auto  w-11/12 flex items-center justify-center">
      <div className="h-full pb-20 md:pb-0 pt-20 bg-black w-9/12 md:w-11/12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
       <RevealWrapper rotate={{x:12,y:40,z:0}} origin='right' delay={150} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
        <div className=" md:h-64 w-full flex-col text-center justify-center items-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white tracking-wider">SERVİS 1</h1>
          <div className="w-full flex justify-center">
          <p className='text-vln-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis similique veritatis blanditiis non, vero minus consequuntur quasi soluta debitis?</p>
          </div>
        </div>
        </RevealWrapper>
        <RevealWrapper rotate={{x:12,y:40,z:0}} origin='left' delay={250} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
        <div className=" md:h-64 w-full  flex-col items-center text-center justify-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white tracking-wider">SERVİS 2</h1>
          <div className="w-full flex justify-center">
          <p className='text-vln-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis similique veritatis blanditiis non, vero minus consequuntur quasi soluta debitis?</p>
          </div>
        </div>
        </RevealWrapper>
        <RevealWrapper rotate={{x:12,y:40,z:0}} origin='right' delay={350} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
        <div className=" md:h-64 w-full flex-col items-center text-center justify-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white tracking-wider">SERVİS 3</h1>
          <div className="w-full flex justify-center">
          <p className='text-vln-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis similique veritatis blanditiis non, vero minus consequuntur quasi soluta debitis?</p>
          </div>
        </div>
        </RevealWrapper>
        <RevealWrapper rotate={{x:12,y:40,z:0}} origin='left' delay={450} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
        <div className=" md:h-64 w-full flex-col items-center text-center justify-center pt-5 hover:scale-105 duration-500 reveal-item">
          <h1 className="text-vln-white tracking-wider">SERVİS 4</h1>
          <div className="w-full flex justify-center">
          <p className='text-vln-white w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis similique veritatis blanditiis non, vero minus consequuntur quasi soluta debitis?</p>
          </div>
        </div>
        </RevealWrapper>
      </div>

    </div>

  </section>
  )
}

export default CampaignSection