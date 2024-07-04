export default function ContactPage() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="wrapper">
            <div className="banner-content">
              <h2 className="hero-title fw-medium">
                Cooking Station <br />
                <span className="fw-bold">Contact</span>
              </h2>
              <p className="hero-des">
                There are many variations of passages of orem Ipsum available,
                but the majority have suffered alteration in some form, by cted
                ipsumlor sit amet, consectetur .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CONTACT FORM SECTION START --> */}
      <section className="contact_form_sec">
        <div className="container">
          <div className="section-top">
            <h2 className="title main_title">Talk with our contact team</h2>
          </div>
          <div className="contact_info_container">
            {/* <!-- contact details --> */}
            <div className="contact_details">
              <h4 className="sub-title">send message</h4>
              <h3 className="title">Find us Here</h3>
              <p className="des">
                There are many variations of passages of orem Ipsum available,
                but the majority have suffered alteration in some form, by cted
                ipsumlor sit amet, consectetur adipisicing elit, sed do usmod
                temp idunt ut et dolore magna aliqua ut enim ad minim.
              </p>
            </div>

            {/* <!-- contact form --> */}
            <form className="row contact_form">
              <div className="col-md-6">
                <label for="name" className="form-label">
                  Name *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Nishi"
                />
              </div>
              <div className="col-md-6">
                <label for="phone" className="form-label">
                  Phone Number{" "}
                </label>
                <input
                  type="number"
                  placeholder="+880"
                  className="form-control"
                  id="phone"
                />
              </div>
              <div className="col-md-6">
                <label for="email" className="form-label">
                  {" "}
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Info@gmail.com"
                  className="form-control"
                  id="email"
                />
              </div>

              <div className="col-12">
                <label for="message" className="form-label">
                  What would you like to discuss? *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Type your message here.."
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="cs_btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT INFO START  --> */}
      <section className="contact_info">
        <div className="container">
          <div className="section-top">
            <h3 className="section-title">Get in touch</h3>
          </div>
          <div className="wrapper">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57880475.92593059!2d2.3640324644245894!3d27.69430943699798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa53e4f283f5eea4b%3A0xd8ee6df471e218a6!2sCooking%20Station!5e0!3m2!1sen!2sbd!4v1715762761568!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact_details">
              <div>
                <h3 className="title">Location</h3>
                <p>
                  20 primrose street, London, EC2A 2EW <br />
                  United Kingdom
                </p>
              </div>
              <div>
                <h3 className="title">contact@cookingstation.homes</h3>
                <p>contact@cookingstation.homes</p>
              </div>
              <div>
                <h3 className="title">Phone</h3>
                <p>UK: +4473886243123</p>
                <p>BD: +8801648950765</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
