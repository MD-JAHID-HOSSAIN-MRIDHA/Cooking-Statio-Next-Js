import checkMark from "@/assets/icons/check-mark.png";
import questionMark from "@/assets/icons/question-sign.png";
import express from "@/assets/images/payment-methods/American_Express-Logo.wine.svg";
import mastercard from "@/assets/images/payment-methods/Mastercard-Logo.wine.svg";
import visa from "@/assets/images/payment-methods/Visa_Inc.-Logo.wine.svg";
import Image from "next/image";
export default function CheckoutPage() {
  return (
    <section className="checkout">
      <div className="section-top">
        <h1 className="title">Cart & Checkout</h1>
        <span>
          <svg
            width="220"
            height="40"
            viewBox="0 0 377 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 37C89.4781 25.0528 175.7 9.57513 262.468 5.06034C296.926 3.26742 331.647 1.94484 366.115 4.16548C369.648 4.39309 378.832 3.99732 370.795 6.02401"
              stroke="#0C8040"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="step-wrapper">
        <button className="step-btn active-step">
          {/* <!-- <span className="step-count">1</span> --> */}
          <span className="icon">
            <Image src={checkMark} alt="check mark" />
          </span>
          Select plan
        </button>
        <div className="flex-1 line d-none d-xl-block active-line"></div>
        <button className="step-btn active-step">
          <span className="step-count">2</span>
          Checkout
        </button>
        <div className="flex-1 line d-none d-xl-block"></div>
        <button className="step-btn">
          <span className="step-count">3</span>
          Payment
        </button>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="left-col">
              <h5 className="title">Billing Address</h5>
              <div className="inputbox">
                <label htmlFor="name">Name</label>
              </div>
              <div className="inputbox">
                <label htmlFor="name">Email </label>
              </div>
              <div className="inputbox">
                <label htmlFor="name">Delivery address</label>
                {/* <!-- <input type="text" id="name" /> --> */}
                <button className="edit-info">Edit</button>
              </div>
              <div className="inputbox">
                <label htmlFor="name">Phone no.</label>
                {/* <!-- <input type="text" id="name" /> --> */}
                <button className="edit-info">Edit</button>
              </div>
              <h5 className="title mt-5">Payment method</h5>
              <div className="method">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Credit Card
                  </label>
                </div>
                <div className="payments">
                  <Image src={visa} alt="visa" />
                  <Image src={mastercard} alt="mastercard" />
                  <Image src={express} alt="american express" />
                </div>
              </div>
              <div className="payment-info">
                <div className="card-number">
                  <label htmlFor="cardNumber" className="form-label">
                    Card number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1234 4567 67890"
                  />
                  <Image src={visa} className="visa" alt="visa" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="cardNumber" className="form-label">
                      Expendant date
                    </label>
                    <div className="row">
                      <div className="col-7">
                        <select className="form-select">
                          <option value="1">May</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-5">
                        <select className="form-select">
                          <option value="1">2024</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div>
                      <label htmlFor="cardNumber" className="form-label">
                        Security code
                      </label>
                      <div className="d-flex gap-4">
                        <input type="number" className="form-control" />
                        <Image
                          src={questionMark}
                          className="info"
                          alt="question mark"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="right-col">
              <div className="billing-box">
                <h2 className="title">
                  <span className="icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-cart2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>{" "}
                  </span>
                  Billing Summary
                </h2>
                <span className="line"></span>

                <div className="single-bill mt-5">
                  <p className="name">Plan</p>
                  <p className="value">15 Days</p>
                </div>
                <div className="single-bill">
                  <p className="name">Plan type</p>
                  <p className="value">Premium</p>
                </div>
                <div className="single-bill">
                  <p className="name">Per Meal</p>
                  <p className="value">70 BDT</p>
                </div>
                <div className="single-bill">
                  <p className="name">Daily Meals</p>
                  <p className="value">2</p>
                </div>
                <div className="single-bill align-items-end">
                  <p id="couponLabel" className="name">
                    Discount
                    <button className="text-black text-decoration-underline">
                      (coupon number)
                    </button>
                  </p>
                  <div className="d-flex gap-2 d-none">
                    <button
                      id="couponCloseBtn"
                      className="btn-close border p-3"
                    ></button>
                    <input type="number" className="form-control w-50" />
                    <button className="btn btn-outline-success">Apply</button>
                  </div>
                  <p className="value">-0</p>
                </div>
                <div className="single-bill last">
                  <p className="name">Total Bill</p>
                  <p className="value">4200 BDT</p>
                </div>
                <button className="confirm-ordr-btn">Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
