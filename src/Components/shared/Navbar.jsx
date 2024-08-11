"use client"
import logo from "@/assets/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import NavLink from "./NavLink";

export default function Navbar() {

  const closeBtn = useRef(null)

  const closeCanvas = () => {
    closeBtn.current.click()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white p-0 z-3 fixed-top">
        <div className="container">
          <NavLink href="/"
          >
            <Image src={logo} alt="Cooking station logo" />
          </NavLink>
          <div
            className="d-flex d-lg-none justify-content-center align-items-center gap-3"
            role="search"
          >
            {/* <!-- <a href="/login" className="login_btn">Login</a> --> */}

            <a href="packages.html" className="btn-success btn btn-sm"
            >Book Your Plan
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas flex-1 offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ref={closeBtn}
              >
                <i className="fa-solid fa-xmark fs-4"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="d-flex justify-content-between w-100">
                <ul className="navbar-nav mx-auto mb-2 mt-lg-2">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      href="/"
                      onClick={closeCanvas}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      href="/about"
                      onClick={closeCanvas}
                    >
                      About us
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" href="/menu" onClick={closeCanvas}>Menu</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" href="/event" onClick={closeCanvas}>Event</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" href="/packages" onClick={closeCanvas}>Packages</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="/blog" onClick={closeCanvas}>Blog</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" href="/contact" onClick={closeCanvas}>Contact Us</NavLink>
                  </li>
                </ul>

                <div
                  className="d-lg-flex d-none justify-content-center align-items-center gap-3"
                  role="search"
                >
                  <NavLink href="/authentications/login" className="login_btn" onClick={closeCanvas}>
                    Login
                  </NavLink>

                  <button onClick={closeCanvas}>
                    <Link
                      href="/authentications/chef-registration"
                      onClick={closeCanvas}
                      className="cs_btn"
                    >
                      Join as chef
                    </Link> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}