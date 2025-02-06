import React from "react";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./virtual.css";
import pic1 from "../../Assets/how.jpg";
import pic2 from "../../Assets/f9.jpg";
import pic3 from "../../Assets/announce.jpg";
import contactCenterImage from "../../Assets/whychoose.jpg"; // Replace with your actual image
import featureImg1 from "../../Assets/phoneEquip.jpg";
import featureImg2 from "../../Assets/f6.jpg";
import featureImg3 from "../../Assets/f8.jpg";
import featureImg4 from "../../Assets/f5.jpg";
import featureImg5 from "../../Assets/f4.jpg";
import featureImg6 from "../../Assets/f3.jpg";

const VirtualPage = () => {
  return (
    <div>
      <Header />
      <section className="about-us">
        <h2 className="section-title">About Us</h2>
        <div className="about-container">
          <div className="about-card" style={{ backgroundImage: `url(${pic3})` }}>
            <h3>Who are we?</h3>
            <p>
              Pathstreams is a Canadian-based telecommunication service and support provider.
              Our superior services put us in the forefront of our partners and customers.
            </p>
          </div>
          <div className="about-card" style={{ backgroundImage: `url(${pic2})` }}>
            <h3>What do we provide?</h3>
            <p>
              We offer our customers unique services, through a committed attention to the needs of our customers.
              We provide the critical IT solutions that support your business challenges.
              Our superior voice, internet, and data solutions are what set us apart from our competitors.
            </p>
          </div>
          <div className="about-card" style={{ backgroundImage: `url(${pic1})` }}>
            <h3>How do we do it?</h3>
            <p>
              It is all about our speed. We are known by the simple process we use to satisfy our customers
              by providing the fastest delivery period and 24/7 support that backs our products.
            </p>
          </div>
        </div>
      </section>
      <section className="why-choose">
  <div className="why-content">
    <h2>Why Choose Pathstreams</h2>
    <p>
      Founded in 2008, Pathstreams is a next-generation Internet, telephone, and long-distance provider with a mission to utilize new and emerging technologies.
      Business Telephone Solutions, Business Telephone Service, and Business Fiber Internet from Pathstreams are excellent choices to power your business.
      Pathstreams offers high-quality long-distance calling to any destination at very competitive prices. We provide broadband phones and long-distance calling via access numbers.
    </p>
    <p>
      Best of all, we tailor our services for every customer need. Whether you’re a small business with one phone or a large company with 100+ remote employees, we have the solution for you.
    </p>
  </div>
  <div className="why-image">
    <img src={contactCenterImage} alt="Support Team" />
  </div>
</section>


      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Support</h3>
          <ul>
            <li>Speak with real people, not automated menus.</li>
            <li>No long wait times to reach live agents.</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>Monitoring</h3>
          <ul>
            <li>24/7 proactive monitoring for seamless service.</li>
            <li>Quick responses to prevent disruptions.</li>
            <li>Robust disaster recovery solutions.</li>
          </ul>
        </div>

        <div className="feature-card">
          <h3>Changings</h3>
          <ul>
            <li>Service modifications within hours, not days.</li>
            <li>Most upgrades completed in under an hour.</li>
          </ul>
        </div>
      </section>
      <section className="well-planned-section">
  <h2 className="section-title">Everything is well planned</h2>
  <div className="planned-grid">
    <div className="planned-card">
      <h3>Phone and Equipment</h3>
      <img src={featureImg1} alt="Phone and Equipment" />
      <p>Everything needed to get your business up and running smoothly is <strong>included</strong> in your monthly cost.</p>
    </div>

    <div className="planned-card">
      <h3>Unlimited Features</h3>
      <img src={featureImg2} alt="Unlimited Features" />
      <p>Each of the 50+ features are included in your monthly bill. <strong>No hidden fees, no extra charges.</strong></p>
    </div>

    <div className="planned-card">
      <h3>Set-Up</h3>
      <img src={featureImg3} alt="Set-Up" />
      <p>Your Project Manager and a professional technician assist with your setup from start to finish.</p>
    </div>

    <div className="planned-card">
      <h3>Trusted and Reliability</h3>
      <img src={featureImg4} alt="Trusted and Reliability" />
      <p>Process transactions, send large files, and rely on a fiber connection you can <strong>count on.</strong></p>
    </div>

    <div className="planned-card">
      <h3>Security</h3>
      <img src={featureImg5} alt="Security" />
      <p>Built-in protection with 24/7 proactive network security for data, wireless, and internet at your workplace.</p>
    </div>

    <div className="planned-card">
      <h3>Packages</h3>
      <img src={featureImg6} alt="Packages" />
      <p>Choose bundles that work for you—covering speed, voice, and features based on your <strong>needs and budget.</strong></p>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default VirtualPage;
