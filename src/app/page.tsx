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
            <section className="h-128 relative overflow-hidden">

           
              
              <div className="relative flex p-0 m-0 h-full w-full bg-black">

                      <div className="group flex-1 relative basis-1/2 overflow-hidden cursor-pointer">
                      <div className="absolute w-full h-128 bg-[url('./images/mainslider1.jpg')] bg-cover bg-center group-hover:scale-110 group-hover:opacity-25 duration-500"/>

                          <div className="container flex-col absolute text-center items-center bottom-0 duration-500 bg-gradient-to-b from-transparent to-black">
                            <h3 className="md:text-xl text-md text-sky-500 tracking-widest opacity-100 transition-transform duration:500 drop-shadow">
                              FARKLI FİRMA MÜŞTERİLERİ
                            </h3>
                            <h1 className="text-xl md:text-2xl text-vln-grey duration-700 group-hover:pb-2 opacity-0 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className="text-vln-grey duration-500 text-xs md:text-sm lg:text-base pb-0 group-hover:pb-10 opacity-0 group-hover:opacity-100">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsam. Perspiciatis dolorum, deleniti placeat sapiente quae, facilis vero, nostrum ullam reprehenderit sunt numquam aliquam! Delectus illum dignissimos error magni animi.
                            </p>
                          </div>
                     
                      </div>

                      <div className="group flex-1 basis-1/2 relative overflow-hidden cursor-pointer">
                          <div className="absolute w-full h-128 bg-[url('./images/mainslider2.jpg')] bg-cover bg-center group-hover:scale-110 group-hover:opacity-25 duration-500"/>

                          <div className="container flex-col absolute text-center items-center bottom-0 duration-500 bg-gradient-to-b from-transparent to-black">
                            <h3 className="md:text-xl text-md text-indigo-500 tracking-widest opacity-100 transition-transform duration:500 drop-shadow">
                              BİZİM MÜŞTERİLERİMİZ
                            </h3>
                            <h1 className="text-xl md:text-2xl text-vln-grey duration-700 group-hover:pb-2 opacity-0 group-hover:opacity-100">
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <p className="text-vln-grey duration-500 text-xs md:text-sm lg:text-base pb-0 group-hover:pb-10 opacity-0 group-hover:opacity-100">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsam. Perspiciatis dolorum, deleniti placeat sapiente quae, facilis vero, nostrum ullam reprehenderit sunt numquam aliquam! Delectus illum dignissimos error magni animi.
                            </p>
                          </div>

                      </div>
                      
                </div>

            </section>

            <section className="h-128 relative">
                <div className="bg-black h-full">

                </div>
            </section>
            
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          </>
  );
}
