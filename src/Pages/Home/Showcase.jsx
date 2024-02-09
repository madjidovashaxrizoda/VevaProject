import React from 'react'
import Slide from './Swiper/Slide'
import Circles from './Circles'
import Union from '../../assets/Union.png'


export default function Showcase() {
  return (
    <div class="bg-[#E4EAF3] relative m-auto w-full h-screen  ">
      
      
      <Slide/>
      <Circles/>
      <div class="absolute bottom-0 ">
        <img src={Union} alt="" />
      </div>
     
      </div>
  
  )
}