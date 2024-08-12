"use client"
import food_safety_cirtificate from "@/assets/icons/cirtificate.svg";
import nidSvg from "@/assets/icons/NID.svg";
import Image from "next/image";
import Link from "next/link";
import { FaUpload } from "react-icons/fa6";
export default function ChefRegistrationForm() {

  return (
    <form className="authform">
      <div className="inputbox">
        <label htmlFor="fullName" className="inputlabel">
          {" "}
          Full Name*{" "}
        </label>
        <input
          type="tel"
          id="fullName"
          className="inputfield"
          placeholder=" Enter your full name"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="phone" className="inputlabel">
          {" "}
          Phone{" "}
        </label>
        <input
          type="tel"
          id="phone"
          className="inputfield"
          placeholder="Enter your phone number"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="industry" className="inputlabel">
          {" "}
          Email{" "}
        </label>

        <input
          type="email"
          id="industry"
          className="inputfield"
          placeholder="Enter Your Email"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="fullName" className="inputlabel">
          {" "}
          City{" "}
        </label>
        <input
          type="text"
          id="fullName"
          className="inputfield"
          placeholder=" Enter your city"
          autoComplete="off"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="fullName" className="inputlabel">
          {" "}
          Full Address
        </label>
        <input
          type="text"
          id="fullName"
          className="inputfield"
          placeholder=" Enter your Full Address"
          autoComplete="off"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="fullName" className="inputlabel">
          How many people can you serve daily?
        </label>
        <input
          type="number"
          id="fullName"
          className="inputfield"
          placeholder=" How many people can you serve daily?"
          autoComplete="off"
        />
      </div>

      {/* <!-- <div className="inputbox">
          <label htmlFor="nid_passport" className="inputlabel">
            NID or Passport
          </label>
          <div className="inputfield p-0">
            <input
              type="file"
              id="nid_passport"
              className="inputfield"
              accept=".pdf, .jpg, .png"
              hidden
            />
            <label htmlFor="nid_passport" className="upload_button">
              <i className="fa-solid fa-file-import me-1"></i> Choose
            </label>
            <span id="nid_passport">Choose NID or Passport</span>
          </div>
        </div>

        <div className="inputbox">
          <span className="inputlabel"> Food Safety Certification </span>

          <div className="inputfield p-0">
            <input
              type="file"
              id="food_sefety_certification"
              className="inputfield"
              accept=".pdf, .jpg, .png"
              hidden
            />
            <label htmlFor="food_sefety_certification" className="upload_button">
              <i className="fa-solid fa-file-import me-1"></i> Choose
            </label>
            <span id="food_sefety_certification"
              >Choose Food Safety Certification</span
            >
          </div>
        </div>

        <div className="inputbox">
          <label className="inputlabel">
            Any Other Experience or Certification
          </label>
          <div className="inputfield p-0">
            <input
              type="file"
              id="other_certification"
              className="inputfield"
              accept=".pdf, .jpg, .png"
              hidden
            />
            <label htmlFor="other_certification" className="upload_button">
              <i className="fa-solid fa-file-import me-1"></i> Choose
            </label>
            <span id="other_cirtificate">Choose other certificate</span>
          </div>
        </div>

        <div className="inputbox">
          <label className="inputlabel">How Many People you can serve*</label>

          <div className="employeelist">
            <div className="inputradio">
              <input
                type="radio"
                name="serve_count"
                id="serve_count_1_10"
                className="radio"
                hidden
              />
              <label htmlFor="serve_count_1_10" className="radiolabel">1-10</label>
            </div>
            <div className="inputradio">
              <input
                type="radio"
                name="serve_count"
                id="serve_count_11_20"
                className="radio"
                hidden
              />
              <label htmlFor="serve_count_11_20" className="radiolabel"
                >11-20</label
              >
            </div>

            <div className="inputradio">
              <input
                type="radio"
                name="serve_count"
                id="serve_count_21_50"
                className="radio"
                hidden
              />
              <label htmlFor="serve_count_21_50" className="radiolabel"
                >21-50</label
              >
            </div>

            <div className="inputradio">
              <input
                type="radio"
                name="serve_count"
                id="serve_count_50_plus"
                className="radio"
                hidden
              />
              <label htmlFor="serve_count_50_plus" className="radiolabel"
                >50+</label
              >
            </div>
          </div>
        </div> --> */}
      <div className="inputbox">
        <label htmlFor="nid_passport" className="inputlabel">
          NID or Passport
        </label>
        <div className="p-0">
          <input
            type="file"
            id="nid_passport"
            className="inputfield"
            accept=".pdf, .jpg, .png"
            hidden
          />
          <label htmlFor="nid_passport" className="upload_button">
            <Image
              src={nidSvg}
              alt="NID svg"
              className="upload_file_image"
            />
            <div className="upload_icon_container">
              <span className="upload_icon">
                <FaUpload />
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="inputbox">
        <span className="inputlabel"> Food Safety Certification </span>

        <div className="p-0">
          <input
            type="file"
            id="food_safety_cirtificate"
            className="inputfield"
            accept=".pdf, .jpg, .png"
            hidden
          />
          <label htmlFor="food_safety_cirtificate" className="upload_button">
            <Image
              src={food_safety_cirtificate}
              alt="Food Safety Certificate"
              className="upload_file_image"
            />
            <div className="upload_icon_container">
              <span className="upload_icon">
                <FaUpload />
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="inputbox">
        <label className="inputlabel">
          Any Other Experience or Certification
        </label>
        <div className="p-0">
          <input
            type="file"
            id="others_cirtificate"
            className="inputfield"
            accept=".pdf, .jpg, .png"
            hidden
          />
          <label htmlFor="others_cirtificate" className="upload_button">
            <Image
              src={food_safety_cirtificate}
              alt="Others Certificate"
              className="upload_file_image"
            />
            <div className="upload_icon_container">
              <span className="upload_icon">
                <FaUpload />
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="agreebox">
        <input type="checkbox" id="agree" className="agreecheck" hidden />
        <label htmlFor="agree" className="agreelabel">
          I Agree to the{" "}
          <Link href="/privacy-policy" className="link">
            Terms and Policy
          </Link>
        </label>
      </div>

      <div className="submitbox">
        <button type="button" className="btn-submit">
          Get Started
        </button>

        <p className="authtext">
          Already have an account?
          <Link href="/login" className="authlink">
            Login
          </Link>
        </p>
      </div>
    </form>
  )
}