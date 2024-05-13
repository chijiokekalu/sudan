import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import featured1 from "../images/featured1.jpeg";
import logo from "../images/logo.jpeg";

function OurValue() {
    return (
        <div className="who-we-are">
            <div className="content-header">
                <img src={featured1} alt="Our Organization" className="who-we-are-image" />
            </div>

            <h1 style={{ textAlign: 'center' }}>Our Core Values</h1>
            <div className='impact'>
                <div className='row'>
                    <h1> Diversity and Inclusiveness</h1>
                    <p>
                        We value and promote the equal participation and representation of all young people, regardless of their background or identity.
                    </p>
                </div>
                <div className='row'>
                    <h1>Integrity
                    </h1>
                    <p>
                        We uphold honesty and ethical behavior in all our actions and decisions, being accountable to our stakeholders.
                    </p>
                </div>
                <div className='row'>
                    <h1>
                        Transformation

                    </h1>
                    <p>
                        We believe in the power of positive influence and dedicated efforts to uplift individuals and communities toward meaningful change.

                    </p>
                </div>
                <div className='row'>
                    <h1>Respect
                    </h1>
                    <p>
                        We treat everyone with dignity and fairness, fostering a culture of tolerance and acceptance.

                    </p>
                </div>
                <div className='row'>
                    <h1>Servant-hood Leadership
                    </h1>
                    <p>We emphasize leadership that prioritizes serving others, inspired by the example of selflessness.

                    </p>
                </div>
                <div className='row'>
                    <h1>Empowerment
                    </h1>
                    <p>
                        We believe in providing education, skills development, and opportunities to empower young people to contribute positively to society.

                    </p>
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
                    <p>southsudanyouthnetwork.scholars@gmail.com</p>
                </div>
            </footer>
        </div>

    );
}

export default OurValue;
