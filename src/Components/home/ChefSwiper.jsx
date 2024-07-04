"use client"
import chef1 from "@/assets/images/chefs/chef-1.png";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ChefSwiper() {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={ {delay: 3000}}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      grabCursor={true}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className="swiper chefswiper py-5">
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="chefcard">
          <figure className="chefthumb">
            <Image src={chef1} alt="" />
          </figure>
          <div className="content">
            <h3 className="title">Koly Akter</h3>
            <p className="designation">House Wife</p>
            <p className="des">
              An idol house wife, who live in Mirpur DOHS, Dhaka 1206.
              Her cooking hand is very well and you will love it we
              swear.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}