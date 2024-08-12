"use client"
import Link from "next/link";
export default function LoginForm() {

  const handleLogin = e=> {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleLogin} className="authform needs-validation" noValidate>
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
          required
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
          <Link href="/forgot-password" className="forgot_pass">
            Forgot password?
          </Link>
        </div>
      </div>

      <div className="submitbox">
        <button type="submit" className="btn-submit">
          Get Started
        </button>

        <p className="authtext">
          Don&apos;t have an account yet?
          <Link href="/register" className="authlink">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}