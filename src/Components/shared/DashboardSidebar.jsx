import branch from "@/assets/icons/menu/branch.jpg";
import refund from "@/assets/icons/menu/refund.jpg";
import reportIcon from "@/assets/icons/menu/report.jpg";
import NavLink from "@/Components/shared/NavLink";
import Image from "next/image";
import { GrAtm } from "react-icons/gr";
export default function DashboardSidebar() {

  return (
    <div className="offcanvas-start offcanvas-lg" id="adminSideBar">
      <div className="offcanvas-header">
        <figure className="logo d-lg-none ps-4">
          <img src="../assets/images/Logo.svg" alt="" />
        </figure>
        <button
          className="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#adminSideBar"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="admin-side-bar sticky-top w-100">
          {/* <!-- <figure className="logo ps-4">
            <img src="../assets/images/Logo.svg" alt="" />
          </figure> --> */}
          <h3 className="admin-logo">Cooking Station</h3>
          <div className="nav-wrapper">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink href="/dashboard/admin" className="nav-link">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="#202224"
                    >
                      <g clip-path="url(#clip0_1_6488)">
                        <path
                          d="M12.6055 5.57227L7.35547 1.49805C7.23698 1.4069 7.11165 1.36133 6.97949 1.36133C6.84733 1.36133 6.73568 1.4069 6.64453 1.49805L1.39453 5.57227C1.3125 5.63607 1.25326 5.70898 1.2168 5.79102C1.18034 5.87305 1.16211 5.95508 1.16211 6.03711V12.4629C1.16211 12.9551 1.33073 13.3698 1.66797 13.707C2.00521 14.0443 2.41992 14.2129 2.91211 14.2129H11.0879C11.5801 14.2129 11.9948 14.0443 12.332 13.707C12.6693 13.3698 12.8379 12.9551 12.8379 12.4629V6.03711C12.8379 5.95508 12.8197 5.87305 12.7832 5.79102C12.7467 5.70898 12.6875 5.63607 12.6055 5.57227ZM8.16211 13.0371H5.83789V8.375H8.16211V13.0371ZM11.6621 12.4629C11.6621 12.6361 11.6097 12.7751 11.5049 12.8799C11.4001 12.9847 11.2611 13.0371 11.0879 13.0371H9.33789V7.78711C9.33789 7.61393 9.2832 7.47494 9.17383 7.37012C9.06445 7.2653 8.92318 7.21289 8.75 7.21289H5.25C5.07682 7.21289 4.93555 7.2653 4.82617 7.37012C4.7168 7.47494 4.66211 7.61393 4.66211 7.78711V13.0371H2.91211C2.73893 13.0371 2.59993 12.9847 2.49512 12.8799C2.3903 12.7751 2.33789 12.6361 2.33789 12.4629V6.33789L7 2.71484L11.6621 6.33789V12.4629Z"
                          fill="#202224"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_6488">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(1 0 0 -1 0 14.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>Dashboard </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/products" className="nav-link">
                  <span className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.4375 0.1875H1.125H14.875H15.5625V0.875V14.625V15.3125H14.875H1.125H0.4375V14.625V0.875V0.1875ZM1.8125 1.5625V7.0625H7.3125V1.5625H1.8125ZM8.6875 1.5625V7.0625H14.1875V1.5625H8.6875ZM1.8125 8.4375V13.9375H7.3125V8.4375H1.8125ZM8.6875 8.4375V13.9375H14.1875V8.4375H8.6875Z"
                        fill="#202224"
                      />
                    </svg>
                  </span>
                  <span> Products </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/inbox" className="nav-link">
                  <span className="icon">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.375 0.1875H1.0625H13.4375H14.125V0.875V10.5V11.1875H13.4375H7.50781L4.24219 13.7656L3.125 14.7109V13.25V11.1875H1.0625H0.375V10.5V0.875V0.1875ZM1.75 1.5625V9.8125H3.8125H4.5V10.5V11.7891L6.82031 9.98438L6.99219 9.8125H7.25H12.75V1.5625H1.75ZM15.5 2.9375H19.625V13.9375H16.875V17.4609L12.4922 13.9375H6.13281L7.85156 12.5625H13.0078L15.5 14.5391V12.5625H18.25V4.3125H15.5V2.9375Z"
                        fill="#202224"
                      />
                    </svg>
                  </span>
                  <span> Inbox </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/orderList" className="nav-link">
                  <span className="icon">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.04688 0.359375L6.07812 1.39062L3.32812 4.14062L2.8125 4.57031L2.29688 4.14062L0.921875 2.76562L1.95312 1.73438L2.8125 2.63672L5.04688 0.359375ZM8.3125 1.5625H17.25V2.9375H8.3125V1.5625ZM5.04688 5.85938L6.07812 6.89062L3.32812 9.64062L2.8125 10.0703L2.29688 9.64062L0.921875 8.26562L1.95312 7.23438L2.8125 8.13672L5.04688 5.85938ZM8.3125 7.0625H17.25V8.4375H8.3125V7.0625ZM5.04688 11.3594L6.07812 12.3906L3.32812 15.1406L2.8125 15.5703L2.29688 15.1406L0.921875 13.7656L1.95312 12.7344L2.8125 13.6367L5.04688 11.3594ZM8.3125 12.5625H17.25V13.9375H8.3125V12.5625Z"
                        fill="#202224"
                      />
                    </svg>
                  </span>
                  <span> Order Lists </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/payment" className="nav-link">
                  <span className="icon">
                  <GrAtm />
                  </span>
                  <span> Payment & Order </span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink href="/dashboard/admin/mealInfo" className="nav-link">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"
                      />
                      <path
                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                      />
                    </svg>
                  </span>
                  <span> Meal Delivery & Cancel </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/refund" className="nav-link">
                  <span className="icon">
                    <Image src={refund} alt="Refund"/>
                  </span>
                  <span> Refund </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/support" className="nav-link">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-headset"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"
                      />
                    </svg>
                  </span>
                  <span> Support </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/branch" className="nav-link">
                  <span className="icon">
                   <Image src={branch} alt="Branch"/>
                  </span>
                  <span> Branch </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/employee" className="nav-link">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-people-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                      />
                    </svg>
                  </span>
                  <span> Employee </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/dashboard/admin/report" className="nav-link">
                  <span className="icon">
                    <Image src={reportIcon} alt="Report"/>
                  </span>
                  <span> Report </span>
                </NavLink>
              </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="236" height="1" viewBox="0 0 236 1" fill="none">
              <path opacity="0.4" d="M-7 0.5H235" stroke="#979797" stroke-width="0.4" stroke-linecap="square" />
            </svg>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" href="/dashboard/admin/settings">
                  <span className="icon">
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.06641 0.8125H7.625H10.375H10.9336L11.0625 1.37109L11.4492 3.39062C12.0794 3.64844 12.6667 4.00651 13.2109 4.46484L15.2305 3.77734L15.7891 3.60547L16.0469 4.07812L17.4219 6.48438L17.6797 6.95703L17.293 7.34375L15.7461 8.67578C15.832 9.19141 15.875 9.54948 15.875 9.75C15.875 9.95052 15.832 10.3086 15.7461 10.8242L17.293 12.1562L17.6797 12.543L17.4219 13.0156L16.0469 15.4219L15.7891 15.8945L15.2305 15.7227L13.2109 15.0352C12.6667 15.4935 12.0794 15.8516 11.4492 16.1094L11.0625 18.1289L10.9336 18.6875H10.375H7.625H7.06641L6.9375 18.1289L6.55078 16.1094C5.92057 15.8516 5.33333 15.4935 4.78906 15.0352L2.76953 15.7227L2.21094 15.8945L1.95312 15.4219L0.578125 13.0156L0.320312 12.543L0.707031 12.1562L2.25391 10.8242C2.16797 10.3086 2.125 9.95052 2.125 9.75C2.125 9.54948 2.16797 9.19141 2.25391 8.67578L0.707031 7.34375L0.320312 6.95703L0.578125 6.48438L1.95312 4.07812L2.21094 3.60547L2.76953 3.77734L4.78906 4.46484C5.33333 4.00651 5.92057 3.64844 6.55078 3.39062L6.9375 1.37109L7.06641 0.8125ZM8.18359 2.1875L7.83984 3.99219L7.75391 4.37891L7.36719 4.50781C6.59375 4.76562 5.90625 5.16667 5.30469 5.71094L4.96094 5.96875L4.61719 5.88281L2.85547 5.28125L2.03906 6.65625L3.41406 7.85938L3.75781 8.11719L3.62891 8.54688C3.54297 8.91927 3.5 9.32031 3.5 9.75C3.5 10.1797 3.54297 10.5807 3.62891 10.9531L3.75781 11.3828L3.41406 11.6406L2.03906 12.8438L2.85547 14.2188L4.61719 13.6172L4.96094 13.5312L5.30469 13.7891C5.90625 14.3333 6.59375 14.7344 7.36719 14.9922L7.75391 15.1211L7.83984 15.5078L8.18359 17.3125H9.81641L10.1602 15.5078L10.2461 15.1211L10.6328 14.9922C11.4062 14.7344 12.0938 14.3333 12.6953 13.7891L13.0391 13.5312L13.3828 13.6172L15.1445 14.2188L15.9609 12.8438L14.5859 11.6406L14.2852 11.3828L14.3711 10.9531C14.457 10.5807 14.5 10.1797 14.5 9.75C14.5 9.32031 14.457 8.91927 14.3711 8.54688L14.2422 8.11719L14.5859 7.85938L15.9609 6.65625L15.1445 5.28125L13.3828 5.88281L13.0391 5.96875L12.6953 5.71094C12.0938 5.16667 11.4062 4.76562 10.6328 4.50781L10.2461 4.37891L10.1602 3.99219L9.81641 2.1875H8.18359ZM6.55078 7.34375C7.23828 6.65625 8.05469 6.3125 9 6.3125C9.94531 6.3125 10.7474 6.65625 11.4062 7.34375C12.0938 8.0026 12.4375 8.80469 12.4375 9.75C12.4375 10.6953 12.0938 11.5117 11.4062 12.1992C10.7474 12.8581 9.94531 13.1875 9 13.1875C8.05469 13.1875 7.23828 12.8581 6.55078 12.1992C5.89193 11.5117 5.5625 10.6953 5.5625 9.75C5.5625 8.80469 5.89193 8.0026 6.55078 7.34375ZM10.4609 8.28906C10.0599 7.88802 9.57292 7.6875 9 7.6875C8.42708 7.6875 7.9401 7.88802 7.53906 8.28906C7.13802 8.6901 6.9375 9.17708 6.9375 9.75C6.9375 10.3229 7.13802 10.8099 7.53906 11.2109C7.9401 11.612 8.42708 11.8125 9 11.8125C9.57292 11.8125 10.0599 11.612 10.4609 11.2109C10.862 10.8099 11.0625 10.3229 11.0625 9.75C11.0625 9.17708 10.862 8.6901 10.4609 8.28906Z"
                        fill="#202224"
                      />
                    </svg>
                  </span>
                  <span className="label">Settings</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="icon">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.3125 0.5H9.6875V8.75H8.3125V0.5ZM6.25 0.972656V2.47656C5.01823 2.99219 4.01562 3.82292 3.24219 4.96875C2.4974 6.11458 2.125 7.375 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 7.375 15.4883 6.11458 14.7148 4.96875C13.9701 3.82292 12.9818 2.99219 11.75 2.47656V0.972656C13.3828 1.54557 14.7005 2.54818 15.7031 3.98047C16.7344 5.38411 17.25 6.97396 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.97396 1.2513 5.38411 2.25391 3.98047C3.28516 2.54818 4.61719 1.54557 6.25 0.972656Z"
                        fill="#202224"
                      />
                    </svg>
                  </span>

                  <span className="label">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}