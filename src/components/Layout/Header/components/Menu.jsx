import React from 'react'
import facebook from '../../../../assets/facebook.png'
import instagram from '../../../../assets/instagram.png'
import { Link } from 'react-router-dom'

export default function Menu() {
    const closeMenu = function () {
        document.getElementById('drawer-navigation').classList.add('-translate-x-full')
    }
  return (
    <div>
      <div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
  
    <button type="button" data-drawer-hide="drawer-navigation"  onClick={closeMenu} aria-controls="drawer-navigation" class="text-black bg-gray-100 rounded-full text-sm w-8 h-8 absolute top-6 start-6 inline-flex items-center justify-center " >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-normal pt-14">
         <li>
            <Link to="/" class="flex items-center px-0 py-2 text-gray-400 focus:text-black group">
             
               <span class="ms-3">Главная</span>
            </Link>
         </li>
         <li>
           
         <Link to="/ShopProducts" class="flex items-center px-0 py-2  text-gray-400 focus:text-black   group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Магазин товаров</span>
              
            </Link>
         </li>
         <li>
            <a href="#" class="flex items-center px-0 py-2 text-gray-400 focus:text-black   group">
           
               <span class="flex-1 ms-3 whitespace-nowrap">Договор оферты</span>
             
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-0 py-2 text-gray-400 focus:text-black  group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Сертификаты</span>
              
            </a>
         </li>
         <li class="pt-20">
            <a href="tel:+998 55 519 90 90" target='_blank' class="flex flex-col items-start px-0 gap-3 py-2  text-black  group">
           
               <span class="flex-1 ms-3 whitespace-nowrap">Телефон:</span>
               <span class="text-lg ms-3 font-bold">+998 55 519 90 90</span>
            </a>
         </li>
         <li class="flex gap-2 px-2">
           <button>
           <a href="https://www.facebook.com" target="_blank" class="flex items-center py-2 px-0 text-gray-400 focus:text-black  rounded-lg group">
             
           <img src={facebook} alt="" />
             </a>
           </button>
           <button>
           <a href="https://www.instagram.com" target="_blank" class="flex items-center py-2 px-0 text-gray-400 focus:text-black  rounded-lg group">
             
           <img src={instagram} alt="" />
             </a>
           </button>
         </li>
       
      </ul>
   </div>
</div>

    </div>
  )
}
