import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto mb-8 lg:mb-0">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-lg font-extrabold mb-4 font-gemunu">SHOP</h3>
          <ul>
            <li><a href="#" className="hover:underline">Drinks</a></li>
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Store Locator</a></li>
            <li><a href="#" className="hover:underline">Refer a Friend</a></li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="text-lg font-extrabold mb-4 font-gemunu">HELP</h3>
          <ul>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg mb-4 font-gemunu font-extrabold">Hakkımızda</h3>
          <ul>
            <li><a href="#" className="hover:underline font-gemunu">Hikayemiz</a></li>
            <li><a href="#" className="hover:underline">Merak Ettikleriniz</a></li>
            <li><a href="#" className="hover:underline">Ingredients</a></li>
            <li><a href="#" className="hover:underline">Sağladığımız Hizmetler</a></li>
            <li><a href="#" className="hover:underline">Fiyatlandırmalar</a></li>
            <li><a href="#" className="hover:underline">Sık Sorulan Sorular</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
        <form className="flex mb-4">
          <input type="email" placeholder="Mail Adresiniz" className="py-2 px-4 rounded-l-full outline-none" />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-r-full">Kayıt Ol</button>
        </form>
        <p className="text-sm mb-4">Size ulaşmamız için mail adresiniz ile kayıt olabilirsiniz.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            <img src="/path-to-instagram-icon" alt="Instagram" />
          </a>
          <a href="#" className="hover:underline">
            <img src="/path-to-facebook-icon" alt="Facebook" />
          </a>
          <a href="#" className="hover:underline">
            <img src="/path-to-twitter-icon" alt="Twitter" />
          </a>
          <a href="#" className="hover:underline">
            <img src="/path-to-linkedin-icon" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
      <p className="text-sm">© 2024 Kızıl Digital, Inc. Bütün Hakları Alınmıştır</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline text-sm">Kullanım Şartları</a>
        <a href="#" className="hover:underline text-sm">Gizlilik Politikası</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer