import React, { useState } from 'react';
import "../styles/Belief.css";
import featured1 from "../images/featured1.jpeg";
import logo from "../images/logo.png";

function Belief() {
    return (
        <>
            <div className="who-we-are">
                <div className="content-header">
                    <img src={featured1} alt="Our Organization" className="who-we-are-image" />
                </div>

                <h1 style={{ textAlign: 'center', color: "white" }}>Our Belief System</h1>
                <div className='impact'>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            We believe in the potential of every young person to make a difference.
                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            We advocate for fairness and inclusivity for all individuals.
                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Integrity is fundamental to everything we do.
                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Collaboration and partnership are essential for impactful outcomes.

                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>Innovation and creativity drive our efforts to address challenges.
                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Respect for diversity and dignity guides our interactions.

                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            We take responsibility for our actions and decisions.

                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Continuous learning and growth are key to our success.
                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Sustainability is central to our mission.

                        </p>
                    </div>
                    <div className='row'>
                        <img src={logo} style={{ height: "170px", width: "auto" }} />
                        <p>
                            Accountability ensures transparency and trust in our organization.

                        </p>
                    </div>

                </div>

            </div>
            <footer className="footer">
                <div className="footer-logo">
                    <img src={logo} alt="Company Logo" />
                    <p>Innovating for a brighter future.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Programs</a></li>
                        <li><a href="/contact">Resources</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://www.linkedin.com/company/south-sudan-youth-leadership-scholars-network-program/?viewAsMember=true">LinkedIn</a>
                    <a href="https://www.facebook.com/people/South-Sudan-Youth-Leadership-Scholars-Network-Program-SSYLNET/100092027318021/">Facebook</a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fssylnet">Twitter</a>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>P.O. Box 29, Juba, South Sudan, Central Equatoria State, Internally Displaced Camp_Poc3</p>
                    <p>+211 929 415 361, +250 792 577 523</p>
                    <p>southsudanyouthnetwork.scholars<br />@gmail.com</p>
                </div>
            </footer>
        </>

    );
}

export default Belief;
