"use client"
import heroChef from "@/assets/images/chefs/chef_hero.jpg";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import { useRef } from "react";
import "swiper/css/bundle";

export default function HeroSwiper() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      className="hero-swiper"
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet swiper-pagination-bullet-hero",
        bulletActiveClass: "swiper-pagination-bullet-active"
      }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
    >
      <SwiperSlide>
        <Image src={heroChef} alt="Hero Chef image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={heroChef} alt="Hero Chef image" />
      </SwiperSlide>
      <div ref={prevRef} className="swiper-hero-prev text-white">
        <IoIosArrowBack />
      </div>
      <div ref={nextRef} className="swiper-hero-next">
        <IoIosArrowForward />
      </div>
    </Swiper>
  )
}