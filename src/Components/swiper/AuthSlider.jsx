
"use client"

import img1 from "@/assets/images/auth/auth-image-1.jpeg"
import img2 from "@/assets/images/auth/auth-image-2.jpeg"
import img3 from "@/assets/images/auth/auth-image-3.jpeg"
import Image from "next/image"
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function AuthSlider() {

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        autoplay
        loop
        className="swiper authSlider"
      >
        <SwiperSlide>
          <Image
            src={img1}
            alt="slider-thumbnail"
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img2}
            alt="slider-thumbnail"
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img3}
            alt="slider-thumbnail"
            placeholder="blur"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>

    </div>
  )
}