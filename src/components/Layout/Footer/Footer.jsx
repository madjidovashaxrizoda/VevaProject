import React from 'react'
import VevaWater from '../../../assets/VEVA_Logo.png'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import telegram from '../../../assets/telegram.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
   <div class="bg-white" id='footer'>
   <div class="hidden max-[650px]:block">
   <a href="https://t.me/vevauz_bot" target='blank'  class="w-[80%] mb-10 m-auto h-auto p-2 flex gap-2 bg-[#1CBBEE] rounded-[1000px] items-center justify-center shadow-2xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
  <path d="M9.9174 13.1814L9.5204 18.7656C10.0884 18.7656 10.3344 18.5215 10.6294 18.2285L13.2925 15.6835L18.8106 19.7246C19.8226 20.2886 20.5357 19.9916 20.8087 18.7936L24.4308 1.82114L24.4318 1.82014C24.7528 0.324108 23.8907 -0.260906 22.9047 0.106103L1.6142 8.2573C0.16117 8.82131 0.18317 9.63133 1.3672 9.99834L6.81033 11.6914L19.4536 3.78019C20.0486 3.38618 20.5897 3.60419 20.1446 3.9982L9.9174 13.1814Z" fill="white"/>
</svg> 
<div class="flex flex-col ">
  <p class="text-sm text-white flex flex-col ">Заказать через 
<span class="font-bold">телеграмм бот</span></p>
</div>
    </a>
   </div>
     <div class="border-t-2 w-[80%] border-gray-300 m-auto flex justify-between ">
      <div class="flex gap-10 pt-8 pb-4 justify-center items-start ">
<a href="#" class="max-[650px]:hidden"><img src={VevaWater} alt="" /></a>
<div class="flex gap-10 max-[650px]:flex-col-reverse max-[650px]:gap-2">
  <div class="flex flex-col justify-center gap-[3px] max-[415px]:flex-row max-[415px]:gap-2">
    <h3 class="max-[650px]:text-[#98A2B3]">VEVA © </h3>
    <h3 class="max-[650px]:text-[#98A2B3]">Все права защищены. 2023</h3>
  </div>
  <div class="flex flex-col justify-center gap-[3px]">
    <a href="#" class="underline">Договор оферты</a>
   <a href="#" class="underline">Сертификаты</a> 
   <a href="tel:+998555199090" class="underline hidden max-[415px]:block">Телефон</a>
  </div>
</div>
      </div>
<div class="flex justify-center items-center gap-8 max-[650px]:flex-col-reverse max-[650px]:gap-2 max-[650px]:items-end">
<div class="flex justify-center items-center gap-2 max-[650px]:items-end max-[650px]:justify-end max-[415px]:items-center max-[415px]:justify-center">
  <a href="https://www.facebook.com" target='blank'><img src={facebook} alt="" class="h-10 max-[650px]:h-8 "/></a>
  <a href="https://www.instagram.com" target='blank'><img src={instagram} alt="" class="h-10 max-[650px]:h-8"/></a>
  <a href="https://web.telegram.com" target='blank' class="max-[650px]:hidden"><img src={telegram} alt="" /></a>


</div>
<div class="flex flex-col max-[415px]:hidden">
  <h3 class="self-end">Телефон:</h3>
  <a href='tel:+998 55 519 90 90' target='blank' class="font-bold text-lg max-[415px]:text-[15px]">+998 55 519 90 90</a>
</div>
</div>
    </div>
   </div>
  )
}
