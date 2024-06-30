"use client"
import featured_dish from "@/assets/images/Chicken Curry.png";
import Image from "next/image";
import { useRef } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function FeaturedSwiper() {

  const nextRef = useRef(null)
  const prevRef = useRef(null)

  return (
    <>
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        className="featured-swiper"
      >
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="featured_card">
            <figure>
              <Image src={featured_dish} alt="" className="featured_dish" />
            </figure>
            <h4 className="title">Chicken Curry</h4>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={nextRef} className="featured-swiper-next">
        <MdKeyboardArrowRight className="w-75"/>
      </div>
      <div ref={prevRef} className="featured-swiper-prev">
        <MdKeyboardArrowLeft className="w-75"/>
      </div>
    </>
  )
}