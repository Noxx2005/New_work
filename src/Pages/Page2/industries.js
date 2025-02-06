import React from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./industries.css";

const Industries = () => {
  return (
    <div className="industries">
      <Header />

      {/* Data & Connectivity Section */}
      <section className="data-connectivity">
        <h2 className="title">Data & Connectivity</h2>
        <div className="content">
          <div className="card">
            <h3>Managed Network Services</h3>
            <p>
              Providence Cananda Network Services helps business customers optimize performance and
              reduce costs on their network infrastructure. Leverage TERAGO’s advanced management
              systems and network experts to improve performance, reduce IT resources, and cut costs.
            </p>
          </div>
          <div className="card">
            <h3>Dedicated Monitoring</h3>
            <p>
              24x7 availability monitoring with automated notifications for key contacts during outages.
              Built-in redundancy and failover solutions ensure business continuity.
            </p>
          </div>
          <div className="card">
            <h3>Providence Cananda Solution</h3>
            <p>
              <strong>Connects different data locations and applications, including data from different identity spaces.</strong>
              Enables collaboration, ensuring safe and effective activation across the network using protocols like MPLS, IPsec, and private connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Technology Section */}
      <section className="security-technology">
        <div className="content">
          <div className="card">
            <h3>Your Security Matters</h3>
            <p>
              In today’s world, businesses need reliable and fast internet and data connectivity.
              Connectivity is the lifeblood of every organization; whether it’s a small start-up or
              a big multinational business—we all need to stay connected. We protect you so your
              data resources are secure. We are 99.99% confident you can count on us.
            </p>
          </div>
          <div className="card">
            <h3>End-to-End</h3>
            <p>
              Our team of network professionals helps design, implement, and manage your data,
              voice, and video solutions backed by 24/7 support. We ensure more points of presence
              than any provider with 99.9% reliability.
            </p>
          </div>
          <div className="card">
            <h3>Next Evolution of Technology</h3>
            <p>
              There’s nothing better than relying on a network that’s robust, advanced, and
              simultaneously simple to manage, supporting the future of your business growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
