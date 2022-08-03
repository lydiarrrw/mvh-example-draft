import React from "react";
import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";
import COFFEE from "../images/coffeemorning1smaller.png";
import badminton from "../images/activities/badminton-svgrepo-com.svg";
import tabletennis from "../images/activities/table-tennis-svgrepo-com.svg";
import film from "../images/activities/film-svgrepo-com.svg";
import wine from "../images/activities/wine-svgrepo-com.svg";
import playgroup from "../images/activities/child-svgrepo-com.svg";
import pub from "../images/activities/beer-svgrepo-com.svg";
import quiz from "../images/activities/question-svgrepo-com.svg";
import arts from "../images/activities/art-tools-svgrepo-com.svg";
import dancing from "../images/activities/dancing-svgrepo-com.svg";
import coffeemorning from "../images/activities/coffee-svgrepo-com.svg";

const WhatsOn = () => {
  if (!document) {
    return null;
  } else {
    const badButton = document.querySelector(".whats-on-badminton-button");
    console.log(badButton);
  }

  return (
    <main>
      <div className="about-header">
        <img className="about-header_img" src={COFFEE} height="70px" />
      </div>
      <div className="content-container">
        <h1>What's On</h1>
        <h2>Our regular activites</h2>
        <ul className="whats-on-activities">
          <li className="whats-on-badminton-button">
            <img className="whats-on-svg" src={badminton} />
            <h4>Badminton Club</h4>
            <div id="whats-on-badminton-modal">
              Some info about badminton...
            </div>
          </li>
          <li>
            <img className="whats-on-svg" src={tabletennis} />
            <h4>Table Tennis Club</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={film} />
            <h4>Film Night</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={wine} />
            <h4>Wine Club</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={playgroup} />
            <h4>Playgroup</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={pub} />
            <h4>Pub nights</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={quiz} />
            <h4>Quiz and Games Nights</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={arts} />
            <h4>Arts and Crafts Workshops</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={dancing} />
            <h4>Ceilidhs</h4>
          </li>
          <li>
            <img className="whats-on-svg" src={coffeemorning} />
            <h4>Coffee Mornings</h4>
          </li>
        </ul>
        <h2>Calendar of events/Hall availibility</h2>
        <div className="google-calendar">

<div class="smgc-calendar-placeholder" id="smgc-cal-YhUAQFrSY5awkPWnT7VD"></div>

        </div>
      </div>
    </main>
  );
};
export default WhatsOn;
