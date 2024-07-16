import React from 'react'

const Header = () => {
  return (
    
    <header className="bg-black py-6 lg:py-6.5 text-vln-grey uppercase">
           <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />  
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gemunu+Libre:wght@200..800&display=swap" rel="stylesheet"></link>
    <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
  
  <a href="#" className="pl-4 md:pl-0 text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-sky-500 to-indigo-500">Kızıl Digital</a>

  
  <div className="block md:hidden pr-4">
  <a href="">
  <div className="space-y-1">
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
  <div className="bg-vln-grey w-8 h-1 rounded-full"></div>
</div>
</a>
</div>

  
<nav className="hidden md:flex justify-end flex-1">
  
<div className="flex items-center text-lg space-x-4 lg:space-x-8">
<a href="/" className="hover:text-vln-melon text-white transition duration-500">Ana Sayfa</a>
<a href="/servisler" className="hover:text-vln-melon text-white transition duration-500">Servisler</a>
<a href="/vizyon" className="hover:text-vln-melon text-white transition duration-500">Vizyon</a>
<a href="/iletisim" className="hover:text-vln-melon text-white transition duration-500">İletişim</a>
</div>
</nav>
</div>

  </header>
  )
}

export default Header