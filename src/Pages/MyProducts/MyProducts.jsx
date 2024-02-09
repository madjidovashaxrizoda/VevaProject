import Nav from '../../components/Layout/Header/Nav'
import React from 'react'
import ShopCart from './ShopCart/ShopCart'
import HistoryOfOrders from './HistoryOfOrders'
import PersonalInfo from './Information/PersonalInfo'
import OrganizationInfo from './Information/OrganizationInfo'
import Notifications from './Notifications'

export default function MyProducts() {
	const dropDownBtn = function () {
		document.getElementById('dropdownbtn').classList.toggle('hidden')
	}
	

	return (
		<div id='backdrop' class="w-10/12 m-auto ">
			
			<div class="flex pt-[17%] gap-2 border-b-4 border-zinc-300 max-[650px]:hidden">
				<button
					onClick={() => {
						document
							.getElementById('shopCart')
							.classList.remove('hidden')
						document.getElementById('Personal').classList.add('hidden')
                        document.getElementById('Organization').classList.add('hidden')
                        document.getElementById('Notifications').classList.add('hidden')
                        document.getElementById('Orders').classList.add('hidden')
					}}
					class="flex gap-1 text-center items-center focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3"
				>
					<p class="text-[#98A2B3] text-sm font-semibold">
						Ваша корзина
					</p>
					<p id='productNumber' class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] ">
						0
					</p>
				</button>
				<button
                onClick={() => {
                    document 	
                        .getElementById('Orders')
                        .classList.remove('hidden')
                    document.getElementById('Personal').classList.add('hidden')
                    document.getElementById('Organization').classList.add('hidden')
                    document.getElementById('Notifications').classList.add('hidden')
                    document.getElementById('shopCart').classList.add('hidden')
                }}
                class="flex gap-1 text-center items-center  focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3 ">
					<p class="text-[#98A2B3] text-sm font-semibold">
						История заказов
					</p>
					<p class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] ">
						0
					</p>
				</button>
				<button
					onClick={() => {
						document
							.getElementById('shopCart')
							.classList.add('hidden')
						document.getElementById('Personal').classList.remove('hidden')
                        document.getElementById('Organization').classList.remove('hidden')
                        document.getElementById('Notifications').classList.add('hidden')
                        document.getElementById('Orders').classList.add('hidden')
					}}
					class="flex gap-1 text-center items-center focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3"
				>
					<p class="text-[#98A2B3] text-sm font-semibold">
						Личная информация
					</p>
				</button>
				<button
                onClick={() => {
                    document
                        .getElementById('shopCart')
                        .classList.add('hidden')
                    document.getElementById('Personal').classList.add('hidden')
                    document.getElementById('Organization').classList.add('hidden')
                    document.getElementById('Notifications').classList.remove('hidden')
                    document.getElementById('Orders').classList.add('hidden')
                }}
                class="flex gap-1 text-center items-center focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3">
					<p class="text-[#98A2B3] text-sm font-semibold">
						Оповещения
					</p>
					<p class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] ">
						0
					</p>
				</button>
			</div>
			<div class="mt-[17%] w-full bg-[#F2F4F7] p-5 rounded-xl hidden max-[650px]:block max-[650px]:mt-[50%]">
				<button
					id="dropdownButton"
					onClick={dropDownBtn}
					class="text-black bg-white font-normal w-full rounded-lg text-[16px] px-4  py-4 flex items-center justify-between   "
					type="button"
				>
					<div class="flex gap-2 items-center">
						<p class="text-black text-[16px] font-semibold">
							Ваша корзина
						</p>
						<p class="bg-[#E9573F] text-white text-center rounded-full px-3 py-2 font-bold text-[12px] ">
							0
						</p>
					</div>
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
					id="dropdownbtn"
					class="z-10 hidden bg-white divide-y divide-gray-100 absolute rounded-lg shadow-lg w-[77.5%] dark:bg-gray-700 "
				>
					<ul class="py-2 ">
						<li onClick={dropDownBtn}>
							<button
								class="text-black bg-white font-normal w-full rounded-lg text-[16px] px-4  py-4 flex items-center justify-between hover:bg-gray-100  "
								type="button"
							>
								<div class="flex gap-2 items-center ">
									<p class="text-black text-[16px] font-semibold">
										Ваша корзина
									</p>
									<p class="bg-[#E9573F] text-white text-center rounded-full px-3 py-2 font-bold text-[12px] ">
										0
									</p>
								</div>
							</button>
						</li>
						<li onClick={dropDownBtn}>
							<button
								class="text-black bg-white font-normal hover:bg-gray-100 w-full rounded-lg text-[16px] px-4  py-4 flex items-center justify-between   "
								type="button"
							>
								<div class="flex gap-2 items-center">
									<p class="text-black text-[16px] font-semibold">
										История заказов
									</p>
									<p class="bg-[#E9573F] text-white text-center rounded-full px-3 py-2 font-bold text-[12px] ">
										0
									</p>
								</div>
							</button>
						</li>
						<li onClick={dropDownBtn}>
							<button
								class="text-black bg-white font-normal w-full hover:bg-gray-100 rounded-lg text-[16px] px-4  py-4 flex items-center justify-between   "
								type="button"
							>
								<div class="flex gap-2 items-center">
									<p class="text-black text-[16px] font-semibold">
										Личная информация
									</p>
									<p class="bg-[#E9573F] text-white text-center rounded-full px-3 py-2 font-bold text-[12px] ">
										0
									</p>
								</div>
							</button>
						</li>
						<li onClick={dropDownBtn}>
							<button
								class="text-black bg-white font-normal w-full hover:bg-gray-100 rounded-lg text-[16px] px-4  py-4 flex items-center justify-between   "
								type="button"
							>
								<div class="flex gap-2 items-center">
									<p class="text-black text-[16px] font-semibold">
										Оповещения
									</p>
									<p class="bg-[#E9573F] text-white text-center rounded-full px-3 py-2 font-bold text-[12px] ">
										0
									</p>
								</div>
							</button>
						</li>
					</ul>
				</div>
			</div>
            <ShopCart/>
            <HistoryOfOrders/>
            <PersonalInfo/>
            <OrganizationInfo/>
            <Notifications/>
            {/* <Footer/> */}
		</div>
	)
}
