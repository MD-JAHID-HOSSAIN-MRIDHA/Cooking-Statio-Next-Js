import relume from "@/assets/icons/Relume.svg";
import thumbImage from "@/assets/images/about/about-cooking.png";
import eventImage1 from "@/assets/images/event/event-1.png";
import eventImage2 from "@/assets/images/event/event-2.png";
import eventImage3 from "@/assets/images/event/event-3.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
export const metadata = {
  title: "Event || Cooking station",
  description: "this is Event page",
};
export default function EventPage() {
  return (
    <>
      {/* <!-- ==========BANNER SECTION START========== --> */}
      <section class="contact_us_sec lightyellow-bg">
        <div class="container">
          <div class="contact_us_container">
            <div>
              <h1 class="banner_title">
                Cooking Station
                <span class="fw-bold"> Event Booking </span>
              </h1>
            </div>

            <figure class="about-thumb">
              <Image src={thumbImage} alt="" class="w-100" />
            </figure>
          </div>
        </div>
      </section>

      {/* <!-- EVENT VIDEO PART START --> */}
      <section class="event_video_sec">
        <div class="container">
          <div class="video_container">
            <div class="video-main">
              <div class="waves-block">
                <div class="waves wave-1"></div>
                <div class="waves wave-2"></div>
                <div class="waves wave-3"></div>
                <a
                  href="https://www.youtube.com/watch?v=BqI0Q7e4kbk"
                  class="video video-popup mfp-iframe"
                  data-lity
                >
                  <FaPlay className="w-25" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- how to book event start --> */}
      <section class="how_we_work_sec">
        <div class="container">
          <div class="how_we_work_container">
            <h3 class="section_title mb-5">How to Book an Event</h3>
            <div class="event_step_container">
              <div class="event_step_card">
                <figure class="icon">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 class="step_title">Contact us</h3>
                  <p class="step_des">
                    Knowing where you are starting from and where you&apos;re
                    trying to go is vital to creating a plan to help us you get
                    there.
                  </p>
                </div>
              </div>
              <div class="event_step_card">
                <figure class="icon">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 class="step_title">Choose your service</h3>
                  <p class="step_des">
                    Once we understand the legal issues and tour goals, provide
                    you with our service solutions, and you decide to begin.
                  </p>
                </div>
              </div>
              <div class="event_step_card">
                <figure class="icon">
                  <Image src={relume} alt="" class="third" />
                </figure>
                <div>
                  <h3 class="step_title">Registration</h3>
                  <p class="step_des">
                    We use our legal, business, and industry expertise to
                    develop the optimal plan to help get you where you want to
                    go and educate you throughout the process.
                  </p>
                </div>
              </div>

              <div class="event_step_card">
                <figure class="icon last">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 class="step_title">Begin The Work</h3>
                  <p class="step_des">
                    Time to roll up our sleeves and execute the plan. We make
                    sure you are up to speed every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =================== EVENT  PART START================== --> */}
      <section class="event">
        <div class="container">
          <div class="section-top">
            <h3 class="title">Events</h3>
          </div>
          <div class="row g-4 align-items-center ">
            <div class="col-lg-6">
              <div class="eventemagecard">
                <Image src={eventImage1} alt="Event Image one" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="eventcard">
                <div class="content">
                  <h3>For Weeding</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button class="eventbox-btn">Plan for Weeding Menu</button>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="eventcard">
                <div class="content">
                  <h3>For Party</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button class="eventbox-btn">Delight Your Guests</button>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="eventemagecard">
                <Image src={eventImage2} alt="" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="eventemagecard">
                <Image src={eventImage3} alt="Event image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="eventcard">
                <div class="content">
                  <h3>For Corporate</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button class="eventbox-btn">Plan for Weeding Menu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========EVENT BOOKING FORM  START========= --> */}
      <section class="event_book_section">
        <div class="container">
          <form class="row event_form">
            <div class="col-md-6">
              <label for="f-name" class="form-label">
                Full Name*
              </label>
              <input type="text" class="form-control" id="f-name" required />
            </div>

            <div class="col-md-6">
              <label for="email" class="form-label">
                Email Address
              </label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">
                Phone Number*
              </label>
              <input type="number" class="form-control" id="phone" required />
            </div>

            <div class="col-md-6">
              <label for="address" class="form-label">
                Address *
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Banasree"
                required
              />
            </div>

            <div class="col-12">
              <label for="event-type" class="form-label">
                {" "}
                Type of Event *
              </label>
              <select
                name="event-type"
                class="form-select"
                aria-label="event-type"
                required
              >
                <option value="weeding">Weeding</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="dateTime" class="form-label">
                Date & Time*
              </label>
              <input
                type="date"
                class="form-control"
                id="dateTime"
                name="dateTime"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">
                No of People
              </label>
              <input type="number" class="form-control" id="phone" required />
            </div>
            <div class="col-12">
              <label for="menus-type" class="form-label">
                What Menus You Need?
              </label>
              <select
                id="menuCategory"
                name="menus-type"
                class="form-select"
                aria-label="menus-type"
                required
              >
                <option value="indian">Indian</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div id="othersCategory" class="col-12 d-none">
              <label for="menus-type" class="form-label">
                Your own menu
              </label>
              <input type="text" class="form-control" id="f-name" required />
            </div>
            <div class="col-12">
              <label for="message" class="form-label">
                What would you like to discuss? *
              </label>
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Description.."
              ></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="cs_btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
