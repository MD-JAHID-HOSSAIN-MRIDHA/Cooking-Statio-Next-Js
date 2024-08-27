"use client"

import flag from "@/assets/images/icons/flag.png"
import profilePic from "@/assets/images/profile-pic.png"
import Image from "next/image"

export default function AdminNavbar() {

  return (
   
      <nav className="navbar navbar-expand-lg bg-white admin-navbar">
        <div className="container-fluid px-0">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#admin-navbar" aria-controls="admin-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="admin-navbar">
            <form className="d-flex position-relative" role="search">
              <input className="search form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <span className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <g opacity="0.5">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M9.69341 12.5352C12.4232 11.3751 13.6957 8.2216 12.5356 5.49177C11.3754 2.76193 8.22196 1.48945 5.49212 2.6496C2.76229 3.80975 1.48981 6.96321 2.64996 9.69305C3.81011 12.4229 6.96357 13.6954 9.69341 12.5352Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3901 11.3896L15.5555 15.5556" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </span>
            </form>
            <div className="right-side">
              {/* notification */}
              <button type="button" className="me-3 position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                  <path fill-rule="evenodd" clipRule="evenodd" d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z" fill="#4880FF" />
                  <rect opacity="0.3" x="9" y="19.5" width="6" height="6" rx="2.25" fill="#FF0000" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                  <span className="visually-hidden">unread notification</span>
                </span>
              </button>
              {/* language */}
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <figure>
                    <Image className="flag" src={flag} alt="Profile picture" />
                  </figure>
                  English
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              {/* profile pic */}
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <figure>
                    <Image className="profile-pic" src={profilePic} alt="Profile picture" />
                  </figure>
                  <div className="user-info">
                    <span className="name">Naim Ahmad</span>
                    <span className="role">Admin</span>
                  </div>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}