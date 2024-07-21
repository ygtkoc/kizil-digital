import { RevealWrapper } from 'next-reveal'
import React from 'react'

const Header = () => {
  return (
  
    <header className="bg-black py-6 lg:py-6.5 text-vln-grey uppercase">
       
           <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />  
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gemunu+Libre:wght@200..800&display=swap" rel="stylesheet"></link>
          
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
  
    <RevealWrapper rotate={{x:12,y:40,z:0}} origin='top' delay={110} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><a href="/" className="pl-4 md:pl-0 text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-sky-500 to-indigo-500">Kızıl Digital</a></RevealWrapper>

    <RevealWrapper rotate={{x:12,y:40,z:0}} origin='right' delay={150} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
    <div className="block md:hidden pr-4">
  <a href="">
  <div className="space-y-1">
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
</div>
</a>
</div>
</RevealWrapper>
  
<nav className="hidden md:flex justify-end flex-1">
  
<div className="flex items-center text-lg space-x-4 lg:space-x-8">
<RevealWrapper rotate={{x:12,y:40,z:0}} origin='top' delay={170} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><a href="/" className="hover:text-vln-melon text-white transition duration-500">Ana Sayfa</a></RevealWrapper>
<RevealWrapper rotate={{x:12,y:40,z:0}} origin='top' delay={230} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><a href="/servisler" className="hover:text-vln-melon text-white transition duration-500">Servİsler</a></RevealWrapper>
<RevealWrapper rotate={{x:12,y:40,z:0}} origin='top' delay={290} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><a href="/vizyon" className="hover:text-vln-melon text-white transition duration-500">Vİzyon</a></RevealWrapper>
<RevealWrapper rotate={{x:12,y:40,z:0}} origin='top' delay={350} duration={1000} distance='100px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><a href="/iletisim" className="hover:text-vln-melon text-white transition duration-500">İletİşİm</a></RevealWrapper>
</div>
</nav>
</div>

  </header>
 
  )
}

export default Header