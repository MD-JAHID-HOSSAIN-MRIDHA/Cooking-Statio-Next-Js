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
      <section className="about-banner">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="leftcontent">
                <h1>
                  Cooking Station <span>Event Booking</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightcontent">
                <Image src={thumbImage} alt="event banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- EVENT VIDEO PART START --> */}
      <section className="event_video_sec">
        <div className="container">
          <div className="video_container">
            <div className="video-main">
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
                <a
                  href="https://www.youtube.com/watch?v=BqI0Q7e4kbk"
                  className="video video-popup mfp-iframe"
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
      <section className="how_we_work_sec">
        <div className="container">
          <div className="how_we_work_container">
            <h3 className="section_title mb-5">How to Book an Event</h3>
            <div className="event_step_container">
              <div className="event_step_card">
                <figure className="icon">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 className="step_title">Contact us</h3>
                  <p className="step_des">
                    Knowing where you are starting from and where you&apos;re
                    trying to go is vital to creating a plan to help us you get
                    there.
                  </p>
                </div>
              </div>
              <div className="event_step_card">
                <figure className="icon">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 className="step_title">Choose your service</h3>
                  <p className="step_des">
                    Once we understand the legal issues and tour goals, provide
                    you with our service solutions, and you decide to begin.
                  </p>
                </div>
              </div>
              <div className="event_step_card">
                <figure className="icon">
                  <Image src={relume} alt="" className="third" />
                </figure>
                <div>
                  <h3 className="step_title">Registration</h3>
                  <p className="step_des">
                    We use our legal, business, and industry expertise to
                    develop the optimal plan to help get you where you want to
                    go and educate you throughout the process.
                  </p>
                </div>
              </div>

              <div className="event_step_card">
                <figure className="icon last">
                  <Image src={relume} alt="" />
                </figure>
                <div>
                  <h3 className="step_title">Begin The Work</h3>
                  <p className="step_des">
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
      <section className="event">
        <div className="container">
          <div className="section-top">
            <h3 className="title">Events</h3>
          </div>
          <div className="row g-4 align-items-center ">
            <div className="col-lg-6">
              <div className="eventemagecard">
                <Image src={eventImage1} alt="Event Image one" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eventcard">
                <div className="content">
                  <h3>For Weeding</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button className="eventbox-btn">
                    Plan for Weeding Menu
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eventcard">
                <div className="content">
                  <h3>For Party</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button className="eventbox-btn">Delight Your Guests</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eventemagecard">
                <Image src={eventImage2} alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="eventemagecard">
                <Image src={eventImage3} alt="Event image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eventcard">
                <div className="content">
                  <h3>For Corporate</h3>
                  <p>
                    Welcome to our Reserve for Events section! We are excited to
                    offer you a wide range of events that cater to your
                    interests.{" "}
                  </p>
                  <button className="eventbox-btn">
                    Plan for Weeding Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========EVENT BOOKING FORM  START========= --> */}
      <section className="event_book_section">
        <div className="container">
          <form className="row event_form">
            <div className="col-md-6">
              <label htmlFor="f-name" className="form-label">
                Full Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="f-name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number*
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Address *
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Banasree"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="event-type" className="form-label">
                {" "}
                Type of Event *
              </label>
              <select
                name="event-type"
                className="form-select"
                aria-label="event-type"
                required
              >
                <option value="weeding">Weeding</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="dateTime" className="form-label">
                Date & Time*
              </label>
              <input
                type="date"
                className="form-control"
                id="dateTime"
                name="dateTime"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                No of People
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="menus-type" className="form-label">
                What Menus You Need?
              </label>
              <select
                id="menuCategory"
                name="menus-type"
                className="form-select"
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
            <div id="othersCategory" className="col-12 d-none">
              <label htmlFor="menus-type" className="form-label">
                Your own menu
              </label>
              <input
                type="text"
                className="form-control"
                id="f-name"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                What would you like to discuss? *
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Description.."
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="cs_btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
