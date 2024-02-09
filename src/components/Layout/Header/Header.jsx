import React, { useState } from 'react';
import veva_logo from "../../../assets/VEVA_Logo.png";
import LangBtn from './components/LangBtn';
import LocationBtn from './components/LocationBtn';
import LogInBtn from './components/LogInBtn';
import Menu from './components/Menu';
import LocationBtnPhone from './components/LocationBtnPhone';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const openMenu = function () {
		document.getElementById('drawer-navigation').classList.remove('-translate-x-full')
	}
	return (
		<div>
			<Menu/>
			<nav class="bg-[#E4EAF3]  fixed w-full z-20 top-0 start-0">
			
				<div class="max-w-screen-xl flex flex-wrap relative items-center justify-between mx-auto py-4 pl-8 ">
					<div class="flex md:order-2 space-x-3 md:space-x-0 ">
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							onClick={openMenu}
							class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<svg
								class="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<a href="#" class="flex items-center rtl:space-x-reverse">
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
					
					<LocationBtn/>
					<div class="flex gap-1 max-[650px]:gap-3 pr-6 max-[320px]:gap-1 ">
						<LangBtn />
						<LogInBtn />
					</div>
					<LocationBtnPhone/>
				</div>
			</nav>
			
		</div>
	)
}
