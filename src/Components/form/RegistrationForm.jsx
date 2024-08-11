"use client"
export default function RegistrationForm() {

  return (
    <form className="authform">
      <div className="inputbox ">
        <label htmlFor="name" className="inputlabel">
          Name*
        </label>

        <input
          type="text"
          id="name"
          className="inputfield"
          placeholder="Enter your  name"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="company-contact" className="inputlabel">
          Phone*
        </label>

        <input
          type="tel"
          id="company-contact"
          className="inputfield"
          placeholder=" Enter Your Phone"
          autoComplete="off"
        />
      </div>

      <div className="inputbox">
        <label htmlFor="industry" className="inputlabel">
          {" "}
          Email{" "}
        </label>

        <input
          type="text"
          id="industry"
          className="inputfield"
          placeholder="Enter Your Email "
          autoComplete="off"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="country" className="inputlabel">
          Country
        </label>
        <select id="country" className="inputfield">
          <option value="bd">Bangladesh</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>
      <div className="inputbox">
        <label htmlFor="city" className="inputlabel">
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
        <label htmlFor="address" className="inputlabel">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="inputfield"
          placeholder="Enter Your Address"
          autoComplete="off"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="id_you_are" className="inputlabel">
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
            <label htmlFor="employeecount-1" className="radiolabel">
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
            <label htmlFor="employeecount-2" className="radiolabel">
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
            <label htmlFor="employeecount-3" className="radiolabel">
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
            <label htmlFor="employeecount-4" className="radiolabel">
              Official
            </label>
          </div>
        </div>
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

      <div className="inputbox">
        <label htmlFor="confirm_password" className="inputlabel">
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
        <label htmlFor="agree" className="agreelabel">
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
  )
}