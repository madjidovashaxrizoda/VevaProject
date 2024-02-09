import Counter from '../../components/Counter/Counter';
import React, { useState } from 'react'
import ButtonMain from '../../components/Global/ButtonMain';


const CardCuler = (props) => {
	const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0);
	const [kuler, setKuler] = useState(0);
    const [pompa, setPompa] = useState(0)

	return (
		<div
			className="CardKuler"
			id="kuler"
			class="w-[300px] hidden h-auto p-[15px] align-top m-[20px] "
		>
			<div
				class="flex flex-col items-center gap-2"
				onClick={() => {
					document
						.getElementById('InfoKuler')
						.classList.toggle('hidden')
					document
						.getElementById('kuler')
						.classList.toggle('shadow-2xl')
				}}
			>
				<img src={props.image} alt={props.name} class="w-auto h-auto" />
				<h6 class="text-sm">{props.name}</h6>
				<h2 class="text-[24px] w-48 font-bold">{props.size}</h2>
			</div>
			<div id="InfoKuler" class="hidden">
                <div class="mt-4">
                    <p  class="text-sm">Нагрев .............................................................. <span class="font-bold">есть</span></p>
                    <p class="text-sm">Мощность нагрева........................... <span class="font-bold">до +95°С</span></p>
                    <p class="text-sm">Охлаждение .................................................. <span class="font-bold">есть</span></p>
                    <p class="text-sm">Мощность охлаждения .... <span class="font-bold">до +5°С - +7°С</span></p>
                    <p class="text-sm">Установка бутылки ................................. <span class="font-bold">внизу</span></p>
                </div>
				<div class="flex items-center gap-10 mt-4">
					<Counter
						id="amount"
						count={count}
						setCount={setCount}
						kuler={kuler}
						setKuler={setKuler}
                        total={total}
                        setTotal={setTotal}
                        pompa={pompa}
                        setPompa={setPompa}
					/>
					<div class="flex flex-col">
						<p class="text-[12px] text-[#98A2B3]">
							Итоговая стоимость:
						</p>
						<h2
							id="kuler"
							class="text-[24px] font-bold text-[#1CBBEE]"
						>
							{kuler}
						</h2>
					</div>
				</div>

				<ButtonMain 
                   onClick={() => {
						document.getElementById('amountOfKuler').textContent =
							count
					}}
                    to="/MyProducts" 
                    bgColor="bg-black" py="py-2" px="px-[52px]" text="Добавить в корзину" />
				
			</div>
		</div>
	)
}

export default CardCuler