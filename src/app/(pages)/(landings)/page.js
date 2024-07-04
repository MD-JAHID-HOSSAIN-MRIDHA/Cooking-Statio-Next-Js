import ChefSwiper from "@/Components/home/ChefSwiper";
import FeaturedSwiper from "@/Components/home/FeaturedSwiper";
import HeroSwiper from "@/Components/home/HeroSwiper";
import chefAbout from "@/assets/images/chefs/chef_about.jpg";
import eventBG from "@/assets/images/event/event-bg.png";
import one from "@/assets/images/home/chooseus/1.png";
import two from "@/assets/images/home/chooseus/2.png";
import three from "@/assets/images/home/chooseus/3.png";
import four from "@/assets/images/home/chooseus/4.png";
import five from "@/assets/images/home/chooseus/5.png";
import rightOne from "@/assets/images/home/chooseus/right-1.png";
import rightTwo from "@/assets/images/home/chooseus/right-2.png";
import {
  default as testLeft,
  default as testPerson,
} from "@/assets/images/home/testimonial-left.png";
import deliverIcon from "@/assets/images/icons/fast-delivery.svg";
import planIcon from "@/assets/images/icons/plan.svg";
import restaurantIcon from "@/assets/images/icons/restaurant.svg";
import smileSVG from "@/assets/images/icons/smile.svg";
import verifyIcon from "@/assets/images/icons/verify.svg";
import watchVideo from "@/assets/images/icons/watch_video.svg";
import Image from "next/image";
import { BiConversation } from "react-icons/bi";
import { FaFacebookMessenger, FaPhone, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Home || Cooking station",
  description: "this is home page",
};
export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="container hero bg-white">
        <div className="smile_icon">
          <Image src={smileSVG} alt="Smile icon" />
        </div>
        <div className="d-lg-flex flex-md-row-reverse justify-content-between align-items-center w-100 gap-5">
          <div className="flex-1 overflow-hidden pt-6">
            <HeroSwiper />
          </div>

          <div className="hero_content flex-1 pt-3">
            <div>
              <h1 className="banner_title text-center text-lg-start">
                Enjoy <span className="o"></span>ur Healthy and Delicious Dish
              </h1>
              <p className="banner_body py-3 text-justify">
                Cooking Station is prominent to provide On Demand Home Cook Food
                Delivery For Bachelor, Officials, Family&apos;s and also as per
                needed for Events.
              </p>
            </div>
            <div className="hero_action_btn text-center text-lg-start">
              <button className="cs_btn">Subscription</button>
              <button className="live_btn">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section>
        <div className="container about_sec">
          <figure className="">
            <Image src={chefAbout} alt="chef picture" />
          </figure>

          <div className=" ">
            <h3 className="title">About Cooking Station</h3>
            <p className="des">
              Cooking Station prominent to provide home made food for Bachelor,
              Official and Family&apos;s.
            </p>
            <p className="des">
              Every dish we create is a product of love and dedication. Our
              skilled chefs use the finest ingredients, combining traditional
              recipes with a modern twist to ensure each bite is a delightful
              experience.
            </p>
            <button className="cs_btn">Read More</button>
            <div className="watch_btn_container">
              <button className="watch_btn">
                <Image src={watchVideo} alt="watch video thumbnail" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* featured */}
      <section>
        <div className="container featured_sec">
          <div className="section-top">
            <h3 className="title">Our Feature Dishes</h3>
            <p className="des">Check Our Healthy and Delicious Menu</p>
          </div>

          <FeaturedSwiper />
          {/* <div className="swiper featured-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <Image
                      src={featured_dish}
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <Image
                      src={featured_dish}
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <img
                      src="assets/images/Chicken Curry.png"
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <img
                      src="assets/images/Chicken Curry.png"
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <img
                      src="assets/images/Chicken Curry.png"
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="featured_card">
                  <figure>
                    <img
                      src="assets/images/Chicken Curry.png"
                      alt=""
                      className="featured_dish"
                    />
                  </figure>
                  <h4 className="title">Chicken Curry</h4>
                </div>
              </div>
            </div>
          </div> */}

          <div className="featured_dish_action">
            <button className="cs_btn">More Dishes</button>
          </div>
        </div>
      </section>
      {/* how we work */}
      <section className="how_work_sec">
        <div className="container">
          <div className="section-top">
            <h3 className="title">How We Work</h3>
            <p className="des">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry&apos;s
            </p>
          </div>

          <div className="section_body">
            {/* <!-- register --> */}
            <div className="step_card">
              <div className="content">
                <figure>
                  <Image src={verifyIcon} alt="verify icon" />
                </figure>
                <h4 className="step">Register</h4>
                <p className="step_des">
                  Visit our website then register following this link.
                </p>
              </div>
            </div>
            {/* <!-- choose plan --> */}
            <div className="step_card">
              <div className="content">
                <figure>
                  <Image src={planIcon} alt="Plan icon" />
                </figure>
                <h4 className="step step_plan">Select a Plan</h4>
                <p className="step_des">
                  Select a plan from package plan and order or subscribe it.
                </p>
              </div>
            </div>
            {/* <!-- Deliver --> */}
            <div className="step_card">
              <div className="content">
                <figure>
                  <Image src={deliverIcon} alt="Deliver icon" />
                </figure>
                <h4 className="step">Deliver</h4>
                <p className="step_des">
                  We will deliver your desire dish at your doorstep ASAP.
                </p>
              </div>
            </div>
            {/* <!-- eat --> */}
            <div className="step_card">
              <div className="content">
                <figure>
                  <Image src={restaurantIcon} alt="Restaurant Icon" />
                </figure>
                <h4 className="step">Just Eat</h4>
                <p className="step_des" style={{ width: "fit-content" }}>
                  Just enjoy it...........
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why us */}
      <section className="whychoose">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="choose-wrapper">
                <div className="singlechoose">
                  <div className="circle">
                    <figure className="chooseusthumb">
                      <Image src={one} alt="one" />
                    </figure>
                  </div>
                  <div className="right">
                    <h3 className="title">Best Chef</h3>
                    <p className="des">
                      Every dish we create is a product of love and dedication.
                      Our skilled chefs use the finest ingredients,
                    </p>
                  </div>
                </div>
                <div className="singlechoose">
                  <div className="circle">
                    <figure className="chooseusthumb">
                      <Image src={two} alt="two" />
                    </figure>
                  </div>
                  <div className="right">
                    <h3 className="title">Fresh, Healthy and Hygienic</h3>
                    <p className="des">
                      Every dish we create is a product of love and dedication.
                      Our skilled chefs use the finest ingredients,
                    </p>
                  </div>
                </div>
                <div className="singlechoose">
                  <div className="circle">
                    <figure className="chooseusthumb">
                      <Image src={three} alt="three" />
                    </figure>
                  </div>
                  <div className="right">
                    <h3 className="title">Diet and nutrition management</h3>
                    <p className="des">
                      Every dish we create is a product of love and dedication.
                      Our skilled chefs use the finest ingredients,
                    </p>
                  </div>
                </div>
                <div className="singlechoose">
                  <div className="circle">
                    <figure className="chooseusthumb">
                      <Image src={four} alt="Four" />
                    </figure>
                  </div>
                  <div className="right">
                    <h3 className="title">Delicious</h3>
                    <p className="des">
                      Every dish we create is a product of love and dedication.
                      Our skilled chefs use the finest ingredients,
                    </p>
                  </div>
                </div>
                <div className="singlechoose">
                  <div className="circle">
                    <figure className="chooseusthumb">
                      <Image src={five} alt="five" />
                    </figure>
                  </div>
                  <div className="right">
                    <h3 className="title">Fit your Budget</h3>
                    <p className="des">
                      Every dish we create is a product of love and dedication.
                      Our skilled chefs use the finest ingredients,
                    </p>
                  </div>
                </div>
              </div>
              <button className="eventbox-btn reverse px-5">Learn More</button>
            </div>
            <div className="col-lg-6">
              <div className="section-top text-start align-items-start">
                <h1 className="title">Why Coose Us</h1>
                <p className="des">
                  What makes us Difference to make you choose us!We are
                  prominent to deliver home cooked and original taste food
                  anywhere in the country and we gonna launch worldwide.
                </p>
              </div>
              <div className="image-wrapper">
                <figure>
                  <Image src={rightOne} alt="Right one" />
                </figure>
                <figure>
                  <Image src={rightTwo} alt="Right two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing */}
      <section className="pricingpackage">
        <div className="container">
          <div className="section-top mb-5">
            <h1 className="title">Pricing Package Choose Your Plan</h1>
            <p className="des">
              Especially Design For Family, Bachelor, Students and Job-holder
            </p>
          </div>
          <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="basic-tab"
                data-bs-toggle="tab"
                href="#basic"
                role="tab"
                aria-controls="basic"
                aria-selected="true"
              >
                Basic
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="premium-tab"
                data-bs-toggle="tab"
                href="#premium"
                role="tab"
                aria-controls="premium"
                aria-selected="false"
              >
                Premium
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="corporate-tab"
                data-bs-toggle="tab"
                href="#corporate"
                role="tab"
                aria-controls="corporate"
                aria-selected="false"
              >
                Corporate
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="basic"
              role="tabpanel"
              aria-labelledby="basic-tab"
            >
              <div className="row g-4">
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">3 Days</h3>
                    <ul className="facility">
                      <li>Special For Try Our Service.</li>
                      <li>Special For Patient Guardian.</li>
                      <li>Special For Weekend.</li>
                      <li>No Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 65/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">7 Days</h3>
                    <ul className="facility">
                      <li>Special For Test More Menus.</li>
                      <li>Special For Short Stay People.</li>
                      <li>Special For Weekly Payment.</li>
                      <li>No Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 65/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">15 Days</h3>
                    <ul className="facility">
                      <li>Special For Student.</li>
                      <li>Special For Family.</li>
                      <li>Special For Official.</li>
                      <li>5 Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 60/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">30 Days</h3>
                    <ul className="facility">
                      <li>Special For Less Hastle.</li>
                      <li>Student Friendly</li>
                      <li>Special For Official.</li>
                      <li>10 Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 60/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="premium"
              role="tabpanel"
              aria-labelledby="premium-tab"
            >
              <div className="row g-4">
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">3 Days</h3>
                    <ul className="facility">
                      <li>Special For Try Our Service.</li>
                      <li>Special For Patient Guardian.</li>
                      <li>Special For Weekend.</li>
                      <li>No Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 75/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">7 Days</h3>
                    <ul className="facility">
                      <li>Special For Test More Menus.</li>
                      <li>Special For Short Stay People.</li>
                      <li>Special For Weekly Payment.</li>
                      <li>No Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 75/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">15 Days</h3>
                    <ul className="facility">
                      <li>Special For Student.</li>
                      <li>Special For Family.</li>
                      <li>Special For Official.</li>
                      <li>5 Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 70/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="pricingpagecard">
                    <h3 className="day">30 Days</h3>
                    <ul className="facility">
                      <li>Special For Less Hastle.</li>
                      <li>Student Friendly</li>
                      <li>Special For Official.</li>
                      <li>10 Flexible Meal.</li>
                    </ul>
                    <h3 className="price">
                      BDT 70/ <br />
                      <span>per meal</span>
                    </h3>
                    <button className="cs_btn">Subscription</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="corporate"
              role="tabpanel"
              aria-labelledby="corporate-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="cardcorporate">
                    <p>
                      Welcome to Cooking Station – where the heart of
                      home-cooked goodness meets the convenience of doorstep
                      delivery! <br />
                      <br />
                      We are passionate food enthusiasts committed to bringing
                      the warmth and flavors of homemade meals right to your
                      table.
                      <br />
                      <br />
                      Our journey began with a simple idea – to share the joy of
                      delicious, freshly prepared food, just like mom used to
                      make. <br />
                      <br />
                    </p>
                    <h3 className="price">
                      BDT 120/ <span>per meal</span>
                    </h3>
                    <a href="/pakages" className="cs_btn">
                      Subscription{" "}
                    </a>
                    <span className="or">OR</span>
                    <a href="/pakages" className="cs_btn">
                      Customize Your Own Plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- =================== TESTIMONIAL PART START=================== --> */}
      <section className="testimonial">
        <div className="container">
          <div className="section-top mb-5">
            <h1 className="title">What Our Clients Say</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <figure className="testimonialthumb">
                <Image src={testLeft} alt="testimonial left" />
              </figure>
            </div>
            <div className="col-lg-6">
              {/* <!-- Swiper slider container --> */}
              <div className="position-relative overflow-hidden">
                <div className="swiper-container testimonial-slider">
                  <div className="swiper-wrapper">
                    {/* <!-- Single Testimonial--> */}
                    <div className="swiper-slide">
                      {/* <!-- Testimonial content --> */}
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
                              fill-opacity="0.5"
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
                            <Image src={testPerson} alt="Reviewer image" />
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
                    </div>
                    {/* <!-- Single Testimonial--> */}
                    <div className="swiper-slide">
                      {/* <!-- Testimonial content --> */}
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
                              fill-opacity="0.5"
                            />
                          </svg>
                        </span>
                        <p className="text">
                          Cooking Station&apos;s homemade catering exceeded our
                          expectations. The menu options were diverse, and the
                          quality of the food was outstanding. It truly felt
                          like a home-cooked meal made with love. We&apos;ll be
                          spreading the word about this gem!
                        </p>
                        <div className="profile-info">
                          <figure className="testimonial-thumb">
                            <img
                              src="assets/images/home/testimonial-person.png"
                              alt=""
                            />
                          </figure>
                          <div>
                            <p className="name">Mirza Hasan</p>
                            <p className="designation">Accountant</p>
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
                    </div>
                    {/* <!-- Single Testimonial--> */}
                    <div className="swiper-slide">
                      {/* <!-- Testimonial content --> */}
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
                              fill-opacity="0.5"
                            />
                          </svg>
                        </span>
                        <p className="text">
                          Thank you, Cooking Station, for the amazing catering
                          experience! The food was top-notch, and the
                          presentation was impeccable. It added that extra touch
                          of sophistication to our event. We&apos;ll definitely
                          be coming back for more!
                        </p>
                        <div className="profile-info">
                          <figure className="testimonial-thumb">
                            <img
                              src="assets/images/home/testimonial-person.png"
                              alt=""
                            />
                          </figure>
                          <div>
                            <p className="name">Mirza Hasan</p>
                            <p className="designation">Accountant</p>
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
                    </div>
                  </div>
                  <div className="swiper-pagination-slide"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =================== JOIN US PART START=================== --> */}
      <section className="joinus">
        <div className="container">
          <div className="joinus-inner">
            <h2>
              Join Our Family and Try Us. – where every meal is a celebration of
              home !
            </h2>
            <button className="joinus-btn">
              <span> Join With Us </span>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- =================== EVENT  PART START================== --> */}
      <section className="event">
        <div className="container">
          <div className="section-top">
            <h1 className="title">Book Your Taste, Stay With Us</h1>
            <p className="des">
              Welcome to our Reserve for Events section! We are excited to offer
              you a wide range of events <br />
              that cater to your interests.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="eventbox">
                <h2 className="eventbox-title">For Weeding</h2>
                <p className="eventbox-text">
                  Welcome to our Reserve for Events section! We are excited to
                  offer you a wide range of events that cater to your interests.
                </p>
                <button className="eventbox-btn">Plan for Weeding Menu</button>
              </div>
              <div className="eventbox">
                <h2 className="eventbox-title">For Corporate</h2>
                <p className="eventbox-text">
                  Welcome to our Reserve for Events section! We are excited to
                  offer you a wide range of events that cater to your interests.
                </p>
                <button className="eventbox-btn">Enhance Your Event</button>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <figure className="eventimg">
                <Image src={eventBG} alt="Event background" />
              </figure>
            </div>
            <div className="col-12 col-lg-4">
              <div className="eventbox">
                <h2 className="eventbox-title">For Weeding</h2>
                <p className="eventbox-text">
                  Welcome to our Reserve for Events section! We are excited to
                  offer you a wide range of events that cater to your interests.
                </p>
                <button className="eventbox-btn">Plan for Weeding Menu</button>
              </div>
              <div className="eventbox">
                <h2 className="eventbox-title">For Corporate</h2>
                <p className="eventbox-text">
                  Welcome to our Reserve for Events section! We are excited to
                  offer you a wide range of events that cater to your interests.
                </p>
                <button className="eventbox-btn">Enhance Your Event</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =================== OUR CHEFS START=================== --> */}
      <section className="ourchefs position-relative">
        <div className="container">
          <div className="section-top">
            <h1 className="title">Our Proffesional Chefs</h1>
            <p className="des">
              Treat yourself to our talented chefs&apos; homemade delights.{" "}
              <br />
              Enjoy their tasty creations and join us for a memorable dining
              experience
            </p>
          </div>
          {/* <div className="swiper chefswiper py-5">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-1.png" alt="" />
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
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-2.png" alt="" />
                  </figure>
                  <div className="content">
                    <h3 className="title">Mukhlesur Rahman</h3>
                    <p className="designation">Ex Cook</p>
                    <p className="des">
                      He is an experienced cook. He has given service in Hotel
                      for 8 years. Now he is serving meal to office worker and
                      family. His workplace is Mirpur 2, Comm erce College Road,
                      Dhaka 1216
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-3.png" alt="" />
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
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-4.png" alt="" />
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
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-1.png" alt="" />
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
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-2.png" alt="" />
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
              </div>
              <div className="swiper-slide">
                <div className="chefcard">
                  <figure className="chefthumb">
                    <img src="assets/images/chefs/chef-3.png" alt="" />
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
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
          <ChefSwiper />
        </div>
      </section>

      {/* <!-- =================== OUR CHEFS END=================== --> */}

      <section className="support">
        <div className="support_section collapse" id="collapseExample">
          <div className="support_header">
            <h3 className="title">Hello there</h3>
            <p className="desc">
              Please let us know who you are to start the conversation
            </p>
          </div>

          <div className="support_body">
            <form className="row contact_form">
              <div className="col-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="number"
                  placeholder="Phone Number: Ex. 017xxxxxxxxxx"
                  className="form-control"
                  id="phone"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="cs_btn w-100">
                  Continue
                </button>
              </div>
            </form>
            <div className="divider">
              <span>OR</span>
            </div>
          </div>

          <div className="support_footer">
            <p>Contact us with our support number</p>
            <div className="icon_container">
              <div>
                <a href="">
                  <FaWhatsapp />
                </a>
              </div>
              <div>
                <a href="">
                  {/* <img src="assets/icons/messanger.jpg" alt="" /> */}
                  <FaFacebookMessenger />
                </a>
              </div>
              <div>
                <a href="">
                  <FaPhone />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mt-3">
          <button
            className="cs_btn message-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <BiConversation size={30} />
          </button>
        </div>
      </section>
    </>
  );
}
