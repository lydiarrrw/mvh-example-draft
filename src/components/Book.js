import React from "react";
import eventimage from "../images/celebration-hall-small.png";
import financePolicyPdf from "../../public/finance-policy-2020.pdf";
import heatingInstructions from "../../public/heating-instructions.pdf";
import bookingFormAgreement from "../../public/Booking_Form_Agreement.pdf";
import complaintsPolicy from "../../public/mvh-complaints-policy-2019.pdf";
import vhDataProtectionPolicy from "../../public/vh_dataProtectionPolicy.pdf";
import safeguardingStatement from "../../public/safeguardingstatment.pdf";

const Book = () => {
  return (
    <main>
      <div className="about-header">
        <img className="about-header_img" src={eventimage} height="50px" />
      </div>
      <div className="content-container">
        <div>
          <h1>How to book</h1>
          <p>
            The hall can be booked by session or for the whole day. Sessions are
            as follows:
            <ul>
              <li>Morning (early to 1pm)</li>
              <li>Afternoon (1pm to 6pm)</li>
              <li>Evening (6pm to 11pm)</li>
            </ul>
          </p>
          <h2>Hire charges</h2>
          <table>
            <th colspan="4" className="table-header">
              Hire charges
            </th>
            <tr>
              <th></th>
              <th>Small Room</th>
              <th>Large Room</th>
              <th>Whole Room</th>
            </tr>
            <tr>
              <td>1 session</td>
              <td>£20.00</td>
              <td>£40.00</td>
              <td>£50.00</td>
            </tr>
            <tr>
              <td>2 sessions</td>
              <td>£30.00</td>
              <td>£55.00</td>
              <td>£70.00</td>
            </tr>
            <tr>
              <td>Whole day</td>
              <td>£50.00</td>
              <td>£100.00</td>
              <td>£120.00</td>
            </tr>
          </table>
          <p>Hourly hire may be available, please enquire.</p>
        </div>
        <div>
          <ul>
            <li>
              A deposit may be required, please ask when booking. Viewings
              available, please contact either Joanna as above or Barry on
              07762650828
            </li>
            <li>
              If you wish to hold a bar there is an additional £15.00 charge to
              cover the licence, likewise showing a film or for use of the TV
              licence there is an additional £10.00 charge.
            </li>
            <li>
              Assuming no bookings clash, use of the kitchen is included at no
              extra cost.
            </li>
          </ul>

          <div>
            <h2>Discounts</h2>
            <p>
              Discounts are available for residents of Milburn Parish Community
              activity groups, Charity and non revenue raising groups and events
              organised by the Hall Committee.
            </p>
            <table>
              <th colspan="3" className="table-header">
                Discounts
              </th>
              <tr>
                <th>External bookings</th>
                <td>0%</td>
              </tr>
              <tr>
                <th>Parishoners' personal events</th>
                <td>50%</td>
              </tr>
              <tr>
                <th>Parishoners' commercial events</th>
                <td>On request%</td>
              </tr>
              <tr>
                <th>Community activity groups</th>
                <td>Up to 75%</td>
              </tr>
              <tr>
                <th>Community benefit groups e.g. First Responders</th>
                <td>Up to 100%</td>
              </tr>
              <tr>
                <th>Village Hall Committee own events</th>
                <td>100%</td>
              </tr>
            </table>
          </div>
          <h2>How to book</h2>
          <p>
            To book, please contact:
            <br />
            Joanna Armstrong
            <br />
            <b>Phone:</b> 07813689078
            <br />
            <b>Email:</b> joanna_armstrong@outlook.com
          </p>
          <h2>Important Documents</h2>
          <div className="book_important-documents">
            <ul>
              <h3>Booking documents</h3>
              <li>
                <a href={bookingFormAgreement} target="_blank">
                  Booking form
                </a>
              </li>
              <li>
                <a href={bookingFormAgreement} download>
                  Booking conditions
                </a>
              </li>
            </ul>

            <ul>
              <h3>Policies</h3>
              <li>
                <a href={vhDataProtectionPolicy} download>
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a href={complaintsPolicy} download>
                  Complaints Policy
                </a>
              </li>
              <li>
                <a href={financePolicyPdf} download>
                  Finance Policy
                </a>
              </li>
              <li>
                <a href={safeguardingStatement} download>
                  Finance Policy
                </a>
              </li>
            </ul>
            <ul>
              <h3>Hall instructions</h3>
              <li>
                <a href={heatingInstructions} download>
                  Heating instructions
                </a>
              </li>
              <li>
                <a href="/src/assets/vh_dataprotectionpolicy.pdf" download>
                  Kitchen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Book;
