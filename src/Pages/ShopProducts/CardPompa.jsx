import Counter from '../../components/Counter/Counter';
import React, {useState} from 'react'
import ButtonMain from '../../components/Global/ButtonMain';


const CardPompa = (props) => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
	const [kuler, setKuler] = useState(0)
    const [pompa, setPompa] = useState(0)

	return (
		<div
			className="CardPompa"
			id="pompa"
			class="w-[300px] hidden h-auto p-[15px] align-top m-[20px]"
		>
			<div
				class="flex flex-col items-center gap-2"
				onClick={() => {
					document
						.getElementById('InfoPompa')
						.classList.toggle('hidden')
					document
						.getElementById('pompa')
						.classList.toggle('shadow-2xl')
				}}
			>
				<img
					src={props.image}
					alt={props.name}
					class="w-[150px] h-[220px]"
				/>
				<h6 class="text-sm">{props.name}</h6>
				<h2 class="text-[24px] font-bold">{props.size}</h2>
			</div>
			<div id="InfoPompa" class="hidden">
				<div class="flex items-center gap-10 mt-4">
                <Counter id="amount" count={count} setCount={setCount} total={total} setTotal={setTotal} kuler={kuler} setKuler={setKuler} pompa={pompa} setPompa={setPompa}/>
					<div class="flex flex-col">
						<p class="text-[12px] text-[#98A2B3]">
							Итоговая стоимость:
						</p>
						<h2
							id="total"
							class="text-[24px] font-bold text-[#1CBBEE]"
						>
                            
							{pompa}
						</h2>
					</div>
				</div>
				
					
                <ButtonMain 
                   onClick={() => {
						document.getElementById('amountOfPompa').textContent =
							count
					}}
                    to="/MyProducts" 
                    bgColor="bg-black" py="py-2" px="px-[52px]" text="Добавить в корзину" />
				
			</div>
		</div>
	)
}

export default CardPompa