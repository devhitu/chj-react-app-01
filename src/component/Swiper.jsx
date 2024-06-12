// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function MySwiper (){
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://picsum.photos/500/200" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos/500/200" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos/500/200" alt="" /></SwiperSlide>
    </Swiper>
  );
};