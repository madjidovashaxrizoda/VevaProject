import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import VevaWater from '../../../assets/vevaWater.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './VevaInfoMobile.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="VevaInfoMobile"
      >
        <SwiperSlide className='card'><div>
            <h1>Максимальная 
чистота</h1>
<img src={VevaWater} alt="" />
<p>Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. 
Это означает, что каждая капля, которую вы пьете, свободна от примесей и загрязнений.</p></div></SwiperSlide>
        <SwiperSlide className='card'>
            <div>
            <h1>Максимальная 
чистота</h1>
    
        <img src={VevaWater} alt="" />
        <p>Вода укрепляет 
иммунитет.</p>
    
    
                <p>Избавляет от запоров, 
способствует похудению, 
выводит токсины из организма.</p>
    
    
</div></SwiperSlide>
        <SwiperSlide className='card'>     <div>
            <h1>Максимальная 
чистота</h1>
   
        <img src={VevaWater} alt="" />
        <p>Нормализует работу 
пищеварительной системы.</p>
    
                <p>Лечит гастрит с нормальной 
и повышенной кислотностью.</p>
   
    
</div></SwiperSlide>
        <SwiperSlide className='card'>     <div>
            <h1>Максимальная 
чистота</h1>
    
        <img src={VevaWater} alt="" />
        <p>Регулирует 
кислотно-щелочного баланс.</p>
   
                <p>Улучшает обмен 
веществ.</p>
   
    
</div></SwiperSlide>
       
      </Swiper>
    </>
  );
}
