"use client"
import heroChef from "@/assets/images/chefs/chef_hero.jpg";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

export default function HeroSwiper() {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      className="hero-swiper"
      loop={true}
      autoplay={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet swiper-pagination-bullet-hero",
        bulletActiveClass: "swiper-pagination-bullet-active"
      }}
      navigation={{ prevEl: ".swiper-hero-prev", nextEl: ".swiper-hero-next"}}
    >
      <SwiperSlide>
        <Image src={heroChef} alt="Hero Chef image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={heroChef} alt="Hero Chef image" />
      </SwiperSlide>
      <div className="swiper-hero-prev">
        <IoIosArrowBack />
      </div>
      <div className="swiper-hero-next">
        <IoIosArrowForward />
      </div>
    </Swiper>
  )
}