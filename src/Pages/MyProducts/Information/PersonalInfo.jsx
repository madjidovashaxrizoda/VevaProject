import React from 'react'

export default function PersonalInfo() {
	return (
		<div
			id="Info"
			class="grid  grid-cols-[2fr_1.3fr] gap-4 mt-16 max-[650px]:grid-cols-1"
		>
			<div>
				<h2 class=" text-[32px] font-semibold pb-8 max-[578px]:text-2xl">
					Личная информация
				</h2>
				<div class="flex flex-col w-full">
					<div class="flex gap-10 p-3 bg-[#F2F4F7] w-[100%] whitespace-nowrap max-[368px]:gap-4 max-[320px]:gap-2">
						<h3 class="text-lg font-light max-[578px]:text-sm">Фамилия и имя:</h3>
						<p class="text-lg font-semibold overflow-hidden text-ellipsis max-[578px]:text-sm " id='name'> Никифоров Михаил</p>
					</div>
					<div class="flex gap-10 p-3 w-[100%] whitespace-nowrap max-[368px]:gap-4 max-[320px]:gap-2">
						<h3 class="text-lg font-light max-[578px]:text-sm">Номер телефона:</h3>
						<div>
							<p id='phone' class="text-lg font-semibold max-[578px]:text-sm overflow-hidden text-ellipsis">
								+ 998 90 124-25-25
							</p>
							<p id='phone' class="text-lg font-semibold overflow-hidden text-ellipsis max-[578px]:text-sm">
								+ 998 90 124-25-25
							</p>
						</div>
					</div>
					<div
					
						class="flex gap-10 p-3 bg-[#F2F4F7]  w-[100%] whitespace-nowrap max-[368px]:gap-4 max-[320px]:gap-2"
					>
						<h3 class="text-lg font-light max-[578px]:text-sm">Ваш адрес №1:</h3>
						<p	id="address" class="text-lg font-semibold overflow-hidden text-ellipsis max-[578px]:text-sm">
							г. Ташкент, улица Мукими, 166 ...
						</p>
					</div>
					<div id="address" class="flex gap-10 p-3  w-[100%] whitespace-nowrap max-[368px]:gap-4 max-[320px]:gap-2  ">
						<h3 class="text-lg font-light max-[578px]:text-sm">Ваш адрес №2:</h3>
						<p	id="address" class="text-lg font-semibold overflow-hidden text-ellipsis max-[578px]:text-sm ">
							г. Ташкент, улица Арнасай, 2 ...
						</p>
					</div>
				</div>

				<button
					id="edit"
					class="flex gap-2 items-center  py-2 px-8 rounded-[1000px] mt-10 bg-[#F2F4F7] max-[650px]:w-full max-[650px]:mb-8 max-[650px]:py-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
					>
						<path
							d="M5 18.7944H9.24C9.37161 18.7951 9.50207 18.7699 9.62391 18.7201C9.74574 18.6704 9.85656 18.5971 9.95 18.5044L16.87 11.5744L19.71 8.79437C19.8037 8.70141 19.8781 8.59081 19.9289 8.46895C19.9797 8.34709 20.0058 8.21638 20.0058 8.08437C20.0058 7.95236 19.9797 7.82165 19.9289 7.6998C19.8781 7.57794 19.8037 7.46734 19.71 7.37437L15.47 3.08437C15.377 2.99064 15.2664 2.91625 15.1446 2.86548C15.0227 2.81471 14.892 2.78857 14.76 2.78857C14.628 2.78857 14.4973 2.81471 14.3754 2.86548C14.2536 2.91625 14.143 2.99064 14.05 3.08437L11.23 5.91437L4.29 12.8444C4.19732 12.9378 4.12399 13.0486 4.07423 13.1705C4.02446 13.2923 3.99924 13.4228 4 13.5544V17.7944C4 18.0596 4.10536 18.3139 4.29289 18.5015C4.48043 18.689 4.73478 18.7944 5 18.7944ZM14.76 5.20437L17.59 8.03437L16.17 9.45437L13.34 6.62437L14.76 5.20437ZM6 13.9644L11.93 8.03437L14.76 10.8644L8.83 16.7944H6V13.9644ZM21 20.7944H3C2.73478 20.7944 2.48043 20.8997 2.29289 21.0873C2.10536 21.2748 2 21.5292 2 21.7944C2 22.0596 2.10536 22.3139 2.29289 22.5015C2.48043 22.689 2.73478 22.7944 3 22.7944H21C21.2652 22.7944 21.5196 22.689 21.7071 22.5015C21.8946 22.3139 22 22.0596 22 21.7944C22 21.5292 21.8946 21.2748 21.7071 21.0873C21.5196 20.8997 21.2652 20.7944 21 20.7944Z"
							fill="black"
						/>
					</svg>
					<button class="text-lg text-center font-semibold max-[578px]:text-sm">Редактировать</button>
				</button>
			</div>
		</div>
	)
}