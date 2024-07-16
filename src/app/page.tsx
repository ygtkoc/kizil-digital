import Image from "next/image";
import Link from 'next/link';
import { Bebas_Neue } from '@next/font/google';
import { Gemunu_Libre } from '@next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
          <>
            <Header></Header>
            <section className="h-128 group relative overflow-hidden">
                <div className="relative flex p-0 m-0 h-full w-full">
                      <div className="flex-1 h-full basis-1/2">
                          <div className="absolute w-1/2 h-128 bg-[url('./images/mainslider1.jpg')] bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-150 origin-left"/>
                      </div>
                      <div className=" flex-1 h-full basis-1/2">
                          <div className="absolute w-1/2 h-128 bg-[url('./images/mainslider2.jpg')] bg-cover bg-center transition-transform duration-1000 ease-in-out transform hover:scale-150 origin-right"/>
                      </div>
                </div>
            </section>

            
            
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </>
  );
}
