import React, { useState } from 'react'
import water from '../../../assets/water.png'
// import pompa from '../../../assets/pompa.png'
// import kuler from '../../../assets/kuler.png'
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'


export default function Price() {
const [count, setCount] = useState(0)     
const incrementCount = () => {
    setCount(count + 1);
}
const decrementCount = () => {
    if (count > 0) {
        setCount(count - 1);
        
    }

}
  return (
    <div class="flex gap-12 bg-[#F2F4F7] rounded-3xl py-3 pl-11 w-[100%] h-auto items-center max-[650px]:py-6 max-[470px]:pl-5 max-[500px]:h-[45vh] max-[500px]:py-1 max-[440px]:gap-5">
    <div>
        <img
            src={water}
            alt="Veva Water"
            class="h-[25vh] max-[500px]:h-[27vh]"
        />
    </div>
    <div class="flex flex-col gap-8 max-[650px]:gap-6">
        <h3 class="text-[24px] font-light max-[650px]:w-fit max-[550px]:text-[22px] max-[440px]:text-[19px]  ">
            Вода в бутилированной бутылке
        </h3>
        <div class="flex justify-between items-center gap-10 max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-5">
            <div
                id="count"
                class="flex gap-3 items-center justify-center py-3 px-5 bg-white rounded-md"
            >
               <button onClick={decrementCount}>
                <img src={left} alt="" />
            </button>
            <p class="text-lg">{count}</p>
            <button onClick={incrementCount}>
                <img src={right} alt="" />
            </button>
            </div>
            <div class="flex flex-col gap-1 max-[650px]:hidden">
                <h4 class="text-[15px] text-[#98A2B3] font-light">
                    Стоимость за 1 единицу:
                </h4>
                <p class="text-lg font-semibold">0</p>
            </div>
            <div class="flex flex-col gap-1">
                <h4 class="text-[15px] text-[#98A2B3] font-light">
                    Итоговая стоимость:
                </h4>
                <p class="text-lg text-[#1CBBEE] font-bold">45 000</p>
            </div>
        </div>
    </div>
</div>
  )
}
