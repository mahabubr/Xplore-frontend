"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
