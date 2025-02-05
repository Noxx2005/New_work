import React from 'react';
import './ContactForm.css';
import pic1 from '../../Assets/finance.jpg';
import pic2 from '../../Assets/r2.jpg';
import pic3 from '../../Assets/r3.jpg';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h1 className="section-title">Telecommunications</h1>
      <div className="cards-container">
        <div className="service-card">
          <img src={pic1} alt="Technical Experience" className="card-image" />
          <h3>Technical Experience</h3>
          <p>
            We are well-versed in a variety of operating systems, networks, and databases.
            We work with just about any technology that a small business would encounter.
            We use this expertise to help customers with small to mid-sized projects.
          </p>
          <button className="cta-button">BOOK ONLINE</button>
        </div>

        <div className="service-card">
          <img src={pic2} alt="High ROI" className="card-image" />
          <h3>High ROI</h3>
          <p>
            Do you spend most of your IT budget on maintaining your current system?
            By outsourcing IT management to us, you can focus on what you do best—running your business.
          </p>
          <button className="cta-button">SEE SERVICES</button>
        </div>

        <div className="service-card">
          <img src={pic3} alt="Satisfaction Guaranteed" className="card-image" />
          <h3>Satisfaction Guaranteed</h3>
          <p>
            The world of technology can be fast-paced and overwhelming.
            We guarantee professional customer service tailored to your company’s needs.
          </p>
          <button className="cta-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
