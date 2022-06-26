import React from "react";
import largehallheader from "../images/large-hall-small.png";
import largehall from "../images/empty-hall-whole.jpg";
import smallhall from "../images/small-hall-comp.png";

const About = () => {
  return (
    <div>
      <div className="about-header">
        <img className="about-header_img" src={largehallheader} height="50px" />
      </div>
      <div className="content-container">
        <section>
          <h1>About the hall</h1>
          <p>
            Milburn Village Hall can be hired as one whole hall (6m x 17.7m), or
            split into two smaller rooms for hire using a folding Alco-Beldan
            partition door. Details on dimensions of these are below.
          </p>
          <h2>Facilities</h2>
          <ul>
            <li>Comfortable padded chairs</li>
            <li>6 'lightweight' Gopack tables (seat 6 to a table)</li>
            <li>3 small Gopack tables</li>
            <li>
              Multi purpose connectable table system, can be used as tables as
              various sizes and as a stage
            </li>
            <li>Projector, screen and fully integrated Kef sound system.</li>
            <li>Air source heating</li>
            <li> Fully equipped kitchen</li>
          </ul>
          <h2>Accessibility</h2>
          <p>The hall has the following features:</p>
          <ul>
            <li>Ramp leading to the entrance for wheelchair access.</li>
            <li>Accessible toilet</li>
            <li>Hearing loop</li>
          </ul>
          <p>If you have any questions then please get in touch.</p>
        </section>
        <div className="about-rooms">
          <section className="room-type">
            <h2>Small Room</h2>
            <img className="about-rooms_img" src={smallhall} height="50px" />
            <p>6m x 3m (6'8" x 9'10") </p>
            <p>Capacity 20/25</p>
          </section>
          <section className="room-type">
            <h2>Large Room</h2>
            <img className="about-rooms_img" src={largehall} height="50px" />
            <p>Dimensions 6m x 11.7m (6'8" x 38'4")</p>
            <p>Capacity 106</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
