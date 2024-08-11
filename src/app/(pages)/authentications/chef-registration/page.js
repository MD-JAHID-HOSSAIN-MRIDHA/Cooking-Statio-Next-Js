import ChefRegistrationForm from "@/Components/form/ChefRegistrationForm";
import NavLink from "@/Components/shared/NavLink";
import logo from "@/assets/images/Logo.svg";
import Image from "next/image";

export const metadata = {
  title: "Chef Registration || Cooking station",
  description: "this is Chef Registration page of Cooking stations",
};
export default function ChefRegistration() {
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
        <div className="authentic">
          <header className="authenticationheader">
            <NavLink href="/" className="logo">
              <Image src={logo} alt="logo" />
            </NavLink>
          </header>
          <h4 className="welcome-title mb-2">Before we get started...</h4>

          <p className="welcome-text">
            Welcome, Chef! We're excited to have you join our culinary
            community. Before we proceed, could you please provide us with some
            information about yourself?
          </p>

          <ChefRegistrationForm />
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
              fillRule="evenodd"
              clipRule="evenodd"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M122.462 3.78076C122.346 1.65999 120.592 0 118.468 0H86.2249C83.9296 0 82.1051 1.9274 82.2309 4.21925L84.2379 40.7808C84.3637 43.0726 82.5392 45 80.2439 45H34.2267C31.9307 45 30.106 46.9285 30.2328 49.2209L33.9392 116.221C34.0565 118.341 35.8098 120 37.9331 120H90.7719C93.0679 120 94.8926 118.072 94.7658 115.779L91.3605 54.2209C91.2336 51.9285 93.0584 50 95.3543 50H120.774C123.069 50 124.893 48.0726 124.768 45.7808L122.462 3.78076Z"
              fill="#93DCDA"
            />
          </svg>
        </figure>
      </div>
    </main>
  );
}
