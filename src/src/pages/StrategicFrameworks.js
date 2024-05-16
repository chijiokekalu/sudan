import React, { useState } from 'react';
import "../styles/WhoWeAre.css";
import strategy from "../images/strategy.jpeg";
import logo from "../images/logo.png";

function StrategicFrameworks() {
    return (
        <>
            <div className="who-we-are">
                <div className="content-header">
                    <img src={strategy} alt="Our Organization" className="who-we-are-image" />
                </div>

                <h1 style={{ textAlign: 'center' }}>Strategic Framework</h1>
                <div className='impact'>
                    <div className='row'>
                        <h1>Strategic Partnerships</h1>
                        <p>
                            We aim to cultivate strategic partnerships with local and international organizations, government agencies, and community leaders. By leveraging collective resources and expertise, we amplify our impact and reach.

                        </p>
                    </div>
                    <div className='row'>
                        <h1>Resource Mobilization</h1>
                        <p>
                            We employ diverse resource mobilization strategies to secure funding and support for our programs. This includes grant writing, fundraising events, corporate partnerships, and individual donations.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>
                            Capacity Building

                        </h1>
                        <p>We invest in the capacity building of our staff, volunteers, and beneficiaries to enhance program effectiveness and sustainability. This includes training, mentorship, and professional development opportunities.

                        </p>
                    </div>
                    <div className='row'>
                        <h1>Advocacy and Policy Influence
                        </h1>
                        <p>
                            We engage in advocacy efforts to influence policy decisions and promote systemic change. By advocating for policies that prioritize education, youth empowerment, and peacebuilding, we create an enabling environment for our work.
                        </p>
                    </div>
                    <div className='row'>
                        <h1>Monitoring and Evaluation
                        </h1>
                        <p>We aim to implement robust monitoring and evaluation systems to assess the impact of our programs and inform decision-making. By collecting and analyzing data on key performance indicators, we continuously improve program quality and outcomes.
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

export default StrategicFrameworks;
