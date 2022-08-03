import React from "react";
import MapContainer from "./MapContainer.js";
import mvhhall from "../images/milburn-village-hall-comp.png";
import newsevents from "../images/reading-hall-board-comp.png";
import bookhall from "../images/celebration-hall-small.png";
import abouthall from "../images/coffee-morning2-comp.png";

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken: `${process.env.mapbox}`,
});

const Home = () => {
  return (
    <main className="parallax">
      <section id="home-header">
        <div className="home-header-title">
          <h1>Milburn Village Hall</h1>
          <p>Community and event space</p>
        </div>
        <img className="about-header_img" src={mvhhall} height="50px" />
      </section>
      <section id="mission">
        <p>
          The Hall is a friendly, welcoming space, providing regular activities
          both for villagers and for people living further afield. It has a
          well-equipped kitchen and room for events of up to 100 people standing
          and 90 seated.
        </p>
      </section>
      <section id="more-info">
        <h2>More about the hall</h2>
        <div className="more-info-cards">
          <a className="more-info-card" href="/whats-on">
            <img src={newsevents} height="50px" />
            <h3 className="more-info-card-title">News and Events</h3>
            <p>Find out what's on at Milburn Village Hall</p>
          </a>
          <a className="more-info-card" href="/book">
            <img src={bookhall} height="50px" />
            <h3 className="more-info-card-title">Book the hall</h3>
            <p>See prices and terms of booking</p>
          </a>
          <a className="more-info-card" href="/about">
            <img src={abouthall} height="50px" />
            <h3 className="more-info-card-title">About the hall</h3>
            <p>Learn more about the facilities of the hall</p>
          </a>
        </div>
      </section>
      {/* <section id="gallery">
        <p>Gallery </p>
      </section> */}
      <section id="find-us">
        <div className="find-us-details">
          <h3>Find Us</h3>
          <p>
            Milburn Village Hall
            <br />
            Milburn
            <br />
            Penrith
            <br />
            Cumbria
            <br />
            <b>CA10 1TL</b>
          </p>
        </div>
        <map-component></map-component>
      </section>
    </main>
  );
};
export default Home;
