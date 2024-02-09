import React from 'react'
import vevaWater from '../../assets/vevaWater.png'
import VevaDrop from '../../assets/WaterDrop.png'

export default function VevaInfo() {
  return (
    <div class="w-[80%] m-auto flex gap-12 max-[650px]:hidden">
      <div class="flex flex-col gap-2">
        <h1 class=" font-bold text-[45px]">Максимальная чистота</h1>
        <p class="text-lg">Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. <br />
Это означает, что каждая капля, которую вы пьете, свободна от примесей и загрязнений</p>
<div class="flex mt-8 mb-20 gap-4">
<div class="flex flex-col gap-8">
    <div >
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-3">Вода укрепляет 
иммунитет</p>
    </div>
    <div class=" w-[300px]">
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-3">Избавляет от запоров, 
способствует похудению, 
выводит токсины из организма</p>
    </div>
    
</div>
<div class="flex flex-col gap-8">
<div>
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-3">Нормализует работу 
пищеварительной системы</p>
    </div>
    <div>
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-3">Лечит гастрит с нормальной 
и повышенной кислотностью</p>
    </div>
</div>
<div class="flex flex-col gap-8 ">
  
<div>
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-2">Регулирует 
кислотно-щелочного баланс</p>
    </div>
    <div>
        <img src={vevaWater} alt="" />
        <p class="text-lg pt-2">Улучшает обмен 
веществ</p>
    </div>
</div>
</div>
      </div>
      <div><img src={VevaDrop} alt="" /></div>

    </div>
  )
}
