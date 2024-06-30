import aboutBanner from "@/assets/images/about/about-banner.png";
import chef from "@/assets/images/about/chef_team.jpg";
import commitment1 from "@/assets/images/about/commitment-1.jpg";
import commitment from "@/assets/images/about/commitment.jpg";
import managementTeam from "@/assets/images/about/management_team.jpg";
import nutrationist from "@/assets/images/about/nutrationist_team.jpg";
import rider from "@/assets/images/about/rider_team.jpg";
import quality from "@/assets/images/icons/convenience 1.svg";
import crafting1 from "@/assets/images/icons/crafting 1.svg";
import ecological from "@/assets/images/icons/ecological 1.png";
import geoMetry from "@/assets/images/icons/geometry 1.png";
import harvest from "@/assets/images/icons/harvest 1.svg";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export const metadata = {
  title: "About us || Cooking station",
  description: "this is home page",

};
export default function AboutPage() {

  return (
    <>
      <section className="about-banner">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="leftcontent">
                <h1><span>About</span> Cooking Station</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightcontent">
                <Image src={aboutBanner} alt="About banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MISSION SECTION START --> */}
      <section className="mission_sec">
        <div className="container">
          <div className="mission_container">
            <div className="video-main">
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
                <a href="https://www.youtube.com/watch?v=BqI0Q7e4kbk" className="video video-popup mfp-iframe"
                  data-lity><FaPlay className="w-25" /></a>
              </div>
            </div>

            <div>
              <h3 className="title">Our Mission</h3>
              <p className="des">Welcome to Cooking Station – where the heart of home-cooked goodness meets the
                convenience of doorstep delivery! We are passionate food enthusiasts committed to bringing the
                warmth and flavors of homemade meals right to your table. Our journey began with a simple idea –
                to share the joy of delicious, freshly prepared food, just like mom used to make.</p>
              <div>
                <button className="cs_btn">Read More</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <!-- COMMITMENT SECTION START HERE --> */}
      <section className="commitment_sec">
        <div className="container">
          <div className="commitment_container">
            <div className="images">
              <figure>
                <Image src={commitment} alt="commitment" />
              </figure>
              <figure>
                <Image src={commitment1} alt="commitment" />
              </figure>
            </div>
            <div>
              <div>
                <h3 className="title">Our Commitment</h3>
                <p className="des">At Cooking Station, we are committed to making your dining experience memorable.
                  We strive to exceed expectations with each delivery, ensuring that the warmth and goodness
                  of homemade food are not lost in transit.</p>
              </div>
              <div className="middle">
                <p>Local team on-call 24 hours a day, available to work at a moment’s notice.</p>
              </div>
              <div className="last">
                <div>
                  <button className="cs_btn">Contact us</button>
                </div>
                <div>
                  <h5>Get Free Estimate</h5>
                  <p>+4473886243123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- ===================COUNTER SECTION START =================== --> */}
      <section className="counter ">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="counter-box">
                <h3>300</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="counter-box">
                <h3>30</h3>
                <p>Menus</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="counter-box">
                <h3>2</h3>
                <p>Years of Running </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="counter-box">
                <h3>50</h3>
                <p>Chefs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- DIFFERENCE FROM OTHERS SECTION START --> */}
      <section className="difference_sec">
        <div className="container">
          <div className="section-top">
            <h3 className="title">Our Cooking Station Difference</h3>
          </div>
          <div className="difference_container">
            <div className="difference">
              <figure>
                <Image src={crafting1} alt="crafting" />
              </figure>
              <h1 className="title">Handcrafted with Love</h1>
              <p className="des">
                Every dish we create is a product of love and dedication. Our skilled chefs use the finest
                ingredients, combining traditional recipes with a modern twist to ensure each bite is a
                delightful experience.
              </p>
            </div>
            <div className="difference">
              <figure>
                <Image src={quality} alt="quality" />
              </figure>
              <h1 className="title"> Quality Ingredients</h1>
              <p className="des">
                We believe in the power of fresh, high-quality ingredients. From farm-fresh vegetables to premium meats, we source our components meticulously to guarantee the excellence that defines our food.
              </p>
            </div>
            <div className="difference">
              <figure>
                <Image src={geoMetry} alt="Geo metre icon" />
              </figure>
              <h1 className="title">Health Conscious</h1>
              <p className="des">
                Your well-being matters to us. That&apos;s why we prioritize health without compromising on taste. Our meals are crafted with mindful consideration to nutritional balance, catering to various dietary preferences and restrictions
              </p>
            </div>
            <div className="difference">
              <figure>
                <Image src={ecological} alt="ecological icon" />
              </figure>
              <h1 className="title">Variety for Every Palate</h1>
              <p className="des">
                Our diverse menu is designed to cater to all tastes and preferences. Whether you crave comfort classics, international flavors, or innovative culinary creations, Cooking Station has something for everyone.
              </p>
            </div>
            <div className="difference">
              <figure>
              <Image src={harvest} alt="harvest icon" />
              </figure>
              <h1 className="title">Convenience Redefined</h1>
              <p className="des">
                We understand the hustle of daily life. That&aps;s why we&apos;ve made ordering from us a breeze. With just a few clicks, you can enjoy a home-cooked meal without the hassle of prep or cleanup.

              </p>
            </div>

          </div>
        </div>
      </section>

      {/* <!-- =================== JOIN US PART START=================== --> */}
      <section className="joinus">
        <div className="container">
          <div className="joinus-inner">
            <h2>Join Our Family and Try Us. – where every meal is
              a celebration of home !</h2>
            <button className="joinus-btn ">
              <span>
                Join With Us
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- ======== OUR TEAM SECTION START ========== --> */}
      <section className="our_team_sec">
        <div className="container">
          <div className="section-top">
            <h3 className="title">
              Our Team
            </h3>
            <p className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s </p>
          </div>
          <div className="our_team_container">
            <div className="team">
              <figure>
                <Image src={managementTeam} alt="Management team" />
              </figure>

              <div className="team_body">
                <h3 className="team_count">1</h3>
                <p className="team_name">Management</p>
              </div>

            </div>
            <div className="team">
              <figure>
                <Image src={chef} alt="" />
              </figure>

              <div className="team_body">
                <h3 className="team_count">2</h3>
                <p className="team_name">Chef</p>
              </div>

            </div>
            <div className="team">
              <figure>
                <Image src={nutrationist} alt="Nutritionist team" />
              </figure>

              <div className="team_body">
                <h3 className="team_count">3</h3>
                <p className="team_name">Nutritionist</p>
              </div>

            </div>
            <div className="team">
              <figure>
                <Image src={rider} alt="rider team" />
              </figure>

              <div className="team_body">
                <h3 className="team_count">4</h3>
                <p className="team_name">Rider</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}