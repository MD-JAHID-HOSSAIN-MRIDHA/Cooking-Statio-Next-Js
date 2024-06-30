"use client"
import heroChef from "@/assets/images/chefs/chef_hero.jpg";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/bundle";

export default function HeroSwiper() {

  return (
    <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    className="hero-swiper"
    loop={true}
    pagination={{ clickable: true }}
    navigation
  >
    <SwiperSlide>
      <Image src={heroChef} alt="Hero Chef image" />
    </SwiperSlide>
    <SwiperSlide>
      <Image src={heroChef} alt="Hero Chef image" />
    </SwiperSlide>
  </Swiper>
  )
}