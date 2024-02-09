import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import photoUznatBolshe from './img-slider/uznatbolshe.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const slides = [
  {
    title: 'Круглосуточная доставка',
    mark: '24/7',
    buttonText: 'Узнать больше',
    image: photoUznatBolshe,
  },
  {
    title: 'Быстрая доставка',
    mark: '24/7',
    buttonText: 'Заказать воду',
    image: 'https://xb-plus.ru/upload/medialibrary/e0e/xlyal7tmz4fyp307vi16e3kz1drfwlaw.png',
  },
  {
    title: 'Круглосуточная доставка',
    mark: '24/7',
    buttonText: 'Узнать больше',
    image: 'https://molodechno-mebel.ru/wp-content/themes/molodechnomebel/assets/images/fp/smartphone-with-hand.webp',
  },
];
const BackgroundImageSlide = ({ image, children }) => (
  <div className="m-3 pl-5 bg-cover bg-left bg-no-repeat rounded-3xl h-80 w-4/5 font-semibold flex flex-col items-start justify-evenly text-white"
       style={{backgroundImage: `url(${image})`}}>
    {children}
  </div>
);
const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <BackgroundImageSlide image={slide.image}>
            <h1 className="self-start text-white font-400 text-4xl bg-transparent">
              {slide.title}  
               <mark className="font-black text-white font-900 text-4xl bg-transparent">
                {slide.mark}
              </mark>
            </h1>
            <button className="px-4 py-2 rounded-full font-100 text-black bg-white border-none w-auto">
              {slide.buttonText}
            </button>
          </BackgroundImageSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;