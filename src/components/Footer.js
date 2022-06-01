import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-menu">
        <div className="footer_menu-item">
          <h4>About</h4>
          <ul>
            <li>
              <a href="/mvh-example-draft/about">Facilities</a>
            </li>
            <li>
              <a href="/mvh-example-draft/whats-on">News and events</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer_menu-item">
          <h4>Hall Bookings</h4>
          <ul>
            <li>
              <a href="/mvh-example-draft/what's-on">Calendar</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Charges</a>
            </li>
            <li>
              <a href="/mvh-example-draft/book">Booking enquiries</a>
            </li>
          </ul>
        </div>
        <div className="footer_menu-item">
          <h4 id="contact">Contact</h4>
          <ul>
            <li>
              <a href="mailto:milburnvillagehall@gmail.com">Email us</a>
            </li>
          </ul>
        </div>
        <div className="footer-signup">
          <form>
            <label htmlFor="email">Sign up for news:</label>
            <div>
              <input
                type="text"
                placeholder="Email address"
                name="email address"
                className="input-email"
              />
              <input
                type="submit"
                value="Submit"
                className="input-submit"
              ></input>
            </div>
          </form>
        </div>
      </div>
      <small className="footer_charity">Charity commision number: 523069</small>
    </section>
  );
};
export default Footer;
