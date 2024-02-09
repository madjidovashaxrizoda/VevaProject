import React from 'react'

export default function LangBtn() {

    const dropDownLang = function() {
		document.getElementById('dropdownLang').classList.toggle('hidden')
	}

  return (
    <div>
       <button id="dropdownButton" onClick={dropDownLang}  class="text-black bg-white font-normal  rounded-l-3xl text-sm px-3	 py-2 text-center flex  items-center max-[650px]:rounded-full max-[650px]:px-4 max-[650px]:py-3 max-[420px]:py-2 max-[420px]:px-3 max-[360px]:px-2 max-[360px]:py-1.5 " type="button">
        
        <p id='myLanguage' >Ру</p> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" color='rgba(28, 187, 238, 1)'   fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="m1 1 4 4 4-4"/>
        </svg>
        </button>
        
        
        <div id="dropdownLang"  class="z-10 hidden bg-white divide-y divide-gray-100 absolute top-16  rounded-lg shadow-lg dark:bg-gray-700  ">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
              <li onClick={dropDownLang}>
                <a href="#" class="block px-5 py-1.5 text-xs focus:bg-blue-50 hover:bg-gray-100">Uz</a>
              </li>
              <li onClick={dropDownLang}>
                <a href="#" class="block px-5 py-1.5 text-xs focus:bg-blue-50 hover:bg-gray-100">Ру</a>
              </li>
              <li onClick={dropDownLang}>
                <a href="#" class="block px-5 py-1.5 text-xs focus:bg-blue-50 hover:bg-gray-100">En</a>
              </li>
             
            </ul>
        </div>
    </div>
  )
}

