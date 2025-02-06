import React from "react";
import "./IT.css";
import Header from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ITImage from "../../Assets/f2.jpg";

function IT() {
    return (
        <div>
            <Header />
            <div className="it-wrapper">
                {/* IT Support Section */}
                <div className="it-container">
                    <img src={ITImage} alt="IT Support Services" className="it-image" />
                    <div className="it-content">
                        <p className="it-hello">Hello</p>
                        <h1 className="it-title">IT Support Services</h1>
                        <p className="it-description">
                            Providence Cananda provides IT support and Managed Services so that you can effectively scale your growing business.
                            <br />
                            Our support services include computer, server, security network management, and complex solutions.
                        </p>
                    </div>
                </div>

                {/* IT Support Details Section */}
                <div className="it-services">
                    <h2 className="it-services-title">
                        Providence Cananda IT Support includes <span className="it-highlight">unlimited:</span>
                    </h2>
                    <ul className="it-service-list">
                        <li>Onsite Support</li>
                        <li>Remote Support</li>
                        <li>Help Desk</li>
                        <li>Hardware and Software Installation</li>
                        <li>24/7 Computer and Network Management</li>
                        <li>Multiplatform Support</li>
                        <li>Cybersecurity Protections</li>
                        <li>Third-party Vendor Management</li>
                    </ul>
                </div>

                {/* IT Simplify Section */}
                <div className="it-simplify-section">
                    <h2 className="it-simplify-title">
                        If your IT is costing you time and money, just simplify it
                    </h2>
                    <p className="it-simplify-description">
                        We have a dedicated in-house experienced IT staff, and specialists who can take daily help desk tasks off your plate, take charge of your technology strategy, and lead complex projects effectively and on a timely manner.
                        <br />
                        We can also manage and maintain your entire infrastructure, improving your productivity and cost savings. Whatever your IT needs are, we’ll tailor the right solutions and go the extra mile to ensure they are met.
                    </p>
                    <input type="text" className="textbox"></input>
                    <button className="it-signup-button">SIGN UP</button>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default IT;
