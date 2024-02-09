import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import './Form.css'
import 'react-datepicker/dist/react-datepicker.css'
import Line from "../../../assets/Line.png"
import Modal from './Modal'

export default function Form() {
	const dropDown = function () {
		document.getElementById('dropdown').classList.toggle('hidden')
		document.getElementById('address').textContent=document.getElementById('myAddress').value
	}
	const dropDownTel = function (params) {
		document.getElementById('dropdowntel').classList.toggle('hidden')
		document.getElementById('phoneNumber').textContent=document.getElementById('myTel').value
}
	const dropDownMoney = function (params) {
		document.getElementById('dropdownmoney').classList.toggle('hidden')
	}
	const anotherPhone = function (params) {
		document.getElementById('myTel').value=""
		document.getElementById('dropdowntel').classList.toggle('hidden')
}
const [startDate, setStartDate] = useState(new Date())
	const [time, setTime] = React.useState('morning')
return (
		<div class="w-full">
			<div class="flex gap-6 mt-8 max-[650px]:flex-col ">
				<div class="flex flex-col gap-2">
					<h5 class="text-[#98A2B3] text-[15px]">Адрес доставки:</h5>
					<div>
						<form id="dropdownButton"
								class="flex items-center relative w-[21vw] justify-between max-[650px]:w-full">
							<input type="text" id="myAddress" class="text-black bg-[#F2F4F7] w-[120%]  font-normal rounded-lg text-[16px] px-4  py-3" required/>
								<svg
									class="w-2.5 h-2.5 absolute right-4 "
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									color="rgba(28, 187, 238, 1)"
									fill="none"
									viewBox="0 0 10 6"
									onClick={dropDown}
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 4 4 4-4"
									/>
								</svg>
				<div
								id="dropdown"
								class="z-10 hidden bg-white divide-y divide-gray-100 mt-32 absolute rounded-lg shadow-lg w-72 dark:bg-gray-700 max-[650px]:w-10/12"
							>
								<ul class="py-2 text-[16px] text-gray-700 dark:text-gray-200">
									<li onClick={dropDown} id="anotherAddress"
											class="block px-4 py-2  hover:bg-gray-100 focus:bg-blue-50">
										Choose another address
										</li>
									<li onClick={dropDown} id='address'	class="block px-4 py-2  hover:bg-gray-100 focus:bg-blue-50">
						Beshyogoch 28-3
		</li>
								</ul>
							</div>
						</form>
					</div>
				</div>
				<div class="flex flex-col gap-2 ">
					<h5 class="text-[#98A2B3] text-[15px] w-[110%]">Номер подъезда:</h5>
					<form>
						<input
							type="text"
							class="text-black ps-4 border-transparent w-28 bg-[#F2F4F7] font-normal rounded-lg text-[16px] py-3 max-[650px]:w-full"
						/>
					</form>
				</div>
				<div class="flex flex-col gap-2">
					<h5 class="text-[#98A2B3] text-[15px]">
						Номер телефона для связи:
					</h5>
<form
						id="dropdownButton"
						
						class=" flex items-center w-full justify-between relative max-[650px]:w-full"
						type="button"
					>
						<input
							type="text"
							id="myTel"
							required
							class="bg-[#F2F4F7] text-black font-normal  rounded-lg text-[16px] px-5  py-3 max-[650px]:w-full"
						/>
						<svg
							class="w-2.5 h-2.5 absolute right-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							color="rgba(28, 187, 238, 1)"
							fill="none"
							viewBox="0 0 10 6"
							onClick={dropDownTel}
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</form>

					<div
						id="dropdowntel"
						class="z-10 hidden bg-white divide-y divide-gray-100 absolute rounded-lg shadow-lg w-56 dark:bg-gray-700 mt-16 max-[650px]:w-10/12"
					>
						<ul class="py-2 text-[16px] text-gray-700 dark:text-gray-200">
							<li
								onClick={anotherPhone}
								id='anotherNumber'
								class="block px-4 py-2 hover:bg-gray-100 focus:bg-blue-50 cursor-pointer"
							>
								Choose another number
							</li>
							<li
								onClick={dropDownTel}
								id='phoneNumber'
								class="block px-4 py-2 hover:bg-gray-100 cursor-pointer focus:bg-blue-50"
							>
								+998974111281
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="flex gap-1 mt-8 max-[650px]:flex-col max-[650px]:gap-6">
				<div class="flex flex-col gap-2 max-[650px]:w-full">
					<h5 class="text-[#98A2B3] text-[15px]">Дата доставки:</h5>

					<div class="relative">
						<form>
							<DatePicker
								id="DatePicker"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</form>
						<div class="absolute flex items-center right-8 bottom-2 pointer-events-none max-[650px]:right-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8 6H6V5H4V8H20V5H18V6H16V5H8V6ZM20 10H4V20H20V10ZM16 3H8V2H6V3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V5C22 3.89543 21.1046 3 20 3H18V2H16V3ZM7 14V12H9V14H7ZM11 14H13V12H11V14ZM15 14V12H17V14H15ZM7 16V18H9V16H7ZM13 18H11V16H13V18Z"
									fill="#1CBBEE"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-2 max-[650px]:w-full">
					<h5 class="text-[#98A2B3] text-[15px]">Время доставки:</h5>
					<div class="flex gap-5 max-[650px]:flex-col max-[650px]:gap-3">
						<form class="flex gap-3 ">
							<input
								type="checkbox"
								name="time"
								checked={time === 'morning'}
								onChange={() => setTime('morning')}
								class="border-transparent bg-[#F2F4F7] font-normal rounded-lg w-4"
								
							/>
							<p class="text-sm max-[650px]:hidden">
								Днем <br /> с 10:00-15:00
							</p>
							<p class="text-sm hidden max-[650px]:block">
								Днем с 10:00-15:00
							</p>
						</form>
						<form class="flex gap-3">
							<input
								type="checkbox"
								name="time"
								checked={time === 'evening'}
								onChange={() => setTime('evening')}
								class="border-transparent bg-[#F2F4F7] font-normal rounded-lg w-4"
							/>
							<p class="text-sm max-[650px]:hidden">
								К вечеру <br /> 16:00-20:00
							</p>
							<p class="text-sm hidden max-[650px]:block">
								К вечеру 16:00-20:00
							</p>
						</form>
					</div>
				</div>
				<div class="flex flex-col gap-2 pl-4 max-[650px]:w-full max-[650px]:pl-0">
					<h5 class="text-[#98A2B3] text-[15px]">Оплата:</h5>
					<form>
						<button
							id="dropdownButton"
							onClick={dropDownMoney}
							class="text-black bg-[#F2F4F7] font-normal w-[170%] rounded-lg text-[16px] px-4  py-3 flex items-center justify-between max-[650px]:w-full"
							type="button"
						>
							<p id="payement">Наличными</p>
							<svg
								class="w-2.5 h-2.5 "
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
					</form>
					<div
						id="dropdownmoney"
						class="z-10 hidden bg-white divide-y divide-gray-100 absolute rounded-lg shadow-lg w-56 mt-16 dark:bg-gray-700 max-[650px]:w-10/12  "
					>
						<ul class="py-2 text-[16px] text-gray-700 dark:text-gray-200">
							<li
								onClick={() =>
									(document.getElementById(
										'payement'
									).textContent = 'Карты/счета')(
										document
											.getElementById('dropdownmoney')
											.classList.toggle('hidden')
									)
								}
								class="block px-4 py-2 hover:bg-gray-100 focus:bg-blue-50"
							>
								Карты и счета
							</li>
							<li
								onClick={() =>
									(document.getElementById(
										'payement'
									).textContent = 'Наличными')(
										document.getElementById('dropdownmoney').classList.toggle('hidden')
									)
								}
								class="block px-4 py-2 hover:bg-gray-100 focus:bg-blue-50"
							>
								Наличными
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="pt-4">
				<img src={Line} alt="" />
			</div>
			<div class="flex justify-between items-end max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-6">
				<div class="pt-6 max-[650px]:text-center">
					<h5 class="text-[#98A2B3] text-lg">К оплате:</h5>
					<p class="text-[32px] text-[#1CBBEE] font-bold ">
						45 000 <span>сум</span>
					</p>
				</div>
			<Modal/>
			</div>
		</div>
	)
}
