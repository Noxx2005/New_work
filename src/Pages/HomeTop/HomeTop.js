import React from "react";
import "./HomeTop.css"; // Import the CSS file
import pic1 from "../../Assets/r3.jpg";

const HomeTop = () => {
  return (
    <div className="home-top-container">
      <h1 className="home-title">Home</h1>
      <div className="content-section">
        <div className="text-content">
          <h2>Work with Pathstreams</h2>
          <p>
            Pathstreams is a company committed to creating more meaningful
            moments of human connection through technology.
          </p>
          <p>
            As a growing provider of telecommunication services and equipment
            in Canada, we're proud of our continued investments in our people,
            our communities, and our network.
          </p>
          <p>
            At Pathstreams, we understand that your business doesn’t have the
            time for a lengthy phone installation with complicated wiring. That
            is why we have made it really easy to install the base station with
            simple do-it-yourself instructions.
          </p>
        </div>
        <div className="image-content">
          <img src={pic1} alt="Pathstreams Team" />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
