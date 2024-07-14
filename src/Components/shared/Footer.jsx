import downloadFromAppStore from "@/assets/icons/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import downloadFromPlayStore from "@/assets/icons/google-play-badge-logo-svgrepo-com.svg";
import qrCode from "@/assets/images/payment-methods/qr.png";
import sslCommarze from "@/assets/images/sslcommerz-banner.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

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
                <Link className="footerlist-link" href="/about">About us</Link>
              </li>
              <li className="footerlist-item">
                <Link className="footerlist-link" href="/career">Career</Link>
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
                          <g clipPath="url(#clip0_698_456)">
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
                        <FaInstagram/>
                      </span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}