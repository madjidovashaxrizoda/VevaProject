import React from 'react'

export default function PlusButton() {
  const InfoWater = function (params) {
    document.getElementById('InfoWater').classList.toggle('hidden')
  }
  return (
    <div>
      <button onClick={InfoWater} class="bg-white z-20 p-1.5 rounded-full drop-shadow-[0_20px_20px_rgba(0,0,0,0.20)] absolute top-20 
      
      max-[650px]:right-56 max-[650px]:top-12 max-[600px]:right-52 max-[560px]:right-44 max-[500px]:right-36 max-[430px]:right-28 max-[380px]:right-20
      right-8"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_8_148)">
    <path d="M15.8724 15.8724L23.6621 15.8786C23.8951 15.8786 24.1186 15.786 24.2833 15.6213C24.4481 15.4565 24.5407 15.233 24.5407 15C24.5407 14.767 24.4481 14.5435 24.2833 14.3788C24.1186 14.214 23.8951 14.1214 23.6621 14.1214L15.8724 14.1276L15.8786 6.33795C15.8786 6.10493 15.786 5.88146 15.6213 5.7167C15.4565 5.55193 15.233 5.45937 15 5.45937C14.767 5.45937 14.5435 5.55193 14.3788 5.7167C14.214 5.88146 14.1214 6.10493 14.1214 6.33795L14.1276 14.1276L6.33796 14.1214C6.22245 14.121 6.10799 14.1434 6.00118 14.1873C5.89438 14.2313 5.79733 14.296 5.71565 14.3777C5.63398 14.4594 5.56928 14.5564 5.52529 14.6632C5.48131 14.77 5.45891 14.8845 5.45938 15C5.45891 15.1155 5.48131 15.23 5.52529 15.3368C5.56928 15.4436 5.63398 15.5406 5.71565 15.6223C5.79733 15.704 5.89437 15.7687 6.00118 15.8127C6.10799 15.8567 6.22245 15.8791 6.33796 15.8786L14.1276 15.8724L14.1214 23.6621C14.121 23.7776 14.1434 23.892 14.1874 23.9988C14.2313 24.1056 14.296 24.2027 14.3777 24.2844C14.4594 24.366 14.5564 24.4307 14.6632 24.4747C14.77 24.5187 14.8845 24.5411 15 24.5406C15.1155 24.5411 15.23 24.5187 15.3368 24.4747C15.4436 24.4307 15.5406 24.366 15.6223 24.2844C15.704 24.2027 15.7687 24.1056 15.8127 23.9988C15.8567 23.892 15.8791 23.7776 15.8786 23.6621L15.8724 15.8724Z" fill="#1CBBEE"/>
  </g>
  <defs>
    <clipPath id="clip0_8_148">
      <rect width="21" height="21" fill="white" transform="translate(15 0.150757) rotate(45)"/>
    </clipPath>
  </defs>
</svg></button>
<div  id='InfoWater' class="  absolute hidden bottom-[135px] left-48 flex-col flex gap-2 items-center justify-center bg-[#1CBBEE] rounded-full h-[340px] w-[340px] 
"
>
  <h3 class="text-black text-[24px]   pb-2 text-start font-light">Вода <br />
в капсулах 18,9 Л</h3>
<p class="text-white text-sm ">Кальций+....................40 мг/л</p>
<p class="text-white text-sm ">Магний......................20 мг/л</p>
<p class="text-white text-sm ">Натрий......................50 мг/л</p>
<p class="text-white text-sm ">Хлор.........................200 мг</p>
<p class="text-white text-sm ">Кислотность....................5 мг</p>
<p class="text-white text-sm ">Минерализаци....................2,0</p>
</div>
    </div>
  )
}