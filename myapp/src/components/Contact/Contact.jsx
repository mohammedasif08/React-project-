import React from "react";
import "./Contact.css";
import Label from "../Label/Label.jsx";
import Input from "../Label/input.jsx";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <Label text="First Name" htmlFor="firstName" />
              <Input type="text" id="firstName" />
            </div>
            <div className="form-group">
              <Label text="Last Name" htmlFor="lastName" />
              <Input type="text" id="lastName" />
            </div>
          </div>

          <div className="form-group full-width">
            <Label text="Email" htmlFor="email" />
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group full-width">
            <Label text="Your Message" htmlFor="message" />
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Fill up the form and our Team will get back to you within 24 hours.
        </p>

        <div className="info-item">📞 +91 444555666999</div>
        <div className="info-item">✉️ hello@mail.com</div>
        <div className="info-item">🎫 Open Support Ticket</div>
      </div>
    </div>
  );
}

export default Contact;
