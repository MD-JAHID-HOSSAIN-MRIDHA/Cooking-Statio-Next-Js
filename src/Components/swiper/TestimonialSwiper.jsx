"use client"

import reviewer from "@/assets/images/home/testimonial-left.png";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSwiper() {

  return (
    <div className="position-relative overflow-hidden">
      <Swiper
        className="swiper-container testimonial-slider"
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".swiper-pagination-slide",
          clickable: true
        }}
        autoplay
      >
        <SwiperSlide>
          <div className="single-testimonial">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="93"
                viewBox="0 0 95 93"
                fill="none"
              >
                <path
                  d="M8.90625 92.1699L32.6562 92.1699C37.5732 92.1699 41.5625 87.7668 41.5625 82.3396L41.5625 56.1255C41.5625 50.6984 37.5732 46.2952 32.6563 46.2952H17.8125L17.8125 33.1882C17.8125 25.9588 23.1377 20.0811 29.6875 20.0811H31.1719C33.6396 20.0811 35.625 17.8898 35.625 15.166L35.625 5.33572C35.625 2.61191 33.6396 0.42057 31.1719 0.42057H29.6875C13.2852 0.42057 0 15.0841 0 33.1882L0 82.3396C0 87.7668 3.98926 92.1699 8.90625 92.1699ZM62.3438 92.1699H86.0938C91.0107 92.1699 95 87.7668 95 82.3396V56.1255C95 50.6984 91.0107 46.2952 86.0938 46.2952H71.25V33.1882C71.25 25.9588 76.5752 20.0811 83.125 20.0811H84.6094C87.0771 20.0811 89.0625 17.8898 89.0625 15.166V5.33572C89.0625 2.61191 87.0771 0.42057 84.6094 0.42057H83.125C66.7227 0.42057 53.4375 15.0841 53.4375 33.1882L53.4375 82.3396C53.4375 87.7668 57.4268 92.1699 62.3438 92.1699Z"
                  fill="#F1C93B"
                  fillOpacity="0.5"
                />
              </svg>
            </span>
            <p className="text">
              Our first time with Cooking Station and a good way to
              try when on special offer.Varied choice of meals.
              Surprisingly the portions were a good size.
            </p>
            <div className="profile-info">
              <figure className="testimonial-thumb">
                <Image src={reviewer} alt="Reviewer image" />
              </figure>
              <div>
                <p className="name">Kawsar Ahmed</p>
                <p className="designation">Student</p>
                <div className="stars d-flex gap-2">
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-testimonial">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="93"
                viewBox="0 0 95 93"
                fill="none"
              >
                <path
                  d="M8.90625 92.1699L32.6562 92.1699C37.5732 92.1699 41.5625 87.7668 41.5625 82.3396L41.5625 56.1255C41.5625 50.6984 37.5732 46.2952 32.6563 46.2952H17.8125L17.8125 33.1882C17.8125 25.9588 23.1377 20.0811 29.6875 20.0811H31.1719C33.6396 20.0811 35.625 17.8898 35.625 15.166L35.625 5.33572C35.625 2.61191 33.6396 0.42057 31.1719 0.42057H29.6875C13.2852 0.42057 0 15.0841 0 33.1882L0 82.3396C0 87.7668 3.98926 92.1699 8.90625 92.1699ZM62.3438 92.1699H86.0938C91.0107 92.1699 95 87.7668 95 82.3396V56.1255C95 50.6984 91.0107 46.2952 86.0938 46.2952H71.25V33.1882C71.25 25.9588 76.5752 20.0811 83.125 20.0811H84.6094C87.0771 20.0811 89.0625 17.8898 89.0625 15.166V5.33572C89.0625 2.61191 87.0771 0.42057 84.6094 0.42057H83.125C66.7227 0.42057 53.4375 15.0841 53.4375 33.1882L53.4375 82.3396C53.4375 87.7668 57.4268 92.1699 62.3438 92.1699Z"
                  fill="#F1C93B"
                  fillOpacity="0.5"
                />
              </svg>
            </span>
            <p className="text">
              Our first time with Cooking Station and a good way to
              try when on special offer.Varied choice of meals.
              Surprisingly the portions were a good size.
            </p>
            <div className="profile-info">
              <figure className="testimonial-thumb">
                <Image src={reviewer} alt="Reviewer image" />
              </figure>
              <div>
                <p className="name">Kawsar Ahmed</p>
                <p className="designation">Student</p>
                <div className="stars d-flex gap-2">
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="single-testimonial">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="93"
                viewBox="0 0 95 93"
                fill="none"
              >
                <path
                  d="M8.90625 92.1699L32.6562 92.1699C37.5732 92.1699 41.5625 87.7668 41.5625 82.3396L41.5625 56.1255C41.5625 50.6984 37.5732 46.2952 32.6563 46.2952H17.8125L17.8125 33.1882C17.8125 25.9588 23.1377 20.0811 29.6875 20.0811H31.1719C33.6396 20.0811 35.625 17.8898 35.625 15.166L35.625 5.33572C35.625 2.61191 33.6396 0.42057 31.1719 0.42057H29.6875C13.2852 0.42057 0 15.0841 0 33.1882L0 82.3396C0 87.7668 3.98926 92.1699 8.90625 92.1699ZM62.3438 92.1699H86.0938C91.0107 92.1699 95 87.7668 95 82.3396V56.1255C95 50.6984 91.0107 46.2952 86.0938 46.2952H71.25V33.1882C71.25 25.9588 76.5752 20.0811 83.125 20.0811H84.6094C87.0771 20.0811 89.0625 17.8898 89.0625 15.166V5.33572C89.0625 2.61191 87.0771 0.42057 84.6094 0.42057H83.125C66.7227 0.42057 53.4375 15.0841 53.4375 33.1882L53.4375 82.3396C53.4375 87.7668 57.4268 92.1699 62.3438 92.1699Z"
                  fill="#F1C93B"
                  fillOpacity="0.5"
                />
              </svg>
            </span>
            <p className="text">
              Our first time with Cooking Station and a good way to
              try when on special offer.Varied choice of meals.
              Surprisingly the portions were a good size.
            </p>
            <div className="profile-info">
              <figure className="testimonial-thumb">
                <Image src={reviewer} alt="Reviewer image" />
              </figure>
              <div>
                <p className="name">Kawsar Ahmed</p>
                <p className="designation">Student</p>
                <div className="stars d-flex gap-2">
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFC107"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        <div className="swiper-pagination-slide mt-5"></div>
      
    </div>
  )
}