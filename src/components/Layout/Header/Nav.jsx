import React from 'react'
import veva_logo from "../../../assets/VEVA_Logo.png"
import LangBtn from './components/LangBtn'
import Union from '../../../assets/Union.png'
import { Link } from 'react-router-dom'
import ExitBtn from './components/ExitBtn'
import UserNameBtn from './components/UserNameBtn'

export default function Nav() {
    const dropDown = function () {
		document.getElementById('dropdownMenu').classList.toggle('hidden')
	}
  return (
    <div id='nav'>
      <nav class="bg-[#E4EAF3]  fixed w-full z-20 top-0 start-0 pb-10 max-[650px]:pb-16">
			
            <div class="max-w-screen-xl flex flex-wrap relative items-center justify-between mx-auto py-4 pl-8 ">
          
                <div class="flex md:order-2 space-x-3 md:space-x-0 hidden max-[650px]:block ">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="flex gap-1"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_174_3348)">
    <path d="M13.85 2.4918C13.4417 2.08346 12.7833 2.08346 12.375 2.4918L5.44999 9.4168C5.12499 9.7418 5.12499 10.2668 5.44999 10.5918L12.375 17.5168C12.7833 17.9251 13.4417 17.9251 13.85 17.5168C14.2583 17.1085 14.2583 16.4501 13.85 16.0418L7.81665 10.0001L13.8583 3.95846C14.2583 3.55846 14.2583 2.8918 13.85 2.4918Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_174_3348">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
<p class=" text-sm font-bold"> Вернуться</p>
                     
                    </button>
                </div>
                <a href="#" class="flex items-center rtl:space-x-reverse max-[650px]:hidden ">
                    <img src={veva_logo} alt="Veva Logo" class="max-[420px]:h-14 max-[360px]:h-10 " />
                </a>

                <div
                    class="items-center justify-between hidden w-full md:flex md:w-auto "
                    id="navbar-sticky"
                >
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium borderrounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                        <Link to="/" class="block py-2 px-3 round text-gray-400  focus:text-black  md:bg-transparent text-lg md:p-0 focus:underline font-normal "
									aria-current="page">Главная</Link>

                        </li>
                        <li>
                        <Link to="/ShopProducts" class="block py-2 px-3 round text-gray-400 text-lg focus:text-black  focus:underline font-normal  md:p-0  ">Магазин товаров</Link>
                        </li>
                    </ul>
                </div>
                
                <div class="max-[650px]:hidden">
                    <button
                        id="dropdownButton"
                        onClick={dropDown}
                        class="text-black bg-white font-normal  rounded-3xl text-sm px-12 py-1.5 text-center flex gap-1 items-center"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                d="M20.96 9.62999C20.8303 8.27182 20.3756 6.96481 19.6344 5.81941C18.8931 4.67401 17.887 3.72388 16.7011 3.04931C15.5152 2.37474 14.1843 1.99554 12.8209 1.94377C11.4576 1.89201 10.1018 2.16918 8.86814 2.75188C7.63449 3.33458 6.55923 4.20568 5.73322 5.29157C4.90722 6.37745 4.35475 7.64622 4.12249 8.99065C3.89023 10.3351 3.985 11.7157 4.39881 13.0157C4.81262 14.3158 5.5333 15.4972 6.49995 16.46L11.8 21.77C11.8929 21.8637 12.0035 21.9381 12.1254 21.9889C12.2472 22.0396 12.3779 22.0658 12.51 22.0658C12.642 22.0658 12.7727 22.0396 12.8945 21.9889C13.0164 21.9381 13.127 21.8637 13.22 21.77L18.5 16.46C19.3912 15.5754 20.0743 14.5036 20.4998 13.3223C20.9253 12.1409 21.0825 10.8796 20.96 9.62999ZM17.1 15.05L12.5 19.65L7.89996 15.05C7.22204 14.372 6.70276 13.5523 6.37942 12.6497C6.05609 11.7472 5.93674 10.7842 6.02996 9.82999C6.12377 8.86109 6.43172 7.92515 6.93153 7.08983C7.43133 6.25451 8.11051 5.54069 8.91995 4.99999C9.9809 4.29522 11.2263 3.91928 12.5 3.91928C13.7736 3.91928 15.019 4.29522 16.08 4.99999C16.8869 5.5386 17.5646 6.24927 18.0643 7.08092C18.564 7.91258 18.8733 8.84459 18.97 9.80999C19.0662 10.7674 18.9484 11.7343 18.6249 12.6405C18.3015 13.5468 17.7806 14.3698 17.1 15.05ZM14.29 6.24999C14.197 6.15626 14.0864 6.08186 13.9645 6.03109C13.8427 5.98033 13.712 5.95419 13.58 5.95419C13.4479 5.95419 13.3172 5.98033 13.1954 6.03109C13.0735 6.08186 12.9629 6.15626 12.87 6.24999L9.28995 9.82999C9.10521 10.0162 9.00106 10.2676 8.99995 10.53V13C8.99995 13.2652 9.10531 13.5196 9.29285 13.7071C9.48038 13.8946 9.73474 14 9.99995 14H12.42C12.5516 14.0007 12.682 13.9755 12.8039 13.9258C12.9257 13.876 13.0365 13.8027 13.13 13.71L16.71 10.13C16.8962 9.94262 17.0007 9.68917 17.0007 9.42499C17.0007 9.1608 16.8962 8.90735 16.71 8.71999L14.29 6.24999ZM12.01 12H11.01V11L13.59 8.41999L14.59 9.41999L12.01 12Z"
                                fill="black"
                            />
                        </svg>
                        <p id="myAddress" class="w-40">
                            Beshyogoch 28-3
                        </p>{' '}
                        <svg
                            class="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            color="rgba(28, 187, 238, 1)"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    <div
                        id="dropdownMenu"
                        class="z-10 hidden bg-white divide-y divide-gray-100 absolute rounded-lg shadow-lg w-80 dark:bg-gray-700 "
                    >
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li onClick={dropDown}>
                                <a
                                    href="#"
                                    id="anotherAddress"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Choose another address
                                </a>
                            </li>
                            <li onClick={dropDown}>
                                <a
                                    href="#"
                                    class="block px-4 py-2 bg-blue-50"
                                >
                                    Beshyogoch 28-3
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex gap-1 max-[650px]:gap-3 pr-6 max-[320px]:gap-1 ">
                    <LangBtn />
                    <UserNameBtn/>
                    <ExitBtn />
                </div>
            </div>
            <div class="max-[650px]:block hidden px-6 ">
                    <button
                        id="dropdownButton"
                        onClick={dropDown}
                        class="text-black bg-white font-normal  rounded-lg text-sm px-4 py-2 text-center flex gap-1 items-center w-full"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                d="M20.96 9.62999C20.8303 8.27182 20.3756 6.96481 19.6344 5.81941C18.8931 4.67401 17.887 3.72388 16.7011 3.04931C15.5152 2.37474 14.1843 1.99554 12.8209 1.94377C11.4576 1.89201 10.1018 2.16918 8.86814 2.75188C7.63449 3.33458 6.55923 4.20568 5.73322 5.29157C4.90722 6.37745 4.35475 7.64622 4.12249 8.99065C3.89023 10.3351 3.985 11.7157 4.39881 13.0157C4.81262 14.3158 5.5333 15.4972 6.49995 16.46L11.8 21.77C11.8929 21.8637 12.0035 21.9381 12.1254 21.9889C12.2472 22.0396 12.3779 22.0658 12.51 22.0658C12.642 22.0658 12.7727 22.0396 12.8945 21.9889C13.0164 21.9381 13.127 21.8637 13.22 21.77L18.5 16.46C19.3912 15.5754 20.0743 14.5036 20.4998 13.3223C20.9253 12.1409 21.0825 10.8796 20.96 9.62999ZM17.1 15.05L12.5 19.65L7.89996 15.05C7.22204 14.372 6.70276 13.5523 6.37942 12.6497C6.05609 11.7472 5.93674 10.7842 6.02996 9.82999C6.12377 8.86109 6.43172 7.92515 6.93153 7.08983C7.43133 6.25451 8.11051 5.54069 8.91995 4.99999C9.9809 4.29522 11.2263 3.91928 12.5 3.91928C13.7736 3.91928 15.019 4.29522 16.08 4.99999C16.8869 5.5386 17.5646 6.24927 18.0643 7.08092C18.564 7.91258 18.8733 8.84459 18.97 9.80999C19.0662 10.7674 18.9484 11.7343 18.6249 12.6405C18.3015 13.5468 17.7806 14.3698 17.1 15.05ZM14.29 6.24999C14.197 6.15626 14.0864 6.08186 13.9645 6.03109C13.8427 5.98033 13.712 5.95419 13.58 5.95419C13.4479 5.95419 13.3172 5.98033 13.1954 6.03109C13.0735 6.08186 12.9629 6.15626 12.87 6.24999L9.28995 9.82999C9.10521 10.0162 9.00106 10.2676 8.99995 10.53V13C8.99995 13.2652 9.10531 13.5196 9.29285 13.7071C9.48038 13.8946 9.73474 14 9.99995 14H12.42C12.5516 14.0007 12.682 13.9755 12.8039 13.9258C12.9257 13.876 13.0365 13.8027 13.13 13.71L16.71 10.13C16.8962 9.94262 17.0007 9.68917 17.0007 9.42499C17.0007 9.1608 16.8962 8.90735 16.71 8.71999L14.29 6.24999ZM12.01 12H11.01V11L13.59 8.41999L14.59 9.41999L12.01 12Z"
                                fill="black"
                            />
                        </svg>
                        <p id="myAddress" class="w-full text-start pl-3">
                            Beshyogoch 28-3
                        </p>{' '}
                        <svg
                            class="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            color="rgba(28, 187, 238, 1)"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    <div
                        id="dropdownMenu"
                        class="z-10 hidden bg-white divide-y divide-gray-100 absolute rounded-lg shadow-lg w-80 dark:bg-gray-700 "
                    >
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li onClick={dropDown}>
                                <a
                                    href="#"
                                    id="anotherAddress"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Choose another address
                                </a>
                            </li>
                            <li onClick={dropDown}>
                                <a
                                    href="#"
                                    class="block px-4 py-2 bg-blue-50"
                                >
                                    Beshyogoch 28-3
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div><img src={Union} alt="" class="absolute bottom-[-25px] max-[650px]:bottom-0"/></div>
        </nav>
     
    </div>
  )
}