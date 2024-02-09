import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import water from '../../../assets/water.png'
import kuler from '../../../assets/kuler.png'
import pompa from '../../../assets/pompa.png'
import ButtonMain from "../../../components/Global/ButtonMain"
import PlusButton from './PlusButton'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow';
import './Swiper.css'

// import required modules
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

export default function Slide() {
	const [swiperRef, setSwiperRef] = useState(null)

	return (
		<>
        
			<Swiper id='bigScreen' 
				onSwiper={setSwiperRef}
				effect={'coverflow'}
        
				coverflowEffect={{
					rotate: 10,
					stretch: 0,
					depth: 200,
					modifier: 1,
          
					slideShadows: false,
				}}
				slidesPerView={3}
				centeredSlides={true}
				spaceBetween={250}
				navigation={true}
				modules={[Pagination, Navigation, EffectCoverflow]}
				className="mySwiper"
			>
				<SwiperSlide id='kuler'>
					<img src={kuler} alt="Veva Water" />{' '}
					<ButtonMain to="/ShopProducts" bgColor="bg-black" py="py-3" mt="mt-10" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
				
                <SwiperSlide id='water'>
					<img src={water} alt="Veva Water" />{' '}
					<PlusButton/>
					<ButtonMain to="/ShopProducts" bgColor="bg-black" py="py-3" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
				<SwiperSlide id='pompa'>
					<img src={pompa} alt="Veva Water" />{' '}
					<ButtonMain to="/ShopProducts" bgColor="bg-black" py="py-3" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
			</Swiper>
			<Swiper id='smallScreen'
				onSwiper={setSwiperRef}
				effect={'coverflow'}
        
				coverflowEffect={{
					rotate: 10,
					stretch: 0,
					depth: 200,
					modifier: 1,
          
					slideShadows: false,
				}}
				slidesPerView={1}
				centeredSlides={true}
				
				navigation={true}
				modules={[Pagination, Navigation, EffectCoverflow]}
				className="mySwiper"
			>
				<SwiperSlide id='kuler'>
					<img src={kuler} alt="Veva Water" />{' '}
					<ButtonMain to="/ShopProducts" py="py-3" bgColor="bg-black" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
				<SwiperSlide id='water'>
					<img src={water} alt="Veva Water" />{' '}
					<PlusButton/>
					<ButtonMain to="/ShopProducts" py="py-3" bgColor="bg-black" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
				<SwiperSlide id='pompa'>
					<img src={pompa} alt="Veva Water" />{' '}
					<ButtonMain to="/ShopProducts" py="py-3" bgColor="bg-black" px="px-12" text="Заказать воду"/>
				</SwiperSlide>
			</Swiper>

		</>
	)
}