import heartIcon from "@/assets/images/icons/hart.png";
import starIcon from "@/assets/images/icons/star.jpg";
import menuCard from "@/assets/images/menu/menu-card-bg.png";
import { Image } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";

export const metadata = {
  title: "Menu || Cooking station",
  description: "this is menu of Cooking station",
};

export default function MenuPage() {
  return (
    <>
      <section className="banner" style={{ height: "804px" }}>
        <div className="container">
          <div className="wrapper">
            <div className="banner-content">
              <h2 className="hero-title">Menu</h2>
              <p className="hero-des">
                There are many variations of passages of orem Ipsum available,
                but the majority have suffered alteration in some form, by cted
                ipsumlor sit amet, consectetur .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-section">
        <div className="container">
          <div className="wrapper">
            <div className="section-header">
              <h2 className="section-title">
                Our Traditional Food Based on Location
              </h2>
              <ul className="nav nav-pills menu-tab" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#allCategory"
                    type="button"
                    role="tab"
                    aria-controls="allCategory-tab"
                    aria-selected="true"
                  >
                    All Category
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#basic"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Basic
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#premium"
                    type="button"
                    role="tab"
                    aria-controls="premium"
                    aria-selected="false"
                  >
                    Premium
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#corporate"
                    type="button"
                    role="tab"
                    aria-controls="corporate"
                    aria-selected="false"
                  >
                    Corporate
                  </button>
                </li>
              </ul>
            </div>

            <div className="section-body">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="allCategory"
                  role="tabpanel"
                  aria-labelledby="allCategory-tab"
                  tabIndex="0"
                >
                  <div className="menu-cat-wrapper">
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="basic"
                  role="tabpanel"
                  aria-labelledby="basic-tab"
                  tabIndex="0"
                >
                  <div className="menu-cat-wrapper">
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="premium"
                  role="tabpanel"
                  aria-labelledby="premium-tab"
                  tabIndex="0"
                >
                  <ul
                    className="nav nav-pills menu-tab"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#allPremium"
                        type="button"
                        role="tab"
                        aria-controls="allPremium-tab"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#basic-premium"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Basic
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nutrition"
                        type="button"
                        role="tab"
                        aria-controls="premium"
                        aria-selected="false"
                      >
                        Nutrition
                      </button>
                    </li>

                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#diet"
                        type="button"
                        role="tab"
                        aria-controls="diet"
                        aria-selected="false"
                      >
                        Diet
                      </button>
                    </li>
                  </ul>
                  <div className="menu-cat-wrapper">
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="corporate"
                  role="tabpanel"
                  aria-labelledby="corporate-tab"
                  tabIndex="0"
                >
                  <div className="menu-cat-wrapper">
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <Image
                        src={menuCard.src}
                        className="card-img-top"
                        alt="Menu Card BG"
                      />

                      <div className="discount-wrapper">
                        <div className="discount">20% off</div>
                        <button className="hart-btn">
                          <Image src={heartIcon.src} alt="heart icon" />
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="review-price">
                          <span className="price">TK 120</span>
                          <div className="stars">
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                            <figure>
                              <Image src={starIcon.src} alt="star-icon" />
                            </figure>
                          </div>
                        </div>
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                          There are many variations of passages of orem Ipsum
                          available, but the majority have suffered alteration
                          in some
                        </p>
                        <a href="#" className="add-cart-btn">
                          <FaCartShopping />
                          Add to Cart
                        </a>
                      </div>
                    </div>
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
