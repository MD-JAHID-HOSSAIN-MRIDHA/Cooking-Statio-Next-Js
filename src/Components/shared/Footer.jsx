import downloadFromAppStore from "@/assets/icons/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import downloadFromPlayStore from "@/assets/icons/google-play-badge-logo-svgrepo-com.svg";
import qrCode from "@/assets/images/payment-methods/qr.png";
import sslCommarze from "@/assets/images/sslcommerz-banner.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="footer-contaiener">
          <div className="footer-col">
            <h4 className="title">Cooking Station</h4>
            <ul className="footerlist">
              <li className="footerlist-item">
                <Link className="footerlist-link" href="/menu">Menu</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="/packages">Pricing</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Delivery</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Cancellation and Refund</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="/blog">Blogs</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="title">Our Company</h4>
            <ul className="footerlist">
              <li className="footerlist-item">
                <Link className="footerlist-link" href="about.html">About us</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="career.html">Career</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="contact.html">Contact Us</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Sustainability</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Cookies Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="title">Work with us</h4>
            <ul className="footerlist">
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Become an investor</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#"
                >Become a supplier or chef</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Influencer</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="#">Affiliates</Link>
              </li>
            </ul>
          </div>
         
          <div className="footer-col">
            <h4 className="title">Download Our App</h4>
            <p className="des text-center text-lg-start">
              Manage your deliveries from anywhere, anytime.
            </p>
            <div
              className="store-links d-flex align-items-center justify-content-between gap-4 w-100"
            >
              <div className="d-flex flex-column flex-1">
                <a className="getApp" href="#">
                  <Image
                    src={downloadFromAppStore}
                    alt="Download from app store"
                  />
                </a>
                <a className="getApp" href="#">
                  <Image
                    src={downloadFromPlayStore}
                    alt="Dwonload from play store"
                  />
                </a>
              </div>
              <div className="qr">
                <Image src={qrCode} alt="QR code" />
              </div>
            </div>

            <div className="subscribe">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="my-5">
          <Image src={sslCommarze} alt="SSL commerz" />
        </div>

        <div className="copywrite">
          <div className="row g-2 align-items-center">
            <div className="col-lg-5">
              <p className="copywrite-text">
                ©2024 Copyright Cooking Station. All Rights Reserved
              </p>
            </div>
            <div className="col-lg-3">
              <div className="copyright-menu">
                <a href="terms&condition.html">Terms & Conditions</a>
                <a href="privacy-policy.html">Privacy</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-center justify-content-lg-end">
                <ul className="sociallist">
                  {/* <li>
                    <a
                      href="https://web.facebook.com/cooking.station.service"
                      className="socilalist-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-className="custom-tooltip"
                      data-bs-title="Facebook"
                      target="_blank"
                    >
                      <span className="icon-wrapper">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            y="0.0817871"
                            width="18"
                            height="18.122"
                            fill="url(#pattern0_698_453)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_698_453"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlink:href="#image0_698_453"
                                transform="matrix(0.00786544 0 0 0.0078125 -0.0033884 0)"
                              />
                            </pattern>
                            <image
                              id="image0_698_453"
                              width="128"
                              height="128"
                              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmBhISOy/xWJ30AAAEGElEQVR42u3dv2tTURjG8efEViFVtKUo/qBiW4SOiojgj0kEnVoQ6SJWEBxdCg4Kjv4PXZyEKl1UdHBQ0NXNwaGLdVAQQUiHREzP49ClhoBpzMl7ct7nA10KuXlP8s1Nk9zcAiIiIiIiIiIiIiIiUrJgPcAgIatVYNeu7V9wfT1Umk3r+dtRAC3IkRHw7Fng9GmEkyfBY8cQjh4FRke732qzCbx6BV67Fiq/flmvUVqQ1Sp54wb54gVZrzOVeP269VpbDVkPYIlxfBxhcRG4fRvYty/5FYapKes1t3IZAOPQEMKdO8CDB8CePf275qHsbu/sBkqNnJoCl5eBU6esZ8mBqwAYL14EVlYQ9u61niUXFesB+oXx6lWEly8B3flbuQiA8dIlhMePgZ07rWfJTfEBME5PIzx5oju/vaIDYBweBp4+7ctLvAFV9h+BYXEROHHCeoycFbsHIA8dAu7ft54jd8UGANy7B1Sr1lPkrsgAyNFRYGHBeo5BUGQAwM2bevR3ptAA5uasJxgUxQVAjo0BZ85YzzEoigsAuHw5x0/dNtVq1hO0KjCA8+etJ2iPBN+8sZ6iVaaPlP8xM5N2+xsb4OoqQq0GtntE12rAxsZfvwrfvgHPnoXKhw/Wt07xyO/f0xzP1WiQd+8y6tPEbJFjY8mO5+PsrPX65B8Yjx9Pc+e/f2+9tlTK+iMw7N6dZsOvX1svLZWyAmCqAL58sV5aKmUFEFK9/dtoWC8tlbICQCXNetjysq4ghQWQSIjReoRUFEBHtAfwjdoD+KanAOcYiv0avQLoREj06iIDxS6st3bssJ4gFQXQEe0BfGO5AWR5QAjj8PDm2TRGRrZ3wenpJGc9CrOz5ORkd4up1xE+fgzh7dsEk5WHnJwk19bSfa5v5eFD69u2nfx2bbx1C5iYsB6j9/L8okp+AYQjR6xHSOPAAWb4fkJ+ART7kiuEzZ+8ZBiA9JMCcE4BOKcAnFMAzikA5xSAcwrAOQXgnAJwTgE4pwCcUwDOKQDnMgwgvzNp9cbPnyHDL5hkGMC7d9YTpJHnSSYyPCh0eRkggQsXwPHxbV00HDwInDvX+5mePwc+ferusvU6sLoKrqwkuLFkK/LKlTQHdM7PW68tlQyfAqSfFIBzCsA5BeCcAnBOATinAJxTAM4pAOcUgHMKwDkF4JwCcE4BOKcAnFMAzikA5xSAcwrAOQXgnAJwTgE4pwCcUwDOKQDnFIBzCsA5BeCcAnBOATinAJxTAM4pAOcUgHMKwDkF4JwCcE4BOKcAnFMAzpUVAJvNNBtuNKyXlkpZAYS1tTQb/vzZemnSIcalpd6dIjZG8tEj6zWllN1/s+4Fxv37EQ4fBird7+H4+zfw9Wuo/PhhvR4REREREREREREREZFu/QFT0KrdMzKHxAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNi0xOFQxODo1OTo0NyswMDowMEAGdYoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDYtMThUMTg6NTk6NDcrMDA6MDAxW802AAAAAElFTkSuQmCC"
                            />
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="socilalist-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-className="custom-tooltip"
                      data-bs-title="Twitter"
                      target="_blank"
                    >
                      <span className="icon-wrapper">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_698_456)">
                            <path
                              d="M16.8408 5.4457C16.8513 5.60502 16.8513 5.7651 16.8513 5.92593C16.8513 10.8393 13.1358 16.5046 6.34384 16.5046V16.5016C4.33759 16.5046 2.37259 15.9262 0.683594 14.8352C0.975344 14.8706 1.26859 14.888 1.56259 14.8888C3.22609 14.8903 4.84159 14.3285 6.14884 13.294C4.56859 13.2638 3.18259 12.2263 2.69884 10.7116C3.25234 10.8189 3.82234 10.797 4.36609 10.6482C2.64259 10.2979 1.40359 8.77335 1.40359 7.00344C1.40359 6.98758 1.40359 6.97172 1.40359 6.95662C1.91734 7.24506 2.49184 7.40439 3.07984 7.42175C1.45684 6.33066 0.955844 4.15753 1.93609 2.45859C3.81109 4.78123 6.57784 6.19323 9.54709 6.34349C9.24934 5.0523 9.65659 3.6992 10.6151 2.79083C12.1023 1.3826 14.4416 1.45509 15.8403 2.95242C16.6676 2.78857 17.4603 2.48276 18.1856 2.0501C17.9096 2.91089 17.3328 3.64181 16.5618 4.10694C17.2946 4.0186 18.0093 3.82152 18.6836 3.521C18.1878 4.26777 17.5638 4.91941 16.8408 5.4457Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_698_456">
                              <rect
                                width="18"
                                height="18.122"
                                fill="white"
                                transform="translate(0.683594 0.081543)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/cooking-station/"
                      className="socilalist-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-className="custom-tooltip"
                      data-bs-title="Skype"
                      target="_blank"
                    >
                      <span className="icon-wrapper">
                        <i className="fa-brands fa-instagram fs-5 mt-1"></i>
                      </span>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://www.linkedin.com/company/cooking-station/"
                      className="socilalist-link"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-className="custom-tooltip"
                      data-bs-title="Linkedin"
                      target="_blank"
                    >
                      <span className="icon-wrapper">
                        <svg
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <rect
                            width="18"
                            height="18.122"
                            fill="url(#pattern0_698_466)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_698_466"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlink:href="#image0_698_466"
                                transform="matrix(0.00786544 0 0 0.0078125 -0.00338835 0)"
                              />
                            </pattern>
                            <image
                              id="image0_698_466"
                              width="128"
                              height="128"
                              xlink:href="data:image/png;base64,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"
                            />
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}