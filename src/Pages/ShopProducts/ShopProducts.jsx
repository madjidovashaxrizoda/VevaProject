import React from 'react'

import Card from './Card'
import water from '../../assets/water.png'
import artel from '../../assets/artel.png'
import electronix from '../../assets/electronix.png'
import pompa from '../../assets/pompa.png'
import CardCuler from './CardKuler'
import CardPompa from './CardPompa'

const ShopProducts = () => {
	const waterBottles = [
		{
			id: 1,
			name: 'Вода в бутилированной бутылке',
			size: '18,9 л.',
			category: 'Category 1',
			image: water,
		},
		{
			id: 2,
			name: 'Вода в бутилированной бутылке',
			size: '18,9 л.',
			category: 'Category 1',
			image: water,
		},
		{
			id: 3,
			name: 'Вода в бутилированной бутылке',
			size: '18,9 л.',
			category: 'Category 1',
			image: water,
		},
		{
			id: 4,
			name: 'Вода в бутилированной бутылке',
			size: '18,9 л.',
			category: 'Category 1',
			image: water,
		},
		{
			id: 5,
			name: 'Вода в бутилированной бутылке',
			size: '18,9 л.',
			category: 'Category 1',
			image: water,
		},
	]
	const kulers = [
		{
			id: 6,
			name: 'Кулер для воды ',
			size: 'Electronix YLR-FA-1590 Silver',
			category: 'Category 2',
			image: electronix,
		},
		{
			id: 7,
			name: 'Кулер для воды ',
			size: 'Artel ART-1638S',
			category: 'Category 2',
			image: artel,
		},
		{
			id: 8,
			name: 'Кулер для воды ',
			size: 'Artel ART-1638S',
			category: 'Category 2',
			image: artel,
		},
		{
			id: 9,
			name: 'Кулер для воды ',
			size: 'Artel ART-1638S',
			category: 'Category 2',
			image: artel,
		},
		{
			id: 10,
			name: 'Кулер для воды ',
			size: 'Artel ART-1638S',
			category: 'Category 2',
			image: artel,
		},
	]
	const pompas = [
		{
			id: 11,
			size: 'Помпа для воды',
			name: 'Помпа для воды',
			category: 'Category 3',
			image: pompa,
		},
		{
			id: 12,
			size: 'Помпа для воды',
			name: 'Помпа для воды',
			category: 'Category 3',
			image: pompa,
		},
		{
			id: 13,
			size: 'Помпа для воды',
			name: 'Помпа для воды',
			category: 'Category 3',
			image: pompa,
		},
		{
			id: 14,
			size: 'Помпа для воды',
			name: 'Помпа для воды',
			category: 'Category 3',
			image: pompa,
		},
		{
			id: 15,
			size: 'Помпа для воды',
			name: 'Помпа для воды',
			category: 'Category 3',
			image: pompa,
		},
	]
	return (
		<div id='backdrop' class="w-10/12 m-auto max-[650px]:mt-44 ">
			
		<div >
		<h1 class="pt-[17%] text-[40px] font-bold max-[650px]:pt-[10%] max-[650px]:text-3xl max-[540px]:text-2xl">Магазин Товаров</h1>
			<div  class="flex pt-[3%]  gap-4 border-b-4 border-zinc-300 max-[650px]:pt-[5%] max-[445px]:gap-2 ">
				<button
					onClick={() => {
						document
							.getElementById('water')
							.classList.remove('hidden')

							document
							.getElementById('kuler')
							.classList.add('hidden')

							document
							.getElementById('pompa')
							.classList.add('hidden')
						// document.getElementById('Info').classList.add('hidden')
					}}
					class="flex gap-1 text-center items-center focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3"
				>
					<p class="text-[#98A2B3] text-sm font-semibold max-[540px]:text-[12px]">
						Бутилированная вода
					</p>
					<p
						id="amountOfWater"
						class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] max-[540px]:text-[10px] "
					>
						0
					</p>
				</button>
				<button
					onClick={() => {
						document
							.getElementById('kuler')
							.classList.remove('hidden')

						document.getElementById('water').classList.add('hidden')
						document.getElementById('pompa').classList.add('hidden')
					}}
					class="flex gap-1 text-center items-center  focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3 "
				>
					<p class="text-[#98A2B3] text-sm font-semibold max-[540px]:text-[12px]">Кулер</p>
					<p
						id="amountOfKuler"
						class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] max-[540px]:text-[10px] "
					>
						0
					</p>
				</button>

				<button
					onClick={() => {
						document
							.getElementById('pompa')
							.classList.remove('hidden')

						document.getElementById('kuler').classList.add('hidden')

						document.getElementById('water').classList.add('hidden')
					}}
					class="flex gap-1 text-center items-center focus:text-black focus:bg-[#F2F4F7] focus:rounded-t-lg px-4 py-3"
				>
					<p class="text-[#98A2B3] text-sm font-semibold max-[540px]:text-[12px]">Помпа</p>
					<p
						id="amountOfPompa"
						class="bg-[#E9573F] text-white text-center rounded-full px-2 py-1 font-bold text-[12px] max-[540px]:text-[10px] "
					>
						0
					</p>
				</button>
			</div>
			<div>
				{waterBottles.map((product) => (
					<Card
						key={product.id}
						image={product.image}
						name={product.name}
						size={product.size}
						category={product.category}
					/>
				))}
				{kulers.map((product) => (
					<CardCuler
						key={product.id}
						image={product.image}
						name={product.name}
						size={product.size}
						category={product.category}
					/>
				))}
				{pompas.map((product) => (
					<CardPompa
						key={product.id}
						image={product.image}
						name={product.name}
						size={product.size}
						category={product.category}
					/>
				))}
			</div>
		</div>
			
		</div>
	)
}

export default ShopProducts
