import logo from "@//assets/images/Logo.svg";
import NavLink from "@/Components/shared/NavLink";
import Image from "next/image";

export const metadata = {
  title: "Registration || Cooking station",
  description: "this is registration page of Cooking stations",
};

export default function Register() {
  return (
    <main className="authentications">
      <div className="left-content order-1">
        <div className="sliderbox">
          <div className="swiper authSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="slider-thumbnail"
                />
              </div>

              <div className="swiper-slide">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="slider-thumbnail"
                />
              </div>

              <div className="swiper-slide">
                <img
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="slider-thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      <div className="right-content order-0">
        <header className="authenticationheader">
          <NavLink href="/" className="logo">
            <Image src={logo} alt="logo" />
          </NavLink>
        </header>

        <div className="authentic">
          <h4 className="welcome-title mb-2">Before we get started...</h4>

          <p className="welcome-text">
            Could you tell us a bit about yourself?
          </p>

          <form className="authform">
            <div className="inputbox ">
              <label for="name" className="inputlabel">
                Name*
              </label>

              <input
                type="text"
                id="name"
                className="inputfield"
                placeholder="Enter your  name"
                autocomplete="off"
              />
            </div>

            <div className="inputbox">
              <label for="company-contact" className="inputlabel">
                Phone*
              </label>

              <input
                type="tel"
                id="company-contact"
                className="inputfield"
                placeholder=" Enter Your Phone"
                autocomplete="off"
              />
            </div>

            <div className="inputbox">
              <label for="industry" className="inputlabel">
                {" "}
                Email{" "}
              </label>

              <input
                type="text"
                id="industry"
                className="inputfield"
                placeholder="Enter Your Email "
                autocomplete="off"
              />
            </div>
            <div className="inputbox">
              <label for="country" className="inputlabel">
                Country
              </label>
              <select id="country" className="inputfield">
                <option value="bd">Bangladesh</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div className="inputbox">
              <label for="city" className="inputlabel">
                City
              </label>
              <select id="city" className="inputfield">
                {/* <!-- Options for cities in Bangladesh --> */}
                <optgroup label="Bangladesh">
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  {/* <!-- Add more cities here --> */}
                </optgroup>

                {/* <!-- Options for cities in the United Kingdom --> */}
                <optgroup label="United Kingdom">
                  <option value="london">London</option>
                  <option value="manchester">Manchester</option>
                  {/* <!-- Add more cities here --> */}
                </optgroup>
              </select>
            </div>
            <div className="inputbox">
              <label for="address" className="inputlabel">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="inputfield"
                placeholder="Enter Your Address"
                autocomplete="off"
              />
            </div>
            <div className="inputbox">
              <label for="id_you_are" className="inputlabel">
                {" "}
                You are{" "}
              </label>
              <select
                name="you_are"
                className="inputfield"
                required
                id="id_you_are"
              >
                <option value="" selected disabled hidden>
                  Select Your Role
                </option>
                <option value="Family">Family</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Student">Student</option>
                <option value="Official">Official</option>
              </select>
            </div>
            <div className="inputbox">
              <label className="inputlabel">You are*</label>

              <div className="employeelist">
                <div className="inputradio">
                  <input
                    type="radio"
                    name="employeecount"
                    id="employeecount-1"
                    className="radio"
                    checked
                    hidden
                  />
                  <label for="employeecount-1" className="radiolabel">
                    Family
                  </label>
                </div>

                <div className="inputradio">
                  <input
                    type="radio"
                    name="employeecount"
                    id="employeecount-2"
                    className="radio"
                    hidden
                  />
                  <label for="employeecount-2" className="radiolabel">
                    Bachelor
                  </label>
                </div>

                <div className="inputradio">
                  <input
                    type="radio"
                    name="employeecount"
                    id="employeecount-3"
                    className="radio"
                    hidden
                  />
                  <label for="employeecount-3" className="radiolabel">
                    Student
                  </label>
                </div>

                <div className="inputradio">
                  <input
                    type="radio"
                    name="employeecount"
                    id="employeecount-4"
                    className="radio"
                    hidden
                  />
                  <label for="employeecount-4" className="radiolabel">
                    Official
                  </label>
                </div>
              </div>
            </div>
            <div className="inputbox">
              <label for="password" className="inputlabel">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="inputfield"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="inputbox">
              <label for="confirm_password" className="inputlabel">
                Confirm Password*
              </label>
              <input
                type="password"
                id="confirm_password"
                className="inputfield"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="agreebox">
              <input type="checkbox" id="agree" className="agreecheck" hidden />
              <label for="agree" className="agreelabel">
                I Agree to the{" "}
                <a href="#" className="link">
                  Terms and Policy
                </a>
              </label>
            </div>

            <div className="submitbox">
              <button type="button" className="btn-submit">
                Get Started
              </button>

              <p className="authtext">
                Already have an account?
                <a href="./login.html" className="authlink">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* <!-- RIGHT-TOP ICON --> */}
        <figure className="topicon">
          <svg
            width="129"
            height="235"
            viewBox="0 0 129 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 -305H400L451 235H51L0 -305Z" fill="#EAECF0" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.3168 28.8885C49.2576 27.8289 48.3811 27 47.3199 27H25.1133C23.9649 27 23.0524 27.9649 23.1165 29.1115L24.5561 54.8885C24.6202 56.0351 23.7076 57 22.5592 57H3.11335C1.96494 57 1.05242 57.9649 1.11646 59.1115L2.68029 87.1115C2.73947 88.1711 3.61594 89 4.67718 89H26.8837C28.0321 89 28.9446 88.0351 28.8806 86.8885L27.4409 61.1115C27.3769 59.9649 28.2894 59 29.4378 59H48.8837C50.0321 59 50.9446 58.0351 50.8806 56.8885L49.3168 28.8885Z"
              fill="#EA7462"
            />
          </svg>
        </figure>

        {/* <!-- BOTTOM-LEFT ICON --> */}
        <figure className="bottomicon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="242"
            viewBox="0 0 125 242"
            fill="none"
          >
            <path d="M-339 17H61L112 557H-288L-339 17Z" fill="#EAECF0" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M122.462 3.78076C122.346 1.65999 120.592 0 118.468 0H86.2249C83.9296 0 82.1051 1.9274 82.2309 4.21925L84.2379 40.7808C84.3637 43.0726 82.5392 45 80.2439 45H34.2267C31.9307 45 30.106 46.9285 30.2328 49.2209L33.9392 116.221C34.0565 118.341 35.8098 120 37.9331 120H90.7719C93.0679 120 94.8926 118.072 94.7658 115.779L91.3605 54.2209C91.2336 51.9285 93.0584 50 95.3543 50H120.774C123.069 50 124.893 48.0726 124.768 45.7808L122.462 3.78076Z"
              fill="#93DCDA"
            />
          </svg>
        </figure>
      </div>
    </main>
  );
}
