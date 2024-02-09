import React from 'react'
import Showcase from './Showcase'
import Slider from '../../components/Slider/Slider'
import VevaInfo from './VevaInfo'
import VevaInfoMobile from './VevaInfoMobile/VevaInfoMobile'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'
export default function Home() {
  return (
    <div class="bg-white">
      <Header/>
      <Showcase/>
      <Slider/>
      <VevaInfo/>
      <VevaInfoMobile/>
      <Footer/>
    </div>
  )
}
