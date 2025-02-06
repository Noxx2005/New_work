import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "react-modal";
import "./features.css";
import pic09 from "../../Assets/happy-businesswoman-reading-something-internet-while-using-computer-office.jpg";
import cloud1 from '../../Assets/cloud1.jpg';

const servicesData = [
  {
    id: 1,
    name: "Data Connectivity",
    info: "Reliable and high-speed internet services tailored for businesses, ensuring smooth operations and minimal downtime.",
  },
  {
    id: 2,
    name: "Business Voice and Collaboration",
    info: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {/* Section 1 - Detail Your Services */}
        <div>
          <img
            src="your-image-1.jpg"
            alt="Detail your services"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Detail your services</h4>
          <p style={{ maxWidth: "300px" }}>
            If customers can’t find it, it doesn’t exist. Clearly list and
            describe the services you offer. Also, be sure to showcase a premium
            service.
          </p>
        </div>
  
        {/* Section 2 - Announce Coming Events */}
        <div>
          <img
            src="your-image-2.jpg"
            alt="Announce coming events"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Announce coming events</h4>
          <p style={{ maxWidth: "300px" }}>
            Having a big sale, on-site celebrity, or other event? Be sure to
            announce it so everybody knows and gets excited about it.
          </p>
        </div>
  
        {/* Section 3 - Display Real Testimonials */}
        <div>
          <img
            src="your-image-3.jpg"
            alt="Display real testimonials"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Display real testimonials</h4>
          <p style={{ maxWidth: "300px" }}>
            Are your customers raving about you on social media? Share their great
            stories to help turn potential customers into loyal ones.
          </p>
        </div>
      </div>
    ),
  },  
  {
    id: 3,
    name: "Cloud Services",
    info: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {/* Section 1 - Secure Cloud Storage */}
        <div>
          <img
            src={cloud1}
            alt="Secure Cloud Storage"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Secure Cloud Storage</h4>
          <p style={{ maxWidth: "300px" }}>
            Store and manage your data securely with our cloud storage solutions.
            Keep your files accessible from anywhere.
          </p>
        </div>
  
        {/* Section 2 - Scalable App Hosting */}
        <div>
          <img
            src="your-image-2.jpg"
            alt="Scalable App Hosting"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Scalable App Hosting</h4>
          <p style={{ maxWidth: "300px" }}>
            Deploy and scale applications seamlessly with our cloud-based hosting
            solutions. Designed for performance and flexibility.
          </p>
        </div>
  
        {/* Section 3 - Cloud Backup and Recovery */}
        <div>
          <img
            src="your-image-3.jpg"
            alt="Cloud Backup and Recovery"
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <h4>Cloud Backup and Recovery</h4>
          <p style={{ maxWidth: "300px" }}>
            Protect your critical business data with automatic cloud backups and
            recovery solutions to minimize downtime.
          </p>
        </div>
      </div>
    ),
  },  
  {
    id: 4,
    name: "Business Internet Services",
    info: (
      <>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Business Internet 50 */}
          <div style={{ padding: "10px" }}>
            <h4 style={{ color: "#1a237e", marginBottom: "10px" }}>Business Internet 50</h4>
            <ul style={{ marginLeft: "20px", paddingLeft: "0", listStyleType: "disc" }}>
              <li>Fiber Optic Access</li>
              <li>50Mbps Download Speed</li>
              <li>50Mbps Upload Speed</li>
              <li>Ideal for small teams on 3-10 devices</li>
              <li>Web browsing, email, small file sharing</li>
              <li>Unlimited data transfer</li>
              <li>Static/Dynamic IP Address</li>
            </ul>
          </div>

          {/* Separator Line */}
          <div style={{ height: "2px", backgroundColor: "#1a237e", width: "100%", margin: "10px 0" }}></div>

          {/* Business Internet 150 */}
          <div style={{ padding: "10px" }}>
            <h4 style={{ color: "#1a237e", marginBottom: "10px" }}>Business Internet 150</h4>
            <ul style={{ marginLeft: "20px", paddingLeft: "0", listStyleType: "disc" }}>
              <li>Fiber Optic Access</li>
              <li>150Mbps Download Speed</li>
              <li>150Mbps Upload Speed</li>
              <li>Ideal for small teams on 10-20 devices</li>
              <li>Web browsing, email, small file sharing</li>
              <li>Unlimited data transfer</li>
              <li>Static/Dynamic IP Address</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    name: "Business Internet Services",
    info: (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <p style={{ fontSize: '12px', color: '#555' }}>Hello</p>
        {/* <h1 style={{ fontSize: '32px', color: 'blue', margin: '5px 0' }}>
          Business Internet Services
        </h1> */}
        <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
          There's much to see here. So, take your time, look around, and learn all there is to know about us.
          We hope you enjoy our site and take a moment to drop us a line.
        </p>
      </div>
    ),
  },
];

const FeaturePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <Header />
      <div className="services-container">
        {/* Left Section - Image */}
        <div className="image-container">
          <img src={pic09} alt="Business Services" />
        </div>

        {/* Right Section - Services List */}
        <div className="services-list-container">
          <h1 className="services-title">Our Services</h1>
          <div className="services-list">
            {servicesData.map((service) => (
              <div className="service-item" key={service.id}>
                <h3>{service.name}</h3>
                <button className="dropdown-arrow" onClick={() => openModal(service)}>
                  ⌄
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal for Service Details */}
      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Service Modal"
          className="modal"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedService.name}</h2>
            <p>{selectedService.info}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FeaturePage;
