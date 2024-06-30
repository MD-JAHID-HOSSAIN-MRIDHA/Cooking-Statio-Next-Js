import packageImage from "@/assets/images/packages/package.png";
import Image from "next/image";

export const metadata = {
  title: "Packages || Cooking station",
  description: "this is packages page",
};

export default function PackagesPage() {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url('/assets/images/pricing/pricing-hero.png')`,
        }}
      >
        <div className="container">
          <div className="wrapper">
            <div className="banner-content">
              <h2 className="hero-title fw-medium">
                <span className="fw-bold">Pricing & Packages </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ABOUT PACKAGE --> */}
      <section className="aboutpackage">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 h-100">
              <div className="leftcol">
                <h3>About our pricing</h3>
                <p>
                  At Cooking Station, we are committed to making your dining
                  experience memorable. We strive to exceed expectations with
                  each delivery, ensuring that the warmth and goodness of
                  homemade food are not lost in transit.
                </p>
                <button className="cs_btn">Read More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <Image src={packageImage} alt="Package Image" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ABOUT PACKAGE --> */}

      <section className="pricingpackage">
        <div className="container">
          <h3 className="section-title">Choose Your Plan</h3>
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
                      BDT 65/ <br /> <span>per meal</span>{" "}
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
                      BDT 65/ <br /> <span>per meal</span>{" "}
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
                      BDT 60/ <br /> <span>per meal</span>{" "}
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
                      BDT 60/ <br /> <span>per meal</span>{" "}
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
                      BDT 75/ <br /> <span>per meal</span>{" "}
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
                      BDT 75/ <br /> <span>per meal</span>{" "}
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
                      BDT 70/ <br /> <span>per meal</span>{" "}
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
                      BDT 70/ <br /> <span>per meal</span>{" "}
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
                      delivery!
                      <br /> <br />
                      We are passionate food enthusiasts committed to bringing
                      the warmth and flavors of homemade meals right to your
                      table. <br /> <br />
                      Our journey began with a simple idea – to share the joy of
                      delicious, freshly prepared food, just like mom used to
                      make. <br /> <br />
                    </p>
                    <h3 className="price">
                      BDT 120/ <span>per meal</span>
                    </h3>
                    <a href="/pakages" className="cs_btn">
                      Subscription{" "}
                    </a>
                    <span className="or">OR</span>
                    <a href="/corporate.html" className="cs_btn">
                      Customize Your Own Plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
