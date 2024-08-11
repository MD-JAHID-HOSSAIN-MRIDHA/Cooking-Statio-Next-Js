"use client"
import Link from "next/link";
export default function LoginForm() {

  return (
    <form className="authform">
      <div className="inputbox">
        <label htmlFor="name" className="inputlabel">
          {" "}
          Phone or email*{" "}
        </label>

        <input
          type="text"
          id="name"
          className="inputfield"
          placeholder="phone or email"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="password" className="inputlabel">
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

      <div className="agreebox">
        <div>
          <input
            type="checkbox"
            id="agree"
            className="agreecheck"
            hidden
          />
          <label htmlFor="agree" className="agreelabel">
            {" "}
            Remember me{" "}
          </label>
        </div>
        <div>
          <a href="forgot-password.html" className="forgot_pass">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="submitbox">
        <button type="button" className="btn-submit">
          Get Started
        </button>

        <p className="authtext">
          Don&apos;t have an account yet?
          <Link href="/authentications/register" className="authlink">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}