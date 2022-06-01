import React from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import COFFEE from "../images/coffeemorning1smaller.png";

const WhatsOn = () => {
  return (
    <main>
      <div className="about-header">
        <img className="about-header_img" src={COFFEE} height="70px" />
      </div>
      <div className="content-container">
        <h1>What's On</h1>
        <h2>Our regular activites</h2>
        <ul>
          <li>Badminton Club</li>
          <li>Table Tennis Club</li>
          <li>Film Night </li>
          <li>Wine Club</li>
          <li>Playgroup</li>
          <li>Pub nights</li>
          <li>Quiz and Games Nights</li>
          <li>Arts and Crafts Workshops</li>
          <li>Ceilidhs</li>
          <li>Coffee Mornings</li>
          <li>And much more...</li>
        </ul>
        <h2>Calendar of events/Hall availibility</h2>
        <div className="google-calendar">
          {/* https://github.com/turrandott/react-embedded-google-calendar#readme */}
          <ReactEmbeddedGoogleCalendar
            publicUrl="https://calendar.google.com/calendar/embed?src=milburnvillagehall%40gmail.com&ctz=Europe%2FLondon"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </main>
  );
};
export default WhatsOn;
