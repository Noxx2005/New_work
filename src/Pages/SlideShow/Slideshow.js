import React, { useState } from "react";
import img1 from "../../Assets/pexels-fauxels-3182773.jpg";
import "./SlideShow.css";
import ChatIcon from "../Home/ChatIcon/ChatIcon.jsx";
import ContactModal from "../Home/ChatIcon/ContactModal.jsx";

const images = [img1];

const Slideshow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="slideshow-container">
      <img
        src={images[0]}
        alt="Slideshow"
        className="slideshow-image"
      />
      <div className="overlay">
        <div className="content">
          <div className="row">
            <div className="col-md-10">
              <div className="heading">
                Revolutionize your communication with our reliable and
                affordable Internet solutions.
              </div>

              {isModalOpen && (
                <ContactModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="offer-container">
        <div className="offer-content">
          <h2>905-606-0028</h2>
          <h3>GET 50% OFF ON UNLIMITED INTERNET. NOW $40/MO.</h3>
          <p>
            Based on a $40/mo. per month credit for 12 months on a 50 Mbps
            Unlimited Internet plan.
          </p>
          <button className="call-now-btn">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;