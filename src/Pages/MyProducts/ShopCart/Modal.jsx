import React from 'react'

export default function Modal() {
    const modalForm = function () {
		document.getElementById('body').classList.toggle('bg-[#E4EAF3]')
		document.getElementById('FormModal').classList.remove('hidden')
	}
    const close = function () {
        document.getElementById('FormModal').classList.add('hidden')
    }
  return (
    <div >
      
			<button
			 onClick={modalForm}
			class="text-white text-center lg:text-base text-lg py-3 px-9  rounded-[1000px] mb-8 bg-black shadow-[0_20px_20px_0px_rgba(0,0,0,0.20)] max-[650px]:w-full max-[650px]:py-[15px] ">
					Оформить заказ
				</button>
			
			
            <div id="FormModal" class="absolute hidden left-1/3  top-[60%] bg-white rounded-2xl 
    max-[650px]:bottom-0 max-[650px]:w-full max-[650px]:left-0 max-[650px]:top-auto  ">
            <button type="button" data-drawer-hide="drawer-navigation"  onClick={close} aria-controls="drawer-navigation" class="text-black  text-sm w-8 h-8 absolute rounded-full bg-gray-100 top-4 end-6 inline-flex items-center justify-center " >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <h1>lelelel</h1>
 
            </div>

    </div>
  )
}
