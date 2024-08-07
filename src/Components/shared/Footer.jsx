import downloadFromAppStore from "@/assets/icons/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import downloadFromPlayStore from "@/assets/icons/google-play-badge-logo-svgrepo-com.svg";
import qrCode from "@/assets/images/payment-methods/qr.png";
import sslCommarze from "@/assets/images/sslcommerz-banner.png";
import Image from "next/image";
import Link from "next/link";
import SocialList from "../list/SocialList";

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
                <SocialList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}