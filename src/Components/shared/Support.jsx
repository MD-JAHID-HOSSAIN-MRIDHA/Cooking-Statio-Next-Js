import { BiConversation } from "react-icons/bi";
import { FaFacebookMessenger, FaPhone, FaWhatsapp } from "react-icons/fa";
export default function Support() {

  return (
   
    <section className="support">
    <div className="support_section collapse" id="collapseExample">
      <div className="support_header">
        <h3 className="title">Hello there</h3>
        <p className="desc">
          Please let us know who you are to start the conversation
        </p>
      </div>

      <div className="support_body">
        <form className="row contact_form">
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col-12 mb-3">
            <input
              type="number"
              placeholder="Phone Number: Ex. 017xxxxxxxxxx"
              className="form-control"
              id="phone"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="cs_btn w-100">
              Continue
            </button>
          </div>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
      </div>

      <div className="support_footer">
        <p>Contact us with our support number</p>
        <div className="icon_container">
          <div>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
          <div>
            <a href="">
              {/* <img src="assets/icons/messanger.jpg" alt="" /> */}
              <FaFacebookMessenger />
            </a>
          </div>
          <div>
            <a href="">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="text-end mt-3">
      <button
        className="cs_btn message-icon"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <BiConversation size={30} />
      </button>
    </div>
  </section>
  )
}