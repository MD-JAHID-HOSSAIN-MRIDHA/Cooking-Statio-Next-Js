import bannerImage from "@/assets/images/about/about_banner.png";
import blog1 from "@/assets/images/blog/blog-1.png";
import blog3 from "@/assets/images/blog/blog-3.png";
import logo from "@/assets/images/Logo.svg";
import Image from "next/image";
export default function page({ params }) {
  return (
    <section className="blog">
      <div className="container">
        <div className="row g-4">
          {/* <!-- article part --> */}
          <article className="article col-lg-8 order-0 order-lg-0">
            <header className="article_header">
              <figure>
                <Image className="header_image" src={bannerImage} alt="" />
              </figure>
              <h2 className="header_title">
                Crispy Perfection: A Guide to Cooking Delicious Chicken Fry
              </h2>
              <div className="article_info d-flex align-items-center mt-6">
                <figure className="me-4">
                  <Image className="rounded-full" src={logo} alt="" />
                </figure>
                <div>
                  <p>Cooking Station</p>
                  <p className="text-lg">
                    Published: <time datetime="2023-09-1">8-Nov-2023</time>
                  </p>
                </div>
              </div>
            </header>

            <main>
              <section className="para_section">
                <h3 className="sub_title">Introduction</h3>
                <p className="para">
                  Chicken fry is a timeless classic loved by many around the
                  world for its crispy exterior and juicy, flavorful interior.
                  Whether you&apos;re a seasoned home cook or just starting out
                  in the kitchen, mastering the art of cooking chicken fry is
                  sure to impress your family and friends. In this article,
                  we'll walk you through a simple yet delicious recipe for
                  cooking chicken fry that&apos;s sure to become a staple in
                  your culinary repertoire.
                </p>
              </section>
              <section className="para_section">
                <h3 className="sub_title">Ingredients:</h3>
                <ul className="para">
                  <li>4 boneless, skinless chicken breasts</li>
                  <li>4 boneless, skinless chicken breasts</li>
                  <li>4 boneless, skinless chicken breasts</li>
                  <li>4 boneless, skinless chicken breasts</li>
                </ul>
              </section>
              <section className="para_section">
                <h3 className="sub_title">Instructions</h3>
                <ol className="para">
                  <li>
                    <span className="fw-bold">Prepare the Chicken:</span>
                    <ul>
                      <li>
                        Start by rinsing the chicken breasts under cold water
                        and patting them dry with paper towels. This helps to
                        remove any excess moisture, allowing the breading to
                        adhere better.
                      </li>
                      <li>
                        Using a sharp knife, carefully slice each chicken breast
                        in half horizontally to create thinner pieces. This not
                        only helps the chicken cook more evenly but also ensures
                        a crispier coating.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="fw-bold">Prepare the Chicken:</span>
                    <ul>
                      <li>
                        Start by rinsing the chicken breasts under cold water
                        and patting them dry with paper towels. This helps to
                        remove any excess moisture, allowing the breading to
                        adhere better.
                      </li>
                      <li>
                        Using a sharp knife, carefully slice each chicken breast
                        in half horizontally to create thinner pieces. This not
                        only helps the chicken cook more evenly but also ensures
                        a crispier coating.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="fw-bold">Prepare the Chicken:</span>
                    <ul>
                      <li>
                        Start by rinsing the chicken breasts under cold water
                        and patting them dry with paper towels. This helps to
                        remove any excess moisture, allowing the breading to
                        adhere better.
                      </li>
                      <li>
                        Using a sharp knife, carefully slice each chicken breast
                        in half horizontally to create thinner pieces. This not
                        only helps the chicken cook more evenly but also ensures
                        a crispier coating.
                      </li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section className="para_section">
                <h3 className="sub_title">Conclusion:</h3>
                <p className="para">
                  Cooking chicken fry at home is a simple yet satisfying way to
                  enjoy a crispy and flavorful meal. With just a few basic
                  ingredients and some kitchen know-how, you can create
                  restaurant-quality chicken fry right in your own kitchen. So
                  roll up your sleeves, heat up that skillet, and get ready to
                  impress your taste buds with this delicious dish!
                </p>
              </section>
            </main>
            <div className="end_para"></div>
          </article>

          <div className="col-lg-4 order-1 order-lg-1">
            <div className="right-content ps-lg-5">
              <div className="search-wrapper w-100">
                <div className="d-flex justify-content-end">
                  <span className="icon">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.70835 0.441406C3.45805 0.441406 0 3.39036 0 7.01494C0 10.6395 3.45805 13.593 7.70835 13.593C9.52302 13.593 11.1932 13.0498 12.51 12.1505L15.7218 14.8849C16.0591 15.1588 16.5944 15.1542 16.9209 14.8758C17.2528 14.5928 17.2581 14.1408 16.937 13.8532L13.7251 11.1143C14.7797 9.98672 15.4167 8.56245 15.4167 7.01494C15.4167 3.39036 11.9533 0.441406 7.70835 0.441406ZM7.70835 1.90219C11.0272 1.90219 13.7037 4.1801 13.7037 7.01494C13.7037 9.8452 11.0326 12.1322 7.70835 12.1322C4.38948 12.1322 1.71297 9.8452 1.71297 7.01494C1.71297 4.1801 4.38412 1.90219 7.70835 1.90219Z"
                        fill="#909092"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="search-title">Search</h3>
                <input type="text" placeholder="search..." />
              </div>
              {/* <!-- RECENT BLOG --> */}
              <div className="recent-blog">
                <h3 className="recentblog-title">Recent Blogs</h3>
                <div className="blog-posts">
                  <a href="#" className="blog-post">
                    <figure>
                      <Image src={blog1} alt="" />
                    </figure>
                    <div className="right">
                      <h3 className="title">Health & Nutrition</h3>
                      <p className="date">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.80365 1.06641C5.0982 1.06641 5.33698 1.30519 5.33698 1.59974V2.13307H10.6703V1.59974C10.6703 1.30519 10.9091 1.06641 11.2036 1.06641C11.4982 1.06641 11.737 1.30519 11.737 1.59974V2.13307H13.337C14.2206 2.13307 14.937 2.84941 14.937 3.73307V13.3331C14.937 14.2167 14.2206 14.9331 13.337 14.9331H2.67031C1.78665 14.9331 1.07031 14.2167 1.07031 13.3331V3.73307C1.07031 2.84941 1.78665 2.13307 2.67031 2.13307H4.27031V1.59974C4.27031 1.30519 4.5091 1.06641 4.80365 1.06641ZM10.6703 3.19974V3.73307C10.6703 4.02762 10.9091 4.26641 11.2036 4.26641C11.4982 4.26641 11.737 4.02762 11.737 3.73307V3.19974H13.337C13.6315 3.19974 13.8703 3.43852 13.8703 3.73307V5.33307H2.13698V3.73307C2.13698 3.43852 2.37576 3.19974 2.67031 3.19974H4.27031V3.73307C4.27031 4.02762 4.5091 4.26641 4.80365 4.26641C5.0982 4.26641 5.33698 4.02762 5.33698 3.73307V3.19974H10.6703ZM2.13698 6.39974V13.3331C2.13698 13.6276 2.37576 13.8664 2.67031 13.8664H13.337C13.6315 13.8664 13.8703 13.6276 13.8703 13.3331V6.39974H2.13698ZM7.47031 7.99974C7.47031 7.70519 7.7091 7.46641 8.00365 7.46641C8.2982 7.46641 8.53698 7.70519 8.53698 7.99974C8.53698 8.29429 8.2982 8.53307 8.00365 8.53307C7.7091 8.53307 7.47031 8.29429 7.47031 7.99974ZM10.137 7.46641C9.84243 7.46641 9.60365 7.70519 9.60365 7.99974C9.60365 8.29429 9.84243 8.53307 10.137 8.53307C10.4315 8.53307 10.6703 8.29429 10.6703 7.99974C10.6703 7.70519 10.4315 7.46641 10.137 7.46641ZM11.737 7.99974C11.737 7.70519 11.9758 7.46641 12.2703 7.46641C12.5648 7.46641 12.8036 7.70519 12.8036 7.99974C12.8036 8.29429 12.5648 8.53307 12.2703 8.53307C11.9758 8.53307 11.737 8.29429 11.737 7.99974ZM12.2703 9.59974C11.9758 9.59974 11.737 9.83852 11.737 10.1331C11.737 10.4276 11.9758 10.6664 12.2703 10.6664C12.5648 10.6664 12.8036 10.4276 12.8036 10.1331C12.8036 9.83852 12.5648 9.59974 12.2703 9.59974ZM9.60365 10.1331C9.60365 9.83852 9.84243 9.59974 10.137 9.59974C10.4315 9.59974 10.6703 9.83852 10.6703 10.1331C10.6703 10.4276 10.4315 10.6664 10.137 10.6664C9.84243 10.6664 9.60365 10.4276 9.60365 10.1331ZM8.00365 9.59974C7.7091 9.59974 7.47031 9.83852 7.47031 10.1331C7.47031 10.4276 7.7091 10.6664 8.00365 10.6664C8.2982 10.6664 8.53698 10.4276 8.53698 10.1331C8.53698 9.83852 8.2982 9.59974 8.00365 9.59974ZM5.33698 10.1331C5.33698 9.83852 5.57576 9.59974 5.87031 9.59974C6.16486 9.59974 6.40365 9.83852 6.40365 10.1331C6.40365 10.4276 6.16486 10.6664 5.87031 10.6664C5.57576 10.6664 5.33698 10.4276 5.33698 10.1331ZM3.73698 9.59974C3.44243 9.59974 3.20365 9.83852 3.20365 10.1331C3.20365 10.4276 3.44243 10.6664 3.73698 10.6664C4.03153 10.6664 4.27031 10.4276 4.27031 10.1331C4.27031 9.83852 4.03153 9.59974 3.73698 9.59974ZM3.20365 12.2664C3.20365 11.9719 3.44243 11.7331 3.73698 11.7331C4.03153 11.7331 4.27031 11.9719 4.27031 12.2664C4.27031 12.5609 4.03153 12.7997 3.73698 12.7997C3.44243 12.7997 3.20365 12.5609 3.20365 12.2664ZM5.87031 11.7331C5.57576 11.7331 5.33698 11.9719 5.33698 12.2664C5.33698 12.5609 5.57576 12.7997 5.87031 12.7997C6.16486 12.7997 6.40365 12.5609 6.40365 12.2664C6.40365 11.9719 6.16486 11.7331 5.87031 11.7331ZM7.47031 12.2664C7.47031 11.9719 7.7091 11.7331 8.00365 11.7331C8.2982 11.7331 8.53698 11.9719 8.53698 12.2664C8.53698 12.5609 8.2982 12.7997 8.00365 12.7997C7.7091 12.7997 7.47031 12.5609 7.47031 12.2664ZM10.137 11.7331C9.84243 11.7331 9.60365 11.9719 9.60365 12.2664C9.60365 12.5609 9.84243 12.7997 10.137 12.7997C10.4315 12.7997 10.6703 12.5609 10.6703 12.2664C10.6703 11.9719 10.4315 11.7331 10.137 11.7331Z"
                              fill="#FF2C3B"
                            />
                          </svg>
                        </span>
                        Apr 17, 2024
                      </p>
                    </div>
                  </a>
                  <a href="#" className="blog-post">
                    <figure>
                      <Image src={blog3} alt="" />
                    </figure>
                    <div className="right">
                      <h3 className="title">Health & Nutrition</h3>
                      <p className="date">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.80365 1.06641C5.0982 1.06641 5.33698 1.30519 5.33698 1.59974V2.13307H10.6703V1.59974C10.6703 1.30519 10.9091 1.06641 11.2036 1.06641C11.4982 1.06641 11.737 1.30519 11.737 1.59974V2.13307H13.337C14.2206 2.13307 14.937 2.84941 14.937 3.73307V13.3331C14.937 14.2167 14.2206 14.9331 13.337 14.9331H2.67031C1.78665 14.9331 1.07031 14.2167 1.07031 13.3331V3.73307C1.07031 2.84941 1.78665 2.13307 2.67031 2.13307H4.27031V1.59974C4.27031 1.30519 4.5091 1.06641 4.80365 1.06641ZM10.6703 3.19974V3.73307C10.6703 4.02762 10.9091 4.26641 11.2036 4.26641C11.4982 4.26641 11.737 4.02762 11.737 3.73307V3.19974H13.337C13.6315 3.19974 13.8703 3.43852 13.8703 3.73307V5.33307H2.13698V3.73307C2.13698 3.43852 2.37576 3.19974 2.67031 3.19974H4.27031V3.73307C4.27031 4.02762 4.5091 4.26641 4.80365 4.26641C5.0982 4.26641 5.33698 4.02762 5.33698 3.73307V3.19974H10.6703ZM2.13698 6.39974V13.3331C2.13698 13.6276 2.37576 13.8664 2.67031 13.8664H13.337C13.6315 13.8664 13.8703 13.6276 13.8703 13.3331V6.39974H2.13698ZM7.47031 7.99974C7.47031 7.70519 7.7091 7.46641 8.00365 7.46641C8.2982 7.46641 8.53698 7.70519 8.53698 7.99974C8.53698 8.29429 8.2982 8.53307 8.00365 8.53307C7.7091 8.53307 7.47031 8.29429 7.47031 7.99974ZM10.137 7.46641C9.84243 7.46641 9.60365 7.70519 9.60365 7.99974C9.60365 8.29429 9.84243 8.53307 10.137 8.53307C10.4315 8.53307 10.6703 8.29429 10.6703 7.99974C10.6703 7.70519 10.4315 7.46641 10.137 7.46641ZM11.737 7.99974C11.737 7.70519 11.9758 7.46641 12.2703 7.46641C12.5648 7.46641 12.8036 7.70519 12.8036 7.99974C12.8036 8.29429 12.5648 8.53307 12.2703 8.53307C11.9758 8.53307 11.737 8.29429 11.737 7.99974ZM12.2703 9.59974C11.9758 9.59974 11.737 9.83852 11.737 10.1331C11.737 10.4276 11.9758 10.6664 12.2703 10.6664C12.5648 10.6664 12.8036 10.4276 12.8036 10.1331C12.8036 9.83852 12.5648 9.59974 12.2703 9.59974ZM9.60365 10.1331C9.60365 9.83852 9.84243 9.59974 10.137 9.59974C10.4315 9.59974 10.6703 9.83852 10.6703 10.1331C10.6703 10.4276 10.4315 10.6664 10.137 10.6664C9.84243 10.6664 9.60365 10.4276 9.60365 10.1331ZM8.00365 9.59974C7.7091 9.59974 7.47031 9.83852 7.47031 10.1331C7.47031 10.4276 7.7091 10.6664 8.00365 10.6664C8.2982 10.6664 8.53698 10.4276 8.53698 10.1331C8.53698 9.83852 8.2982 9.59974 8.00365 9.59974ZM5.33698 10.1331C5.33698 9.83852 5.57576 9.59974 5.87031 9.59974C6.16486 9.59974 6.40365 9.83852 6.40365 10.1331C6.40365 10.4276 6.16486 10.6664 5.87031 10.6664C5.57576 10.6664 5.33698 10.4276 5.33698 10.1331ZM3.73698 9.59974C3.44243 9.59974 3.20365 9.83852 3.20365 10.1331C3.20365 10.4276 3.44243 10.6664 3.73698 10.6664C4.03153 10.6664 4.27031 10.4276 4.27031 10.1331C4.27031 9.83852 4.03153 9.59974 3.73698 9.59974ZM3.20365 12.2664C3.20365 11.9719 3.44243 11.7331 3.73698 11.7331C4.03153 11.7331 4.27031 11.9719 4.27031 12.2664C4.27031 12.5609 4.03153 12.7997 3.73698 12.7997C3.44243 12.7997 3.20365 12.5609 3.20365 12.2664ZM5.87031 11.7331C5.57576 11.7331 5.33698 11.9719 5.33698 12.2664C5.33698 12.5609 5.57576 12.7997 5.87031 12.7997C6.16486 12.7997 6.40365 12.5609 6.40365 12.2664C6.40365 11.9719 6.16486 11.7331 5.87031 11.7331ZM7.47031 12.2664C7.47031 11.9719 7.7091 11.7331 8.00365 11.7331C8.2982 11.7331 8.53698 11.9719 8.53698 12.2664C8.53698 12.5609 8.2982 12.7997 8.00365 12.7997C7.7091 12.7997 7.47031 12.5609 7.47031 12.2664ZM10.137 11.7331C9.84243 11.7331 9.60365 11.9719 9.60365 12.2664C9.60365 12.5609 9.84243 12.7997 10.137 12.7997C10.4315 12.7997 10.6703 12.5609 10.6703 12.2664C10.6703 11.9719 10.4315 11.7331 10.137 11.7331Z"
                              fill="#FF2C3B"
                            />
                          </svg>
                        </span>
                        Apr 17, 2024
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- FEATURE BLOG --> */}
              <div className="recent-blog">
                <h3 className="recentblog-title">Feature Blogs</h3>
                <div className="blog-posts">
                  <a href="#" className="blog-post">
                    <figure>
                      <Image src={blog1} alt="" />
                    </figure>
                    <div className="right">
                      <h3 className="title">Health & Nutrition</h3>
                    </div>
                  </a>
                  <a href="#" className="blog-post">
                    <figure>
                      <Image src={blog1} alt="" />
                    </figure>
                    <div className="right">
                      <h3 className="title">Health & Nutrition</h3>
                    </div>
                  </a>
                  <a href="#" className="blog-post">
                    <figure>
                      <Image src={blog1} alt="" />
                    </figure>
                    <div className="right">
                      <h3 className="title">Health & Nutrition</h3>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- POPULAR TAG --> */}
              <div className="recent-blog">
                <h3 className="recentblog-title">Feature Blogs</h3>
                <div className="popular-tags">
                  <div className="popular-tag active">Food</div>
                  <div className="popular-tag">Cooking</div>
                  <div className="popular-tag">Meal</div>
                  <div className="popular-tag">Meal</div>
                  <div className="popular-tag">Meal</div>
                  <div className="popular-tag">Meal</div>
                  <div className="popular-tag">Meal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
