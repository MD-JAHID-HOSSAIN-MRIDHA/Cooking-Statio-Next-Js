"use client"

export default function ForgetPasswordForm() {

  return (
    <form className="authform">
      <div className="inputbox">
        <label htmlFor="forgot-email" className="inputlabel">
          Email Address
        </label>

        <input
          type="email"
          id="forgot-email"
          className="inputfield"
          placeholder="Enter your work email address"
          autocomplete="off"
        />
      </div>

      <div className="submitbox">
        <a href="./verifyotp.html" className="btn-submit">
          Reset Password
        </a>

        {/* <!-- RESET-PASSWORD --> */}
        <button type="button" className="btn-submit d-none">
          Reset Password
        </button>

        <div className="d-flex justify-content-center w-100">
          <a href="./login.html" className="backlink">
            <span className="icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8125 7H2.1875"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.125 3.0625L2.1875 7L6.125 10.9375"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <span className="text">Back to log in</span>
          </a>
        </div>
      </div>
    </form>
  )
}